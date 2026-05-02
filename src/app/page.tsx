'use client';

import Link from 'next/link';
import { ArrowRight, Play, Star, Check, User, ArrowUp, ExternalLink, Code2, Share2, Search, Palette, Film } from 'lucide-react';
import {
  Sparkles, CalendarClock, BarChart3, ImagePlus,
  TrendingUp, SmilePlus, RefreshCw, MessageCircleHeart,
  ScanSearch, Globe as GlobeIcon
} from 'lucide-react';
import { FaInstagram, FaXTwitter, FaFacebookF, FaLinkedinIn, FaPinterestP, FaYoutube, FaGlobe, FaBullhorn } from 'react-icons/fa6';
import { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence, useMotionValue, useTransform, animate, useInView, useScroll } from 'framer-motion';

/* ───────────── Animated Hero Section ───────────── */
function HeroSection() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [headingIndex, setHeadingIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setHeadingIndex((prev) => (prev + 1) % 5);
    }, 4000);
    return () => clearInterval(timer);
  }, []);



  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationId: number;
    let particles: Array<{
      x: number; y: number; vx: number; vy: number;
      size: number; opacity: number; life: number; maxLife: number;
    }> = [];

    const resize = () => {
      canvas.width = canvas.offsetWidth * window.devicePixelRatio;
      canvas.height = canvas.offsetHeight * window.devicePixelRatio;
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
    };

    resize();
    window.addEventListener('resize', resize);

    const createParticle = () => {
      const centerX = canvas.offsetWidth / 2;
      return {
        x: centerX + (Math.random() - 0.5) * 400,
        y: Math.random() * canvas.offsetHeight * 0.4,
        vx: (Math.random() - 0.5) * 0.3,
        vy: -Math.random() * 0.5 - 0.1,
        size: Math.random() * 2 + 0.5,
        opacity: 0,
        life: 0,
        maxLife: Math.random() * 200 + 100,
      };
    };

    for (let i = 0; i < 40; i++) {
      const p = createParticle();
      p.life = Math.random() * p.maxLife;
      particles.push(p);
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.offsetWidth, canvas.offsetHeight);

      if (particles.length < 50 && Math.random() < 0.1) {
        particles.push(createParticle());
      }

      particles = particles.filter(p => p.life < p.maxLife);

      particles.forEach(p => {
        p.life++;
        p.x += p.vx;
        p.y += p.vy;

        const progress = p.life / p.maxLife;
        if (progress < 0.2) p.opacity = progress * 5;
        else if (progress > 0.8) p.opacity = (1 - progress) * 5;
        else p.opacity = 1;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(52, 204, 50, ${p.opacity * 0.4})`;
        ctx.fill();

        // Soft glow around particle
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size * 3, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(52, 204, 50, ${p.opacity * 0.08})`;
        ctx.fill();
      });

      animationId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', resize);
    };
  }, []);

  const floatingLogos = [
    { icon: <FaFacebookF className="w-4 h-4" color="#1877F2" />, name: 'Facebook', position: 'left-[5%] top-[30%]', delay: '0s' },
    { icon: <FaInstagram className="w-4 h-4" color="#E4405F" />, name: 'Instagram', position: 'left-[15%] bottom-[25%]', delay: '1s' },
    { icon: <FaXTwitter className="w-4 h-4" />, name: 'X.com', position: 'right-[5%] top-[25%]', delay: '0.5s' },
    { icon: <FaLinkedinIn className="w-4 h-4" color="#0A66C2" />, name: 'LinkedIn', position: 'right-[15%] bottom-[20%]', delay: '1.5s' },
    { icon: <FaPinterestP className="w-4 h-4" color="#E60023" />, name: 'Pinterest', position: 'left-[22%] top-[15%]', delay: '0.8s' },
    { icon: <FaYoutube className="w-4 h-4" color="#FF0000" />, name: 'YouTube', position: 'right-[25%] top-[12%]', delay: '1.2s' },
    { icon: <FaGlobe className="w-4 h-4" color="#10B981" />, name: 'Website', position: 'left-[5%] bottom-[45%]', delay: '0.3s' },
    { icon: <FaBullhorn className="w-4 h-4" color="#34CC32" />, name: 'Marketing', position: 'right-[5%] bottom-[45%]', delay: '1.8s' },
  ];

  return (
    <section className="hero-bg relative pt-28 pb-20 lg:pt-36 lg:pb-28 min-h-[90vh] flex items-center">
      {/* Dot grid */}
      <div className="hero-dots" />
      
      {/* Main glow bloom */}
      <div className="hero-glow" />
      <div className="hero-glow-secondary" />

      {/* Canvas particles */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none"
        style={{ zIndex: 1 }}
      />

      {/* Floating original logos */}
      <div className="hidden lg:block">
        {floatingLogos.map((logo, i) => (
          <div
            key={i}
            className={`floating-logo-badge ${logo.position}`}
            style={{ animationDelay: logo.delay }}
          >
            {logo.icon}
            <span>{logo.name}</span>
          </div>
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Badge — rotating text with fade */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent/10 border border-accent/20 mb-8 animate-fade-in">
          <span className="inline-block w-8 h-5 rounded text-[10px] font-bold flex items-center justify-center" style={{ background: 'var(--accent)', color: '#fff' }}>
            #1
          </span>
          <AnimatePresence mode="wait">
            <motion.span
              key={headingIndex}
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              transition={{ duration: 0.5, ease: 'easeInOut' }}
              className="text-xs font-medium text-accent"
            >
              {[
                'Top Rated Digital Marketing Agency',
                'Award-Winning Web Development Studio',
                'Creative Design & Branding Experts',
                'Google Ads & SEO Growth Partners',
                'Full-Stack Development Specialists',
              ][headingIndex % 5]}
            </motion.span>
          </AnimatePresence>
        </div>

        {/* Heading */}
        <div className="h-[220px] sm:h-[240px] lg:h-[300px] xl:h-[320px] mb-6 flex items-center justify-center w-full">
          <AnimatePresence mode="wait">
            <motion.h1
              key={headingIndex}
              initial="hidden"
              animate="visible"
              exit={{ filter: 'blur(10px)', opacity: 0, y: -10, transition: { duration: 0.5 } }}
              variants={{
                hidden: {},
                visible: { transition: { staggerChildren: 0.18 } },
              }}
              className="text-4xl sm:text-6xl lg:text-[72px] xl:text-[84px] font-bold tracking-tight leading-[1.2] font-display"
            >
              {(headingIndex % 5 === 0 ? [
                <span key="0">Your Vision,</span>,
                <span key="1">Our Innovation —</span>,
                <span key="2">Shaping <span className="gradient-text">Digital Reality</span>.</span>,
              ] : headingIndex % 5 === 1 ? [
                <span key="0">A <span className="gradient-text">Digital-First</span> Agency</span>,
                <span key="1">Transforming Brands</span>,
                <span key="2">& Businesses</span>,
              ] : headingIndex % 5 === 2 ? [
                <span key="0">We Build <span className="gradient-text">Websites</span></span>,
                <span key="1">Apps & Software</span>,
                <span key="2">That Perform.</span>,
              ] : headingIndex % 5 === 3 ? [
                <span key="0">Designs That</span>,
                <span key="1"><span className="gradient-text">Captivate</span>, Brands</span>,
                <span key="2">That Convert.</span>,
              ] : [
                <span key="0">SEO, Ads &</span>,
                <span key="1"><span className="gradient-text">Social Media</span></span>,
                <span key="2">That Drive Growth.</span>,
              ]).map((line, i) => (
                <motion.span
                  key={i}
                  className="block whitespace-nowrap"
                  variants={{
                    hidden: { opacity: 0, y: 24, filter: 'blur(8px)' },
                    visible: { opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration: 0.6, ease: 'easeOut' } },
                  }}
                >
                  {line}
                </motion.span>
              ))}
            </motion.h1>
          </AnimatePresence>
        </div>

        {/* Subtitle */}
        <p className="text-base sm:text-lg text-muted max-w-2xl mx-auto mb-10 leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
          Welcome to DigiWorld Technologies. We provide comprehensive digital solutions, from Local SEO to Corporate Branding, perfectly designed to help your business thrive and scale efficiently.
        </p>

        {/* CTAs */}
        <div className="flex flex-row items-center justify-center gap-3 sm:gap-4 mb-6 animate-fade-in-up w-full" style={{ animationDelay: '0.2s' }}>
          <Link
            href="/contact"
            className="glow-button px-4 py-2.5 sm:px-8 sm:py-3.5 text-xs sm:text-sm font-semibold rounded-md inline-flex items-center justify-center gap-1.5 sm:gap-2 flex-1 sm:flex-none max-w-[160px] sm:max-w-none text-center"
            style={{ color: '#fff' }}
          >
            Book Appointment
          </Link>
          <Link
            href="/services"
            className="px-4 py-2.5 sm:px-8 sm:py-3.5 text-xs sm:text-sm font-medium text-fg rounded-md inline-flex items-center justify-center gap-1.5 sm:gap-2 transition-colors flex-1 sm:flex-none max-w-[160px] sm:max-w-none text-center"
            style={{ border: '1px solid var(--border)', background: 'var(--surface-1)' }}
          >
            Explore Services
            <Play className="w-3 h-3 sm:w-4 sm:h-4 fill-current" />
          </Link>
        </div>

        {/* Social Proof */}
        <div className="flex items-center justify-center gap-6 text-xs text-muted animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
          <div className="flex items-center gap-1.5">
            <Check className="w-3.5 h-3.5 text-accent" />
            <span>Proven Marketing ROI</span>
          </div>
          <span className="text-muted/30">•</span>
          <div className="flex items-center gap-1.5">
            <Check className="w-3.5 h-3.5 text-accent" />
            <span>Dedicated Strategy Experts</span>
          </div>
        </div>

      </div>
    </section>
  );
}

/* ───────────── Trusted By ───────────── */
// Client logos from /public/images/logo/client-logo/
const clientLogos = [
  { file: '1.png', name: 'Client 1' },
  { file: '2.png', name: 'Client 2' },
  { file: '3.png', name: 'Client 3' },
  { file: '4.png', name: 'Client 4' },
  { file: '5.png', name: 'Client 5' },
  { file: '6.png', name: 'Client 6' },
  { file: '7.png', name: 'Client 7' },
  { file: '8.png', name: 'Client 8' },
  { file: '9.png', name: 'Client 9' },
  { file: '10.png', name: 'Client 10' },
  { file: '11.png', name: 'Client 11' },
  { file: '12.png', name: 'Client 12' },
  { file: '13.png', name: 'Client 13' },
  { file: '14.png', name: 'Client 14' },
  { file: '15.png', name: 'Client 15' },
  { file: '16.png', name: 'Client 16' },
  { file: '17.png', name: 'Client 17' },
  { file: '18.png', name: 'Client 18' },
  { file: '19.png', name: 'Client 19' },
  { file: 'Arya_Foods.png', name: 'Arya Foods' },
  { file: 'Darshan_Jadhav.png', name: 'Darshan Jadhav' },
  { file: 'DS Moto.png', name: 'DS Moto' },
  { file: 'Gaurav Kirana.png', name: 'Gaurav Kirana' },
  { file: 'Hotel_Omkar_Garden.png', name: 'Hotel Omkar Garden' },
  { file: 'Hotel_Trident.png', name: 'Hotel Trident' },
  { file: 'Jain_Bakers _logo.png', name: 'Jain Bakers' },
  { file: 'Jogeshwari_Super_Shopee.png', name: 'Jogeshwari Super Shopee' },
  { file: 'Kavyaas_Slimming_Center.png', name: 'Kavyaas Slimming Center' },
  { file: 'Key_Tech.png', name: 'Key Tech' },
  { file: 'Laser Dental.png', name: 'Laser Dental' },
  { file: 'Lily_Events.png', name: 'Lily Events' },
  { file: 'Logo Final.png', name: 'Client' },
  { file: 'Logo SM 1.png', name: 'Client' },
  { file: 'Logo.png', name: 'Client' },
  { file: 'MA Events.jpg', name: 'MA Events' },
  { file: 'OK_Kirana.png', name: 'OK Kirana' },
  { file: 'Pranika_Arts.png', name: 'Pranika Arts' },
  { file: 'Scenic_Lands.png', name: 'Scenic Lands' },
  { file: 'TE_LOGO_1_1.png', name: 'TE Logo' },
  { file: 'The bright logo 1.png', name: 'The Bright' },
  { file: 'Trade Bharat.png', name: 'Trade Bharat' },
  { file: 'Utkarsh Wani Samaj_HD_Png.png', name: 'Utkarsh Wani Samaj' },
  { file: 'UWPL_Logo_HD_Png.png', name: 'UWPL' },
];

function TrustedBySection() {
  const track = [...clientLogos, ...clientLogos, ...clientLogos, ...clientLogos];

  return (
    <section className="py-12 overflow-hidden relative" style={{ borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <p className="text-center text-xs text-muted uppercase tracking-[0.2em] font-display">
          Trusted by growing businesses and established brands
        </p>
      </div>

      <div className="relative flex overflow-hidden group">
        {/* fade edges */}
        <div className="absolute inset-y-0 left-0 w-24 sm:w-40 bg-gradient-to-r from-[var(--bg)] to-transparent pointer-events-none z-10" />
        <div className="absolute inset-y-0 right-0 w-24 sm:w-40 bg-gradient-to-l from-[var(--bg)] to-transparent pointer-events-none z-10" />

        <div className="animate-marquee flex flex-nowrap items-center gap-4 w-max group-hover:[animation-play-state:paused]">
          {track.map((logo, i) => (
            <div
              key={i}
              className="client-logo-card shrink-0 flex items-center justify-center rounded-xl border"
              style={{
                width: 140,
                height: 72,
                background: 'var(--card-bg)',
                borderColor: 'var(--border)',
              }}
            >
              <img
                src={`/images/logo/client-logo/${logo.file}`}
                alt={logo.name}
                style={{ width: 100, height: 44, objectFit: 'contain', objectPosition: 'center' }}
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ───────────── Features Bento Grid ───────────── */
function FeaturesGrid() {
  const features = [
    {
      icon: <BarChart3 className="w-6 h-6" />,
      title: 'Data-Backed Strategies',
      description: 'We rely on comprehensive analytics to develop targeted campaigns that guarantee measurable progress and high conversion rates.',
    },
    {
      icon: <GlobeIcon className="w-6 h-6" />,
      title: 'Local & Global SEO',
      description: 'Expand your reach. We optimize your brand to capture local market share while standing out on the global stage.',
    },
    {
      icon: <Sparkles className="w-6 h-6" />,
      title: 'Full-Scale Branding',
      description: 'From logo design to complete brand revamps, we craft memorable identities that resonate and leave lasting impressions.',
    }
  ];

  return (
    <section className="pt-24 pb-10 relative">
      <div className="section-glow section-glow-top" />
      <div className="section-glow section-glow-left" />
      <div className="section-glow section-glow-right" />      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {/* Large Feature Card */}
          <div className="lg:col-span-2 glass-card rounded-2xl p-8 lg:p-10 relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-accent/5 to-transparent rounded-bl-full" />
            <div className="relative">
              <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center text-accent mb-6">
                {features[0].icon}
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">{features[0].title}</h3>
              <p className="text-muted leading-relaxed max-w-lg">{features[0].description}</p>
              <div className="mt-8 grid grid-cols-2 md:grid-cols-3 gap-4">
                {/* Metric 1: Bar Chart */}
                <div className="aspect-square rounded-xl p-4 flex flex-col justify-between" style={{ background: 'var(--surface-2)', border: '1px solid var(--border)' }}>
                  <p className="text-xs font-medium text-muted">Traffic</p>
                  <div className="flex items-end justify-between h-14 gap-1.5 mt-auto">
                    {[45, 70, 50, 95, 60, 100].map((h, j) => (
                      <motion.div
                        key={j}
                        initial={{ height: '0%' }}
                        animate={{ height: `${h}%` }}
                        transition={{ duration: 1.2, delay: j * 0.1, repeat: Infinity, repeatType: 'reverse', repeatDelay: 2 }}
                        className="w-full rounded-t-sm"
                        style={{ background: 'var(--accent)' }}
                      />
                    ))}
                  </div>
                </div>

                {/* Metric 2: ROI Line */}
                <div className="aspect-square rounded-xl p-4 flex flex-col justify-between relative overflow-hidden" style={{ background: 'var(--surface-2)', border: '1px solid var(--border)' }}>
                  <p className="text-xs font-medium text-muted">Conversion</p>
                  <div className="text-2xl font-bold text-white mt-1">+248%</div>
                  <svg className="absolute bottom-0 left-0 w-full h-1/2" viewBox="0 0 100 50" preserveAspectRatio="none">
                    <motion.path
                      d="M0 50 Q 25 10, 50 30 T 100 0 L 100 50 Z"
                      fill="url(#cardGradient)"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 1.5, repeat: Infinity, repeatType: 'reverse', repeatDelay: 3 }}
                    />
                    <defs>
                      <linearGradient id="cardGradient" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="var(--accent)" stopOpacity="0.3" />
                        <stop offset="100%" stopColor="var(--accent)" stopOpacity="0" />
                      </linearGradient>
                    </defs>
                  </svg>
                </div>

                {/* Metric 3: Active Campaigns */}
                <div className="hidden md:flex aspect-square rounded-xl p-4 flex-col justify-center items-center gap-2" style={{ background: 'var(--surface-2)', border: '1px solid var(--border)' }}>
                  <div className="relative flex h-12 w-12 mt-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-20" style={{ background: 'var(--accent)' }}></span>
                    <span className="relative inline-flex flex-col rounded-full h-12 w-12 border items-center justify-center" style={{ background: 'var(--surface-1)', borderColor: 'var(--accent)' }}>
                      <TrendingUp className="w-5 h-5" style={{ color: 'var(--accent)' }} />
                    </span>
                  </div>
                  <p className="text-[10px] sm:text-xs font-medium text-muted uppercase tracking-wider mt-3 text-center">Active<br/>Campaigns</p>
                </div>
              </div>
            </div>
          </div>

          {/* Small Feature */}
          <div className="glass-card rounded-2xl p-8 relative overflow-hidden">
            <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center text-accent mb-6">
              {features[1].icon}
            </div>
            <h3 className="text-xl font-bold text-white mb-3">{features[1].title}</h3>
            <p className="text-sm text-muted leading-relaxed">{features[1].description}</p>
            <div className="mt-6 flex flex-col gap-3">
              {/* Fake Search Bar Animation */}
              <div className="w-full h-10 rounded-lg flex items-center px-3 gap-2" style={{ background: 'var(--surface-2)', border: '1px solid var(--border)' }}>
                <ScanSearch className="w-4 h-4 text-muted-foreground" />
                <motion.div 
                  initial={{ width: '10%' }} 
                  animate={{ width: '70%' }} 
                  transition={{ duration: 2, repeat: Infinity, repeatType: 'reverse', ease: "easeInOut" }}
                  className="h-1.5 rounded-full" 
                  style={{ background: 'var(--accent)' }}
                />
              </div>
              {/* Tags / Benefits */}
              <div className="flex gap-2 flex-wrap">
                {['#1 Rankings', 'Organic Traffic', 'More Leads'].map((p, i) => (
                  <motion.div 
                    key={p} 
                    initial={{ opacity: 0.4, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1.5, delay: i * 0.3, repeat: Infinity, repeatType: 'reverse' }}
                    className="h-8 px-3 rounded-md flex items-center justify-center text-[10px] sm:text-xs font-semibold text-accent/80 whitespace-nowrap" 
                    style={{ background: 'var(--surface-1)', border: '1px solid var(--border)' }}
                  >
                    {p}
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* Bottom row */}
          {/* WHAT WE DO (Replaces Branding) */}
          <div className="glass-card rounded-2xl p-8 relative overflow-hidden flex flex-col">
            <h3 className="text-xs font-bold text-accent tracking-wider uppercase mb-1">What We Do</h3>
            <p className="text-xl font-bold text-white mb-3">We solve digital challenges.</p>
            <p className="text-sm text-muted leading-relaxed mb-8">
              Together, we help our clients achieve tangible, measurable results. Focused on business outcomes, we bring a unique set of expertise and skills to the party.
            </p>
            <div className="mt-auto flex flex-col gap-4">
              {[75, 50, 90].map((w, j) => (
                <div key={j} className="flex items-center gap-3">
                  <div className="h-2.5 flex-1 rounded-full overflow-hidden" style={{ background: 'var(--surface-2)' }}>
                    <div className="h-full rounded-full bg-gradient-to-r from-accent to-accent-light" style={{ width: `${w}%` }} />
                  </div>
                  <span className="text-xs font-semibold text-muted-foreground w-8 text-right">{w}%</span>
                </div>
              ))}
            </div>
          </div>

          {/* MORE ABOUT US Text Content */}
          <div className="glass-card rounded-2xl p-8 relative overflow-hidden border border-border/50 flex flex-col justify-center">
            <div className="space-y-8">
              <div>
                <h5 className="text-base font-semibold text-white mb-2 flex items-center gap-2.5">
                  <User className="w-5 h-5 text-accent" /> Better Audience
                </h5>
                <p className="text-[13px] sm:text-[14px] text-muted leading-relaxed pl-7">
                  We target the right customers using advanced strategies to maximize campaign effectiveness.
                </p>
              </div>
              <div>
                <h5 className="text-base font-semibold text-white mb-2 flex items-center gap-2.5">
                  <BarChart3 className="w-5 h-5 text-accent" /> Better Analytics
                </h5>
                <p className="text-[13px] sm:text-[14px] text-muted leading-relaxed pl-7">
                  We use data-driven insights to improve performance, boost conversions, and maximize ROI.
                </p>
              </div>
              <div>
                <h5 className="text-base font-semibold text-white mb-2 flex items-center gap-2.5">
                  <TrendingUp className="w-5 h-5 text-accent" /> Better Outcomes
                </h5>
                <p className="text-[13px] sm:text-[14px] text-muted leading-relaxed pl-7">
                  We deliver measurable growth in your online presence and business profitability.
                </p>
              </div>
            </div>
          </div>

          {/* Static Objects panel */}
          <div className="glass-card rounded-2xl p-8 relative overflow-hidden border border-border/50 flex flex-col justify-center items-center gap-5">
            <div className="absolute inset-0 bg-accent/10 blur-[80px] rounded-full pointer-events-none" />
            
            {/* Node 1 */}
            <div className="w-full relative z-10 glass-card p-4 sm:p-5 flex items-center gap-5 rounded-xl border border-white/5 transition-colors hover:bg-white/5 bg-surface-1/50">
              <div className="shrink-0 w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center text-accent"><User className="w-5 h-5" /></div>
              <div>
                <p className="text-[15px] font-bold text-white mb-0.5">Target Verified</p>
                <p className="text-xs sm:text-sm text-muted">+14.2k Audiences</p>
              </div>
            </div>

            {/* Node 2 */}
            <div className="w-full relative z-10 glass-card p-4 sm:p-5 flex items-center gap-5 rounded-xl border border-white/5 transition-colors hover:bg-white/5 bg-surface-1/50">
              <div className="shrink-0 w-12 h-12 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400"><BarChart3 className="w-5 h-5" /></div>
              <div>
                <p className="text-[15px] font-bold text-white mb-0.5">Data Scanned</p>
                <p className="text-xs sm:text-sm text-muted">98.4% Accuracy</p>
              </div>
            </div>

            {/* Node 3 */}
            <div className="w-full relative z-10 glass-card p-4 sm:p-5 flex items-center gap-5 rounded-xl border border-white/5 transition-colors hover:bg-white/5 bg-surface-1/50">
              <div className="shrink-0 w-12 h-12 rounded-full bg-green-500/20 flex items-center justify-center text-green-400"><TrendingUp className="w-5 h-5" /></div>
              <div>
                <p className="text-[15px] font-bold text-white mb-0.5">ROI Projected</p>
                <p className="text-xs sm:text-sm text-muted">Exceeding Targets</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ───────────── Manage Business ───────────── */
function ManageSection() {
  const items = [
    { icon: <ImagePlus className="w-5 h-5" />, title: 'UI/UX Design', desc: 'Crafting experiences that convert.', subdesc: 'We design user-centric interfaces that are both intuitive and impactful, ensuring seamless interaction and maximum engagement.', bullets: ['Creative Design', 'Intuitive UX', 'Prototyping', 'Usability Testing'] },
    { icon: <GlobeIcon className="w-5 h-5" />, title: 'Custom Web Development', desc: 'Building scalable and secure digital platforms.', subdesc: 'Our web solutions are crafted to meet your business goals while ensuring performance, flexibility, and future growth.', bullets: ['Responsive Design', 'Custom Functionality', 'High Performance', 'Enterprise-Level Security'] },
    { icon: <TrendingUp className="w-5 h-5" />, title: 'Strategy & Consulting', desc: 'Digital roadmaps that drive results.', subdesc: 'Our consulting services are designed to provide clarity, direction, and measurable outcomes. We help businesses make smart digital decisions to fuel growth.', bullets: ['Brand Strategy', 'Digital Transformation Consulting', 'Marketing Roadmap', 'Competitive Analysis'] },
    { icon: <Sparkles className="w-5 h-5" />, title: 'Graphic Designing', desc: 'Creative visuals that communicate', subdesc: 'We craft compelling visual designs that not only reflect your brand identity but also captivate your audience across digital and print platforms.', bullets: ['Logo & Branding', 'Marketing Collaterals', 'Social Media Creatives', 'Web & App UI Design'] },
    { icon: <BarChart3 className="w-5 h-5" />, title: 'Digital Marketing', desc: 'Get noticed, get results.', subdesc: 'We craft performance-driven digital marketing strategies that increase your brand visibility and ROI.', bullets: ['SEO & SEM', 'Social Media Marketing', 'Content Strategy', 'Paid Campaigns'] },
    { icon: <ScanSearch className="w-5 h-5" />, title: 'Data Analytics', desc: 'Transform Data into Business Intelligence', subdesc: 'Unlock the power of your data with our comprehensive Data Analytics services. We help you collect, process, and analyze complex datasets to uncover actionable insights that drive smarter decision-making.', bullets: ['Business Intelligence Dashboards', 'Predictive Analytics', 'Customer Segmentation'] },
    { icon: <GlobeIcon className="w-5 h-5" />, title: 'Domain & Hosting', desc: 'Reliable, Secure, and Scalable Web Infrastructure', subdesc: 'Build your digital presence on a solid foundation. We offer top-tier domain registration and reliable hosting solutions tailored for businesses of all sizes.', bullets: ['Domain Name Registration', 'Shared, VPS & Dedicated Hosting', 'Cloud Hosting Solutions', 'SSL Certificates & Security', 'Email Hosting'] },
    { icon: <GlobeIcon className="w-5 h-5" />, title: 'Google Cloud Services', desc: 'Innovate at Scale with Google Cloud', subdesc: 'Accelerate your digital transformation with our end-to-end Google Cloud services. As your cloud partner, we help you migrate, manage, and optimize workloads on GCP.', bullets: ['Cloud Migration & Deployment', 'Compute Engine & Storage', 'Cloud Functions & App Engine', 'BigQuery & Cloud AI Integration', 'Ongoing Cloud Management'] },
    { icon: <MessageCircleHeart className="w-5 h-5" />, title: 'Tata Tele Business Services', desc: 'Powering Businesses with Tata Teleservices', subdesc: 'As an official partner of Tata Tele Business Services, we bring you trusted, enterprise-grade communication and connectivity solutions backed by India\'s most reliable telecom network.', bullets: ['Leased Line Internet Solutions', 'PRI Lines & SIP Trunking', 'Cloud Telephony', 'IoT Solutions', 'Voice & Data Plans'] },
    { icon: <MessageCircleHeart className="w-5 h-5" />, title: 'WhatsApp & SMS Services', desc: 'Reach Your Customers Instantly', subdesc: 'Enhance your customer communication with our WhatsApp Business API and Bulk SMS solutions. We help you engage, inform, and convert through the most direct channels available today.', bullets: ['WhatsApp Business API Integration', 'Transactional & Promotional SMS', 'Bulk Messaging Campaigns', 'Automated Messaging Bots', 'Delivery Reports'] },
    { icon: <SmilePlus className="w-5 h-5" />, title: 'IVR Services', desc: 'Smart Call Management with IVR Solutions', subdesc: 'Deliver a seamless customer experience with our customizable Interactive Voice Response (IVR) systems. Route calls efficiently, provide self-service options, and ensure 24/7 customer support availability.', bullets: ['Multi-level IVR Systems', 'Call Routing & Forwarding', 'Voice Recording & Analytics', 'Cloud-based IVR Setup', 'Custom Greeting Messages'] },
    { icon: <RefreshCw className="w-5 h-5" />, title: 'Email Marketing Services', desc: 'Drive Conversions with Smart Email Campaigns', subdesc: 'Reach your audience where it matters most – their inbox. Our Email Marketing Services are designed to boost engagement, improve retention, and drive sales.', bullets: ['Email Campaign Design & Management', 'Automated Drip Campaigns', 'Subscriber List Segmentation', 'Performance Tracking & Analytics', 'GDPR & CAN-SPAM Compliance'] },
  ];

  return (
    <section className="py-24 relative">
      <div className="section-glow section-glow-top" />
      <div className="section-glow section-glow-left" />
      <div className="section-glow section-glow-right" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 font-display">
            Strategies that shape your business
          </h2>
          <p className="text-muted max-w-2xl mx-auto">
            We provide an end-to-end suite of marketing solutions to help you get the most out of your digital presence.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item, i) => (
            <div key={i} className="glass-card rounded-2xl p-6 group cursor-default flex flex-col">
              <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center text-accent mb-5 group-hover:scale-110 transition-transform">
                {item.icon}
              </div>
              <h3 className="text-lg font-bold text-white mb-1 font-display">{item.title}</h3>
              <p className="text-accent text-sm font-medium mb-3">{item.desc}</p>
              <p className="text-sm text-muted leading-relaxed flex-1 mb-5">{item.subdesc}</p>
              <ul className="space-y-2 mb-2 mt-auto">
                {item.bullets.map((bullet, j) => (
                  <li key={j} className="flex items-start gap-2 text-xs text-muted-foreground">
                    <Check className="w-3.5 h-3.5 text-accent mt-0.5 shrink-0" />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-6 pt-5 border-t border-border/40 flex items-center justify-between">
                <Link href="/services" className="text-[13px] font-semibold text-accent flex items-center gap-1.5 hover:text-accent-light transition-colors group-hover:gap-2.5">
                  Learn more <ArrowRight className="w-3.5 h-3.5" />
                </Link>
                <Link href="/contact" className="glow-button px-4 py-2 text-[12px] font-semibold rounded-full text-white shadow-lg shadow-accent/20 transition-transform active:scale-95">
                  Book now
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ───────────── Stats / Proof Section ───────────── */
function Counter({ from = 0, to, duration = 2.5, suffix = '', format = false }: { from?: number, to: number, duration?: number, suffix?: string, format?: boolean }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  const count = useMotionValue(from);
  
  const rounded = useTransform(count, (latest) => {
    const val = Math.round(latest);
    return (format ? val.toLocaleString() : val) + suffix;
  });

  useEffect(() => {
    if (inView) {
      animate(count, to, { duration, ease: "easeOut" });
    }
  }, [count, inView, to, duration]);

  return <motion.span ref={ref}>{rounded}</motion.span>;
}

function StatsSection() {
  const stats = [
    { value: 95, suffix: '%', label: 'Average increase in sales for our clients', progress: 95 },
    { value: 500, suffix: '+', label: 'Satisfied Clients', progress: 100 },
    { value: 99, suffix: '%', label: 'Results improved compared to previous agencies', progress: 99 },
  ];

  return (
    <section className="pt-10 pb-24 relative overflow-hidden">
      <div className="section-glow section-glow-top" />
      <div className="section-glow section-glow-left" />
      <div className="section-glow section-glow-right" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-10">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 font-display tracking-tight">
            The proof is in the numbers
          </h2>
          <p className="text-muted max-w-2xl mx-auto text-[15px] leading-relaxed">
            Our results speak for themselves. See how we've helped businesses grow.
          </p>
        </div>

        <div className="glass-card rounded-[2rem] p-8 lg:p-12 relative overflow-hidden border border-border/50">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-14 items-center relative z-10">
            {stats.map((stat, i) => (
              <div key={i} className="flex flex-col items-center text-center">
                <div className="relative w-32 h-32 mb-8">
                  {/* SVG Progress Circle */}
                  <svg className="w-full h-full -rotate-90 drop-shadow-[0_0_15px_rgba(52,204,50,0.15)]" viewBox="0 0 100 100">
                    <circle cx="50" cy="50" r="46" fill="none" stroke="var(--surface-2)" strokeWidth="4" />
                    <motion.circle 
                      cx="50" cy="50" r="46" fill="none" stroke="var(--accent)" strokeWidth="4" strokeLinecap="round"
                      strokeDasharray="289"
                      initial={{ strokeDashoffset: 289 }}
                      whileInView={{ strokeDashoffset: 289 - (289 * stat.progress) / 100 }}
                      viewport={{ once: true, margin: "-50px" }}
                      transition={{ duration: 2.5, ease: "easeOut" }}
                    />
                  </svg>
                  {/* Center Value */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-3xl font-bold text-white tracking-tight">
                      <Counter to={stat.value} suffix={stat.suffix} />
                    </span>
                  </div>
                  {/* Small indicator arrow */}
                  <div className="absolute -bottom-3.5 left-1/2 -translate-x-1/2 w-8 h-8 rounded-full flex items-center justify-center shadow-lg shadow-accent/20 text-accent transition-transform hover:-translate-y-1" style={{ background: 'var(--surface-1)', border: '1px solid var(--border)' }}>
                     <ArrowUp className="w-4 h-4" />
                  </div>
                </div>
                <p className="text-[13px] font-medium text-muted max-w-[200px] mx-auto leading-relaxed">{stat.label}</p>
              </div>
            ))}

            {/* Highlight Colored Box */}
            <div className="rounded-[1.5rem] p-8 text-center flex flex-col items-center justify-center h-full relative overflow-hidden border transition-all duration-300 hover:shadow-[0_0_30px_rgba(52,204,50,0.15)]" style={{ background: 'var(--surface-1)', borderColor: 'var(--accent)' }}>
              <div className="absolute inset-0 bg-gradient-to-br from-accent/10 via-transparent to-transparent pointer-events-none" />
              <div className="relative z-10 w-full flex flex-col items-center gap-2">
                <h3 className="text-4xl font-extrabold text-white mb-2 tracking-tight">
                  <Counter to={350000} format={true} suffix="+" duration={3} />
                </h3>
                <p className="text-[13px] text-muted mb-8 max-w-[180px] mx-auto leading-relaxed">Leads generated for our clients</p>
                <Link href="/contact" className="glow-button px-6 py-3 rounded-full text-[13px] font-bold text-white w-full flex items-center justify-center gap-2 transition-transform hover:scale-105 active:scale-95 shadow-[0_0_15px_rgba(52,204,50,0.3)] border border-accent/50">
                  Get Started <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ───────────── Services Stack Section ───────────── */
const stackServices = [
  {
    id: 1,
    title: 'Pre-Production',
    tags: ['Concept Development', 'Scripting', 'Location Scouting', 'Video Shooting'],
    description:
      'Strategic planning for high-impact video production. From concept development and scripting to location scouting and professional video shooting, we build the foundation for cinematic content that performs.',
    cta: 'Pre-Production services',
    accentColor: '#4ade80',
    glowColor: 'rgba(74,222,128,0.15)',
    bgFrom: '#111',
    bgTo: '#0a0a0a',
    icon: (
      <svg viewBox="0 0 100 100" fill="none" className="w-full h-full">
        <mask id="y-mask-pre">
          <rect width="100" height="100" fill="white" />
          <motion.g
            animate={{ rotate: 360 }}
            transition={{ duration: 24, repeat: Infinity, ease: 'linear' }}
            style={{ transformOrigin: '50% 50%' }}
          >
            <path d="M50 50 L50 100" stroke="black" strokeWidth="6" strokeLinecap="round" />
            <path d="M50 50 L6 25" stroke="black" strokeWidth="6" strokeLinecap="round" />
            <path d="M50 50 L94 25" stroke="black" strokeWidth="6" strokeLinecap="round" />
          </motion.g>
        </mask>
        <circle cx="50" cy="50" r="32" fill="#4ade80" mask="url(#y-mask-pre)" />
        {/* Animated breathing pulse */}
        <motion.circle 
          cx="50" cy="50" r="34" fill="none" stroke="#4ade80" strokeWidth="1"
          animate={{ scale: [1, 1.05, 1], opacity: [0.3, 0, 0.3] }}
          transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
          style={{ transformOrigin: '50% 50%' }}
        />
      </svg>
    ),
  },
  {
    id: 2,
    title: 'Post-Production',
    tags: ['Video Editing', 'Color Grading', 'Motion Graphics', 'Sound Design'],
    description:
      'Professional video editing, color grading, motion graphics, and sound design crafted to maximize retention and engagement. We transform raw footage into polished, performance-driven content.',
    cta: 'Post-Production services',
    accentColor: '#c084fc',
    glowColor: 'rgba(192,132,252,0.15)',
    bgFrom: '#111',
    bgTo: '#0a0a0a',
    icon: (
      <svg viewBox="0 0 100 100" fill="none" className="w-full h-full relative">
        <motion.path 
          d="M50 15 C50 38 62 50 85 50 C62 50 50 62 50 85 C50 62 38 50 15 50 C38 50 50 38 50 15 Z" 
          fill="#c084fc"
          animate={{ rotate: [0, 8, -8, 0], scale: [1, 1.05, 0.95, 1] }}
          transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
          style={{ transformOrigin: '50% 50%' }}
        />
        <motion.circle cx="80" cy="20" r="2" fill="#e879f9" animate={{ opacity: [0, 1, 0] }} transition={{ duration: 2, repeat: Infinity }} />
        <motion.circle cx="20" cy="80" r="3" fill="#c084fc" animate={{ opacity: [0, 1, 0] }} transition={{ duration: 3, repeat: Infinity, delay: 1 }} />
      </svg>
    ),
  },
  {
    id: 3,
    title: 'Web Development',
    tags: ['Custom Websites', 'E-Commerce', 'Web Apps', 'Optimization'],
    description:
      'Custom web development focused on performance, scalability, and conversion. We design high-performance websites and digital platforms that turn traffic into measurable growth.',
    cta: 'Development services',
    accentColor: '#38bdf8',
    glowColor: 'rgba(56,189,248,0.15)',
    bgFrom: '#111',
    bgTo: '#0a0a0a',
    icon: (
      <svg viewBox="0 0 80 80" fill="none" className="w-full h-full">
        <motion.circle cx="40" cy="40" r="30" fill="#38bdf8" 
          animate={{ scale: [1, 1.05, 1] }} transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }} style={{ transformOrigin: '50% 50%' }}
        />
        <motion.circle cx="40" cy="48" r="18" fill="currentColor" className="text-white dark:text-[#111]"
          animate={{ cy: [48, 45, 48] }} transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.circle cx="40" cy="54" r="8" fill="#38bdf8" 
          animate={{ cy: [54, 48, 54] }} transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
        />
      </svg>
    ),
  },
  {
    id: 4,
    title: 'Social Marketing',
    tags: ['Strategy', 'Content Creation', 'Paid Ads', 'Analytics'],
    description:
      'Data-driven social media marketing designed to increase reach, engagement, and revenue. We combine strategy, content creation, and analytics to build sustainable digital growth systems.',
    cta: 'Marketing services',
    accentColor: '#34CC32',
    glowColor: 'rgba(52,204,50,0.15)',
    bgFrom: '#111',
    bgTo: '#0a0a0a',
    icon: (
      <svg viewBox="0 0 100 100" fill="none" className="w-full h-full">
        <motion.circle cx="50" cy="50" r="10" fill="#34CC32" animate={{ scale: [1, 1.1, 1] }} transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }} style={{ transformOrigin: '50% 50%' }} />
        <motion.circle cx="50" cy="50" r="22" stroke="#34CC32" strokeWidth="4" fill="none" opacity="0.6" 
          animate={{ scale: [1, 1.05, 1] }} transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }} style={{ transformOrigin: '50% 50%' }}
        />
        <circle cx="50" cy="50" r="35" stroke="#34CC32" strokeWidth="4" fill="none" opacity="0.2" />
        
        <motion.g animate={{ rotate: 360 }} transition={{ duration: 15, repeat: Infinity, ease: 'linear' }} style={{ transformOrigin: '50% 50%' }}>
          <circle cx="50" cy="15" r="5" fill="#34CC32" />
          <circle cx="19.69" cy="67.5" r="5" fill="#34CC32" />
          <circle cx="80.31" cy="67.5" r="5" fill="#34CC32" />
        </motion.g>
      </svg>
    ),
  },
];

function ServiceStackCard({
  service,
  index,
  total,
}: {
  service: typeof stackServices[0];
  index: number;
  total: number;
}) {
  const cardRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ['start 100px', 'start -50%'],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1, index === total - 1 ? 1 : 0.94]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, index === total - 1 ? 1 : 0.4]);

  return (
    <motion.div
      ref={cardRef}
      style={{
        scale,
        opacity,
        position: 'sticky',
        top: `${100 + index * 30}px`,
        transformOrigin: 'top center',
        zIndex: index + 1,
      }}
      className="w-full"
    >
      <div className="relative w-full rounded-3xl overflow-hidden min-h-[260px]">
        {/* Light mode background */}
        <div 
          className="absolute inset-0 rounded-3xl dark:hidden"
          style={{
            background: `radial-gradient(ellipse at 70% 50%, ${service.accentColor}15 0%, transparent 60%), linear-gradient(135deg, #ffffff 0%, #f8fafc 100%)`,
            border: '1px solid rgba(0,0,0,0.05)',
            boxShadow: `0 8px 40px rgba(0,0,0,0.04), inset 0 0 60px ${service.accentColor}10`,
          }}
        />
        {/* Dark mode background */}
        <div 
          className="absolute inset-0 rounded-3xl hidden dark:block"
          style={{
            background: `radial-gradient(ellipse at 70% 50%, ${service.glowColor} 0%, transparent 60%), linear-gradient(135deg, #111 0%, #0a0a0a 100%)`,
            border: '1px solid rgba(255,255,255,0.07)',
            boxShadow: `0 8px 40px rgba(0,0,0,0.5), 0 0 0 1px rgba(255,255,255,0.04), inset 0 0 60px ${service.glowColor}`,
          }}
        />

        {/* Subtle glow blob */}
        <div
          className="absolute inset-0 pointer-events-none hidden dark:block"
          style={{
            background: `radial-gradient(ellipse at 75% 50%, ${service.glowColor} 0%, transparent 55%)`,
          }}
        />

        <div className="relative z-10 flex flex-col md:flex-row items-center gap-8 p-8 md:p-12">
          {/* Left: Content */}
          <div className="flex-1 min-w-0">
            {/* Service number */}
            <div
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-[11px] font-bold tracking-widest uppercase mb-5"
              style={{
                background: `${service.accentColor}18`,
                border: `1px solid ${service.accentColor}30`,
                color: service.accentColor,
              }}
            >
              {String(service.id).padStart(2, '0')} · Service
            </div>

            <h3 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-5 leading-tight tracking-tight">
              {service.title}
            </h3>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-6">
              {service.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 rounded-full text-[12px] font-semibold text-slate-700 dark:text-[rgba(255,255,255,0.75)] bg-slate-100 dark:bg-[rgba(255,255,255,0.06)] border border-slate-200 dark:border-[rgba(255,255,255,0.1)]"
                >
                  {tag}
                </span>
              ))}
            </div>

            <p className="text-sm leading-relaxed mb-8 max-w-lg text-slate-600 dark:text-[rgba(255,255,255,0.55)]">
              {service.description}
            </p>

            <Link
              href="/services"
              className="inline-flex items-center gap-2.5 px-6 py-3 rounded-full text-[13px] font-bold transition-all duration-300 hover:scale-105 hover:shadow-lg active:scale-95 text-white dark:text-[#111]"
              style={{
                background: service.accentColor,
                boxShadow: `0 0 20px ${service.glowColor}`,
              }}
            >
              {service.cta}
              <ExternalLink className="w-3.5 h-3.5" />
            </Link>
          </div>

          {/* Right: Icon */}
          <div className="shrink-0 w-40 h-40 md:w-52 md:h-52 opacity-90">
            {service.icon}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function ServicesStackSection() {
  return (
    <section className="py-24 relative">
      <div className="section-glow section-glow-top" />
      <div className="section-glow section-glow-left" />
      <div className="section-glow section-glow-right" />
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-16">
          <div
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full mb-6 text-[11px] font-bold tracking-widest uppercase"
            style={{
              background: 'rgba(52,204,50,0.08)',
              border: '1px solid rgba(52,204,50,0.2)',
              color: 'var(--accent)',
            }}
          >
            Our Expertise
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-slate-900 dark:text-white font-display leading-tight tracking-tight">
            Services that
          </h2>
          <h2 className="text-4xl sm:text-5xl lg:text-7xl font-bold font-display leading-tight tracking-tight italic text-transparent mb-12 [-webkit-text-stroke:1.5px_#0f172a] dark:[-webkit-text-stroke:1px_rgba(255,255,255,0.4)]">
            scale brands.
          </h2>
        </div>

        {/* Sticky Scroll Stack */}
        <div className="relative flex flex-col gap-10 md:gap-16 pb-6">
          {stackServices.map((service, index) => (
            <ServiceStackCard
              key={service.id}
              service={service}
              index={index}
              total={stackServices.length}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

/* ───────────── Testimonials ───────────── */
function TestimonialsSection() {
  const testimonials = [
    { name: 'Michael Wilson', handle: '@michael_wilson', text: 'Effortlessly schedule posts across multiple platforms with digigrownex.' },
    { name: 'Jessica Garcia', handle: '@jessica_garcia', text: 'The analytics insights provided by digigrownex have been invaluable.' },
    { name: 'David Martinez', handle: '@david_martinez', text: 'digigrownex has saved us so much time with its automated features.' },
    { name: 'Sophia Rodriguez', handle: '@sophia_rodriguez', text: 'Love the user-friendly interface, powerful capabilities of digigrownex.' },
    { name: 'John Doe', handle: '@john_doe', text: 'Their corporate branding strategies skyrocketed our engagement metrics overnight.' },
    { name: 'Emily Brown', handle: '@emily_brown', text: 'Highly recommend digigrownex\'s custom web development team. Flawless execution.' },
  ];

  const track1 = [...testimonials, ...testimonials, ...testimonials, ...testimonials];

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="section-glow section-glow-top" />
      <div className="section-glow section-glow-left" />
      <div className="section-glow section-glow-right" />
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[600px] bg-accent/20 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 relative z-10 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full mb-6 border" style={{ borderColor: 'var(--border)', background: 'var(--surface-0)' }}>
          <User className="w-3.5 h-3.5 text-muted-foreground" />
          <span className="text-xs font-semibold text-white tracking-wide">Our Customers</span>
        </div>
        
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 font-display">What people are saying</h2>
        <p className="text-muted max-w-2xl mx-auto">
          We are very proud of the service we provide and stand by every product we carry. Read our testimonials from our happy customers.
        </p>
      </div>

      {/* Marquee Rows */}
      <div className="relative flex flex-col gap-6 overflow-hidden">
        {/* Row 1: Right to Left */}
        <div className="flex w-max animate-marquee gap-6 hover:[animation-play-state:paused] group">
          {track1.map((t, i) => (
            <div key={i} className="testimonial-card rounded-2xl p-6 w-[350px] shrink-0 outline-none flex flex-col gap-4">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full border flex items-center justify-center text-muted-foreground" style={{ background: 'var(--surface-2)', borderColor: 'var(--border)' }}>
                  <User className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-white">{t.name}</p>
                  <p className="text-xs text-muted">{t.handle}</p>
                </div>
              </div>
              <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">&ldquo;{t.text}&rdquo;</p>
            </div>
          ))}
        </div>

        {/* Row 2: Left to Right */}
        <div className="flex w-max animate-marquee-reverse gap-6 hover:[animation-play-state:paused] group">
          {track1.map((t, i) => (
            <div key={`rev-${i}`} className="testimonial-card rounded-2xl p-6 w-[350px] shrink-0 outline-none flex flex-col gap-4">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full border flex items-center justify-center text-muted-foreground" style={{ background: 'var(--surface-2)', borderColor: 'var(--border)' }}>
                  <User className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-white">{t.name}</p>
                  <p className="text-xs text-muted">{t.handle}</p>
                </div>
              </div>
              <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">&ldquo;{t.text}&rdquo;</p>
            </div>
          ))}
        </div>

        {/* Edge Gradients */}
        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-bg to-transparent pointer-events-none fade-edges" />
        <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-bg to-transparent pointer-events-none fade-edges" />
      </div>
    </section>
  );
}

/* ───────────── CTA Section ───────────── */
function CTASection() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="section-glow section-glow-top" />
      <div className="section-glow section-glow-left" />
      <div className="section-glow section-glow-right" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/5 rounded-full blur-[120px]" />
      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight font-display">
          Ready to scale your{' '}
          <span className="gradient-text">digital growth?</span>
        </h2>
        <p className="text-lg text-muted max-w-2xl mx-auto mb-10">
          Partner with Digiworld Technologies and dominate your market. Start unlocking incredible results and double your impact today.
        </p>
        <div className="flex flex-row items-center justify-center gap-3 sm:gap-4 w-full px-2">
          <Link href="/contact" className="glow-button px-4 py-2.5 sm:px-8 sm:py-3.5 text-xs sm:text-sm font-semibold rounded-md inline-flex items-center justify-center gap-1.5 sm:gap-2 flex-1 sm:flex-none max-w-[160px] sm:max-w-none text-center" style={{ color: '#fff' }}>
            Free Proposal <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 hidden xs:block" />
          </Link>
          <Link href="/services" className="px-4 py-2.5 sm:px-8 sm:py-3.5 text-xs sm:text-sm font-medium text-fg rounded-md inline-flex items-center justify-center gap-1.5 sm:gap-2 transition-colors flex-1 sm:flex-none max-w-[160px] sm:max-w-none text-center whitespace-nowrap" style={{ border: '1px solid var(--border)', background: 'var(--surface-1)' }}>
            Talk to Expert <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 hidden xs:block" />
          </Link>
        </div>
      </div>
    </section>
  );
}

/* ───────────── Page ───────────── */
export default function HomePage() {
  return (
    <>
      <HeroSection />
      <TrustedBySection />
      <FeaturesGrid />
      <div className="section-divider" />
      <StatsSection />
      <div className="section-divider" />
      <ServicesStackSection />
      <div className="section-divider" />
      <ManageSection />
      <div className="section-divider" />
      <TestimonialsSection />
      <div className="section-divider" />
      <CTASection />
    </>
  );
}
