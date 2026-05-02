'use client';

import React, { useEffect, useState } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { 
    ArrowLeft, CheckCircle2, Zap, Search, Smartphone, Globe, Code, 
    PenTool, MapPin, MousePointerClick, Share2, TrendingUp, Shield, Layers, Users,
    ExternalLink, X, Monitor
} from 'lucide-react';
import Link from 'next/link';

const defaultService = {
  title: 'Digital Solutions',
  subtitle: 'Innovative solutions to elevate your digital presence.',
  heroDesc: 'We provide specialized services to scale your business, increase your visibility, and ensure a seamless user experience for your customers.',
  imageQuery: 'technology',
  features: [
    { icon: Zap, title: 'High Performance', desc: 'Optimized infrastructure for rapid delivery.' },
    { icon: Shield, title: 'Secure & Reliable', desc: 'Enterprise-grade security standards applied.' },
    { icon: TrendingUp, title: 'Growth Oriented', desc: 'Strategies designed directly for ROI.' },
  ],
  benefits: [
    { title: 'Data-Backed Strategy', desc: 'Decisions powered by deep analytics.' },
    { title: 'Custom Implementations', desc: 'Tailored specifically for your brand.' },
    { title: 'Scalable Architecture', desc: 'Prepared for immediate and long-term growth.' }
  ]
};

const serviceDetails: Record<string, typeof defaultService> = {
  'websites': {
    title: 'Custom Website Development',
    subtitle: 'High-performance, beautifully designed web platforms.',
    heroDesc: 'We build blazing-fast, responsive websites that not only look stunning but are engineered to convert visitors into loyal customers.',
    imageQuery: 'web development, UI',
    features: [
      { icon: Zap, title: 'Lightning Fast', desc: 'Optimized for speed and perfect Core Web Vitals.' },
      { icon: Code, title: 'Modern Tech Stack', desc: 'Built with React, Next.js, and cutting-edge tools.' },
      { icon: Smartphone, title: 'Fully Responsive', desc: 'Flawless experience across all devices.' },
    ],
    benefits: [
      { title: 'Conversion Focused', desc: 'Strategic UI/UX to maximize lead generation.' },
      { title: 'SEO Optimized', desc: 'Built-in best practices for maximum search engine visibility.' },
      { title: 'Robust CMS', desc: 'Easy content management for your growing organization.' }
    ]
  },
  'custom-software': {
    title: 'Custom Software Development',
    subtitle: 'Scalable enterprise solutions engineered for your exact workflow.',
    heroDesc: 'Eliminate friction in your business operations. We design and build custom software that solves complex problems and automates repetitive tasks.',
    imageQuery: 'software engineering, code',
    features: [
      { icon: Layers, title: 'Seamless Integration', desc: 'Connects perfectly with your existing systems.' },
      { icon: Shield, title: 'Enterprise Security', desc: 'Bank-grade encryption and access controls.' },
      { icon: TrendingUp, title: 'Automated Workflows', desc: 'Reduce manual effort and human error.' },
    ],
    benefits: [
      { title: 'Full Ownership', desc: 'You own the IP and the source code.' },
      { title: 'Agile Delivery', desc: 'Iterative development so you see value faster.' },
      { title: 'Dedicated Support', desc: '24/7 maintenance and SLA-backed uptime.' }
    ]
  },
  'app-development': {
    title: 'Mobile App Development',
    subtitle: 'Engaging, high-performance applications for iOS and Android.',
    heroDesc: 'Be where your customers are. We build intuitive, native and cross-platform mobile experiences that drive engagement and retention.',
    imageQuery: 'mobile app, smartphone',
    features: [
      { icon: Smartphone, title: 'Cross-Platform', desc: 'React Native & Flutter for maximal reach.' },
      { icon: Zap, title: 'Native Performance', desc: 'Smooth 60fps animations and transitions.' },
      { icon: Users, title: 'User-Centric UI', desc: 'Intuitive interfaces designed for physical interaction.' },
    ],
    benefits: [
      { title: 'App Store Optimization', desc: 'Strategies to get your app discovered easily.' },
      { title: 'Offline Capabilities', desc: 'Functional local storage for poor network conditions.' },
      { title: 'Push Notifications', desc: 'Direct channel to engage your user base instantly.' }
    ]
  },
  'branding': {
    title: 'Brand Identity & Design',
    subtitle: 'Crafting memorable visual identities that stand out.',
    heroDesc: 'Your brand is more than just a logo. We create cohesive, powerful visual languages that communicate your values and resonate with your target audience.',
    imageQuery: 'brand identity, design',
    features: [
      { icon: PenTool, title: 'Logo Design', desc: 'Distinctive, versatile brand marks.' },
      { icon: Globe, title: 'Brand Guidelines', desc: 'Comprehensive rules for visual consistency.' },
      { icon: Layers, title: 'Marketing Assets', desc: 'Ready-to-use collateral for all channels.' },
    ],
    benefits: [
      { title: 'Market Positioning', desc: 'Stand out clearly against competitors.' },
      { title: 'Emotional Connection', desc: 'Design that evokes trust and loyalty.' },
      { title: 'Consistent Voice', desc: 'A unified message across every touchpoint.' }
    ]
  },
  'local-seo': {
    title: 'Local SEO Mastery',
    subtitle: 'Dominate your local market and drive foot traffic.',
    heroDesc: 'Capture the customers right in your neighborhood. We optimize your digital presence so you show up first when locals search for your services.',
    imageQuery: 'local business map, seo',
    features: [
      { icon: MapPin, title: 'Google Business', desc: 'Complete optimization of your GMB profile.' },
      { icon: Users, title: 'Citation Building', desc: 'Consistent local directory management.' },
      { icon: TrendingUp, title: 'Review Management', desc: 'Strategies to generate authentic 5-star reviews.' },
    ],
    benefits: [
      { title: 'Hyper-Targeted Traffic', desc: 'Users with high intent to purchase locally.' },
      { title: 'Map Pack Dominance', desc: 'Secure the top 3 spots on Google Maps.' },
      { title: 'Location Pages', desc: 'Optimized landing pages for specific service areas.' }
    ]
  },
  'google-ads': {
    title: 'Google Ads Management',
    subtitle: 'High-converting PPC campaigns with maximum ROI.',
    heroDesc: 'Stop wasting ad spend. We engineer laser-focused Google Ads campaigns that capture high-intent searches and turn clicks into actual revenue.',
    imageQuery: 'ppc, analytics, google',
    features: [
      { icon: MousePointerClick, title: 'Intent Targeting', desc: 'Bidding on keywords that drive sales.' },
      { icon: Layers, title: 'A/B Testing', desc: 'Continuous testing of ad copy and creatives.' },
      { icon: Zap, title: 'Conversion Tracking', desc: 'Flawless setup of GA4 and Tag Manager.' },
    ],
    benefits: [
      { title: 'Immediate Visibility', desc: 'Skip the line and appear at the top of search.' },
      { title: 'Scalable Budgets', desc: 'Ramp up spending safely as ROI is proven.' },
      { title: 'Transparent Reporting', desc: 'Live dashboards showing exactly where money goes.' }
    ]
  },
  'social-media-ads': {
    title: 'Social Media Advertising',
    subtitle: 'Scroll-stopping campaigns on Facebook, Instagram & LinkedIn.',
    heroDesc: 'Engage your audience where they spend their time. We create compelling ad creatives and deploy advanced targeting to generate high-quality leads.',
    imageQuery: 'social media, instagram ads',
    features: [
      { icon: Share2, title: 'Advanced Targeting', desc: 'Lookalike audiences and retargeting.' },
      { icon: PenTool, title: 'Creative Production', desc: 'Eye-catching video and static ad formats.' },
      { icon: TrendingUp, title: 'Funnel Building', desc: 'Strategic journeys from aware to purchase.' },
    ],
    benefits: [
      { title: 'Brand Awareness', desc: 'Massive reach within your exact demographic.' },
      { title: 'Lower CPA', desc: 'Optimized targeting reduces cost-per-acquisition.' },
      { title: 'B2B & B2C Expertise', desc: 'LinkedIn for enterprise, Meta for consumer.' }
    ]
  },
  'seo': {
    title: 'Advanced Search Engine Optimization',
    subtitle: 'Long-term organic growth and industry dominance.',
    heroDesc: 'Rule the search results organically. Our comprehensive SEO strategies build immense domain authority and secure sustainable traffic for years to come.',
    imageQuery: 'seo, search engine, growth',
    features: [
      { icon: Search, title: 'Technical SEO', desc: 'Site speed, architecture, and crawlability.' },
      { icon: Code, title: 'On-Page Optimization', desc: 'Perfecting content, meta tags, and structure.' },
      { icon: Globe, title: 'Authority Building', desc: 'High-quality backlink acquisition strategies.' },
    ],
    benefits: [
      { title: 'Sustainable Traffic', desc: 'Growth that compounds month over month.' },
      { title: 'Industry Authority', desc: 'Become the trusted resource in your niche.' },
      { title: 'Content Strategy', desc: 'Data-driven roadmaps for blog and page creation.' }
    ]
  }
};

const websitePortfolio = [
  {
    category: 'Real Estate Listing Portal',
    sites: [
      { name: 'Dream Properties Nashik', url: 'https://www.dreampropertiesnashik.com/', img: '/images/website-previews/dreampropertiesnashik.jpg' },
    ],
  },
  {
    category: 'Hotel & Resorts',
    sites: [
      { name: 'Shree Balaji Lawns & Resorts', url: 'https://shreebalajilawnsandresorts.com/', img: '/images/website-previews/shreebalajilawnsandresorts.jpg' },
      { name: 'Hotel Skinn', url: 'https://hotelskinn.in/', img: '/images/website-previews/hotelskinn.jpg' },
      { name: 'Aaditya Inn', url: 'https://aadityainn.com/', img: '/images/website-previews/aadityainn.jpg' },
      { name: 'Hotel Sai Vijay', url: 'https://www.hotelsaivijay.in/', img: '/images/website-previews/hotelsaivijay.jpg' },
    ],
  },
  {
    category: 'Education',
    sites: [
      { name: 'SSISC', url: 'https://www.ssisc.in/', img: '/images/website-previews/ssisc.jpg' },
      { name: 'DL Institute', url: 'https://dlinstitute.in/', img: '/images/website-previews/dlinstitute.jpg' },
    ],
  },
  {
    category: 'Ayurveda Hospital',
    sites: [
      { name: 'Dhanvantari Ayurveda', url: 'https://dhanvantari-ayurveda-dynamic-websit.vercel.app/', img: '/images/website-previews/dhanvantari-ayurveda.jpg' },
    ],
  },
  {
    category: 'Hospital',
    sites: [
      { name: 'Gondhale Hospital', url: 'https://gondhalehospital.com/', img: '/images/website-previews/gondhalehospital.jpg' },
    ],
  },
  {
    category: 'Skin Care Clinic',
    sites: [
      { name: 'Aries Skin & Health', url: 'https://www.ariesskinandhealth.com/', img: '/images/website-previews/ariesskinandhealth.jpg' },
    ],
  },
  {
    category: 'Jungle Safari',
    sites: [
      { name: 'My Jungle Trip', url: 'https://myjungletrip.in/', img: '/images/website-previews/myjungletrip.jpg' },
    ],
  },
  {
    category: 'Hardware Technology',
    sites: [
      { name: 'Vantara Net', url: 'https://vantaranet.com/', img: '/images/website-previews/vantaranet.jpg' },
    ],
  },
  {
    category: 'Manufacturing CMS',
    sites: [
      { name: 'Alkalyne', url: 'http://alkalyne.in/', img: '/images/website-previews/alkalyne.jpg' },
    ],
  },
  {
    category: 'Import Export CMS',
    sites: [
      { name: 'Pyramid Agro Exports', url: 'https://www.pyramidagroexports.com', img: '/images/website-previews/pyramidagroexports.jpg' },
    ],
  },
  {
    category: 'Corporate Service Apartments',
    sites: [
      { name: 'Zenith Hospitality Services', url: 'https://zenithhospitalityservices.com/', img: '/images/website-previews/zenithhospitalityservices.jpg' },
    ],
  },
  {
    category: 'Ongoing Project',
    sites: [
      { name: 'Celeb Aesthetica', url: 'https://www.celebaesthecia.in/', img: '/images/website-previews/celebaesthecia.jpg' },
    ],
  },
];

function WebsiteModal({ site, onClose }: { site: { name: string; url: string } | null; onClose: () => void }) {
  useEffect(() => {
    const handler = (e: KeyboardEvent) => e.key === 'Escape' && onClose();
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [onClose]);

  if (!site) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[100] flex items-center justify-center p-4"
        style={{ background: 'rgba(0,0,0,0.85)', backdropFilter: 'blur(8px)' }}
        onClick={onClose}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.92, y: 24 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.92, y: 24 }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
          className="w-full max-w-5xl rounded-2xl overflow-hidden shadow-2xl"
          style={{ background: 'var(--surface-1)', border: '1px solid var(--border)' }}
          onClick={e => e.stopPropagation()}
        >
          {/* Modal header */}
          <div className="flex items-center justify-between px-5 py-3.5" style={{ borderBottom: '1px solid var(--border)' }}>
            <div className="flex items-center gap-2">
              <Monitor className="w-4 h-4 text-accent" />
              <span className="text-sm font-semibold" style={{ color: 'var(--fg)' }}>{site.name}</span>
              <span className="text-xs text-muted truncate max-w-[260px] hidden sm:block">{site.url}</span>
            </div>
            <div className="flex items-center gap-2">
              <a
                href={site.url}
                target="_blank"
                rel="noopener noreferrer"
                className="glow-button flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold"
                style={{ color: '#fff' }}
              >
                <ExternalLink className="w-3.5 h-3.5" />
                Open Site
              </a>
              <button
                onClick={onClose}
                className="p-1.5 rounded-lg transition-colors hover:bg-white/10"
                style={{ color: 'var(--muted-fg)' }}
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>
          {/* iframe preview */}
          <div className="relative w-full" style={{ height: '70vh' }}>
            <iframe
              src={site.url}
              title={site.name}
              className="w-full h-full border-0"
              sandbox="allow-scripts allow-same-origin allow-forms"
              loading="lazy"
            />
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

function WebsiteCard({ site, onClick }: { site: { name: string; url: string; img: string }; onClick: () => void }) {

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -4 }}
      transition={{ duration: 0.3 }}
      className="group rounded-2xl overflow-hidden cursor-pointer"
      style={{ border: '1px solid var(--border)', background: 'var(--card-bg)' }}
      onClick={onClick}
    >
      {/* Thumbnail */}
      <div className="relative overflow-hidden" style={{ aspectRatio: '16/9', background: 'var(--surface-2)' }}>
        <img
          src={site.img}
          alt={site.name}
          className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
        {/* hover overlay */}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300 flex items-center justify-center">
          <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-accent text-white text-xs font-bold px-3 py-1.5 rounded-full flex items-center gap-1.5">
            <Monitor className="w-3.5 h-3.5" /> Preview
          </span>
        </div>
      </div>
      {/* Card footer */}
      <div className="px-4 py-3 flex items-center justify-between">
        <span className="text-sm font-semibold truncate" style={{ color: 'var(--fg)' }}>{site.name}</span>
        <a
          href={site.url}
          target="_blank"
          rel="noopener noreferrer"
          onClick={e => e.stopPropagation()}
          className="shrink-0 ml-2 p-1.5 rounded-lg hover:bg-accent/10 text-muted hover:text-accent transition-colors"
          title="Open in new tab"
        >
          <ExternalLink className="w-3.5 h-3.5" />
        </a>
      </div>
    </motion.div>
  );
}

export default function ServiceClient({ serviceSlug }: { serviceSlug: string }) {
  const data = serviceDetails[serviceSlug] || defaultService;
  const [activePreview, setActivePreview] = useState<{ name: string; url: string } | null>(null);
  
  // Parallax effect for header
  const { scrollY } = useScroll();
  const yImage = useTransform(scrollY, [0, 500], [0, 150]);
  const opacityImage = useTransform(scrollY, [0, 300], [1, 0.4]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  const scaleVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.8, ease: "easeOut" } }
  };

  return (
    <div className="pt-32 pb-24 min-h-screen overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb / Back button */}
        <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
        >
            <Link href="/" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-accent transition-colors mb-12">
            <ArrowLeft className="w-4 h-4" />
            Back to Home
            </Link>
        </motion.div>

        {/* Hero Section */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-32 relative">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="z-10"
          >
            <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-[11px] font-bold tracking-widest uppercase mb-6 bg-accent/10 border border-accent/20 text-accent">
              Expert Service Area
            </motion.div>
            <motion.h1 variants={itemVariants} className="text-4xl md:text-5xl lg:text-6xl font-bold font-display text-slate-900 dark:text-white leading-tight mb-6">
              {data.title.split(' ').map((word, i, arr) => (
                  <React.Fragment key={i}>
                      {i === arr.length - 1 ? <span className="text-accent italic">{word}</span> : word + ' '}
                  </React.Fragment>
              ))}
            </motion.h1>
            <motion.p variants={itemVariants} className="text-xl font-medium text-slate-800 dark:text-slate-300 mb-4">
              {data.subtitle}
            </motion.p>
            <motion.p variants={itemVariants} className="text-lg text-slate-600 dark:text-slate-400 mb-10 leading-relaxed">
              {data.heroDesc}
            </motion.p>
            <motion.div variants={itemVariants}>
              <Link href="/contact" className="glow-button inline-flex px-8 py-4 rounded-full text-white font-bold text-lg hover:scale-105 transition-transform duration-300">
                Start Your Project
              </Link>
            </motion.div>
          </motion.div>
          
          <motion.div 
            variants={scaleVariants}
            initial="hidden"
            animate="visible"
            className="relative relative aspect-square md:aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl glass border border-white/10"
          >
            <motion.img 
              style={{ y: yImage, opacity: opacityImage }}
              src={`https://source.unsplash.com/800x600/?${encodeURIComponent(data.imageQuery)}`} 
              alt={data.title} 
              className="absolute inset-0 w-full h-[120%] object-cover -top-[10%]"
              onError={(e) => {
                e.currentTarget.src = "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800";
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/40 to-transparent dark:from-[#050505] dark:via-transparent light:from-white light:via-transparent"></div>
          </motion.div>
        </div>

        {/* Features Highlights */}
        <div className="mb-32">
            <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                className="text-center max-w-3xl mx-auto mb-16"
            >
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-6">Built for Excellence</h2>
                <p className="text-slate-600 dark:text-slate-400 text-lg">We engineer solutions that outpace the competition, utilizing industry best practices and cutting-edge methodologies.</p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
                {data.features.map((feature, i) => (
                    <motion.div 
                        key={i}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ delay: i * 0.1 }}
                        whileHover={{ y: -10 }}
                        className="bg-white dark:bg-white/5 p-8 rounded-3xl border border-slate-200 dark:border-white/10 shadow-lg hover:shadow-xl transition-all duration-300 relative overflow-hidden group"
                    >
                        <div className="absolute -right-4 -top-4 w-24 h-24 bg-accent/10 rounded-full blur-2xl group-hover:bg-accent/20 transition-all duration-300"></div>
                        <div className="w-14 h-14 bg-accent/10 text-accent rounded-2xl flex items-center justify-center mb-6 relative z-10">
                            <feature.icon className="w-7 h-7" />
                        </div>
                        <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3 relative z-10">{feature.title}</h3>
                        <p className="text-slate-600 dark:text-slate-400 leading-relaxed relative z-10">{feature.desc}</p>
                    </motion.div>
                ))}
            </div>
        </div>

        {/* Deep Dive Benefits Section */}
        <div className="relative rounded-[3rem] bg-slate-900 dark:bg-white/5 border border-slate-800 dark:border-white/10 px-8 py-20 lg:p-24 overflow-hidden mb-24">
            {/* Background elements */}
            <div className="absolute top-0 right-0 w-1/2 h-full bg-accent/5 blur-[100px] rounded-full pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 w-1/3 h-1/2 bg-blue-500/10 blur-[100px] rounded-full pointer-events-none"></div>

            <div className="relative z-10 grid lg:grid-cols-2 gap-16 items-center">
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Why Choose Our {data.title} Stack?</h2>
                    <p className="text-slate-300 text-lg mb-8 leading-relaxed">
                        Our approach goes far beyond standard implementation. We partner with you to understand your core objectives, engineering solutions that drive measurable business outcomes.
                    </p>
                    <Link href="/portfolio" className="inline-flex items-center gap-2 text-accent hover:text-white transition-colors font-bold group">
                        View our recent work
                        <ArrowLeft className="w-4 h-4 rotate-180 group-hover:translate-x-1 transition-transform" />
                    </Link>
                </motion.div>

                <div className="space-y-6">
                    {data.benefits.map((benefit, i) => (
                        <motion.div 
                            key={i} 
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.15 }}
                            className="bg-white/5 backdrop-blur-sm p-6 rounded-2xl border border-white/10 flex gap-4 items-start hover:bg-white/10 transition-colors"
                        >
                            <div className="mt-1 shrink-0">
                                <CheckCircle2 className="w-6 h-6 text-accent" />
                            </div>
                            <div>
                                <h3 className="text-lg font-bold text-white mb-2">{benefit.title}</h3>
                                <p className="text-slate-400">{benefit.desc}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>

        {/* Website Portfolio — only on /services/websites */}
        {serviceSlug === 'websites' && (
          <div className="mb-24">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center max-w-3xl mx-auto mb-14"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-[11px] font-bold tracking-widest uppercase mb-4 bg-accent/10 border border-accent/20 text-accent">
                Our Work
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">Websites We've Built</h2>
              <p className="text-slate-500 dark:text-slate-400">Click any card to preview the site, or open it directly in a new tab.</p>
            </motion.div>

            <div className="space-y-12">
              {websitePortfolio.map((group, gi) => (
                <div key={gi}>
                  <div className="flex items-center gap-3 mb-5">
                    <span className="text-xs font-bold uppercase tracking-widest text-accent">{group.category}</span>
                    <div className="flex-1 h-px" style={{ background: 'var(--border)' }} />
                  </div>
                  <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
                    {group.sites.map((site, si) => (
                      <WebsiteCard key={si} site={site} onClick={() => setActivePreview(site)} />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* CTA */}
        <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="text-center max-w-2xl mx-auto"
        >
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6">Ready to scale your business?</h2>
            <p className="text-slate-600 dark:text-slate-400 mb-8">Let's discuss how our {data.title} expertise can help you achieve your goals.</p>
            <Link href="/contact" className="glow-button inline-flex px-8 py-4 rounded-full text-white font-bold">
                Get Your Free Proposal
            </Link>
        </motion.div>

      </div>

      {/* Website preview modal */}
      {activePreview && <WebsiteModal site={activePreview} onClose={() => setActivePreview(null)} />}

    </div>
  );
}
