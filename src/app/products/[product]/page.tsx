'use client';

import React, { useState, useEffect, useRef, use } from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Activity, Hotel, Layout, MessageSquare, Globe, Code, 
  Smartphone, ArrowRight, BarChart3, Users, Clock, 
  HelpCircle, Check, Star, Calendar, ChevronDown, CheckCircle2,
  Sparkles, CheckSquare, Layers, DollarSign, FileText, Play
} from 'lucide-react';

// Pricing Checkout URL
const CHECKOUT_URL = 'https://topmate.io/swapnil_patil53/2110999';

// Define Product Data Schema
interface ProductItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  icon: React.ComponentType<any>;
  stats: { value: string; label: string }[];
  tabTitle1: string;
  tabTitle2: string;
  features: { title: string; description: string }[];
  process: { step: string; title: string; description: string }[];
  faqs: { q: string; a: string }[];
  calculator: {
    title: string;
    subtitle: string;
    basePrice: number;
    options: {
      id: string;
      label: string;
      type: 'select' | 'checkbox' | 'radio';
      choices?: { label: string; price: number }[];
      price?: number;
    }[];
  };
}

// Product Database
const productDatabase: Record<string, ProductItem> = {
  'health-care': {
    id: 'health-care',
    title: 'MediNex+ Health Care Solution',
    subtitle: 'Complete White-Label Hospital & Clinic Management SaaS source code package.',
    description: 'Get the source code for our advanced Hospital Management System. Includes AI-powered automated prescription tools, calendar-synced doctor scheduling modules, EMR medical records files, ward allocations, invoice billing nodes, and full commercial reseller rights.',
    icon: Activity,
    stats: [
      { value: '50+', label: 'Medical Centers Live' },
      { value: '100K+', label: 'Patient Charts Stored' },
      { value: '99.9%', label: 'EMR Sync Success Rate' }
    ],
    tabTitle1: 'System Modules',
    tabTitle2: 'Core Architecture',
    features: [
      { title: 'AI Prescription Engine', description: 'Doctors input symptoms to generate custom drug dosage templates via AI models.' },
      { title: 'Smart Appointment Calendars', description: 'Prevent double bookings and let staff manage slots across departments in real-time.' },
      { title: 'Electronic Medical Records (EMR)', description: 'Secure storage of patient vitals, diagnosis history, drug logs, and test files.' },
      { title: 'Billing & TPA Insurance', description: 'Automate invoice printing, calculate doctor commissions, and manage TPA insurance reports.' }
    ],
    process: [
      { step: '01', title: 'Admin & Staff Portals', description: 'Configure distinct access credentials for Doctors, Receptionists, Pharmacists, and Nurses.' },
      { step: '02', title: 'PostgreSQL EMR Database', description: 'Scale patient records securely with relational relational data schemas.' },
      { step: '03', title: 'White-Label Branding', description: 'Omit our code headers and apply your agency logo to resell as a custom SaaS.' },
      { step: '04', title: 'Launch & Profit', description: 'Charge clinic retainers and keep 100% of SaaS subscription margins.' }
    ],
    faqs: [
      { q: 'Is this a one-time payment for the source code?', a: 'Yes! You pay once for the code package and you own the rights to host, modify, and sell subscriptions to clinics without paying us recurring royalties.' },
      { q: 'Can we white-label the software and put our agency logo?', a: 'Yes. The license allows you to fully customize colors, logos, names, and invoice footers to represent your own brand.' },
      { q: 'What hosting do I need to deploy MediNex+ HMS?', a: 'You can deploy it on standard Next.js servers like Vercel or VPS platforms (DigitalOcean/AWS) alongside a PostgreSQL database.' }
    ],
    calculator: {
      title: 'MediNex+ License Selector',
      subtitle: 'Customize HMS license rights and deployment options.',
      basePrice: 199, // INR
      options: [
        {
          id: 'license',
          label: 'Licensing Package',
          type: 'select',
          choices: [
            { label: 'Reseller License (Single Client)', price: 0 },
            { label: 'Enterprise Agency License (Unlimited Reselling)', price: 4800 }
          ]
        },
        {
          id: 'setup',
          label: 'VPS Installation & Deploy Assistance',
          type: 'checkbox',
          price: 2000
        },
        {
          id: 'ai_engine',
          label: 'Bespoke ChatGPT API Integration Tutorial',
          type: 'checkbox',
          price: 1000
        }
      ]
    }
  },
  'hotel-management': {
    id: 'hotel-management',
    title: 'HostFlow Hotel Management Solution',
    subtitle: 'White-label hotel booking engines, room management, and guest invoicing SaaS.',
    description: 'A complete SaaS property management system (PMS) code. Features visual room grids, real-time availability checks, multi-currency guest billing, housekeeping dispatch logs, and analytics for occupancy margins.',
    icon: Hotel,
    stats: [
      { value: '120+', label: 'Hotels Streamlined' },
      { value: '45%', label: 'Overbooking Reduction' },
      { value: '3.8x', label: 'Faster Guest Check-In' }
    ],
    tabTitle1: 'Property Modules',
    tabTitle2: 'Developer Workflows',
    features: [
      { title: 'Interactive Room Matrix', description: 'Color-coded visual matrix showing checkout alerts, occupied suites, and housekeeping schedules.' },
      { title: 'Booking Engine Integrations', description: 'Embed reservation widgets directly onto hotel websites to capture commission-free bookings.' },
      { title: 'Automated Guest Invoicing', description: 'Automatically compile room rates, restaurant bills, and laundry taxes into unified guest receipts.' },
      { title: 'Housekeeping Sync Node', description: 'Let cleaning crews update room status to "Cleaned" via mobile web panel to sync reception.' }
    ],
    process: [
      { step: '01', title: 'Setup Room Inventory', description: 'Configure rooms, pricing tiers, tax categories, and restaurant items.' },
      { step: '02', title: 'Secure Database Layer', description: 'Log reservations, dates, guest profiles, and invoices in a robust backend.' },
      { step: '03', title: 'Branding Configuration', description: 'Add hotel logo, custom SMTP mail nodes for booking emails, and billing rules.' },
      { step: '04', title: 'Resell & Retain', description: 'Sell as a local property manager SaaS to hotels for ₹15k to ₹40k/month.' }
    ],
    faqs: [
      { q: 'Does this system support OTA channel manager syncing?', a: 'The core codebase supports direct API hooks to push/pull room inventory. You can sync it with Channel Managers via webhooks.' },
      { q: 'Are visual templates customizable for hotel clients?', a: 'Yes. All layouts are fully open and built on standard React/Tailwind elements, making custom styling edits extremely straightforward.' },
      { q: 'Is there support for POS (Point of Sale) billing?', a: 'Yes. HostFlow HMS has built-in POS modules to add restaurant bills, spa charges, and extra laundry services directly to the guest\'s room bill.' }
    ],
    calculator: {
      title: 'HostFlow License Selector',
      subtitle: 'Build your target hotel package and deployment options.',
      basePrice: 299,
      options: [
        {
          id: 'license',
          label: 'Licensing Package',
          type: 'select',
          choices: [
            { label: 'Single Hotel Deployment License', price: 0 },
            { label: 'Developer/Reseller License (Capped 20 Hotels)', price: 4700 },
            { label: 'Enterprise Agency License (Unlimited Reselling)', price: 9700 }
          ]
        },
        {
          id: 'payment',
          label: 'Stripe & Razorpay Integration Guide',
          type: 'checkbox',
          price: 1500
        },
        {
          id: 'deploy',
          label: ' VPS Setup & Server Cluster Configuration',
          type: 'checkbox',
          price: 2000
        }
      ]
    }
  },
  'cms-system': {
    id: 'cms-system',
    title: 'GridCore Enterprise CMS System',
    subtitle: 'White-label headless content management system and static website generator.',
    description: 'Build fast websites with visual drag-and-drop editor code. GridCore is a developer-first CMS that lets you configure schemas, edit pages, manage media folders, and auto-deploy Next.js pages to cloud CDNs.',
    icon: Layout,
    stats: [
      { value: '80+', label: 'Corporate Sites Powered' },
      { value: '150ms', label: 'Average Page Load Speed' },
      { value: '100%', label: 'Secure Static Generation' }
    ],
    tabTitle1: 'System Modules',
    tabTitle2: 'Crawl Architecture',
    features: [
      { title: 'Visual Drag-and-Drop Editor', description: 'Create and order layout sections visually, auto-compiling components into static code.' },
      { title: 'Schema Schema Builder', description: 'Develop customizable schema structures (Articles, Products, Teams) with visual fields.' },
      { title: 'Bespoke Media Library Manager', description: 'Organize files, auto-compress images to WebP format, and sync to AWS S3 storage.' },
      { title: 'Multi-Site Workspace', description: 'Control multiple client sites from a single dashboard with unified admin controls.' }
    ],
    process: [
      { step: '01', title: 'Content Schema Model', description: 'Define the fields (text, rich-editor, image, relations) for your content models.' },
      { step: '02', title: 'Frontend Component Mapping', description: 'Match database fields to Next.js layouts for static page rendering.' },
      { step: '03', title: 'Auto-CDN Sync Deploy', description: 'Link hooks to trigger GitHub Actions deploying static builds to Vercel/Netlify.' },
      { step: '04', title: 'Agency Handoff', description: 'Resell to design agencies or clients as a modern headless CMS.' }
    ],
    faqs: [
      { q: 'How is GridCore CMS different from WordPress?', a: 'GridCore is a headless, static CMS. Unlike WordPress which compiles pages on every visitor click, GridCore pre-builds static HTML files. This yields 10x faster load speeds and eliminates server security risks.' },
      { q: 'Can we host the CMS database on our own servers?', a: 'Yes. You can self-host the Node/Postgres CMS database on any VPS or cloud server, maintaining 100% data privacy.' },
      { q: 'Is there a limit on the number of sites we can link?', a: 'With the Agency Reseller License, you can configure unlimited client sites under a single self-hosted dashboard.' }
    ],
    calculator: {
      title: 'GridCore License Selector',
      subtitle: 'Customize CMS capabilities and reseller packages.',
      basePrice: 149,
      options: [
        {
          id: 'license',
          label: 'Licensing Package',
          type: 'select',
          choices: [
            { label: 'Single Site Developer License', price: 0 },
            { label: 'Agency License (Manage Unlimited Sites)', price: 3850 }
          ]
        },
        {
          id: 'seo_tool',
          label: 'Auto Schema & Rich Snippets Generator Tool',
          type: 'checkbox',
          price: 1000
        },
        {
          id: 'cdn_sync',
          label: 'AWS S3 / Cloudflare Images Integration Setup',
          type: 'checkbox',
          price: 1500
        }
      ]
    }
  },
  'whatsapp-automation': {
    id: 'whatsapp-automation',
    title: 'OmniReach WhatsApp CRM System',
    subtitle: 'White-label WhatsApp Cloud API managers, broadcast bulk builders, and chatbots.',
    description: 'Get the code to deploy your own WhatsApp CRM platform. Features dynamic flow builders, unified multi-agent chat inboxes, automated notification routers, contacts scrapers, and broadcast nodes using the official Meta API.',
    icon: MessageSquare,
    stats: [
      { value: '10M+', label: 'Broadcasts Dispatched' },
      { value: '4.2x', label: 'Average CTR Campaign Boost' },
      { value: '85%', label: 'Support Operations Saved' }
    ],
    tabTitle1: 'System Modules',
    tabTitle2: 'Meta API Hooks',
    features: [
      { title: 'Unified Multi-Agent Inbox', description: 'Let multiple support team members respond to customer messages from a single WhatsApp Business number.' },
      { title: 'Smart Chat Flow Builder', description: 'Design visual decision trees (e.g. Press 1 for Sales, Press 2 for Support) to route chats.' },
      { title: 'Bulk Broadcast Scheduler', description: 'Broadcast message templates to thousands of targeted numbers with anti-blocking intervals.' },
      { title: 'Real-Time Webhooks Engine', description: 'Log messages and sync data with external CRMs instantly.' }
    ],
    process: [
      { step: '01', title: 'Link Cloud API Keys', description: 'Map Meta developer access codes to spin up the broadcast panels.' },
      { step: '02', title: 'Setup Flow Builder', description: 'Define the visual conversation maps and configure automatic replies.' },
      { step: '03', title: 'Integrate Webhook Logs', description: 'Sync database records to log conversation logs and metrics.' },
      { step: '04', title: 'Deploy & Resell', description: 'Package as a customer acquisition SaaS for e-commerce and local stores.' }
    ],
    faqs: [
      { q: 'Does this WhatsApp CRM use the official Meta Cloud API?', a: 'Yes. The software connects directly to the official Meta Cloud API, which is stable, secure, and approved by Meta.' },
      { q: 'Is there a risk of phone numbers getting blocked?', a: 'Because it uses the official API, number blocking is extremely rare, provided you use pre-approved templates and follow Meta guidelines.' },
      { q: 'Can we build custom chatbot logic using ChatGPT?', a: 'Yes! The codebase is structured with webhooks, allowing you to easily hook it up to OpenAI or Claude APIs.' }
    ],
    calculator: {
      title: 'OmniReach License Selector',
      subtitle: 'Customize WhatsApp CRM reselling options.',
      basePrice: 249,
      options: [
        {
          id: 'license',
          label: 'Licensing Package',
          type: 'select',
          choices: [
            { label: 'Standard Portal License (Single Brand)', price: 0 },
            { label: 'White-Label Agency License (Unlimited Reselling)', price: 4750 }
          ]
        },
        {
          id: 'chatbot',
          label: 'Advanced AI/ChatGPT Integration Code Module',
          type: 'checkbox',
          price: 2000
        },
        {
          id: 'flow_builder',
          label: 'Premium Visual Flow Builder SDK Integration',
          type: 'checkbox',
          price: 1500
        }
      ]
    }
  }
};

export default function DynamicProductPage({ params }: { params: Promise<{ product: string }> }) {
  // Resolve params Promise
  const resolvedParams = use(params);
  const productKey = resolvedParams.product;
  
  // Look up product data
  const product = productDatabase[productKey];
  
  if (!product) {
    return notFound();
  }

  const [activeTab, setActiveTab] = useState<'features' | 'architecture'>('features');
  const [calculatorState, setCalculatorState] = useState<Record<string, string | boolean>>({});
  const [faqOpen, setFaqOpen] = useState<number | null>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const ProductIcon = product.icon;

  // Sync calculator defaults
  useEffect(() => {
    const defaults: Record<string, string | boolean> = {};
    product.calculator.options.forEach(opt => {
      if (opt.type === 'select') {
        defaults[opt.id] = opt.choices ? opt.choices[0].label : '';
      } else if (opt.type === 'checkbox') {
        defaults[opt.id] = false;
      }
    });
    setCalculatorState(defaults);
    setFaqOpen(null);
    setActiveTab('features');
  }, [productKey]);

  // Particle background animation
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
        x: centerX + (Math.random() - 0.5) * 500,
        y: Math.random() * canvas.offsetHeight * 0.5,
        vx: (Math.random() - 0.5) * 0.4,
        vy: -Math.random() * 0.4 - 0.1,
        size: Math.random() * 1.8 + 0.6,
        opacity: 0,
        life: 0,
        maxLife: Math.random() * 200 + 100,
      };
    };

    for (let i = 0; i < 30; i++) {
      const p = createParticle();
      p.life = Math.random() * p.maxLife;
      particles.push(p);
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.offsetWidth, canvas.offsetHeight);

      if (particles.length < 40 && Math.random() < 0.08) {
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
        ctx.fillStyle = `rgba(52, 204, 50, ${p.opacity * 0.35})`;
        ctx.fill();

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size * 3.5, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(52, 204, 50, ${p.opacity * 0.06})`;
        ctx.fill();
      });

      animationId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', resize);
    };
  }, [productKey]);

  // Handle calculator option updates
  const handleCalcChange = (id: string, value: string | boolean) => {
    setCalculatorState(prev => ({ ...prev, [id]: value }));
  };

  // Calculate product estimate price
  const calculateTotal = () => {
    let price = product.calculator.basePrice;
    
    product.calculator.options.forEach(opt => {
      const stateVal = calculatorState[opt.id];
      if (opt.type === 'select' && opt.choices) {
        const choice = opt.choices.find(c => c.label === stateVal);
        if (choice) price += choice.price;
      } else if (opt.type === 'checkbox' && stateVal === true && opt.price) {
        price += opt.price;
      }
    });

    return price;
  };

  const formattedEstimate = new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0
  }).format(calculateTotal());

  return (
    <main className="min-h-screen relative overflow-hidden bg-[#0a0a0a] text-fg selection:bg-accent selection:text-white">
      {/* Background patterns */}
      <div className="hero-dots" />
      <div className="hero-glow" />
      <div className="hero-glow-secondary" />

      {/* Canvas animation background */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none"
        style={{ zIndex: 1 }}
      />

      {/* 1. Hero Section */}
      <section className="relative z-10 pt-32 pb-16 lg:pt-40 lg:pb-24 border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent/10 border border-accent/20 mb-6"
            >
              <ProductIcon className="w-4 h-4 text-accent animate-pulse" />
              <span className="text-xs font-semibold text-accent uppercase tracking-wider">Products / {product.title}</span>
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-7xl font-bold tracking-tight mb-6 font-display"
            >
              <span className="gradient-text">{product.title}</span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed mb-10"
            >
              {product.subtitle}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-row items-center justify-center gap-4"
            >
              <Link
                href={CHECKOUT_URL}
                className="glow-button px-6 py-3 text-sm font-bold rounded-lg inline-flex items-center gap-2 text-white hover:scale-105 transition-transform"
                style={{ color: '#fff' }}
              >
                Buy Source Code (₹{product.calculator.basePrice})
                <ArrowRight className="w-4 h-4" />
              </Link>
              <a
                href="#license-calculator"
                className="px-6 py-3 text-sm font-medium text-fg rounded-lg inline-flex items-center gap-2 transition-colors bg-surface-1 hover:bg-surface-2 border border-border"
              >
                Customize License
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 2. Stats Summary */}
      <section className="py-12 relative z-10 bg-surface-1/10" style={{ borderBottom: '1px solid var(--border)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            {product.stats.map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="text-center"
              >
                <div className="text-3xl sm:text-4xl lg:text-5xl font-bold text-accent mb-2 font-display">{stat.value}</div>
                <div className="text-xs sm:text-sm text-muted-foreground">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Dynamic Process / Modules tabs */}
      <section className="py-20 relative z-10">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="flex justify-center gap-4 mb-12">
            <button
              onClick={() => setActiveTab('features')}
              className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold border transition-all ${
                activeTab === 'features' 
                  ? 'bg-accent/10 border-accent text-accent' 
                  : 'bg-surface-1 border-border text-muted hover:text-white'
              }`}
            >
              {product.tabTitle1}
            </button>
            <button
              onClick={() => setActiveTab('architecture')}
              className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold border transition-all ${
                activeTab === 'architecture' 
                  ? 'bg-accent/10 border-accent text-accent' 
                  : 'bg-surface-1 border-border text-muted hover:text-white'
              }`}
            >
              {product.tabTitle2}
            </button>
          </div>

          <AnimatePresence mode="wait">
            {activeTab === 'features' ? (
              <motion.div
                key="features-tab"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="grid sm:grid-cols-2 gap-6"
              >
                {product.features.map((feat, idx) => (
                  <div key={idx} className="glass-card rounded-2xl p-6 border border-border/50 hover:border-accent/20 transition-all">
                    <div className="w-8 h-8 rounded-lg bg-accent/10 flex items-center justify-center text-accent mb-4">
                      <CheckSquare className="w-4 h-4" />
                    </div>
                    <h3 className="text-base font-bold text-white mb-2">{feat.title}</h3>
                    <p className="text-xs sm:text-sm text-muted leading-relaxed">{feat.description}</p>
                  </div>
                ))}
              </motion.div>
            ) : (
              <motion.div
                key="architecture-tab"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="space-y-6 max-w-3xl mx-auto"
              >
                {product.process.map((step, idx) => (
                  <div key={idx} className="glass-card rounded-2xl p-6 border border-border/50 hover:border-accent/20 transition-all flex gap-4 sm:gap-6 items-start">
                    <span className="text-2xl font-black text-accent/30 font-mono tracking-wider shrink-0 mt-0.5">{step.step}</span>
                    <div>
                      <h3 className="text-base sm:text-lg font-bold text-white mb-1.5">{step.title}</h3>
                      <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">{step.description}</p>
                    </div>
                  </div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      {/* 4. Interactive Calculator */}
      <section id="license-calculator" className="py-20 relative z-10 bg-surface-1/30" style={{ borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)' }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <span className="px-2.5 py-1 rounded bg-accent/10 border border-accent/20 text-[10px] font-bold text-accent uppercase tracking-widest inline-block mb-3">Licensing Details</span>
            <h2 className="text-2xl sm:text-4xl font-bold text-white font-display">{product.calculator.title}</h2>
            <p className="text-xs sm:text-sm text-muted-foreground mt-1.5">{product.calculator.subtitle}</p>
          </div>

          <div className="grid md:grid-cols-12 gap-8 items-stretch max-w-4xl mx-auto">
            {/* Calculator Options */}
            <div className="md:col-span-7 glass-card rounded-3xl p-6 sm:p-8 border border-border/50 flex flex-col justify-between space-y-6">
              <div className="space-y-5">
                {product.calculator.options.map((opt) => (
                  <div key={opt.id} className="space-y-2.5">
                    <label className="block text-[10px] font-bold text-white/95 uppercase tracking-wider">
                      {opt.label}
                    </label>

                    {opt.type === 'select' && opt.choices && (
                      <div className="relative">
                        <select
                          value={(calculatorState[opt.id] as string) || ''}
                          onChange={(e) => handleCalcChange(opt.id, e.target.value)}
                          className="w-full pl-4 pr-10 py-2.5 rounded-lg border text-xs sm:text-sm text-fg transition-all bg-surface-2 border-border cursor-pointer appearance-none"
                          style={{
                            backgroundImage: `url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3E%3Cpath stroke='%23a3a3a3' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3E%3C/svg%3E")`,
                            backgroundPosition: 'right 1rem center',
                            backgroundSize: '1.25em 1.25em',
                            backgroundRepeat: 'no-repeat',
                          }}
                        >
                          {opt.choices.map((c) => (
                            <option key={c.label} value={c.label} className="bg-[#0a0a0a]">
                              {c.label} (+ {c.price > 0 ? `₹${c.price.toLocaleString()}` : 'Included'})
                            </option>
                          ))}
                        </select>
                      </div>
                    )}

                    {opt.type === 'checkbox' && (
                      <label className="flex items-center gap-3 p-3 rounded-lg border border-border bg-surface-2/40 hover:bg-surface-2/70 cursor-pointer transition-all">
                        <input
                          type="checkbox"
                          checked={(calculatorState[opt.id] as boolean) || false}
                          onChange={(e) => handleCalcChange(opt.id, e.target.checked)}
                          className="w-4 h-4 rounded text-accent bg-[#0a0a0a] border-border focus:ring-0 cursor-pointer accent-accent"
                        />
                        <span className="text-xs text-muted-foreground select-none flex-1">
                          Add module/support addon (+ ₹{opt.price?.toLocaleString()})
                        </span>
                      </label>
                    )}
                  </div>
                ))}
              </div>

              <div className="p-3.5 rounded-xl border border-border bg-[#0a0a0a]/50 text-[11px] text-muted-foreground leading-normal flex gap-2.5 items-start">
                <FileText className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                <span>All software is delivered in full source code format. Licensing prevents redistribution under raw code repos, but allows you to resell self-hosted SaaS.</span>
              </div>
            </div>

            {/* Price Card */}
            <div className="md:col-span-5 glass-card rounded-3xl p-6 sm:p-8 border border-border/50 flex flex-col justify-between items-center text-center relative overflow-hidden bg-gradient-to-b from-accent/5 to-transparent">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-accent/10 to-transparent rounded-bl-full pointer-events-none" />
              
              <div className="space-y-4">
                <span className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center text-accent mx-auto mb-2 border border-accent/20">
                  <DollarSign className="w-5 h-5" />
                </span>
                <h3 className="text-lg font-bold text-white tracking-wide">License Valuation</h3>
                <p className="text-xs text-muted-foreground leading-relaxed px-4">Includes updates blueprint and commercial deploy license.</p>
              </div>

              <div className="my-6">
                <div className="text-3xl sm:text-4xl lg:text-5xl font-black text-white font-display tracking-tight leading-none text-accent">
                  {formattedEstimate}
                </div>
                <div className="text-[10px] text-slate-500 uppercase font-semibold mt-2 tracking-widest">Calculated Fee</div>
              </div>

              <Link
                href={CHECKOUT_URL}
                className="glow-button w-full px-5 py-3 text-xs sm:text-sm font-bold rounded-lg inline-flex items-center justify-center gap-2 text-white hover:scale-[1.01] transition-transform active:scale-95 shadow-lg shadow-accent/15"
                style={{ color: '#fff' }}
              >
                Checkout & Download
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 5. FAQs Section */}
      <section className="py-20 relative z-10">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-4xl font-bold text-white font-display">Product FAQs</h2>
            <p className="text-xs sm:text-sm text-muted-foreground mt-1.5">Got questions about purchasing raw source code? Learn more details below.</p>
          </div>

          <div className="space-y-3">
            {product.faqs.map((faq, idx) => {
              const isOpen = faqOpen === idx;
              return (
                <div
                  key={idx}
                  onClick={() => setFaqOpen(isOpen ? null : idx)}
                  className="glass-card rounded-xl border border-border/50 hover:border-accent/20 cursor-pointer overflow-hidden transition-all duration-200"
                >
                  <div className="p-5 flex justify-between items-center gap-4">
                    <h3 className="text-xs sm:text-sm font-bold text-white">{faq.q}</h3>
                    <div className="w-6 h-6 rounded-full bg-surface-2 border border-border flex items-center justify-center text-muted shrink-0">
                      <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${isOpen ? 'rotate-180 text-accent' : ''}`} />
                    </div>
                  </div>

                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-muted-foreground leading-relaxed border-t border-border/30">
                          {faq.a}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 6. Contact CTA */}
      <section className="py-20 relative z-10 bg-surface-1/10" style={{ borderTop: '1px solid var(--border)' }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center space-y-6">
          <h2 className="text-2xl sm:text-4xl font-bold text-white font-display">Need a Live Demo Walkthrough?</h2>
          <p className="text-xs sm:text-sm text-muted max-w-xl mx-auto leading-relaxed">
            Want to see a live hosted instance of the system or need a custom SLA setup before purchasing the source code files? Connect with our project leads to request credentials.
          </p>
          <div className="flex justify-center gap-4 pt-2">
            <Link
              href="/contact"
              className="glow-button px-6 py-3 text-xs sm:text-sm font-bold rounded-lg text-white"
              style={{ color: '#fff' }}
            >
              Contact Support
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
