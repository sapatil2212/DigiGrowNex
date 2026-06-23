'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquare, ArrowRight, HelpCircle, ChevronDown, CheckCircle2, Sparkles, Calendar, ShieldCheck, Settings } from 'lucide-react';

const stats = [
  { value: '100%', label: 'Official Meta Policy Compliance' },
  { value: '4.2x', label: 'Average Response Speed Improvement' },
  { value: '24/7', label: 'Automated Customer Support Uptime' }
];

const features = [
  { title: 'WhatsApp Business API Solutions', description: 'Access official API structures through Meta Cloud channels to secure verified business ticks.' },
  { title: 'Customer Engagement Automation', description: 'Design interactive welcome scripts, button choices, and FAQ routes for support.' },
  { title: 'Appointment Reminders & Notifications', description: 'Distribute structured alerts, schedules, and invoices automatically to opted-in users.' },
  { title: 'Lead Management Automation', description: 'Connect WhatsApp contact inquiries with CRM boards instantly for team follow-ups.' }
];

const processSteps = [
  { step: '01', title: 'Meta Config', description: 'We set up your Meta Business Manager and register your business number.' },
  { step: '02', title: 'Template Approvals', description: 'Draft and submit compliant message templates for Meta\'s direct review.' },
  { step: '03', title: 'Flow Integration', description: 'Code interactive chatbot menus, button responses, and database integrations.' },
  { step: '04', title: 'Live Deployment', description: 'Test template delivery metrics and connect customer support team panels.' }
];

const faqs = [
  { q: 'How does Meta Business verification work for WhatsApp APIs?', a: 'Meta requires valid company details (registration license, address utility bills) to approve numbers. We guide you through verification setup.' },
  { q: 'Can we send bulk marketing broadcasts using this API?', a: 'Our systems only support sending Meta-approved notification templates to users who have explicitly opted in to receive them. We strictly comply with Meta\'s anti-spam policies to protect your business number from being suspended.' },
  { q: 'All WhatsApp solutions are implemented in accordance with Meta and WhatsApp Business policies. Is that correct?', a: 'Yes. Every chatbot logic and alert template we deploy adheres to Meta\'s WhatsApp Business Policy, ensuring your brand builds a highly trustworthy connection with customers.' }
];

const calculatorOptions = [
  {
    id: 'setup',
    label: 'Setup Configuration',
    type: 'select',
    choices: [
      { label: 'Standard API Setup (Single Number)', price: 0 },
      { label: 'Multi-Agent Support Dashboard Routing', price: 15000 },
      { label: 'Custom CRM API Sync Integration', price: 30000 }
    ]
  },
  {
    id: 'templates',
    label: 'Custom Template Design & Submission (Pack of 5)',
    type: 'checkbox',
    price: 5000
  },
  {
    id: 'chatbot',
    label: 'Interactive Multi-Level Chatbot Flow Build',
    type: 'checkbox',
    price: 15000
  },
  {
    id: 'hosting',
    label: 'Server Deployment & Meta API Uptime Monitor',
    type: 'checkbox',
    price: 4000
  }
];

export default function WhatsAppBusinessAPIPage() {
  const [calculatorState, setCalculatorState] = useState<Record<string, string | boolean>>({
    setup: 'Standard API Setup (Single Number)',
    templates: false,
    chatbot: false,
    hosting: false
  });
  const [faqOpen, setFaqOpen] = useState<number | null>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

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
  }, []);

  const handleCalcChange = (id: string, value: string | boolean) => {
    setCalculatorState(prev => ({ ...prev, [id]: value }));
  };

  const calculateTotal = () => {
    let price = 20000; // Base Price
    calculatorOptions.forEach(opt => {
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
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full pointer-events-none" style={{ zIndex: 1 }} />

      {/* Hero Section */}
      <section className="relative z-10 pt-32 pb-16 lg:pt-40 lg:pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent/10 border border-accent/20 mb-6"
          >
            <MessageSquare className="w-4 h-4 text-accent animate-pulse" />
            <span className="text-xs font-semibold text-accent uppercase tracking-wider">Services / WhatsApp Business API</span>
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-7xl font-bold tracking-tight mb-6 font-display"
          >
            WhatsApp <span className="gradient-text">API Solutions</span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-base sm:text-lg text-muted max-w-2xl mx-auto leading-relaxed mb-6"
          >
            Official customer engagement channels, custom chatbots, and automated notification setups implemented in strict accordance with Meta and WhatsApp Business policies.
          </motion.p>

          <p className="text-xs text-accent-light font-bold mb-10 tracking-widest uppercase">
            ✓ 100% Verified Business Profile ready • No Spam Bulk Senders
          </p>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-row items-center justify-center gap-4"
          >
            <a
              href="#estimate-calculator"
              className="glow-button px-6 py-3 text-sm font-bold rounded-lg inline-flex items-center gap-2 text-white"
              style={{ color: '#fff' }}
            >
              Estimate Cost
              <ArrowRight className="w-4 h-4" />
            </a>
            <Link
              href="/contact-us"
              className="px-6 py-3 text-sm font-medium text-fg rounded-lg inline-flex items-center gap-2 transition-colors bg-surface-1 hover:bg-surface-2 border border-border"
            >
              Book Consultation
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Stats Summary */}
      <section className="py-12 relative z-10" style={{ borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            {stats.map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl font-bold gradient-text mb-2 font-display">{stat.value}</div>
                <div className="text-xs text-muted-foreground uppercase tracking-wider">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits / Features Grid */}
      <section className="py-24 relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 font-display">Compliant Communications</h2>
          <p className="text-muted max-w-2xl mx-auto">Discover how we keep your business contact status healthy on the Meta network.</p>
        </div>

        <div className="grid sm:grid-cols-2 gap-6">
          {features.map((feature, i) => (
            <div key={i} className="glass-card rounded-2xl p-6 border border-border/50 hover:border-accent/30 transition-all duration-300">
              <h3 className="text-lg font-bold text-white mb-2 font-display flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-accent shrink-0" />
                {feature.title}
              </h3>
              <p className="text-sm text-muted leading-relaxed pl-7">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" style={{ borderTop: '1px solid var(--border)' }}>
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 font-display">Approval & Setup Process</h2>
          <p className="text-muted max-w-2xl mx-auto">Our path to registering your verified phone number on the official API.</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {processSteps.map((step, i) => (
            <div key={i} className="glass-card rounded-2xl p-6 border border-border/50 relative overflow-hidden flex flex-col justify-between">
              <div>
                <div className="text-4xl font-extrabold text-accent/10 mb-4 font-display">{step.step}</div>
                <h3 className="text-base font-bold text-white mb-2 font-display">{step.title}</h3>
                <p className="text-xs sm:text-sm text-muted leading-relaxed">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Cost Estimator Calculator */}
      <section id="estimate-calculator" className="py-24 relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 scroll-mt-28" style={{ borderTop: '1px solid var(--border)' }}>
        <div className="glass-card rounded-3xl p-8 lg:p-10 border border-border/50">
          <div className="text-center mb-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2 font-display">Interactive API Estimator</h2>
            <p className="text-muted text-sm">Select options to calculate your WhatsApp setup contract estimate.</p>
          </div>

          <div className="space-y-6 mb-8">
            {calculatorOptions.map(opt => (
              <div key={opt.id} className="p-4 rounded-xl border border-border bg-surface-1/40">
                <label className="block text-xs font-semibold text-white/90 uppercase tracking-wider mb-3">
                  {opt.label}
                </label>
                {opt.type === 'select' && opt.choices ? (
                  <select
                    value={String(calculatorState[opt.id])}
                    onChange={(e) => handleCalcChange(opt.id, e.target.value)}
                    className="w-full px-4 py-2.5 rounded-lg border text-sm text-fg transition-all bg-surface-1 border-border appearance-none cursor-pointer"
                    style={{
                      backgroundImage: `url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3E%3Cpath stroke='%23a3a3a3' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3E%3C/svg%3E")`,
                      backgroundPosition: 'right 1rem center',
                      backgroundSize: '1.5em 1.5em',
                      backgroundRepeat: 'no-repeat',
                    }}
                  >
                    {opt.choices.map(c => (
                      <option key={c.label} value={c.label} className="bg-[#0a0a0a]">
                        {c.label} (+{c.price.toLocaleString('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 0 })})
                      </option>
                    ))}
                  </select>
                ) : (
                  <label className="flex items-center gap-3 cursor-pointer select-none">
                    <input
                      type="checkbox"
                      checked={Boolean(calculatorState[opt.id])}
                      onChange={(e) => handleCalcChange(opt.id, e.target.checked)}
                      className="w-4 h-4 rounded border-border text-accent focus:ring-accent bg-surface-1"
                    />
                    <span className="text-sm text-muted-foreground hover:text-white transition-colors">
                      Enable Option (+{opt.price?.toLocaleString('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 0 })})
                    </span>
                  </label>
                )}
              </div>
            ))}
          </div>

          <div className="p-6 rounded-2xl border border-accent/20 bg-accent/5 text-center">
            <p className="text-xs font-semibold text-accent uppercase tracking-widest mb-1">Estimated Cost</p>
            <div className="text-3xl sm:text-4xl font-extrabold text-white font-display mb-4">{formattedEstimate}</div>
            <Link
              href="/contact-us"
              className="glow-button px-6 py-2.5 text-xs font-bold rounded-lg text-white"
              style={{ color: '#fff' }}
            >
              Get Detailed Proposal
            </Link>
          </div>
        </div>
      </section>

      {/* FAQs Section */}
      <section className="py-24 relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8" style={{ borderTop: '1px solid var(--border)' }}>
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-white mb-4 font-display">Frequently Asked Questions</h2>
          <p className="text-muted text-sm">Common questions regarding templates, reviews, and anti-spam protocols.</p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = faqOpen === idx;
            return (
              <div key={idx} className="glass-card rounded-2xl border border-border/50 overflow-hidden">
                <button
                  onClick={() => setFaqOpen(isOpen ? null : idx)}
                  className="w-full flex items-center justify-between p-6 text-left hover:bg-white/5 transition-colors"
                >
                  <span className="text-base font-bold text-white pr-4 flex items-center gap-2">
                    <HelpCircle className="w-5 h-5 text-accent shrink-0" />
                    {faq.q}
                  </span>
                  <ChevronDown className={`w-4 h-4 text-muted-foreground shrink-0 transition-transform ${isOpen ? 'rotate-180 text-accent' : ''}`} />
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="p-6 pt-0 border-t border-border/30 text-sm sm:text-base text-muted-foreground leading-relaxed">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </section>

      {/* Legal statement bar */}
      <section className="py-8 bg-surface-1/50 border-t border-b border-border/50 text-center relative z-10">
        <p className="text-xs text-muted-foreground">
          * WhatsApp, Meta, and the Meta Logo are registered trademarks of Meta Platforms, Inc. All API deployment is mediated securely through approved channels.
        </p>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="section-glow section-glow-top" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center animate-fade-in-up">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6 leading-tight font-display">
            Start official WhatsApp customer support today
          </h2>
          <p className="text-lg text-muted max-w-2xl mx-auto mb-10">
            Establish a verified profile on the Meta Business suite and automate notification templates safely.
          </p>
          <Link
            href="/contact-us"
            className="glow-button px-8 py-3.5 text-sm font-bold rounded-md inline-flex items-center gap-2 text-white"
            style={{ color: '#fff' }}
          >
            Deploy WhatsApp API
            <Calendar className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </main>
  );
}
