const puppeteer = require('puppeteer');
const path = require('path');
const fs = require('fs');

const sites = [
  { name: 'dreampropertiesnashik', url: 'https://www.dreampropertiesnashik.com/' },
  { name: 'shreebalajilawnsandresorts', url: 'https://shreebalajilawnsandresorts.com/' },
  { name: 'hotelskinn', url: 'https://hotelskinn.in/' },
  { name: 'aadityainn', url: 'https://aadityainn.com/' },
  { name: 'hotelsaivijay', url: 'https://www.hotelsaivijay.in/' },
  { name: 'ssisc', url: 'https://www.ssisc.in/' },
  { name: 'dlinstitute', url: 'https://dlinstitute.in/' },
  { name: 'dhanvantari-ayurveda', url: 'https://dhanvantari-ayurveda-dynamic-websit.vercel.app/' },
  { name: 'gondhalehospital', url: 'https://gondhalehospital.com/' },
  { name: 'ariesskinandhealth', url: 'https://www.ariesskinandhealth.com/' },
  { name: 'myjungletrip', url: 'https://myjungletrip.in/' },
  { name: 'vantaranet', url: 'https://vantaranet.com/' },
  { name: 'alkalyne', url: 'http://alkalyne.in/' },
  { name: 'pyramidagroexports', url: 'https://www.pyramidagroexports.com' },
  { name: 'zenithhospitalityservices', url: 'https://zenithhospitalityservices.com/' },
  { name: 'celebaesthecia', url: 'https://www.celebaesthecia.in/' },
];

const outDir = path.join(__dirname, '../public/images/website-previews');
if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true });

(async () => {
  const browser = await puppeteer.launch({
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-web-security'],
  });

  for (const site of sites) {
    const outPath = path.join(outDir, `${site.name}.jpg`);
    if (fs.existsSync(outPath)) {
      console.log(`⏭  Skipping ${site.name} (already exists)`);
      continue;
    }
    console.log(`📸 Capturing ${site.name} — ${site.url}`);
    try {
      const page = await browser.newPage();
      await page.setViewport({ width: 1280, height: 800 });
      await page.setUserAgent('Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 Chrome/120 Safari/537.36');
      await page.goto(site.url, { waitUntil: 'networkidle2', timeout: 30000 });
      // dismiss cookie banners / popups if any
      await page.evaluate(() => {
        document.querySelectorAll('[class*="cookie"],[class*="popup"],[class*="modal"],[id*="cookie"],[id*="popup"]')
          .forEach(el => el.remove());
      });
      await page.screenshot({ path: outPath, type: 'jpeg', quality: 85, clip: { x: 0, y: 0, width: 1280, height: 800 } });
      await page.close();
      console.log(`  ✅ Saved ${site.name}.jpg`);
    } catch (err) {
      console.error(`  ❌ Failed ${site.name}: ${err.message}`);
    }
  }

  await browser.close();
  console.log('\nDone!');
})();
