import type { Metadata } from "next";
import { Outfit, Space_Grotesk } from "next/font/google";
import "./globals.css";
import SiteShell from "@/components/SiteShell";
import { ThemeProvider } from "@/components/ThemeProvider";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
});

export const metadata: Metadata = {
  title: "AI Automation & Website Development Company in Pune | DigiGrowNex",
  description:
    "DigiGrowNex Technologies provides AI automation, website development, SaaS solutions, WhatsApp Business automation, CRM systems, SEO and digital marketing services.",
  keywords: [
    "AI automation", "website development", "SaaS solutions", "WhatsApp Business automation", "CRM systems", "SEO", "digital marketing", "Pune", "DigiGrowNex"
  ],
  icons: {
    icon: "/images/logo/favicon.png",
    shortcut: "/images/logo/favicon.png",
    apple: "/images/logo/favicon.png",
  },
  openGraph: {
    title: "AI Automation & Website Development Company in Pune | DigiGrowNex",
    description: "DigiGrowNex Technologies provides AI automation, website development, SaaS solutions, WhatsApp Business automation, CRM systems, SEO and digital marketing services.",
    type: "website",
    url: "https://www.digigrownex.online",
    siteName: "DigiGrowNex Technologies",
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Automation & Website Development Company in Pune | DigiGrowNex",
    description: "DigiGrowNex Technologies provides AI automation, website development, SaaS solutions, WhatsApp Business automation, CRM systems, SEO and digital marketing services.",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="dark" suppressHydrationWarning>
      <body className={`${outfit.variable} ${spaceGrotesk.variable} font-sans antialiased`}>
        <ThemeProvider>
          <SiteShell>{children}</SiteShell>
        </ThemeProvider>
        {/* Organization Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "DigiGrowNex Technologies",
              "url": "https://www.digigrownex.online",
              "logo": "https://www.digigrownex.online/images/logo/digigrownex-logo.png",
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+91-77458-68073",
                "contactType": "customer service",
                "areaServed": "IN",
                "availableLanguage": ["en", "hi"]
              },
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "B-92, Poonam apartment, Sahakar Nagar",
                "addressLocality": "Pune",
                "addressRegion": "Maharashtra",
                "postalCode": "411009",
                "addressCountry": "IN"
              },
              "sameAs": [
                "https://www.facebook.com/profile.php?id=61588671227643",
                "https://www.instagram.com/digigrownex/",
                "https://www.linkedin.com/company/digigrownex-technologies"
              ]
            })
          }}
        />
        {/* Interactive gradient mouse tracker for light mode */}
        <script dangerouslySetInnerHTML={{ __html: `
          (function() {
            function track(e) {
              var x = (e.clientX / window.innerWidth * 100).toFixed(1) + '%';
              var y = (e.clientY / window.innerHeight * 100).toFixed(1) + '%';
              document.documentElement.style.setProperty('--mouse-x', x);
              document.documentElement.style.setProperty('--mouse-y', y);
            }
            window.addEventListener('mousemove', track, { passive: true });
          })();
        `}} />
      </body>
    </html>
  );
}
