'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Cpu, ArrowRight, HelpCircle, ChevronDown, CheckCircle2, Sparkles, Calendar, Code, Settings } from 'lucide-react';

const stats = [
  { value: '50+', label: 'AI Workflows Deployed' },
  { value: '60%', label: 'Average Administrative Cost Saved' },
  { value: '99.2%', label: 'Trigger Execution Success Rate' }
];

const features = [
  { title: 'Custom LLM Integration', description: 'Connect cognitive bots powered by OpenAI GPT-4 and Google Gemini to automate communication and sorting.' },
  { title: 'Automated CRM Triggers', description: 'Instantly route leads, create invoices, and distribute customer logs when actions occur.' },
  { title: 'Database & API Syncing', description: 'Synchronize relational database tables (PostgreSQL/Redis) with internal billing nodes.' },
  { title: 'Task Pipeline Integrations', description: 'Sync platforms like Slack, Google Sheets, Gmail, and CRM panels to run automatically.' }
];

const processSteps = [
  { step: '01', title: 'Process Mapping', description: 'We identify manual operational bottlenecks and model data streams.' },
  { step: '02', title: 'API Sync Setup', description: 'Connect third-party webhooks, configure databases, and setup API tokens.' },
  { step: '03', title: 'LLM Fine-Tuning', description: 'Program custom prompt guidelines, fine-tune models, and test response parameters.' },
  { step: '04', title: 'Security Audit', description: 'Encrypt private tokens, audit server firewall logs, and launch workflows.' }
];

const faqs = [
  { q: 'Is our corporate data safe when integrating with AI models?', a: 'Yes. We configure dedicated API endpoints with strict data privacy settings. Input datasets are strictly encrypted and are never used to train public LLM models.' },
  { q: 'How long does a standard workflow deployment take?', a: 'Simple task triggers take 2 weeks, whereas custom multi-tenant CRM automation or deep LLM fine-tuning schedules require 4 to 6 weeks.' },
  { q: 'Can we edit the trigger actions ourselves later?', a: 'Yes! We build automated panels with clear documentation, allowing your team to adjust prompts and parameters easily.' }
];

const calculatorOptions = [
  {
    id: 'scale',
    label: 'Workflow Complexity',
    type: 'select',
    choices: [
      { label: 'Basic Trigger & Sync (2 platforms)', price: 0 },
      { label: 'Multi-Stage CRM Pipelines', price: 20000 },
      { label: 'Advanced LLM / Agent Fine-Tuning', price: 50000 }
    ]
  },
  {
    id: 'database',
    label: 'Custom Database & API Scaffolding',
    type: 'checkbox',
    price: 15000
  },
  {
    id: 'dashboard',
    label: 'Role-Based Settings Control Panel',
    type: 'checkbox',
    price: 15000
  },
  {
    id: 'support',
    label: 'Monthly Model Monitoring & Token Polish',
    type: 'checkbox',
    price: 5000
  }
];

export default function AIAutomationPage() {
  const [calculatorState, setCalculatorState] = useState<Record<string, string | boolean>>({
    scale: 'Multi-Stage CRM Pipelines',
    database: false,
    dashboard: false,
    support: false
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
    let price = 25000; // Base Price
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
            <Cpu className="w-4 h-4 text-accent animate-pulse" />
            <span className="text-xs font-semibold text-accent uppercase tracking-wider">Services / AI Automation</span>
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-7xl font-bold tracking-tight mb-6 font-display"
          >
            AI & <span className="gradient-text">Automation</span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-base sm:text-lg text-muted max-w-2xl mx-auto leading-relaxed mb-10"
          >
            Deploy smart cognitive agents, automate invoice billing, and build trigger workflows with DigiGrowNex Technologies.
          </motion.p>

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
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 font-display">Core Capabilities</h2>
          <p className="text-muted max-w-2xl mx-auto">Sync systems, schedule triggers, and integrate AI bots safely.</p>
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
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 font-display">Implementation Process</h2>
          <p className="text-muted max-w-2xl mx-auto">How we analyze your bottlenecks and script custom automations.</p>
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
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2 font-display">Interactive AI Estimator</h2>
            <p className="text-muted text-sm">Select options to calculate your custom automation workflow estimate.</p>
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
          <p className="text-muted text-sm">Common questions regarding cognitive triggers and database syncing.</p>
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

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden" style={{ borderTop: '1px solid var(--border)' }}>
        <div className="section-glow section-glow-top" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center animate-fade-in-up">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6 leading-tight font-display">
            Ready to automate your operations?
          </h2>
          <p className="text-lg text-muted max-w-2xl mx-auto mb-10">
            Reach out to our technical consulting team and let's craft a secure, scalable AI automation workflow for your business.
          </p>
          <Link
            href="/contact-us"
            className="glow-button px-8 py-3.5 text-sm font-bold rounded-md inline-flex items-center gap-2 text-white"
            style={{ color: '#fff' }}
          >
            Start Automation Build
            <Calendar className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </main>
  );
}
