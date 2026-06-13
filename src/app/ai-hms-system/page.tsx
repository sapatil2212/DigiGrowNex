'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence, useScroll, useInView } from 'framer-motion';
import { 
  Zap, MessageSquare, Bot, Users, BarChart3, Database, Sparkles, 
  Code, GraduationCap, DollarSign, ArrowRight, ShieldCheck, CheckCircle2, 
  ChevronDown, Check, Star, RefreshCw, X, Play, Video, Smartphone, 
  AlertCircle, HelpCircle, CheckSquare, Layers, Globe, Calendar, Send, ArrowUp,
  Search, Share2, Activity
} from 'lucide-react';

// Pricing Checkout URL for HMS System
const CHECKOUT_URL = 'https://topmate.io/swapnil_patil53/2110999';

// Counter component for animated numbers
function Counter({ value, suffix = '', duration = 2 }: { value: number; suffix?: string; duration?: number }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const end = value;
    const totalMiliseconds = duration * 1000;
    const incrementTime = Math.max(Math.floor(totalMiliseconds / end), 15);
    
    const timer = setInterval(() => {
      start += Math.ceil(end / (totalMiliseconds / incrementTime));
      if (start >= end) {
        clearInterval(timer);
        setCount(end);
      } else {
        setCount(start);
      }
    }, incrementTime);

    return () => clearInterval(timer);
  }, [value, inView, duration]);

  return <span ref={ref}>{count.toLocaleString()}{suffix}</span>;
}

export default function AIHMSSystemLanding() {
  const [activeTab, setActiveTab] = useState<'rx' | 'scheduler' | 'billing' | 'analytics'>('rx');
  const [faqOpen, setFaqOpen] = useState<number | null>(null);
  const [showExitIntent, setShowExitIntent] = useState(false);
  const [showStickyCta, setShowStickyCta] = useState(false);
  const [showGoToTop, setShowGoToTop] = useState(false);
  const [showPrivacyModal, setShowPrivacyModal] = useState(false);
  const [showRefundModal, setShowRefundModal] = useState(false);
  const [showPromoModal, setShowPromoModal] = useState(false);
  const [timeLeft, setTimeLeft] = useState({ minutes: 9, seconds: 59 });
  const { scrollY } = useScroll();
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const trackLead = () => {
    if (typeof window !== 'undefined' && (window as any).fbq) {
      (window as any).fbq('track', 'Lead');
    }
  };

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
        ctx.fillStyle = `rgba(14, 165, 233, ${p.opacity * 0.4})`;
        ctx.fill();

        // Soft glow around particle
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size * 3, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(14, 165, 233, ${p.opacity * 0.08})`;
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

  // Scroll handler for Sticky CTA & Go to Top
  useEffect(() => {
    return scrollY.onChange((latest) => {
      if (latest > 600) {
        setShowStickyCta(true);
      } else {
        setShowStickyCta(false);
      }

      if (latest > 400) {
        setShowGoToTop(true);
      } else {
        setShowGoToTop(false);
      }
    });
  }, [scrollY]);

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Countdown timer for urgency
  useEffect(() => {
    const timer = setInterval(() => {
      if (timeLeft.seconds > 0) {
        setTimeLeft((prev) => ({ ...prev, seconds: prev.seconds - 1 }));
      } else if (timeLeft.minutes > 0) {
        setTimeLeft((prev) => ({ minutes: prev.minutes - 1, seconds: 59 }));
      } else {
        setTimeLeft({ minutes: 9, seconds: 0 });
      }
    }, 1000);
    return () => clearInterval(timer);
  }, [timeLeft]);

  // Exit intent popup detection
  useEffect(() => {
    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY < 50) {
        const hasSeenPopup = sessionStorage.getItem('seen_hms_exit_popup');
        if (!hasSeenPopup) {
          setShowExitIntent(true);
          sessionStorage.setItem('seen_hms_exit_popup', 'true');
        }
      }
    };
    document.addEventListener('mouseleave', handleMouseLeave);
    return () => document.removeEventListener('mouseleave', handleMouseLeave);
  }, []);

  // Recurring promo modal popup every 30 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setShowPromoModal((prev) => {
        if (!prev && !showExitIntent && !showPrivacyModal && !showRefundModal) {
          return true;
        }
        return prev;
      });
    }, 30000);

    return () => clearInterval(interval);
  }, [showExitIntent, showPrivacyModal, showRefundModal]);

  return (
    <div className="ai-hms-landing bg-[#050816] text-[#f1f5f9] min-h-screen relative overflow-hidden font-sans antialiased selection:bg-sky-500 selection:text-white">
      
      {/* Embedded style block to override default global theme selectors */}
      <style dangerouslySetInnerHTML={{ __html: `
        .ai-hms-landing {
          --bg: #050816 !important;
          --fg: #f1f5f9 !important;
          --card-bg: rgba(15, 23, 42, 0.45) !important;
          --card-hover: rgba(15, 23, 42, 0.65) !important;
          --glass-bg: rgba(15, 23, 42, 0.55) !important;
          --glass-border: rgba(255, 255, 255, 0.05) !important;
          --border: rgba(255, 255, 255, 0.08) !important;
          --border-light: rgba(255, 255, 255, 0.15) !important;
          --muted: #94a3b8 !important;
          --muted-fg: #64748b !important;
          --accent: #0ea5e9 !important;
          --accent-light: #38bdf8 !important;
          --accent-dark: #0284c7 !important;
        }

        .ai-hms-landing .image-glow {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 500px;
          height: 500px;
          max-width: 150%;
          max-height: 150%;
          background: radial-gradient(
            circle,
            rgba(14, 165, 233, 0.25) 0%,
            rgba(14, 165, 233, 0.08) 45%,
            transparent 70%
          ) !important;
          filter: blur(80px) !important;
          pointer-events: none !important;
          z-index: 0 !important;
          mix-blend-mode: screen !important;
        }

        @media (min-width: 1024px) {
          .ai-hms-landing .hero-bg .hero-glow {
            left: 75% !important;
          }
          .ai-hms-landing .hero-bg .hero-glow-secondary {
            left: 75% !important;
          }
        }

        @media (max-width: 1023px) {
          .ai-hms-landing .hero-bg .hero-glow {
            top: 55% !important;
            left: 50% !important;
          }
          .ai-hms-landing .hero-bg .hero-glow-secondary {
            top: 55% !important;
            left: 50% !important;
          }
        }

        /* Use main website cyan/blue for text, background, border and gradient classes */
        .ai-hms-landing .text-emerald-400,
        .ai-hms-landing .text-emerald-300,
        .ai-hms-landing .text-emerald-500 {
          color: var(--accent) !important;
        }
        .ai-hms-landing .bg-emerald-500,
        .ai-hms-landing .bg-emerald-400 {
          background-color: var(--accent) !important;
        }
        .ai-hms-landing .bg-emerald-500\\/5 {
          background-color: rgba(14, 165, 233, 0.05) !important;
        }
        .ai-hms-landing .bg-emerald-500\\/10 {
          background-color: rgba(14, 165, 233, 0.1) !important;
        }
        .ai-hms-landing .bg-emerald-500\\/20 {
          background-color: rgba(14, 165, 233, 0.2) !important;
        }
        .ai-hms-landing .bg-emerald-500\\/25 {
          background-color: rgba(14, 165, 233, 0.25) !important;
        }
        .ai-hms-landing .border-emerald-500\\/20 {
          border-color: rgba(14, 165, 233, 0.2) !important;
        }
        .ai-hms-landing .border-emerald-500\\/40 {
          border-color: rgba(14, 165, 233, 0.4) !important;
        }
        .ai-hms-landing .border-emerald-500\\/25 {
          border-color: rgba(14, 165, 233, 0.25) !important;
        }
        .ai-hms-landing .shadow-emerald-500\\/20 {
          --tw-shadow-color: rgba(14, 165, 233, 0.2) !important;
        }
        .ai-hms-landing .shadow-emerald-500\\/25 {
          --tw-shadow-color: rgba(14, 165, 233, 0.25) !important;
        }
        .ai-hms-landing .selection\\:bg-emerald-500::selection {
          background-color: var(--accent) !important;
        }

        /* Override arbitrary hex brand gradients for gradients & glows to match modern clinic cyan */
        .ai-hms-landing .bg-gradient-to-r.from-\\[\\#25D366\\].via-emerald-400.to-\\[\\#128C7E\\] {
          background-image: linear-gradient(to right, var(--accent), var(--accent-light), var(--accent-dark)) !important;
        }
        .ai-hms-landing .from-\\[\\#25D366\\].via-emerald-400.to-\\[\\#128C7E\\] {
          background-image: linear-gradient(to right, var(--accent), var(--accent-light), var(--accent-dark)) !important;
        }
        .ai-hms-landing .bg-gradient-to-r.from-\\[\\#25D366\\].to-\\[\\#128C7E\\] {
          background-image: linear-gradient(to right, var(--accent), var(--accent-dark)) !important;
        }
        .ai-hms-landing .hover\\:from-\\[\\#25D366\\\]:hover {
          background-image: linear-gradient(to right, var(--accent), var(--accent-dark)) !important;
        }
        .ai-hms-landing .hover\\:from-\\[\\#20bd5a\\]:hover {
          background-image: linear-gradient(to right, var(--accent-light), var(--accent), var(--accent-dark)) !important;
        }
        .ai-hms-landing .bg-gradient-to-r.from-emerald-500\\/10 {
          background-image: linear-gradient(to right, rgba(14, 165, 233, 0.1), transparent) !important;
        }
        .ai-hms-landing .bg-gradient-to-br.from-emerald-500\\/10 {
          background-image: linear-gradient(to bottom right, rgba(14, 165, 233, 0.1), transparent) !important;
        }
        .ai-hms-landing .bg-gradient-to-bl.from-\\[\\#128C7E\\]\\/10 {
          background-image: linear-gradient(to bottom left, rgba(2, 132, 199, 0.1), transparent) !important;
        }
        .ai-hms-landing .bg-gradient-to-tr.from-\\[\\#25D366\\]\\/5.to-\\[\\#128C7E\\]\\/5 {
          background-image: linear-gradient(to top right, rgba(14, 165, 233, 0.05), rgba(2, 132, 199, 0.05)) !important;
        }
        .ai-hms-landing .bg-emerald-500\\/10.blur-\\[120px\\] {
          background-color: rgba(14, 165, 233, 0.1) !important;
        }
        .ai-hms-landing .from-emerald-500\\/10 {
          --tw-gradient-from: rgba(14, 165, 233, 0.1) !important;
          --tw-gradient-to: transparent !important;
          --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to) !important;
        }
        .ai-hms-landing .from-\\[\\#25D366\\]\\/5 {
          --tw-gradient-from: rgba(14, 165, 233, 0.05) !important;
        }
        .ai-hms-landing .to-\\[\\#128C7E\\]\\/5 {
          --tw-gradient-to: rgba(2, 132, 199, 0.05) !important;
        }
        .ai-hms-landing .from-\\[\\#128C7E\\]\\/10 {
          --tw-gradient-from: rgba(2, 132, 199, 0.1) !important;
        }

        .ai-hms-landing .text-white {
          color: #ffffff !important;
        }
        .ai-hms-landing .text-slate-100 {
          color: #f1f5f9 !important;
        }
        .ai-hms-landing .text-slate-200 {
          color: #e2e8f0 !important;
        }
        .ai-hms-landing .text-slate-300 {
          color: #cbd5e1 !important;
        }
        .ai-hms-landing .text-slate-400 {
          color: #94a3b8 !important;
        }
        .ai-hms-landing .text-slate-500 {
          color: #64748b !important;
        }

        .ai-hms-landing .glass-card {
          background: rgba(15, 23, 42, 0.45) !important;
          border: 1px solid rgba(255, 255, 255, 0.05) !important;
          box-shadow: 0 4px 30px rgba(0, 0, 0, 0.2) !important;
        }
        .ai-hms-landing .glass-card:hover {
          background: rgba(15, 23, 42, 0.65) !important;
          border-color: rgba(14, 165, 233, 0.2) !important;
          box-shadow: 0 0 30px rgba(14, 165, 233, 0.05) !important;
        }
        .ai-hms-landing .glass {
          background: rgba(15, 23, 42, 0.55) !important;
          border: 1px solid rgba(255, 255, 255, 0.05) !important;
          box-shadow: 0 4px 30px rgba(0, 0, 0, 0.2) !important;
        }

        .ai-hms-landing table {
          background-color: rgba(15, 23, 42, 0.3) !important;
        }
        .ai-hms-landing table thead {
          background-color: rgba(255, 255, 255, 0.03) !important;
        }
        .ai-hms-landing table tr {
          border-color: rgba(255, 255, 255, 0.05) !important;
        }
        .ai-hms-landing table td {
          border-color: rgba(255, 255, 255, 0.05) !important;
        }

        @keyframes shimmer-sweep {
          0% {
            transform: translateX(-150%) skewX(-20deg);
          }
          100% {
            transform: translateX(150%) skewX(-20deg);
          }
        }
        .shimmer-btn {
          position: relative !important;
          overflow: hidden !important;
        }
        .shimmer-btn::after {
          content: '' !important;
          position: absolute !important;
          top: 0 !important;
          left: 0 !important;
          width: 200% !important;
          height: 100% !important;
          background: linear-gradient(
            90deg,
            rgba(255, 255, 255, 0) 0%,
            rgba(255, 255, 255, 0.1) 30%,
            rgba(255, 255, 255, 0.3) 50%,
            rgba(255, 255, 255, 0.1) 70%,
            rgba(255, 255, 255, 0) 100%
          ) !important;
          animation: shimmer-sweep 3s infinite linear !important;
          pointer-events: none !important;
          z-index: 1 !important;
        }

        @keyframes heartbeat-glow {
          0%, 100% {
            transform: scale(1);
            box-shadow: 0 0 15px rgba(14, 165, 233, 0.4);
          }
          14% {
            transform: scale(1.03);
            box-shadow: 0 0 25px rgba(14, 165, 233, 0.7);
          }
          28% {
            transform: scale(1.01);
            box-shadow: 0 0 18px rgba(14, 165, 233, 0.5);
          }
          42% {
            transform: scale(1.05);
            box-shadow: 0 0 30px rgba(14, 165, 233, 0.8);
          }
          70% {
            transform: scale(1);
            box-shadow: 0 0 15px rgba(14, 165, 233, 0.4);
          }
        }
        @keyframes heartbeat-red-glow {
          0%, 100% {
            transform: scale(1);
            box-shadow: 0 0 15px rgba(220, 38, 38, 0.5);
          }
          14% {
            transform: scale(1.03);
            box-shadow: 0 0 25px rgba(220, 38, 38, 0.8);
          }
          28% {
            transform: scale(1.01);
            box-shadow: 0 0 18px rgba(220, 38, 38, 0.6);
          }
          42% {
            transform: scale(1.05);
            box-shadow: 0 0 30px rgba(220, 38, 38, 0.9);
          }
          70% {
            transform: scale(1);
            box-shadow: 0 0 15px rgba(220, 38, 38, 0.5);
          }
        }
        .heartbeat-btn {
          background: var(--accent) !important;
          background-image: none !important;
          color: #ffffff !important;
          transition: all 0.3s ease !important;
          animation: heartbeat-glow 2.5s infinite ease-in-out !important;
        }
        .heartbeat-btn:hover {
          background: var(--accent-light) !important;
          background-image: none !important;
          transform: translateY(-2px) scale(1.02) !important;
          box-shadow: 0 10px 20px rgba(14, 165, 233, 0.3) !important;
        }
        .heartbeat-red-btn {
          transition: all 0.3s ease !important;
          animation: heartbeat-red-glow 2.5s infinite ease-in-out !important;
        }
        .heartbeat-red-btn:hover {
          transform: translateY(-2px) scale(1.02) !important;
          box-shadow: 0 10px 20px rgba(220, 38, 38, 0.3) !important;
        }
        .ai-hms-landing .hover\\:bg-gradient-to-r:hover {
          background: var(--accent) !important;
          background-image: none !important;
          border-color: transparent !important;
        }

        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-marquee {
          display: flex !important;
          width: max-content !important;
          animation: marquee 50s linear infinite !important;
        }
        .animate-marquee:hover {
          animation-play-state: paused !important;
        }
        .mask-grad {
          mask-image: linear-gradient(to right, transparent, black 15%, black 85%, transparent) !important;
          -webkit-mask-image: linear-gradient(to right, transparent, black 15%, black 85%, transparent) !important;
        }
        html {
          scroll-behavior: smooth !important;
        }
      `}} />

      {/* Background Floating Blurred Gradients */}
      <div className="absolute top-1/3 right-1/4 w-[600px] h-[600px] bg-gradient-to-bl from-sky-500/10 to-transparent blur-[150px] rounded-full pointer-events-none z-0" />
      <div className="absolute bottom-1/4 left-1/3 w-[500px] h-[500px] bg-gradient-to-tr from-cyan-500/5 to-sky-500/5 blur-[120px] rounded-full pointer-events-none z-0" />

      {/* Scarcity / Announcement Banner */}
      <div className="bg-gradient-to-r from-sky-500 via-cyan-400 to-sky-600 text-white py-1.5 px-3 sm:py-2 sm:px-4 text-center text-[10px] sm:text-xs md:text-sm font-semibold relative z-50 flex flex-wrap items-center justify-center gap-1.5 sm:gap-4 shadow-lg">
        <span className="bg-black/20 px-2 py-0.5 rounded-full text-[9px] sm:text-[11px] uppercase tracking-wider font-extrabold animate-pulse text-white">Launch Promo Offer</span>
        <span>Limited HMS Reseller Licenses Left! Save 98% today.</span>
        <span className="font-mono bg-black/20 px-1.5 py-0.5 rounded text-white text-[9px] sm:text-xs flex items-center">
          {timeLeft.minutes.toString().padStart(2, '0')}:{timeLeft.seconds.toString().padStart(2, '0')}
        </span>
        <Link 
          href={CHECKOUT_URL}
          onClick={trackLead}
          className="shimmer-btn heartbeat-red-btn bg-red-600 hover:bg-red-500 text-white font-extrabold px-2 py-0.5 sm:px-3 sm:py-1 rounded text-[9px] sm:text-[11px] uppercase tracking-wider transition-all duration-300 hover:scale-105 active:scale-95 shadow-md shadow-red-600/30 whitespace-nowrap block"
        >
          Buy for ₹199
        </Link>
      </div>

      {/* ───────────── HERO SECTION WRAPPER ───────────── */}
      <div className="hero-bg relative pt-16 pb-12 sm:pt-20 sm:pb-20 overflow-hidden w-full border-b border-white/5">
        <div className="hero-dots" />
        <div className="hero-glow" style={{ background: 'radial-gradient(circle, rgba(14, 165, 233, 0.15) 0%, transparent 60%)' }} />
        <div className="hero-glow-secondary" style={{ background: 'radial-gradient(circle, rgba(6, 182, 212, 0.1) 0%, transparent 60%)' }} />

        {/* Canvas particles */}
        <canvas
          ref={canvasRef}
          className="absolute inset-0 w-full h-full pointer-events-none"
          style={{ zIndex: 1 }}
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <section id="hero" className="scroll-mt-24 grid lg:grid-cols-12 gap-8 lg:gap-16 items-center">
            
            {/* Hero Left Content */}
            <div className="lg:col-span-7 space-y-6 md:space-y-8 text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-sky-500/10 border border-sky-500/20 text-sky-400 text-xs font-semibold backdrop-blur-md">
                <span className="w-2 h-2 rounded-full bg-sky-400 animate-pulse" />
                <span>Complete White-Label HMS SaaS Source Code</span>
              </div>

              <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-[1.1] text-white">
                Launch Your Own <span className="bg-gradient-to-r from-sky-400 via-cyan-400 to-sky-600 bg-clip-text text-transparent">AI Powered HMS SaaS</span> Business in 24 Hours
              </h1>

              <p className="text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed">
                Get the complete White Label AI Powered Hospital & Clinic Management System (MediNex+) Source Code. Features AI prescriptions, smart doctor scheduling, EMR tracking, ward control, billing, and commercial reseller license rights. Pay once, host infinitely, keep 100% of SaaS subscription fees.
              </p>

              {/* CTAs */}
              <div className="flex flex-row items-center gap-2.5 sm:gap-4 justify-start">
                <Link 
                  href={CHECKOUT_URL}
                  onClick={trackLead}
                  className="shimmer-btn heartbeat-btn group px-4 py-3 sm:px-8 sm:py-4 bg-gradient-to-r from-sky-400 via-cyan-400 to-sky-600 hover:from-sky-500 hover:via-cyan-500 hover:to-sky-700 text-white font-extrabold rounded-xl sm:rounded-2xl flex items-center justify-center gap-1.5 sm:gap-3 shadow-xl shadow-sky-500/20 transition-all duration-300 hover:-translate-y-0.5 active:scale-95 text-center text-xs sm:text-base"
                >
                  Get Complete Source Code (₹199)
                  <ArrowRight className="w-3.5 h-3.5 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <a 
                  href="#demo-video"
                  className="shimmer-btn px-4 py-3 sm:px-8 sm:py-4 bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 hover:text-sky-400 text-white font-semibold rounded-xl sm:rounded-2xl flex items-center justify-center gap-1.5 sm:gap-2 transition-all duration-300 active:scale-95 text-center text-xs sm:text-base"
                >
                  <Play className="w-3 h-3 sm:w-4 sm:h-4 fill-current text-sky-400 animate-pulse" />
                  Watch Demo
                </a>
              </div>

              {/* Structured Trust Bar */}
              <div className="pt-6 border-t border-white/5 flex flex-wrap items-center gap-x-8 gap-y-3 text-xs md:text-sm text-slate-400">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-sky-400" />
                  <span>One-Time Payment (No Subscriptions)</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-sky-400" />
                  <span>Full Commercial Resell License</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-sky-400" />
                  <span>Keep 100% SaaS Billing Profits</span>
                </div>
              </div>
            </div>

            {/* Hero Right Content */}
            <div className="lg:col-span-5 flex items-center justify-center relative">
              <div className="image-glow" style={{ background: 'radial-gradient(circle, rgba(14, 165, 233, 0.2) 0%, transparent 70%)' }} />
              <motion.div 
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, cubicBezier: [0.16, 1, 0.3, 1] }}
                className="w-full relative z-10"
              >
                <img 
                  src="/navbox.png" 
                  alt="AI HMS SaaS Dashboard Mockup" 
                  className="w-full h-auto max-w-full block mx-auto object-contain"
                />
              </motion.div>
            </div>
          </section>
        </div>
      </div>

      {/* Main Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* ───────────── REVENUE OPPORTUNITY SECTION ───────────── */}
        <section className="py-16">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl md:text-5xl font-extrabold text-white">
              Turn This Into A <span className="bg-gradient-to-r from-sky-400 via-cyan-400 to-sky-600 bg-clip-text text-transparent">₹1,00,000+</span> Per Month SaaS Agency
            </h2>
            <p className="text-slate-300 max-w-lg mx-auto text-sm md:text-base">
              Because you own the white-label source code, you do not pay licensing markups. Charge clinics and hospitals whatever subscription fees you want.
            </p>
          </div>

          <div className="max-w-5xl mx-auto space-y-8">
            <div className="grid md:grid-cols-3 gap-6 text-left">
              <div className="bg-slate-900/40 border border-sky-500/20 rounded-2xl p-6 hover:border-sky-500/40 hover:bg-slate-900/60 transition-all duration-300 flex flex-col justify-between shadow-xl">
                <div>
                  <span className="text-[10px] uppercase font-bold text-sky-400 tracking-wider">Revenue Model #1</span>
                  <h4 className="text-lg font-bold text-white mt-1">Upfront Custom Setup</h4>
                  <p className="text-slate-300 text-xs mt-2 leading-relaxed">Charge hospitals and multi-branch medical centers a setup fee to map doctors database, wards, and staff departments.</p>
                </div>
                <div className="text-2xl font-extrabold text-sky-400 mt-6 pt-4 border-t border-white/5">
                  ₹50K – ₹2.5 Lakhs <span className="text-xs text-slate-400 font-normal">Per Setup</span>
                </div>
              </div>

              <div className="bg-slate-900/40 border border-sky-500/20 rounded-2xl p-6 hover:border-sky-500/40 hover:bg-slate-900/60 transition-all duration-300 flex flex-col justify-between shadow-xl">
                <div>
                  <span className="text-[10px] uppercase font-bold text-sky-400 tracking-wider">Revenue Model #2</span>
                  <h4 className="text-lg font-bold text-white mt-1">Monthly SaaS Retainers</h4>
                  <p className="text-slate-300 text-xs mt-2 leading-relaxed">Package it as a cloud-based software subscription. Provide hospital portals, secure EMR records, and support.</p>
                </div>
                <div className="text-2xl font-extrabold text-sky-400 mt-6 pt-4 border-t border-white/5">
                  ₹15K – ₹50K <span className="text-xs text-slate-400 font-normal">Per Month / Hospital</span>
                </div>
              </div>

              <div className="bg-slate-900/40 border border-sky-500/20 rounded-2xl p-6 hover:border-sky-500/40 hover:bg-slate-900/60 transition-all duration-300 flex flex-col justify-between shadow-xl">
                <div>
                  <span className="text-[10px] uppercase font-bold text-sky-400 tracking-wider">Revenue Model #3</span>
                  <h4 className="text-lg font-bold text-white mt-1">Direct Code Licensing</h4>
                  <p className="text-slate-300 text-xs mt-2 leading-relaxed">Sell the complete source code directly to enterprise IT developers or companies looking to self-host their clinical systems.</p>
                </div>
                <div className="text-2xl font-extrabold text-sky-400 mt-6 pt-4 border-t border-white/5">
                  ₹99K+ <span className="text-xs text-slate-400 font-normal">Per Code Sale</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ───────────── DEMO VIDEO SECTION ───────────── */}
        <section id="demo-video" className="py-16 scroll-mt-24 max-w-5xl mx-auto text-center">
          <div className="space-y-4 mb-10">
            <h2 className="text-3xl md:text-4xl font-extrabold text-white">
              See the AI Hospital Management System in Action
            </h2>
            <p className="text-slate-300 max-w-lg mx-auto text-sm md:text-base">
              Watch how our White Label software manages doctors, books appointments, creates invoices, and uses AI for smart prescriptions.
            </p>
          </div>

          <div className="grid md:grid-cols-12 gap-6 items-stretch">
            {/* Standard YouTube Video Player */}
            <div className="md:col-span-8 glass border border-white/10 rounded-2xl p-2.5 shadow-2xl bg-slate-950/80 backdrop-blur-xl flex flex-col justify-center">
              <div className="aspect-video w-full rounded-xl overflow-hidden bg-slate-900 relative">
                <iframe
                  src="https://www.youtube.com/embed/JrSFmhWQ_40?si=e5kJy3RL_w6lHcsT"
                  title="YouTube video player"
                  className="absolute inset-0 w-full h-full border-none"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                />
              </div>
            </div>

            {/* YouTube Shorts Vertical Player */}
            <div className="md:col-span-4 glass border border-white/10 rounded-2xl p-2.5 shadow-2xl bg-slate-950/80 backdrop-blur-xl flex flex-col justify-center items-center">
              <div className="aspect-[9/16] w-full max-w-[200px] rounded-xl overflow-hidden bg-slate-900 relative border border-white/5 shadow-inner">
                <iframe
                  src="https://www.youtube.com/embed/iq2hXfhQOf0?si=QbSdtnY7dRw92_9A"
                  title="YouTube Shorts Mobile player"
                  className="absolute inset-0 w-full h-full border-none"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                />
              </div>
            </div>
          </div>
        </section>

        {/* ───────────── BONUS SECTION ───────────── */}
        <section id="bonuses" className="py-16 relative z-10 scroll-mt-24 max-w-5xl mx-auto">
          <div className="bg-gradient-to-b from-slate-900/60 via-slate-950/80 to-slate-900/60 border border-sky-500/20 rounded-3xl p-8 md:p-12 shadow-[0_0_50px_rgba(14,165,233,0.05)] relative overflow-hidden text-center">
            
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] bg-sky-500/5 blur-[100px] rounded-full pointer-events-none" />

            <div className="space-y-4 mb-12 relative z-10">
              <span className="bg-sky-500/10 border border-sky-500/20 text-sky-400 text-xs px-3.5 py-1.5 rounded-full font-bold uppercase tracking-wider">
                Premium Reseller Bonuses
              </span>
              <h2 className="text-3xl md:text-5xl font-extrabold text-white">
                Get Over <span className="bg-gradient-to-r from-sky-400 via-cyan-400 to-sky-600 bg-clip-text text-transparent">₹54,999 Value</span> Included Free
              </h2>
              <p className="text-slate-300 max-w-xl mx-auto text-xs md:text-sm leading-relaxed">
                Launch and configure this software successfully with our curated support assets, guides, and tools inside your dashboard package.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 relative z-10">
              {[
                { num: 'Bonus #1', title: 'HMS Hosting Deploy Guide', desc: 'Deploy Next.js & PostgreSQL on VPS server.', value: '₹9,999' },
                { num: 'Bonus #2', title: 'Clinic Lead Finder Blueprint', desc: 'How to acquire doctors & hospital clients.', value: '₹14,999' },
                { num: 'Bonus #3', title: 'SaaS Outreach Templates', desc: 'Convert clinical managers & doctors via email.', value: '₹4,999' },
                { num: 'Bonus #4', title: 'SaaS Pitch Decks', desc: 'Close hospital custom deals with templates.', value: '₹9,999' },
                { num: 'Bonus #5', title: 'Healthcare CRM Training', desc: 'Manage invoices and clinical records easily.', value: '₹10,000' },
                { num: 'Bonus #6', title: 'Doctor Directory Extractor', desc: 'Automate scraper to extract doctor lists.', value: '₹4,999' }
              ].map((bonus, i) => (
                <motion.div 
                  key={i} 
                  whileHover={{ y: -5, borderColor: 'rgba(14,165,233,0.3)', boxShadow: '0 10px 30px rgba(14,165,233,0.05)' }}
                  className="bg-slate-950/60 border border-white/5 p-6 rounded-2xl flex flex-col justify-between text-left transition-all duration-300"
                >
                  <div className="space-y-3">
                    <span className="bg-sky-500/10 border border-sky-500/25 px-2.5 py-0.5 rounded text-[10px] text-sky-400 font-extrabold uppercase tracking-widest inline-block">
                      {bonus.num}
                    </span>
                    <h3 className="text-base font-bold text-white tracking-tight">{bonus.title}</h3>
                    <p className="text-xs text-slate-300 leading-relaxed">{bonus.desc}</p>
                  </div>
                  <div className="mt-6 pt-4 border-t border-white/5 flex justify-between items-center">
                    <div className="flex flex-col">
                      <span className="text-[10px] text-slate-500 font-medium uppercase">Value</span>
                      <span className="text-xs text-slate-400 line-through font-mono font-semibold">{bonus.value}</span>
                    </div>
                    <span className="bg-sky-500/20 text-sky-400 font-black uppercase text-[10px] px-2.5 py-1 rounded">
                      Free
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ───────────── PROBLEM SECTION ───────────── */}
        <section className="py-16 text-center">
          <div className="space-y-4 mb-12">
            <h2 className="text-3xl md:text-5xl font-extrabold text-white">
              Hospitals Lose Revenue & Time Every Day
            </h2>
            <p className="text-slate-300 max-w-lg mx-auto">
              Clinics and medical centers struggle with outdated billing tools and slow appointment flows.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: 'Disorganized Appointments',
                desc: 'Over 45% of clinics experience schedule overlapping or double-bookings, creating long wait times for patients.',
                color: 'from-sky-500/10 to-transparent border-sky-500/20'
              },
              {
                title: 'Lost Clinical Paperwork',
                desc: 'Paper-based EMR logs are easily lost or misfiled. Accessing patient histories takes crucial minutes.',
                color: 'from-sky-500/10 to-transparent border-sky-500/20'
              },
              {
                title: 'Complex Billing & Claims',
                desc: 'Calculating consult costs, lab test rates, and ward fees manually causes invoicing errors and audit delays.',
                color: 'from-sky-500/10 to-transparent border-sky-500/20'
              },
              {
                title: 'Poor Staff Scheduling',
                desc: 'Managing duty rosters for nurses, doctors, and pharmacists manually results in critical shift shortages.',
                color: 'from-sky-500/10 to-transparent border-sky-500/20'
              },
              {
                title: 'Leaking Lab Coordinates',
                desc: 'Diagnostic data gets scattered between lab logs and consulting records, losing patient diagnostics flow.',
                color: 'from-sky-500/10 to-transparent border-sky-500/20'
              },
              {
                title: 'Patient Communication Gap',
                desc: 'Without automation, clinics fail to send prescription notes, check-up alerts, or billing files to patients.',
                color: 'from-sky-500/10 to-transparent border-sky-500/20'
              }
            ].map((problem, i) => (
              <motion.div 
                key={i}
                whileHover={{ scale: 1.03, borderColor: 'rgba(14, 165, 233, 0.4)' }}
                className={`glass-card p-8 rounded-2xl text-left border border-white/5 flex flex-col justify-between hover:shadow-[0_0_30px_rgba(14,165,233,0.05)] bg-gradient-to-br ${problem.color}`}
              >
                <div>
                  <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-sky-400 font-extrabold text-sm mb-6">
                    !
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{problem.title}</h3>
                  <p className="text-sm text-slate-300 leading-relaxed">{problem.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* ───────────── SOLUTION SECTION ───────────── */}
        <section id="features" className="scroll-mt-24 py-16">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl md:text-5xl font-extrabold text-white">
              Everything Needed to Run a Smart Hospital SaaS
            </h2>
            <p className="text-slate-300 max-w-lg mx-auto">
              Our pre-built codebase handles the entire patient care lifecycle, billing, and clinics databases.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-6">
            {[
              {
                icon: <Bot className="w-4 h-4 sm:w-6 sm:h-6 text-sky-400" />,
                title: 'AI Prescription Assistant',
                desc: 'Generates automated medication ideas and health checklists based on patient symptoms.'
              },
              {
                icon: <Users className="w-4 h-4 sm:w-6 sm:h-6 text-sky-400" />,
                title: 'Patient Directory EMR',
                desc: 'Logs patient history records, demographic files, diagnoses charts, and treatment lists.'
              },
              {
                icon: <Layers className="w-4 h-4 sm:w-6 sm:h-6 text-sky-400" />,
                title: 'Multi-Tenant SaaS Routing',
                desc: 'Host multiple clinics or hospitals under independent databases, logs, and billing codes.'
              },
              {
                icon: <Calendar className="w-4 h-4 sm:w-6 sm:h-6 text-sky-400" />,
                title: 'Smart Doctor Scheduler',
                desc: 'Interactive schedule grid syncs doctor slots and patients appointment booking calendars.'
              },
              {
                icon: <Send className="w-4 h-4 sm:w-6 sm:h-6 text-sky-400" />,
                title: 'Invoicing & Billing Engine',
                desc: 'Creates itemized invoices for treatments, wards, lab diagnostics, and medicines.'
              },
              {
                icon: <RefreshCw className="w-4 h-4 sm:w-6 sm:h-6 text-sky-400" />,
                title: 'Duty Roster Organizer',
                desc: 'Sets shifts for receptionists, nurses, pharmacists, and medical lab technicians.'
              },
              {
                icon: <Database className="w-4 h-4 sm:w-6 sm:h-6 text-sky-400" />,
                title: 'Lab & Pharmacy Flow',
                desc: 'Track diagnostic logs, clinical sample reports, and pharmaceutical drug inventories.'
              },
              {
                icon: <Sparkles className="w-4 h-4 sm:w-6 sm:h-6 text-sky-400" />,
                title: 'OpenAI Integration',
                desc: 'Powers the clinical transcription parsing and medication drug interactions logic.'
              },
              {
                icon: <Zap className="w-4 h-4 sm:w-6 sm:h-6 text-sky-400" />,
                title: 'Gemini Integration',
                desc: 'Provides fallback low-cost AI analysis for large-scale medical records data processing.'
              },
              {
                icon: <BarChart3 className="w-4 h-4 sm:w-6 sm:h-6 text-sky-400" />,
                title: 'Advanced Admin KPI Panel',
                desc: 'Track operational revenue, occupied ward beds, active patients, and monthly bill reports.'
              },
              {
                icon: <Globe className="w-4 h-4 sm:w-6 sm:h-6 text-sky-400" />,
                title: 'White Label Panel Config',
                desc: 'Customize colors, login logos, business names, and database schemas with ease.'
              },
              {
                icon: <ShieldCheck className="w-4 h-4 sm:w-6 sm:h-6 text-sky-400" />,
                title: 'Role-Based Authentication',
                desc: 'Secure logins for Doctors, Pharmacists, Receptionists, and Patients with custom roles.'
              }
            ].map((feature, i) => (
              <motion.div 
                key={i}
                whileHover={{ y: -5, borderColor: 'rgba(14,165,233,0.3)', boxShadow: '0 10px 30px rgba(14,165,233,0.05)' }}
                className="glass-card p-3 sm:p-5 lg:p-6 rounded-xl sm:rounded-2xl border border-white/5 bg-slate-950/40 text-left transition-all duration-300 flex flex-col h-full justify-between w-full"
              >
                <div className="space-y-2 sm:space-y-4">
                  <div className="w-8 h-8 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl bg-sky-500/10 flex items-center justify-center">
                    {feature.icon}
                  </div>
                  <h3 className="text-xs sm:text-base md:text-lg font-bold text-white leading-tight">{feature.title}</h3>
                  <p className="text-[10px] sm:text-xs md:text-sm text-slate-300 leading-relaxed">{feature.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* ───────────── SOCIAL PROOF SECTION ───────────── */}
        <section className="py-16 border-t border-b border-white/5 my-12 bg-white/[0.01]">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: 120000, suffix: '+', label: 'Patient Invoices Tracked' },
              { value: 45000, suffix: '+', label: 'Prescriptions Processed' },
              { value: 120, suffix: '+', label: 'Clinics Self-Hosted' },
              { value: 24, suffix: '/7', label: 'AI Diagnostic Parsing' },
            ].map((stat, i) => (
              <div key={i} className="space-y-2">
                <h3 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight">
                  <Counter value={stat.value} suffix={stat.suffix} />
                </h3>
                <p className="text-xs md:text-sm text-slate-300 font-medium tracking-wide uppercase">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* ───────────── INTERACTIVE PRODUCT SHOWCASE ───────────── */}
        <section className="py-16 bg-gradient-to-b from-transparent via-sky-500/[0.02] to-transparent">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl md:text-5xl font-extrabold text-white">
              Explore the HMS SaaS Dashboard
            </h2>
            <p className="text-slate-300 max-w-lg mx-auto">
              Toggle between the tabs to preview different panels of the pre-built Hospital Management System included in the source code.
            </p>
          </div>

          {/* Interactive Showcase Tabs navigation */}
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {[
              { id: 'rx', label: 'AI Prescriptions', icon: <Bot className="w-4 h-4 text-current" /> },
              { id: 'scheduler', label: 'Doctor Schedule', icon: <Calendar className="w-4 h-4 text-current" /> },
              { id: 'billing', label: 'Invoices & Billing', icon: <Send className="w-4 h-4 text-current" /> },
              { id: 'analytics', label: 'Clinic KPI Analytics', icon: <BarChart3 className="w-4 h-4 text-current" /> }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`px-5 py-3 rounded-xl flex items-center gap-2.5 text-sm font-semibold transition-all duration-300 ${
                  activeTab === tab.id 
                    ? 'bg-gradient-to-r from-sky-400 via-cyan-400 to-sky-600 text-white shadow-lg shadow-sky-500/20' 
                    : 'bg-white/5 border border-white/5 hover:bg-white/10 text-slate-300'
                }`}
              >
                {tab.icon}
                <span>{tab.label}</span>
              </button>
            ))}
          </div>

          {/* Tab Content Display Panels */}
          <div className="glass border border-white/10 rounded-2xl p-4 md:p-6 shadow-2xl bg-slate-950/80 backdrop-blur-xl relative overflow-hidden max-w-5xl mx-auto min-h-[450px] flex flex-col">
            
            <div className="flex items-center justify-between pb-4 border-b border-white/5 mb-4">
              <div className="flex items-center gap-4">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-500/70" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/70" />
                  <div className="w-3 h-3 rounded-full bg-green-500/70" />
                </div>
                <span className="text-xs text-slate-400 font-mono">MediNex+ Portal / {activeTab}</span>
              </div>
              <span className="text-xs text-sky-400 font-semibold flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-sky-500 animate-ping" />
                Live Demo Panel
              </span>
            </div>

            <AnimatePresence mode="wait">
              {/* AI PRESCRIPTIONS TAB */}
              {activeTab === 'rx' && (
                <motion.div
                  key="rx"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                  className="grid md:grid-cols-12 gap-4 flex-1 items-stretch text-left"
                >
                  <div className="md:col-span-4 bg-white/5 rounded-xl p-3 space-y-2 border border-white/5">
                    <span className="text-[10px] uppercase font-bold text-slate-400 tracking-wider px-1">Patient List</span>
                    <div className="space-y-1">
                      <div className="bg-sky-500/10 border border-sky-500/20 p-2.5 rounded-lg text-left flex items-start gap-2.5">
                        <div className="w-8 h-8 rounded-full bg-sky-500/20 flex items-center justify-center text-sky-400 font-bold text-xs">RJ</div>
                        <div className="flex-1 min-w-0">
                          <div className="flex justify-between items-center"><span className="text-xs font-bold text-white truncate">Rajesh Joshi</span><span className="text-[8px] text-sky-400">Diagnosis Pending</span></div>
                          <p className="text-[10px] text-slate-300 truncate">Symptom: High Blood Pressure</p>
                        </div>
                      </div>
                      <div className="p-2.5 rounded-lg text-left flex items-start gap-2.5 hover:bg-white/5 transition-colors">
                        <div className="w-8 h-8 rounded-full bg-sky-500/10 flex items-center justify-center text-sky-400 font-bold text-xs">AS</div>
                        <div className="flex-1 min-w-0">
                           <div className="flex justify-between items-center"><span className="text-xs font-bold text-white truncate">Amit Sharma</span><span className="text-[8px] text-slate-400">Stable</span></div>
                          <p className="text-[10px] text-slate-300 truncate">Routine health checkup</p>
                        </div>
                      </div>
                      <div className="p-2.5 rounded-lg text-left flex items-start gap-2.5 hover:bg-white/5 transition-colors">
                        <div className="w-8 h-8 rounded-full bg-sky-500/10 flex items-center justify-center text-sky-400 font-bold text-xs">MB</div>
                        <div className="flex-1 min-w-0">
                          <div className="flex justify-between items-center"><span className="text-xs font-bold text-white truncate">Michelle Boss</span><span className="text-[8px] text-slate-400">Medication Sent</span></div>
                          <p className="text-[10px] text-slate-300 truncate">Lab report review completed</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="md:col-span-8 bg-white/5 rounded-xl border border-white/5 flex flex-col justify-between p-4 min-h-[300px]">
                    <div className="flex justify-between items-center pb-2 border-b border-white/5">
                      <div className="flex items-center gap-2">
                        <div className="w-2.5 h-2.5 rounded-full bg-sky-500" />
                        <span className="text-xs font-bold text-white">AI Rx Copilot: Rajesh Joshi (Age: 45)</span>
                      </div>
                      <span className="text-[9px] px-2 py-0.5 rounded bg-sky-500/10 text-sky-400">AI Clinical Helper Active</span>
                    </div>

                    <div className="space-y-3 py-4 flex-1 overflow-y-auto text-xs">
                      <div className="bg-sky-500/10 border border-sky-500/25 p-3.5 rounded-xl text-left">
                        <p className="text-[10px] font-extrabold text-sky-400 uppercase tracking-widest mb-1.5">Doctor Voice / Written Notes</p>
                        <p className="text-slate-200">"Patient Rajesh Joshi reports high blood pressure during the morning. BP is 150/95. Prescribe standard hypertension medicine for 15 days, suggest low sodium diet."</p>
                      </div>

                      <div className="bg-slate-900 border border-white/5 p-3.5 rounded-xl text-left space-y-2">
                        <div className="flex items-center gap-1.5 text-sky-400 font-bold">
                          <Sparkles className="w-3.5 h-3.5" />
                          <span>AI Parsed Prescription Output</span>
                        </div>
                        <div className="space-y-1 font-mono text-[11px] text-slate-300">
                          <div><span className="text-white font-sans font-bold">Recommended drug:</span> Lisinopril 10mg (Once Daily in morning)</div>
                          <div><span className="text-white font-sans font-bold">Duration:</span> 15 Days</div>
                          <div><span className="text-white font-sans font-bold">Diet advice:</span> Restrict sodium intake, stay hydrated</div>
                          <div><span className="text-amber-400 font-sans font-bold">Interaction Warning:</span> Avoid potassium supplements while taking Lisinopril.</div>
                        </div>
                      </div>
                    </div>

                    <div className="pt-2 border-t border-white/5 flex gap-2">
                      <button className="flex-1 py-2 rounded-lg bg-sky-500 text-black text-xs font-bold hover:bg-sky-400 cursor-not-allowed" disabled>Print Prescription</button>
                      <button className="flex-1 py-2 rounded-lg bg-white/5 border border-white/10 text-white text-xs font-bold hover:bg-white/10 cursor-not-allowed" disabled>Sync to Pharmacy Inventory</button>
                    </div>
                  </div>
                </motion.div>
              )}

              {/* SCHEDULER TAB */}
              {activeTab === 'scheduler' && (
                <motion.div
                  key="scheduler"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                  className="flex-1 text-left space-y-4"
                >
                  <div className="flex justify-between items-center">
                    <span className="text-xs font-bold text-white">Active Doctor Calendars</span>
                    <button className="px-3 py-1 bg-sky-500 text-black text-xs font-bold rounded-lg cursor-not-allowed" disabled>Book Appointment Slot</button>
                  </div>

                  <div className="overflow-x-auto rounded-xl border border-white/5">
                    <table className="w-full text-left text-xs text-slate-300 bg-white/[0.02]">
                      <thead className="bg-white/5 text-slate-300 uppercase text-[9px] font-bold tracking-wider">
                        <tr>
                          <th className="p-3">Doctor</th>
                          <th className="p-3">Department</th>
                          <th className="p-3">Today Slots</th>
                          <th className="p-3">Bookings</th>
                          <th className="p-3">Status</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-white/5 text-slate-200">
                        {[
                          { name: 'Dr. Vivek Patil', dept: 'Cardiology', slots: '10:00 AM - 04:00 PM', bookings: '12 Patients', status: 'On Duty', color: 'bg-sky-500/10 text-sky-400' },
                          { name: 'Dr. Neha Sharma', dept: 'Pediatrics', slots: '02:00 PM - 08:00 PM', bookings: '8 Patients', status: 'On Duty', color: 'bg-sky-500/10 text-sky-400' },
                          { name: 'Dr. Rahul Mehta', dept: 'General Medicine', slots: '09:00 AM - 01:00 PM', bookings: '15 Patients', status: 'Completed', color: 'bg-white/5 text-slate-400' },
                          { name: 'Dr. Anita Desai', dept: 'Orthopedics', slots: 'Closed', bookings: '0', status: 'On Leave', color: 'bg-rose-500/10 text-rose-400' }
                        ].map((doc, i) => (
                          <tr key={i} className="hover:bg-white/[0.03] transition-colors">
                            <td className="p-3 font-bold text-white">{doc.name}</td>
                            <td className="p-3">{doc.dept}</td>
                            <td className="p-3 font-mono">{doc.slots}</td>
                            <td className="p-3">{doc.bookings}</td>
                            <td className="p-3">
                              <span className={`px-2 py-0.5 rounded text-[10px] font-bold ${doc.color}`}>
                                {doc.status}
                              </span>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </motion.div>
              )}

              {/* BILLING TAB */}
              {activeTab === 'billing' && (
                <motion.div
                  key="billing"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                  className="flex-1 text-left space-y-4"
                >
                  <div className="flex justify-between items-center">
                    <span className="text-xs font-bold text-white">Recent Billing Transactions</span>
                    <button className="px-3 py-1 bg-sky-500 text-black text-xs font-bold rounded-lg cursor-not-allowed" disabled>Generate New Invoice</button>
                  </div>

                  <div className="overflow-x-auto rounded-xl border border-white/5">
                    <table className="w-full text-left text-xs text-slate-300 bg-white/[0.02]">
                      <thead className="bg-white/5 text-slate-300 uppercase text-[9px] font-bold tracking-wider">
                        <tr>
                          <th className="p-3">Invoice ID</th>
                          <th className="p-3">Patient</th>
                          <th className="p-3">Date</th>
                          <th className="p-3">Consultation & Tests</th>
                          <th className="p-3">Total Amount</th>
                          <th className="p-3">Payment Status</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-white/5 text-slate-200">
                        {[
                          { id: 'INV-2026-001', patient: 'Rajesh Joshi', date: 'June 11, 2026', items: 'Cardiology consult + ECG test', total: '₹2,500', status: 'Paid', color: 'bg-sky-500/10 text-sky-400' },
                          { id: 'INV-2026-002', patient: 'Amit Sharma', date: 'June 11, 2026', items: 'General checkup + Blood Panel', total: '₹1,200', status: 'Paid', color: 'bg-sky-500/10 text-sky-400' },
                          { id: 'INV-2026-003', patient: 'Karan Malhotra', date: 'June 10, 2026', items: 'Orthopedics consult + X-ray', total: '₹3,200', status: 'Pending', color: 'bg-amber-500/10 text-amber-400' },
                          { id: 'INV-2026-004', patient: 'Sunita Roy', date: 'June 10, 2026', items: 'Dermatology consultation', total: '₹800', status: 'Refunded', color: 'bg-white/5 text-slate-400' }
                        ].map((inv, i) => (
                          <tr key={i} className="hover:bg-white/[0.03] transition-colors">
                            <td className="p-3 font-mono font-bold text-white">{inv.id}</td>
                            <td className="p-3 font-bold">{inv.patient}</td>
                            <td className="p-3">{inv.date}</td>
                            <td className="p-3 text-slate-300">{inv.items}</td>
                            <td className="p-3 font-mono font-bold">{inv.total}</td>
                            <td className="p-3">
                              <span className={`px-2 py-0.5 rounded text-[10px] font-bold ${inv.color}`}>
                                {inv.status}
                              </span>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </motion.div>
              )}

              {/* ANALYTICS TAB */}
              {activeTab === 'analytics' && (
                <motion.div
                  key="analytics"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                  className="grid md:grid-cols-3 gap-6 flex-1 text-left"
                >
                  <div className="bg-white/5 rounded-xl border border-white/5 p-4 flex flex-col justify-between">
                    <div>
                      <span className="text-[10px] text-slate-300 font-bold uppercase tracking-wider">Patient Volume</span>
                      <h4 className="text-2xl font-extrabold text-white mt-1">428 Patients</h4>
                      <p className="text-[10px] text-sky-400 font-semibold mt-1">▲ 14% from last week</p>
                    </div>
                    <div className="h-24 flex items-end gap-1.5 mt-4">
                      {[30, 45, 40, 75, 50, 85, 65, 90, 80, 94].map((h, i) => (
                        <div 
                          key={i} 
                          className="bg-sky-500/20 hover:bg-sky-500 rounded-t-sm w-full transition-all duration-300"
                          style={{ height: `${h}%` }}
                        />
                      ))}
                    </div>
                  </div>

                  <div className="bg-white/5 rounded-xl border border-white/5 p-4 flex flex-col justify-between">
                    <div>
                      <span className="text-[10px] text-slate-300 font-bold uppercase tracking-wider">Occupied Beds</span>
                      <h4 className="text-2xl font-extrabold text-white mt-1">84% Capacity</h4>
                      <p className="text-[10px] text-sky-400 font-semibold mt-1">▲ 8.5% bed occupancy</p>
                    </div>
                    <div className="h-24 flex items-end gap-1.5 mt-4">
                      {[70, 75, 80, 82, 79, 81, 84, 83, 85, 84].map((h, i) => (
                        <div 
                          key={i} 
                          className="bg-sky-500/20 hover:bg-sky-500 rounded-t-sm w-full transition-all duration-300"
                          style={{ height: `${h}%` }}
                        />
                      ))}
                    </div>
                  </div>

                  <div className="bg-white/5 rounded-xl border border-white/5 p-4 flex flex-col justify-between">
                    <div>
                      <span className="text-[10px] text-slate-300 font-bold uppercase tracking-wider">Monthly SaaS Collection</span>
                      <h4 className="text-2xl font-extrabold text-white mt-1">₹4,82,900</h4>
                      <p className="text-[10px] text-sky-400 font-semibold mt-1">▲ 18.2% monthly recurring yield</p>
                    </div>
                    <div className="h-24 flex items-end gap-1.5 mt-4">
                      {[25, 30, 42, 38, 55, 62, 70, 82, 90, 96].map((h, i) => (
                        <div 
                          key={i} 
                          className="bg-sky-500/20 hover:bg-sky-500 rounded-t-sm w-full transition-all duration-300"
                          style={{ height: `${h}%` }}
                        />
                      ))}
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </section>

        {/* ───────────── HOW IT WORKS SECTION ───────────── */}
        <section className="py-16 text-center">
          <div className="space-y-4 mb-16">
            <h2 className="text-3xl md:text-5xl font-extrabold text-white">
              Deploy For Clients In 4 Steps
            </h2>
            <p className="text-slate-300 max-w-lg mx-auto">
              Setting up your hospital or clinic software instances takes under 2 hours. Here is how it works.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8 relative max-w-5xl mx-auto">
            <div className="hidden md:block absolute top-[40px] left-[10%] right-[10%] h-0.5 bg-gradient-to-r from-sky-500/20 via-cyan-400/20 to-sky-600/20 z-0" />
            
            {[
              { step: 'Step 1', title: 'Upload & Configure Logo', desc: 'Add clinic name, branding logos, colors, and setup subdomain records.' },
              { step: 'Step 2', title: 'Map Doctors & Shifts', desc: 'Input doctors lists, consulting departments, clinic timings, and slot limits.' },
              { step: 'Step 3', title: 'Setup Billing Parameters', desc: 'Define consulting consultation fees, ward charges, diagnostic test prices, and lab options.' },
              { step: 'Step 4', title: 'Handover Client Access', desc: 'Generate login logins for Doctors, Nurses, Pharmacists, and Patient portals. Bill subscription fees.' }
            ].map((node, i) => (
              <div key={i} className="relative z-10 flex flex-col items-center">
                <div className="w-16 h-16 rounded-2xl bg-slate-900 border border-white/10 flex items-center justify-center text-sky-400 font-extrabold text-lg mb-6 shadow-xl group hover:border-sky-500/50 transition-all duration-300">
                  {i + 1}
                </div>
                <span className="text-[10px] uppercase font-extrabold tracking-widest text-sky-400 mb-2">{node.step}</span>
                <h3 className="text-lg font-bold text-white mb-2">{node.title}</h3>
                <p className="text-xs md:text-sm text-slate-300 leading-relaxed max-w-[200px]">{node.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ───────────── USE CASES SECTION ───────────── */}
        <section id="niches" className="scroll-mt-24 py-16 text-center">
          <div className="space-y-4 mb-12">
            <h2 className="text-3xl md:text-5xl font-extrabold text-white">
              Target High-Paying Medical Niches
            </h2>
            <p className="text-slate-300 max-w-lg mx-auto">
              Rebrand and resell the Hospital Management System to clinical entities in these huge segments.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-6">
            {[
              { title: 'Private Hospitals', desc: 'Deploy multi-specialty configurations tracking inpatient wards, OT, staff duties, and bills.', icon: '🏢' },
              { title: 'Dental & Eye Clinics', desc: 'Dental charting and specialized checkup modules with custom doctor scheduling flows.', icon: '🩺' },
              { title: 'Diagnostic Labs', desc: 'Process lab samples, log pathology test codes, and mail reports to patients.', icon: '🔬' },
              { title: 'Pharmacies', desc: 'Track drug stocks, verify doctor AI prescriptions, and generate cash invoices.', icon: '💊' },
              { title: 'Paediatric & Gynae clinics', desc: 'Vaccine tracking schedules and child development chart modules.', icon: '👶' },
              { title: 'IT SaaS Resellers', desc: 'License the code to developers or agencies building medical apps.', icon: '💼' }
            ].map((useCase, i) => (
              <motion.div 
                key={i}
                whileHover={{ scale: 1.02 }}
                className="glass-card p-3.5 sm:p-5 lg:p-6 rounded-xl sm:rounded-2xl text-left border border-white/5 flex flex-col justify-between hover:shadow-[0_0_30px_rgba(14,165,233,0.03)] bg-gradient-to-b from-slate-900/50 to-slate-950/80"
              >
                <div className="space-y-2 sm:space-y-4">
                  <div className="text-2xl sm:text-4xl">{useCase.icon}</div>
                  <h3 className="text-xs sm:text-base md:text-lg lg:text-xl font-bold text-white">{useCase.title}</h3>
                  <p className="text-[10px] sm:text-xs md:text-sm text-slate-300 leading-relaxed">{useCase.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* ───────────── COMPARISON SECTION ───────────── */}
        <section className="py-16 text-center max-w-4xl mx-auto">
          <div className="space-y-4 mb-12">
            <h2 className="text-3xl md:text-5xl font-extrabold text-white">
              Own the Software Source Code
            </h2>
            <p className="text-slate-300 max-w-lg mx-auto">
              Why pay recurring monthly subscription markups for medical software when you can own the complete database code?
            </p>
          </div>

          <div className="glass border border-white/10 rounded-2xl overflow-hidden shadow-2xl">
            <table className="w-full text-left text-xs md:text-sm bg-slate-950/40">
              <thead>
                <tr className="bg-white/5 border-b border-white/10 text-slate-300 font-bold uppercase text-[10px] tracking-wider">
                  <th className="p-4">Feature</th>
                  <th className="p-4">Monthly Hospital SaaS</th>
                  <th className="p-4 bg-sky-500/10 text-sky-400 border-l border-r border-sky-500/20">Own the Source Code</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                {[
                  { feature: 'Monthly Fee / Cost', saas: '₹15,000 – ₹50,000 / month', code: '₹199 (One-Time Payment)', highlighted: true },
                  { feature: 'White Label Access', saas: 'Locked or high premium', code: '100% Full Unrestricted Rebranding', highlighted: true },
                  { feature: 'Database Ownership', saas: 'Held on vendor servers', code: '100% Self-Hosted Local Control', highlighted: true },
                  { feature: 'Clinics Limits', saas: 'Pay per branch / seat', code: 'Add unlimited clinics & doctors', highlighted: true },
                  { feature: 'AI Customization', saas: 'Fixed API responses', code: 'Modify OpenAI / Gemini prompts directly', highlighted: true },
                  { feature: 'Resell Rights', saas: 'Strictly prohibited', code: 'Permitted to resell SaaS subscriptions', highlighted: true }
                ].map((row, idx) => (
                  <tr key={idx} className="hover:bg-white/[0.02] transition-colors">
                    <td className="p-4 font-bold text-white">{row.feature}</td>
                    <td className="p-4 text-slate-300 font-medium">{row.saas}</td>
                    <td className="p-4 bg-sky-500/5 text-sky-300 font-bold border-l border-r border-sky-500/10">
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-sky-400 shrink-0" />
                        <span>{row.code}</span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* ───────────── WHAT'S INCLUDED BENTO GRID ───────────── */}
        <section id="included" className="scroll-mt-24 py-16 text-center">
          <div className="space-y-4 mb-12">
            <h2 className="text-3xl md:text-5xl font-extrabold text-white">
              What Is Included In The Package
            </h2>
            <p className="text-slate-300 max-w-lg mx-auto">
              You get complete access to a production-ready Hospital Management System SaaS environment.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-12 gap-3 sm:gap-6 max-w-5xl mx-auto">
            {/* Bento Card 1: Frontend */}
            <div className="col-span-1 md:col-span-8 glass-card p-3.5 sm:p-5 lg:p-6 rounded-xl sm:rounded-2xl border border-white/5 bg-slate-900/40 text-left flex flex-col justify-between min-h-[140px] sm:min-h-[200px]">
              <div>
                <Code className="w-5 h-5 sm:w-8 sm:h-8 text-sky-400 mb-2 sm:mb-4" />
                <h3 className="text-xs sm:text-base md:text-lg font-bold text-white">Next.js 14 Premium Frontend</h3>
                <p className="text-[10px] sm:text-xs md:text-sm text-slate-300 leading-relaxed mt-1 sm:mt-2">
                  A gorgeous clinical dashboard interface. Includes doctor calendars scheduling, EMR medical records panels, pharmacy stock logs, occupied ward beds charts, and detailed clinic accounting grids.
                </p>
              </div>
              <span className="text-[8px] sm:text-[10px] text-sky-400 font-bold mt-2 sm:mt-4 uppercase">100% White-Label Rebrandable</span>
            </div>

            {/* Bento Card 2: Backend */}
            <div className="col-span-1 md:col-span-4 glass-card p-3.5 sm:p-5 lg:p-6 rounded-xl sm:rounded-2xl border border-white/5 bg-slate-900/40 text-left flex flex-col justify-between min-h-[140px] sm:min-h-[200px]">
              <div>
                <Layers className="w-5 h-5 sm:w-8 sm:h-8 text-sky-400 mb-2 sm:mb-4" />
                <h3 className="text-xs sm:text-base md:text-lg font-bold text-white">Node.js API Server</h3>
                <p className="text-[10px] sm:text-xs md:text-sm text-slate-300 leading-relaxed mt-1 sm:mt-2">
                  Complete robust backend API codebase processing doctor records, parsing clinic invoice webhooks, and routing calendar requests.
                </p>
              </div>
              <span className="text-[8px] sm:text-[10px] text-sky-400 font-bold mt-2 sm:mt-4 uppercase">TypeScript & Node.js</span>
            </div>

            {/* Bento Card 3: Database schema */}
            <div className="col-span-1 md:col-span-4 glass-card p-3.5 sm:p-5 lg:p-6 rounded-xl sm:rounded-2xl border border-white/5 bg-slate-900/40 text-left flex flex-col justify-between min-h-[140px] sm:min-h-[200px]">
              <div>
                <Database className="w-5 h-5 sm:w-8 sm:h-8 text-sky-400 mb-2 sm:mb-4" />
                <h3 className="text-xs sm:text-base md:text-lg font-bold text-white">Prisma PostgreSQL Schema</h3>
                <p className="text-[10px] sm:text-xs md:text-sm text-slate-300 leading-relaxed mt-1 sm:mt-2">
                  Pre-configured relational tables for Doctors, Shift duties, Patients EMR, Wards, Pharmacy inventories, and invoice bills.
                </p>
              </div>
              <span className="text-[8px] sm:text-[10px] text-sky-400 font-bold mt-2 sm:mt-4 uppercase">Prisma ORM Ready</span>
            </div>

            {/* Bento Card 4: AI Engines */}
            <div className="col-span-1 md:col-span-8 glass-card p-3.5 sm:p-5 lg:p-6 rounded-xl sm:rounded-2xl border border-white/5 bg-slate-900/40 text-left flex flex-col justify-between min-h-[140px] sm:min-h-[200px]">
              <div>
                <Sparkles className="w-5 h-5 sm:w-8 sm:h-8 text-sky-400 mb-2 sm:mb-4" />
                <h3 className="text-xs sm:text-base md:text-lg font-bold text-white">Dual AI (OpenAI + Gemini) clinical engines</h3>
                <p className="text-[10px] sm:text-xs md:text-sm text-slate-300 leading-relaxed mt-1 sm:mt-2">
                  Clinical prompts set up to extract doctor clinical dictations and symptoms logs, matching them to structured medication dosages, diagnostic tests, and drug interaction risks.
                </p>
              </div>
              <span className="text-[8px] sm:text-[10px] text-sky-400 font-bold mt-2 sm:mt-4 uppercase">Structured Medical Prompt Schema</span>
            </div>

            {/* Bento Card 5: Deployment guide */}
            <div className="col-span-1 md:col-span-6 glass-card p-3.5 sm:p-5 lg:p-6 rounded-xl sm:rounded-2xl border border-white/5 bg-slate-900/40 text-left flex flex-col justify-between min-h-[140px] sm:min-h-[200px]">
              <div>
                <GraduationCap className="w-5 h-5 sm:w-8 sm:h-8 text-sky-400 mb-2 sm:mb-4" />
                <h3 className="text-xs sm:text-base md:text-lg font-bold text-white">Full Deploy Manuals</h3>
                <p className="text-[10px] sm:text-xs md:text-sm text-slate-300 leading-relaxed mt-1 sm:mt-2">
                  Detailed manuals and videos demonstrating database seeding, environment keys configuration, and hosting setups.
                </p>
              </div>
              <span className="text-[8px] sm:text-[10px] text-sky-400 font-bold mt-2 sm:mt-4 uppercase">1-Click deploy script configs</span>
            </div>

            {/* Bento Card 6: License */}
            <div className="col-span-1 md:col-span-6 glass-card p-3.5 sm:p-5 lg:p-6 rounded-xl sm:rounded-2xl border border-white/5 bg-slate-900/40 text-left flex flex-col justify-between min-h-[140px] sm:min-h-[200px]">
              <div>
                <ShieldCheck className="w-5 h-5 sm:w-8 sm:h-8 text-sky-400 mb-2 sm:mb-4" />
                <h3 className="text-xs sm:text-base md:text-lg font-bold text-white">Commercial Resell License</h3>
                <p className="text-[10px] sm:text-xs md:text-sm text-slate-300 leading-relaxed mt-1 sm:mt-2">
                  Grants full legal permission to modify code files, deploy software copies for client clinics, and retain 100% of SaaS earnings.
                </p>
              </div>
              <span className="text-[8px] sm:text-[10px] text-sky-400 font-bold mt-2 sm:mt-4 uppercase">Unlimited resell permissions</span>
            </div>
          </div>
        </section>

        {/* ───────────── TESTIMONIALS SECTION ───────────── */}
        <section className="py-16 text-center overflow-hidden">
          <div className="space-y-4 mb-12">
            <h2 className="text-3xl md:text-5xl font-extrabold text-white">
              What Other SaaS Resellers Say
            </h2>
            <p className="text-slate-300 max-w-lg mx-auto">
              Real feedback from developers and agency owners who bought our white-label medical codebase.
            </p>
          </div>

          <div className="relative w-full overflow-x-auto py-4 scrollbar-none mask-grad">
            <div className="flex gap-6 justify-center min-w-max px-4">
              {[
                {
                  name: 'Dr. Swapnil Patil',
                  role: 'Med-Tech Solutions',
                  text: 'The billing engine and patient EMR schema is rock solid. We white-labeled it as MediNex+ and licensed it to four clinics in our city, making our investment back in the first day.'
                },
                {
                  name: 'Amit Sharma',
                  role: 'CareGrid Agency',
                  text: 'Setting up multi-tenancy was incredibly easy with Prisma. Doctors love the AI prescription assistant as it saves them hours of writing clinical summaries every week.'
                },
                {
                  name: 'Karan Malhotra',
                  role: 'Healthcare IT consultant',
                  text: 'Clean TypeScript codebase. The voice dictation integration with OpenAI Whispers/GPT works flawlessly. Hosting it on Vercel and PostgreSQL took me less than an hour.'
                }
              ].map((testi, i) => (
                <div 
                  key={i}
                  className="glass-card p-5 sm:p-6 rounded-2xl border border-white/5 text-left bg-gradient-to-br from-slate-900/50 to-slate-950/80 flex flex-col justify-between w-[280px] sm:w-[350px] md:w-[380px] shrink-0 select-none hover:border-sky-500/25 transition-all duration-300"
                >
                  <div className="space-y-4">
                    <div className="flex gap-1 text-sky-400">
                      {[...Array(5)].map((_, idx) => <Star key={idx} className="w-3.5 h-3.5 fill-current" />)}
                    </div>
                    <p className="text-xs sm:text-sm text-slate-200 italic leading-relaxed">"{testi.text}"</p>
                  </div>
                  <div className="flex items-center gap-3 mt-6 pt-4 border-t border-white/5">
                    <div className="w-8 h-8 rounded-full bg-sky-500/10 border border-sky-500/20 flex items-center justify-center text-sky-400 font-extrabold text-xs">
                      {testi.name.split(' ').map(n => n[0]).join('')}
                    </div>
                    <div>
                      <span className="text-xs font-bold text-white block">{testi.name}</span>
                      <span className="text-[10px] text-slate-400 block">{testi.role}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ───────────── FAQ SECTION ───────────── */}
        <section id="faq" className="scroll-mt-24 py-16 max-w-3xl mx-auto text-left">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl md:text-5xl font-extrabold text-white">
              Frequently Asked Questions
            </h2>
            <p className="text-slate-300 max-w-lg mx-auto">
              Got questions? We have answers. Find everything you need to know about the product source code licenses.
            </p>
          </div>

          <div className="space-y-4">
            {[
              {
                q: 'What is the tech stack of this Hospital Management System?',
                a: 'The system is built using Next.js 14, TailwindCSS, TypeScript, Prisma ORM, and PostgreSQL. It is optimized to run on modern platforms like Vercel, Render, or any VPS provider.'
              },
              {
                q: 'Does it support multi-tenancy (multi-hospital)?',
                a: 'Yes, it has a robust multi-tenant architecture. You can host multiple clinics or hospitals on separate subdomains, completely separating their patient medical records and invoicing logs.'
              },
              {
                q: 'Can I completely rebrand the app?',
                a: 'Yes. You receive full developer white-label permissions. You can change clinical logos, title headers, color variables, landing text copy, and host it under your proprietary brand.'
              },
              {
                q: 'Is there a limit on how many hospitals I can resell it to?',
                a: 'No limit. Your license permits you to deploy, host, and sell this software package copy to unlimited clinics, charging them custom monthly or setup rates.'
              },
              {
                q: 'How does the AI clinical helper work?',
                a: 'The system integrates with OpenAI GPT-4o and Google Gemini APIs. It takes doctor consultations speech/notes and converts them to formatted clinical prescriptions and medication checklists.'
              },
              {
                q: 'Do I get updates when the code improves?',
                a: 'Yes! Lifetime access grants you all future codebase updates and bug patches, which you can retrieve from your downloads dashboard.'
              },
              {
                q: 'Is it a one-time purchase?',
                a: 'Yes, absolutely. Pay the one-time promo fee of ₹199 today, download the full ZIP code directory, and own it forever with no monthly licensing commissions.'
              }
            ].map((faq, i) => (
              <div 
                key={i} 
                className="bg-white/5 border border-white/5 rounded-2xl overflow-hidden transition-all duration-300"
              >
                <button
                  onClick={() => setFaqOpen(faqOpen === i ? null : i)}
                  className="w-full p-5 text-left flex justify-between items-center text-sm md:text-base font-bold text-white hover:bg-white/[0.02]"
                >
                  <span>{faq.q}</span>
                  <ChevronDown className={`w-5 h-5 text-slate-400 transition-transform duration-300 ${faqOpen === i ? 'rotate-180' : ''}`} />
                </button>
                <AnimatePresence>
                  {faqOpen === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      className="border-t border-white/5 bg-white/[0.01]"
                    >
                      <p className="p-5 text-xs md:text-sm text-slate-300 leading-relaxed">{faq.a}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </section>

        {/* ───────────── FINAL CTA ───────────── */}
        <section className="py-20 text-center max-w-5xl mx-auto relative z-10">
          <div className="absolute inset-0 bg-sky-500/10 blur-[120px] rounded-full pointer-events-none z-0" />
          
          <div className="relative z-10 bg-slate-950/80 border border-white/10 rounded-3xl p-8 md:p-12 lg:p-16 shadow-2xl flex flex-col items-center max-w-4xl mx-auto space-y-8">
            <span className="bg-sky-500/10 border border-sky-500/20 text-sky-400 text-xs px-3 py-1 rounded-full font-bold uppercase tracking-wider">Download Zip</span>
            
            <h2 className="text-3xl md:text-5xl font-extrabold text-white max-w-2xl leading-tight">
              Get the Complete HMS Code Today
            </h2>
            
            <p className="text-slate-200 max-w-xl mx-auto text-sm md:text-base">
              Get instant lifetime download access. Rebrand, host, and sell clinical SaaS systems under your own brand. No hosting commissions, no lock-ins.
            </p>

            <div className="flex flex-row items-center justify-center gap-2.5 sm:gap-4 w-full">
              <Link 
                href={CHECKOUT_URL}
                onClick={trackLead}
                className="shimmer-btn heartbeat-btn group px-4 py-3 sm:px-8 sm:py-4 bg-gradient-to-r from-sky-400 via-cyan-400 to-sky-600 hover:from-sky-500 hover:via-cyan-500 hover:to-sky-700 text-white font-extrabold rounded-xl sm:rounded-2xl flex items-center justify-center gap-1.5 sm:gap-3 shadow-xl shadow-sky-500/20 transition-all duration-300 active:scale-95 text-center text-xs sm:text-base flex-1 sm:flex-none"
              >
                Get Code License (₹199)
                <ArrowRight className="w-3.5 h-3.5 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <a 
                href="#demo-video"
                className="shimmer-btn px-4 py-3 sm:px-8 sm:py-4 bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 hover:text-sky-400 text-white font-semibold rounded-xl sm:rounded-2xl flex items-center justify-center gap-1.5 sm:gap-2 transition-all duration-300 active:scale-95 text-center text-xs sm:text-base flex-1 sm:flex-none"
              >
                Watch Video Demo
              </a>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full pt-6 border-t border-white/5 text-xs text-slate-300">
              {['✓ Lifetime Code Access', '✓ Unlimited Clinic Reselling', '✓ One-Time Payment', '✓ White Label Rights'].map((badge, i) => (
                <div key={i} className="flex items-center justify-center gap-1.5 font-semibold text-sky-400">
                  <span>{badge}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ───────────── FOOTER MINIMAL ───────────── */}
        <footer className="pt-12 pb-24 md:pb-28 border-t border-white/5 mt-16 text-center text-xs text-slate-400 space-y-4">
          <div className="flex flex-wrap justify-center gap-4 text-slate-300 font-semibold mb-4 items-center">
            <span>Copyrights @digigrownex 2026</span>
            <span className="text-white/20">|</span>
            <button 
              onClick={() => setShowPrivacyModal(true)} 
              className="hover:text-white transition-colors cursor-pointer bg-transparent border-none outline-none font-semibold text-xs text-slate-300"
            >
              Privacy Policy
            </button>
            <span className="text-white/20">|</span>
            <button 
              onClick={() => setShowRefundModal(true)} 
              className="hover:text-white transition-colors cursor-pointer bg-transparent border-none outline-none font-semibold text-xs text-slate-300"
            >
              Refund Policy
            </button>
          </div>
        </footer>
      </div>

      {/* ───────────── PERSISTENT CTA BAR ───────────── */}
      <AnimatePresence>
        {true && (
          <motion.div 
            initial={{ y: 100 }}
            animate={{ y: 0 }}
            className="fixed bottom-0 left-0 right-0 z-40 bg-slate-950/90 backdrop-blur-xl border-t border-white/10 p-3 md:p-4"
          >
            <div className="max-w-5xl mx-auto flex items-center justify-between gap-4">
              <div className="hidden md:flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-r from-sky-400 via-cyan-400 to-sky-600 flex items-center justify-center text-white font-extrabold text-xs">HMS</div>
                <div className="text-left">
                  <span className="text-xs font-bold text-white block">White Label AI Hospital Management System</span>
                  <span className="text-[10px] text-sky-400 font-bold block">₹54,999 Value Strategy Resell Bonuses Free</span>
                </div>
              </div>
              <div className="flex-1 md:flex-none flex items-center justify-end gap-3 w-full md:w-auto">
                <div className="hidden sm:block text-right">
                  <span className="text-[10px] text-slate-300 line-through block">Regular Price: ₹14,999</span>
                  <span className="text-xs font-extrabold text-white block">₹199 Lifetime Offer Active</span>
                </div>
                <Link 
                  href={CHECKOUT_URL}
                  onClick={trackLead}
                  className="shimmer-btn heartbeat-btn px-6 py-2.5 bg-gradient-to-r from-sky-400 via-cyan-400 to-sky-600 hover:from-sky-500 hover:via-cyan-500 hover:to-sky-700 text-white font-extrabold rounded-xl text-xs md:text-sm shadow-lg shadow-sky-500/20 active:scale-95 transition-transform flex-1 sm:flex-none text-center"
                >
                  Get License Code
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ───────────── EXIT INTENT POPUP MODAL ───────────── */}
      <AnimatePresence>
        {showExitIntent && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
          >
            <motion.div 
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="bg-slate-900 border border-white/10 p-6 md:p-8 rounded-3xl max-w-md w-full relative overflow-hidden shadow-2xl text-left"
            >
              <div className="absolute -top-12 -left-12 w-32 h-32 bg-sky-500/20 blur-[30px] rounded-full pointer-events-none" />
              
              <button 
                onClick={() => setShowExitIntent(false)}
                className="absolute top-4 right-4 text-slate-400 hover:text-white transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="space-y-6">
                <div className="w-12 h-12 rounded-xl bg-sky-500/10 flex items-center justify-center text-sky-400">
                  <AlertCircle className="w-6 h-6" />
                </div>

                <div className="space-y-2">
                  <h3 className="text-xl md:text-2xl font-extrabold text-white">Wait! Secure the HMS Codebase</h3>
                  <p className="text-xs md:text-sm text-slate-300 leading-relaxed">
                    Download the complete Hospital Management System source code, white-label resizing rights, and 6 strategy bonuses. Set setup retainers and SaaS subscriptions today.
                  </p>
                </div>

                <div className="bg-white/5 border border-white/5 p-4 rounded-xl space-y-2 text-xs text-slate-300">
                  <div className="flex justify-between font-bold">
                    <span className="text-white">AI HMS SaaS Source Code</span>
                    <span className="text-sky-400 font-extrabold">Included</span>
                  </div>
                  <div className="flex justify-between text-slate-300">
                    <span>6 Resell Bonus Bundles</span>
                    <span>Free (Value ₹54,999)</span>
                  </div>
                </div>

                <div className="flex gap-3 pt-2">
                  <button 
                    onClick={() => setShowExitIntent(false)}
                    className="shimmer-btn px-4 py-3 bg-white/5 hover:bg-white/10 text-white font-semibold rounded-xl text-xs md:text-sm flex-1 transition-colors"
                  >
                    No thanks, I'll pass
                  </button>
                  <Link 
                    href={CHECKOUT_URL}
                    onClick={trackLead}
                    className="shimmer-btn heartbeat-btn px-4 py-3 bg-gradient-to-r from-sky-400 via-cyan-400 to-sky-600 hover:from-sky-500 hover:via-cyan-500 hover:to-sky-700 text-white font-extrabold rounded-xl text-xs md:text-sm flex-1 text-center shadow-lg shadow-sky-500/20 active:scale-95 transition-transform"
                  >
                    Buy Code License
                  </Link>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Privacy Policy Modal */}
      <AnimatePresence>
        {showPrivacyModal && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
          >
            <motion.div 
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="bg-slate-900 border border-white/10 p-6 md:p-8 rounded-3xl max-w-lg w-full relative overflow-hidden shadow-2xl text-left"
            >
              <div className="absolute -top-12 -left-12 w-32 h-32 bg-sky-500/20 blur-[30px] rounded-full pointer-events-none" />
              
              <button 
                onClick={() => setShowPrivacyModal(false)}
                className="absolute top-4 right-4 text-slate-400 hover:text-white transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="space-y-6">
                <div className="w-12 h-12 rounded-xl bg-sky-500/10 flex items-center justify-center text-sky-400">
                  <ShieldCheck className="w-6 h-6" />
                </div>

                <div className="space-y-4">
                  <h3 className="text-xl md:text-2xl font-extrabold text-white">Privacy Policy</h3>
                  <div className="text-xs md:text-sm text-slate-300 space-y-3 leading-relaxed">
                    <p>
                      Your privacy is extremely important to us. We collect minimal customer information required for licensing registration and checkout processing (name, email, checkout status).
                    </p>
                    <p>
                      We do not share, sell, or rent your database records to third parties. All transactional records are processed securely.
                    </p>
                  </div>
                </div>

                <button 
                  onClick={() => setShowPrivacyModal(false)}
                  className="w-full py-3 bg-gradient-to-r from-sky-400 via-cyan-400 to-sky-600 text-white font-extrabold rounded-xl text-xs md:text-sm shadow-lg shadow-sky-500/20 active:scale-95 transition-transform"
                >
                  Close Window
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Refund Policy Modal */}
      <AnimatePresence>
        {showRefundModal && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
          >
            <motion.div 
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="bg-slate-900 border border-white/10 p-6 md:p-8 rounded-3xl max-w-lg w-full relative overflow-hidden shadow-2xl text-left"
            >
              <div className="absolute -top-12 -left-12 w-32 h-32 bg-sky-500/20 blur-[30px] rounded-full pointer-events-none" />
              
              <button 
                onClick={() => setShowRefundModal(false)}
                className="absolute top-4 right-4 text-slate-400 hover:text-white transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="space-y-6">
                <div className="w-12 h-12 rounded-xl bg-sky-500/10 flex items-center justify-center text-sky-400">
                  <AlertCircle className="w-6 h-6" />
                </div>

                <div className="space-y-4">
                  <h3 className="text-xl md:text-2xl font-extrabold text-white">Refund Policy</h3>
                  <div className="text-xs md:text-sm text-slate-300 space-y-3 leading-relaxed">
                    <p className="text-sky-400 font-bold">
                      All sales are final. We maintain a strict NO REFUND policy.
                    </p>
                    <p className="font-normal text-slate-300">
                      Due to the digital nature of the software product (instant download access to ZIP archives containing full white-label backend and frontend source code), licenses cannot be deactivated or returned once acquired.
                    </p>
                    <p className="font-normal text-slate-300">
                      Please review all active video demonstrations, product mockups, and feature checklists thoroughly prior to checking out. If you encounter setup bottlenecks, our developer support desk is fully committed to helping you launch.
                    </p>
                  </div>
                </div>

                <button 
                  onClick={() => setShowRefundModal(false)}
                  className="w-full py-3 bg-gradient-to-r from-sky-400 via-cyan-400 to-sky-600 text-white font-extrabold rounded-xl text-xs md:text-sm shadow-lg shadow-sky-500/20 active:scale-95 transition-transform"
                >
                  Close Window
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ───────────── RECURRING PROMO POPUP MODAL ───────────── */}
      <AnimatePresence>
        {showPromoModal && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4"
          >
            <motion.div 
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="bg-slate-900 border border-sky-500/20 p-6 md:p-8 rounded-3xl max-w-md w-full relative overflow-hidden shadow-[0_0_50px_rgba(14,165,233,0.15)] text-left"
            >
              <div className="absolute -top-12 -left-12 w-32 h-32 bg-sky-500/20 blur-[30px] rounded-full pointer-events-none" />
              
              <button 
                onClick={() => setShowPromoModal(false)}
                className="absolute top-4 right-4 text-slate-400 hover:text-white transition-colors p-1 rounded-full hover:bg-white/5"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="space-y-6">
                <div className="w-12 h-12 rounded-xl bg-sky-500/10 flex items-center justify-center text-sky-400">
                  <Sparkles className="w-6 h-6 animate-pulse" />
                </div>

                <div className="space-y-2">
                  <h3 className="text-xl md:text-2xl font-extrabold text-white leading-tight">Why Own the HMS Source Code?</h3>
                  <p className="text-xs md:text-sm text-slate-300">
                    Host it on your servers, white-label it completely, and start selling subscriptions or custom setups to clinics and hospitals.
                  </p>
                </div>

                {/* Key Importance Benefits List */}
                <div className="space-y-3 pt-2">
                  {[
                    { title: "100% White-Label Branding", desc: "Change clinic names, logos, color themes, and sell under your label." },
                    { title: "No Licensing Commissions", desc: "Pay once and install for unlimited clinics. Zero fee-per-doctor markups." },
                    { title: "AI-Powered Patient Flow", desc: "Generate smart prescriptions from consultation transcripts using OpenAI/Gemini." },
                    { title: "Curated Strategy Bonuses Included", desc: "Get deployment manuals, doctor lead extractors, and cold pitch templates (worth ₹54,999)." }
                  ].map((benefit, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-sky-400 shrink-0 mt-0.5" />
                      <div>
                        <h4 className="text-xs sm:text-sm font-bold text-white leading-tight">{benefit.title}</h4>
                        <p className="text-[10px] sm:text-xs text-slate-400">{benefit.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="flex gap-3 pt-4 border-t border-white/5">
                  <button 
                    onClick={() => setShowPromoModal(false)}
                    className="shimmer-btn px-4 py-3 bg-white/5 hover:bg-white/10 text-white font-semibold rounded-xl text-xs md:text-sm flex-1 transition-colors whitespace-nowrap"
                  >
                    Close Window
                  </button>
                  <Link 
                    href={CHECKOUT_URL}
                    onClick={trackLead}
                    className="shimmer-btn heartbeat-btn px-4 py-3 bg-gradient-to-r from-sky-400 via-cyan-400 to-sky-600 hover:from-sky-500 hover:via-cyan-500 hover:to-sky-700 text-white font-extrabold rounded-xl text-xs md:text-sm flex-1 text-center shadow-lg shadow-sky-500/25 active:scale-95 transition-transform whitespace-nowrap"
                  >
                    Get Code License (₹199)
                  </Link>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Go to Top Button */}
      <AnimatePresence>
        {showGoToTop && (
          <motion.button
            onClick={handleScrollToTop}
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="fixed bottom-24 right-6 z-50 p-3 bg-gradient-to-r from-sky-400 via-cyan-400 to-sky-600 text-white rounded-full shadow-xl shadow-sky-500/20 cursor-pointer border border-white/10 hover:scale-105 transition-all"
            aria-label="Scroll to top"
          >
            <ArrowUp className="w-5 h-5 stroke-[3px]" />
          </motion.button>
        )}
      </AnimatePresence>

    </div>
  );
}
