'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Palette, ArrowRight, HelpCircle, ChevronDown, CheckCircle2, Sparkles, Calendar, PenTool } from 'lucide-react';

const stats = [
  { value: '180+', label: 'Brand Packages Built' },
  { value: '15+', label: 'Diverse Markets Serviced' },
  { value: '100%', label: 'Bespoke Custom Designs' }
];

const features = [
  { title: 'Vector Logo Variants', description: 'Design scalability assets (wordmarks, brandmarks, favicon badges) exported in standard print-ready files.' },
  { title: 'Corporate Style Books', description: 'Comprehensive visual manuals defining margin calculations, font hierarchies, and palette values.' },
  { title: 'Social post templates', description: 'Custom Figma post templates mapped to your style colors, ready for weekly publishing.' },
  { title: 'Business Stationeries', description: 'Professional designs for letterheads, card templates, envelope shapes, and packaging items.' }
];

const processSteps = [
  { step: '01', title: 'Brand Discovery', description: 'Analyze your competition, study customer demographics, and set visual moods.' },
  { step: '02', title: 'Visual Iterations', description: 'Develop 3 distinct logo directions and layout color variants for review.' },
  { step: '03', title: 'Style Book Coding', description: 'Build typography scales, secondary graphic patterns, and grid systems.' },
  { step: '04', title: 'Asset Package Handoff', description: 'Package vector formats (SVG, EPS, PNG) in organized cloud directories.' }
];

const faqs = [
  { q: 'Who maintains visual asset copyrights after completion?', a: 'You do. Once all invoice milestones are cleared, we transfer all design assets, raw Figma files, vector curves, and copyrights to your firm.' },
  { q: 'Can we modify the styling books easily in the future?', a: 'Yes! We deliver comprehensive vector guides and raw Figma sheets, so any internal design team can adapt elements.' },
  { q: 'Do you design templates for physical printed packages?', a: 'Yes. We deliver print-ready layouts configured with appropriate CMYK channels, color parameters, and crop margin bounds.' }
];

const calculatorOptions = [
  {
    id: 'scope',
    label: 'Design Scope',
    type: 'select',
    choices: [
      { label: 'Essential Logo Design Set', price: 0 },
      { label: 'Standard Brand Guide & Color Sheet', price: 8000 },
      { label: 'Full Enterprise Identity & stationery', price: 20000 }
    ]
  },
  {
    id: 'social_figma',
    label: '10 Custom Instagram Figma Post Templates',
    type: 'checkbox',
    price: 5000
  },
  {
    id: 'stationery_files',
    label: 'Stationery Print Formats (Letterhead, Business Cards)',
    type: 'checkbox',
    price: 4000
  },
  {
    id: 'fast_revisions',
    label: 'Priority Turnaround & Uncapped Revision pack',
    type: 'checkbox',
    price: 5000
  }
];

export default function GraphicDesignPage() {
  const [calculatorState, setCalculatorState] = useState<Record<string, string | boolean>>({
    scope: 'Standard Brand Guide & Color Sheet',
    social_figma: false,
    stationery_files: false,
    fast_revisions: false
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
    let price = 8000; // Base Price
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
            <Palette className="w-4 h-4 text-accent animate-pulse" />
            <span className="text-xs font-semibold text-accent uppercase tracking-wider">Services / Graphic Design</span>
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-7xl font-bold tracking-tight mb-6 font-display"
          >
            Graphic & <span className="gradient-text">Brand Design</span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-base sm:text-lg text-muted max-w-2xl mx-auto leading-relaxed mb-10"
          >
            Vibrant brand visual identities, custom vector layouts, and corporate design sheets by DigiGrowNex Technologies.
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
              Estimate Package
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
          <p className="text-muted max-w-2xl mx-auto">Vector assets, style books, and custom social frameworks ready to build brand recognition.</p>
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
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 font-display">Our Design Process</h2>
          <p className="text-muted max-w-2xl mx-auto">How we discover your niche style, draft vectors, and compile final packages.</p>
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
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2 font-display">Interactive Design Estimator</h2>
            <p className="text-muted text-sm">Select options to estimate your brand identity pack cost.</p>
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
              Get Detailed Design Proposal
            </Link>
          </div>
        </div>
      </section>

      {/* FAQs Section */}
      <section className="py-24 relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8" style={{ borderTop: '1px solid var(--border)' }}>
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-white mb-4 font-display">Frequently Asked Questions</h2>
          <p className="text-muted text-sm">Common questions regarding ownership, vector assets, and revisions cycles.</p>
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
            Ready to design your identity?
          </h2>
          <p className="text-lg text-muted max-w-2xl mx-auto mb-10">
            Reach out to our creative director and let's craft a stunning visual guidelines kit for your brand.
          </p>
          <Link
            href="/contact-us"
            className="glow-button px-8 py-3.5 text-sm font-bold rounded-md inline-flex items-center gap-2 text-white"
            style={{ color: '#fff' }}
          >
            Start Brand Identity Pack
            <Calendar className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </main>
  );
}
