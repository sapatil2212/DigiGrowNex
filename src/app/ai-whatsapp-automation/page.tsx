'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence, useScroll, useInView } from 'framer-motion';
import { 
  Zap, MessageSquare, Bot, Users, BarChart3, Database, Sparkles, 
  Code, GraduationCap, DollarSign, ArrowRight, ShieldCheck, CheckCircle2, 
  ChevronDown, Check, Star, RefreshCw, X, Play, Video, Smartphone, 
  AlertCircle, HelpCircle, CheckSquare, Layers, Globe, Calendar, Send, ArrowUp,
  Search, Share2
} from 'lucide-react';

// Pricing Checkout URL
const CHECKOUT_URL = 'https://topmate.io/swapnil_patil53/2136870';

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

export default function AIWhatsAppAutomationLanding() {
  const [activeTab, setActiveTab] = useState<'conversations' | 'crm' | 'analytics' | 'knowledge'>('conversations');
  const [faqOpen, setFaqOpen] = useState<number | null>(null);
  const [showExitIntent, setShowExitIntent] = useState(false);
  const [showStickyCta, setShowStickyCta] = useState(false);
  const [showGoToTop, setShowGoToTop] = useState(false);
  const [showPrivacyModal, setShowPrivacyModal] = useState(false);
  const [showRefundModal, setShowRefundModal] = useState(false);
  const [showPromoModal, setShowPromoModal] = useState(false);
  const [timeLeft, setTimeLeft] = useState({ minutes: 9, seconds: 59 });
  const { scrollY } = useScroll();

  const trackLead = () => {
    if (typeof window !== 'undefined' && (window as any).fbq) {
      (window as any).fbq('track', 'Lead');
    }
  };

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
        // Reset timer just for infinite loop urgency
        setTimeLeft({ minutes: 9, seconds: 0 });
      }
    }, 1000);
    return () => clearInterval(timer);
  }, [timeLeft]);

  // Exit intent popup detection
  useEffect(() => {
    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY < 50) {
        // Check local storage to prevent multiple popups per session
        const hasSeenPopup = sessionStorage.getItem('seen_exit_popup');
        if (!hasSeenPopup) {
          setShowExitIntent(true);
          sessionStorage.setItem('seen_exit_popup', 'true');
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
    <div className="ai-whatsapp-landing bg-[#050816] text-[#f1f5f9] min-h-screen relative overflow-hidden font-sans antialiased selection:bg-emerald-500 selection:text-white">
      
      {/* Embedded style block to override default global theme selectors */}
      <style dangerouslySetInnerHTML={{ __html: `
        /* Force dark theme variables for the AI WhatsApp Automation landing page */
        .ai-whatsapp-landing {
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
          --accent: #34CC32 !important;
          --accent-light: #52d950 !important;
          --accent-dark: #28a326 !important;
        }

        /* Use main website green for text, background, border and gradient classes */
        .ai-whatsapp-landing .text-emerald-400,
        .ai-whatsapp-landing .text-emerald-300,
        .ai-whatsapp-landing .text-emerald-500 {
          color: var(--accent) !important;
        }
        .ai-whatsapp-landing .bg-emerald-500,
        .ai-whatsapp-landing .bg-emerald-400 {
          background-color: var(--accent) !important;
        }
        .ai-whatsapp-landing .bg-emerald-500\\/5 {
          background-color: rgba(52, 204, 50, 0.05) !important;
        }
        .ai-whatsapp-landing .bg-emerald-500\\/10 {
          background-color: rgba(52, 204, 50, 0.1) !important;
        }
        .ai-whatsapp-landing .bg-emerald-500\\/20 {
          background-color: rgba(52, 204, 50, 0.2) !important;
        }
        .ai-whatsapp-landing .bg-emerald-500\\/25 {
          background-color: rgba(52, 204, 50, 0.25) !important;
        }
        .ai-whatsapp-landing .border-emerald-500\\/20 {
          border-color: rgba(52, 204, 50, 0.2) !important;
        }
        .ai-whatsapp-landing .border-emerald-500\\/40 {
          border-color: rgba(52, 204, 50, 0.4) !important;
        }
        .ai-whatsapp-landing .border-emerald-500\\/25 {
          border-color: rgba(52, 204, 50, 0.25) !important;
        }
        .ai-whatsapp-landing .shadow-emerald-500\\/20 {
          --tw-shadow-color: rgba(52, 204, 50, 0.2) !important;
        }
        .ai-whatsapp-landing .shadow-emerald-500\\/25 {
          --tw-shadow-color: rgba(52, 204, 50, 0.25) !important;
        }
        .ai-whatsapp-landing .selection\\:bg-emerald-500::selection {
          background-color: var(--accent) !important;
        }

        /* Override arbitrary hex brand gradients for gradients & glows to match main website green */
        .ai-whatsapp-landing .bg-gradient-to-r.from-\\[\\#25D366\\].via-emerald-400.to-\\[\\#128C7E\\] {
          background-image: linear-gradient(to right, var(--accent), var(--accent-light), var(--accent-dark)) !important;
        }
        .ai-whatsapp-landing .from-\\[\\#25D366\\].via-emerald-400.to-\\[\\#128C7E\\] {
          background-image: linear-gradient(to right, var(--accent), var(--accent-light), var(--accent-dark)) !important;
        }
        .ai-whatsapp-landing .bg-gradient-to-r.from-\\[\\#25D366\\].to-\\[\\#128C7E\\] {
          background-image: linear-gradient(to right, var(--accent), var(--accent-dark)) !important;
        }
        .ai-whatsapp-landing .hover\\:from-\\[\\#25D366\\\]:hover {
          background-image: linear-gradient(to right, var(--accent), var(--accent-dark)) !important;
        }
        .ai-whatsapp-landing .hover\\:from-\\[\\#20bd5a\\]:hover {
          background-image: linear-gradient(to right, var(--accent-light), var(--accent), var(--accent-dark)) !important;
        }
        .ai-whatsapp-landing .bg-gradient-to-r.from-emerald-500\\/10 {
          background-image: linear-gradient(to right, rgba(52, 204, 50, 0.1), transparent) !important;
        }
        .ai-whatsapp-landing .bg-gradient-to-br.from-emerald-500\\/10 {
          background-image: linear-gradient(to bottom right, rgba(52, 204, 50, 0.1), transparent) !important;
        }
        .ai-whatsapp-landing .bg-gradient-to-bl.from-\\[\\#128C7E\\]\\/10 {
          background-image: linear-gradient(to bottom left, rgba(40, 163, 38, 0.1), transparent) !important;
        }
        .ai-whatsapp-landing .bg-gradient-to-tr.from-\\[\\#25D366\\]\\/5.to-\\[\\#128C7E\\]\\/5 {
          background-image: linear-gradient(to top right, rgba(52, 204, 50, 0.05), rgba(40, 163, 38, 0.05)) !important;
        }
        .ai-whatsapp-landing .bg-emerald-500\\/10.blur-\\[120px\\] {
          background-color: rgba(52, 204, 50, 0.1) !important;
        }
        .ai-whatsapp-landing .from-emerald-500\\/10 {
          --tw-gradient-from: rgba(52, 204, 50, 0.1) !important;
          --tw-gradient-to: transparent !important;
          --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to) !important;
        }
        .ai-whatsapp-landing .from-\\[\\#25D366\\]\\/5 {
          --tw-gradient-from: rgba(52, 204, 50, 0.05) !important;
        }
        .ai-whatsapp-landing .to-\\[\\#128C7E\\]\\/5 {
          --tw-gradient-to: rgba(40, 163, 38, 0.05) !important;
        }
        .ai-whatsapp-landing .from-\\[\\#128C7E\\]\\/10 {
          --tw-gradient-from: rgba(40, 163, 38, 0.1) !important;
        }

        /* Ensure text elements have correct contrast on dark background */
        .ai-whatsapp-landing .text-white {
          color: #ffffff !important;
        }
        .ai-whatsapp-landing .text-slate-100 {
          color: #f1f5f9 !important;
        }
        .ai-whatsapp-landing .text-slate-200 {
          color: #e2e8f0 !important;
        }
        .ai-whatsapp-landing .text-slate-300 {
          color: #cbd5e1 !important;
        }
        .ai-whatsapp-landing .text-slate-400 {
          color: #94a3b8 !important;
        }
        .ai-whatsapp-landing .text-slate-500 {
          color: #64748b !important;
        }

        /* Enforce dark-mode backgrounds and borders on cards/containers */
        .ai-whatsapp-landing .glass-card {
          background: rgba(15, 23, 42, 0.45) !important;
          border: 1px solid rgba(255, 255, 255, 0.05) !important;
          box-shadow: 0 4px 30px rgba(0, 0, 0, 0.2) !important;
        }
        .ai-whatsapp-landing .glass-card:hover {
          background: rgba(15, 23, 42, 0.65) !important;
          border-color: rgba(52, 204, 50, 0.2) !important;
          box-shadow: 0 0 30px rgba(52, 204, 50, 0.05) !important;
        }
        .ai-whatsapp-landing .glass {
          background: rgba(15, 23, 42, 0.55) !important;
          border: 1px solid rgba(255, 255, 255, 0.05) !important;
          box-shadow: 0 4px 30px rgba(0, 0, 0, 0.2) !important;
        }

        /* Table overrides */
        .ai-whatsapp-landing table {
          background-color: rgba(15, 23, 42, 0.3) !important;
        }
        .ai-whatsapp-landing table thead {
          background-color: rgba(255, 255, 255, 0.03) !important;
        }
        .ai-whatsapp-landing table tr {
          border-color: rgba(255, 255, 255, 0.05) !important;
        }
        .ai-whatsapp-landing table td {
          border-color: rgba(255, 255, 255, 0.05) !important;
        }

        /* Shimmer button animation */
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

        /* Heartbeat glowing animations using main website green */
        @keyframes heartbeat-glow {
          0%, 100% {
            transform: scale(1);
            box-shadow: 0 0 15px rgba(52, 204, 50, 0.4);
          }
          14% {
            transform: scale(1.03);
            box-shadow: 0 0 25px rgba(52, 204, 50, 0.7);
          }
          28% {
            transform: scale(1.01);
            box-shadow: 0 0 18px rgba(52, 204, 50, 0.5);
          }
          42% {
            transform: scale(1.05);
            box-shadow: 0 0 30px rgba(52, 204, 50, 0.8);
          }
          70% {
            transform: scale(1);
            box-shadow: 0 0 15px rgba(52, 204, 50, 0.4);
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
          transition: all 0.3s ease !important;
        }
        .heartbeat-btn:hover {
          transform: translateY(-2px) scale(1.02) !important;
          box-shadow: 0 10px 20px rgba(52, 204, 50, 0.3) !important;
        }
        .heartbeat-red-btn {
          transition: all 0.3s ease !important;
        }
        .heartbeat-red-btn:hover {
          transform: translateY(-2px) scale(1.02) !important;
          box-shadow: 0 10px 20px rgba(220, 38, 38, 0.3) !important;
        }

        /* Infinite Marquee Scrolling */
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
          background-image: none !important;
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
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-gradient-to-br from-emerald-500/10 to-transparent blur-[120px] rounded-full pointer-events-none z-0" />
      <div className="absolute top-1/3 right-1/4 w-[600px] h-[600px] bg-gradient-to-bl from-[#128C7E]/10 to-transparent blur-[150px] rounded-full pointer-events-none z-0" />
      <div className="absolute bottom-1/4 left-1/3 w-[500px] h-[500px] bg-gradient-to-tr from-[#25D366]/5 to-[#128C7E]/5 blur-[120px] rounded-full pointer-events-none z-0" />

      {/* Scarcity / Announcement Banner */}
      <div className="bg-gradient-to-r from-[#25D366] via-emerald-400 to-[#128C7E] text-white py-1.5 px-3 sm:py-2 sm:px-4 text-center text-[10px] sm:text-xs md:text-sm font-semibold relative z-50 flex flex-wrap items-center justify-center gap-1.5 sm:gap-4 shadow-lg">
        <span className="bg-black/20 px-2 py-0.5 rounded-full text-[9px] sm:text-[11px] uppercase tracking-wider font-extrabold animate-pulse text-white">Special Offer</span>
        <span>Limited Lifetime Licenses Remaining! Save 80% today.</span>
        <span className="font-mono bg-black/20 px-1.5 py-0.5 rounded text-white text-[9px] sm:text-xs flex items-center">
          {timeLeft.minutes.toString().padStart(2, '0')}:{timeLeft.seconds.toString().padStart(2, '0')}
        </span>
        <Link 
          href={CHECKOUT_URL}
          onClick={trackLead}
          className="shimmer-btn heartbeat-red-btn bg-red-600 hover:bg-red-500 text-white font-extrabold px-2 py-0.5 sm:px-3 sm:py-1 rounded text-[9px] sm:text-[11px] uppercase tracking-wider transition-all duration-300 hover:scale-105 active:scale-95 shadow-md shadow-red-600/30 whitespace-nowrap block"
        >
          Get Now
        </Link>
      </div>

      {/* Main Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* ───────────── HERO SECTION ───────────── */}
        <section id="hero" className="scroll-mt-24 pt-10 pb-12 sm:pt-16 sm:pb-20 grid lg:grid-cols-12 gap-8 lg:gap-16 items-center">
          
          {/* Hero Left Content */}
          <div className="lg:col-span-7 space-y-6 md:space-y-8 text-left">
            {/* Professional Single Premium Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>Complete White-Label SaaS Source Code</span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-[1.1] text-white">
              Launch Your Own <span className="bg-gradient-to-r from-[#25D366] via-emerald-400 to-[#128C7E] bg-clip-text text-transparent">AI WhatsApp Automation</span> Business in 24 Hours
            </h1>

            <p className="text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed">
              Get the complete White Label AI WhatsApp Automation Source Code with OpenAI, Gemini, CRM, Lead Capture, Follow-Ups, and Commercial Resell Rights. Set your own pricing and keep 100% of the profits.
            </p>

            {/* CTAs */}
            <div className="flex flex-row items-center gap-2.5 sm:gap-4 justify-start">
              <Link 
                href={CHECKOUT_URL}
                onClick={trackLead}
                className="shimmer-btn heartbeat-btn group px-4 py-3 sm:px-8 sm:py-4 bg-gradient-to-r from-[#25D366] via-emerald-400 to-[#128C7E] hover:from-[#20bd5a] hover:via-emerald-500 hover:to-[#0f7c6e] text-white font-extrabold rounded-xl sm:rounded-2xl flex items-center justify-center gap-1.5 sm:gap-3 shadow-xl shadow-emerald-500/20 transition-all duration-300 hover:-translate-y-0.5 active:scale-95 text-center text-xs sm:text-base"
              >
                Get Instant Access
                <ArrowRight className="w-3.5 h-3.5 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <a 
                href="#demo-video"
                className="shimmer-btn px-4 py-3 sm:px-8 sm:py-4 bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 hover:text-emerald-400 text-white font-semibold rounded-xl sm:rounded-2xl flex items-center justify-center gap-1.5 sm:gap-2 transition-all duration-300 active:scale-95 text-center text-xs sm:text-base"
              >
                <Play className="w-3 h-3 sm:w-4 sm:h-4 fill-current text-emerald-400 animate-pulse" />
                Watch Demo
              </a>
            </div>

            {/* Structured Trust Bar */}
            <div className="pt-6 border-t border-white/5 flex flex-wrap items-center gap-x-8 gap-y-3 text-xs md:text-sm text-slate-400">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>One-Time Payment</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>Commercial Resell License</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>100% Profit Margins</span>
              </div>
            </div>
          </div>

          {/* Hero Right Content - Raw Image */}
          <div className="lg:col-span-5 flex items-center justify-center">
            <motion.div 
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, cubicBezier: [0.16, 1, 0.3, 1] }}
              className="w-full"
            >
              <img 
                src="/navbox.png" 
                alt="AI WhatsApp SaaS Automation Dashboard" 
                className="w-full h-auto max-w-full block mx-auto object-contain"
              />
            </motion.div>
          </div>
        </section>

        {/* ───────────── REVENUE OPPORTUNITY SECTION ───────────── */}
        <section className="py-16">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl md:text-5xl font-extrabold text-white">
              Turn This Into A <span className="bg-gradient-to-r from-[#25D366] via-emerald-400 to-[#128C7E] bg-clip-text text-transparent">₹50,000 To ₹5,00,000</span> Per Month Business
            </h2>
            <p className="text-slate-300 max-w-lg mx-auto text-sm md:text-base">
              Because you own the source code, you do not pay licensing markups. Charge clients whatever you want.
            </p>
          </div>

          <div className="max-w-5xl mx-auto space-y-8">
            {/* Horizontal 3-Column Grid for Revenue Models */}
            <div className="grid md:grid-cols-3 gap-6 text-left">
              <div className="bg-slate-900/40 border border-emerald-500/20 rounded-2xl p-6 hover:border-emerald-500/40 hover:bg-slate-900/60 transition-all duration-300 flex flex-col justify-between shadow-xl">
                <div>
                  <span className="text-[10px] uppercase font-bold text-emerald-400 tracking-wider">Revenue Model #1</span>
                  <h4 className="text-lg font-bold text-white mt-1">Setup Fee</h4>
                  <p className="text-slate-300 text-xs mt-2 leading-relaxed">Charge local businesses an upfront setup fee to design their AI knowledge base.</p>
                </div>
                <div className="text-2xl font-extrabold text-emerald-400 mt-6 pt-4 border-t border-white/5">
                  ₹10K – ₹50K <span className="text-xs text-slate-400 font-normal">Per Client</span>
                </div>
              </div>

              <div className="bg-slate-900/40 border border-emerald-500/20 rounded-2xl p-6 hover:border-emerald-500/40 hover:bg-slate-900/60 transition-all duration-300 flex flex-col justify-between shadow-xl">
                <div>
                  <span className="text-[10px] uppercase font-bold text-emerald-400 tracking-wider">Revenue Model #2</span>
                  <h4 className="text-lg font-bold text-white mt-1">Monthly Retainers</h4>
                  <p className="text-slate-300 text-xs mt-2 leading-relaxed">Offer system hosting, hosting maintenance, and regular context tuneups.</p>
                </div>
                <div className="text-2xl font-extrabold text-emerald-400 mt-6 pt-4 border-t border-white/5">
                  ₹5K – ₹20K <span className="text-xs text-slate-400 font-normal">Per Month</span>
                </div>
              </div>

              <div className="bg-slate-900/40 border border-emerald-500/20 rounded-2xl p-6 hover:border-emerald-500/40 hover:bg-slate-900/60 transition-all duration-300 flex flex-col justify-between shadow-xl">
                <div>
                  <span className="text-[10px] uppercase font-bold text-emerald-400 tracking-wider">Revenue Model #3</span>
                  <h4 className="text-lg font-bold text-white mt-1">Agency Projects</h4>
                  <p className="text-slate-300 text-xs mt-2 leading-relaxed">Deliver complex custom flows, API integration, and CRM sync layouts for enterprise.</p>
                </div>
                <div className="text-2xl font-extrabold text-emerald-400 mt-6 pt-4 border-t border-white/5">
                  ₹50K+ <span className="text-xs text-slate-400 font-normal">Per Project</span>
                </div>
              </div>
            </div>


          </div>
        </section>



        {/* ───────────── DEMO VIDEO SECTION ───────────── */}
        <section id="demo-video" className="py-16 scroll-mt-24 max-w-5xl mx-auto text-center">
          <div className="space-y-4 mb-10">
            <h2 className="text-3xl md:text-4xl font-extrabold text-white">
              See The AI Automations In Action
            </h2>
            <p className="text-slate-300 max-w-lg mx-auto text-sm md:text-base">
              Watch how our White Label software handles conversations, collects data, and syncs leads to the dashboard.
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
          {/* Inner Glowing Card Wrapper */}
          <div className="bg-gradient-to-b from-slate-900/60 via-slate-950/80 to-slate-900/60 border border-emerald-500/20 rounded-3xl p-8 md:p-12 shadow-[0_0_50px_rgba(16,185,129,0.05)] relative overflow-hidden text-center">
            
            {/* Glowing background blob */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] bg-emerald-500/5 blur-[100px] rounded-full pointer-events-none" />

            <div className="space-y-4 mb-12 relative z-10">
              <span className="bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs px-3.5 py-1.5 rounded-full font-bold uppercase tracking-wider">
                Premium Bonuses
              </span>
              <h2 className="text-3xl md:text-5xl font-extrabold text-white">
                Get Over <span className="bg-gradient-to-r from-[#25D366] via-emerald-400 to-[#128C7E] bg-clip-text text-transparent">₹54,999 Value</span> Included Free
              </h2>
              <p className="text-slate-300 max-w-xl mx-auto text-xs md:text-sm leading-relaxed">
                We want to make sure you succeed in scaling this automation software. These resource kits are packed into your dashboard zip file.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 relative z-10">
              {[
                { num: 'Bonus #1', title: 'Deployment Guide', desc: 'Host everything on VPS easily.', value: '₹9,999' },
                { num: 'Bonus #2', title: 'Client Acquisition System', desc: 'Find high-paying local businesses.', value: '₹14,999' },
                { num: 'Bonus #3', title: 'Cold Outreach Templates', desc: 'DMs and emails that convert.', value: '₹4,999' },
                { num: 'Bonus #4', title: 'Sales Scripts & Demos', desc: 'Close setup deals smoothly.', value: '₹9,999' },
                { num: 'Bonus #5', title: 'Agency Growth Blueprint', desc: 'Scale to ₹5,00,000+ retainers.', value: '₹10,000' },
                { num: 'Bonus #6', title: 'Free AI Lead Gen Tool', desc: 'Extract local business leads instantly.', value: '₹4,999' }
              ].map((bonus, i) => (
                <motion.div 
                  key={i} 
                  whileHover={{ y: -5, borderColor: 'rgba(16,185,129,0.3)', boxShadow: '0 10px 30px rgba(16,185,129,0.05)' }}
                  className="bg-slate-950/60 border border-white/5 p-6 rounded-2xl flex flex-col justify-between text-left transition-all duration-300"
                >
                  <div className="space-y-3">
                    <span className="bg-emerald-500/10 border border-emerald-500/25 px-2.5 py-0.5 rounded text-[10px] text-emerald-400 font-extrabold uppercase tracking-widest inline-block">
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
                    <span className="bg-emerald-500/20 text-emerald-400 font-black uppercase text-[10px] px-2.5 py-1 rounded">
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
              Most Businesses Lose Leads Every Day
            </h2>
            <p className="text-slate-300 max-w-lg mx-auto">
              Here is why companies struggle with traditional chat channels and why they are desperate for automated solutions.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: 'Missed Messages',
                desc: 'Over 62% of incoming business inquiries go completely unanswered because representatives are busy or offline.',
                color: 'from-emerald-500/10 to-transparent border-emerald-500/20'
              },
              {
                title: 'Slow Response Times',
                desc: 'Leads go cold in 5 minutes. If a support response takes longer, customer conversion rates drop by 80%.',
                color: 'from-emerald-500/10 to-transparent border-emerald-500/20'
              },
              {
                title: 'Manual Lead Qualification',
                desc: 'Sales agents waste hours calling unverified leads who have zero budget or purchase intent.',
                color: 'from-emerald-500/10 to-transparent border-emerald-500/20'
              },
              {
                title: 'Poor Follow-Up',
                desc: 'Without automated nurturing, sales reps forget to follow up, losing critical recurring deal opportunities.',
                color: 'from-emerald-500/10 to-transparent border-emerald-500/20'
              },
              {
                title: 'Lost Revenue',
                desc: 'Every unanswered chat represents money left directly on the table for faster competitors to grab.',
                color: 'from-emerald-500/10 to-transparent border-emerald-500/20'
              },
              {
                title: 'Customer Frustration',
                desc: 'Modern buyers expect immediate answers. Delayed replies destroy trust and damage client retention rates.',
                color: 'from-emerald-500/10 to-transparent border-emerald-500/20'
              }
            ].map((problem, i) => (
              <motion.div 
                key={i}
                whileHover={{ scale: 1.03, borderColor: 'rgba(16, 185, 129, 0.4)' }}
                className={`glass-card p-8 rounded-2xl text-left border border-white/5 flex flex-col justify-between hover:shadow-[0_0_30px_rgba(16,185,129,0.05)] bg-gradient-to-br ${problem.color}`}
              >
                <div>
                  <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-emerald-400 font-extrabold text-sm mb-6">
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
              Everything You Need To Automate WhatsApp
            </h2>
            <p className="text-slate-300 max-w-lg mx-auto">
              We built the ultimate automation engine. Take the code, white-label it, and deploy it for client businesses.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-6">
            {[
              {
                icon: <Bot className="w-4 h-4 sm:w-6 sm:h-6 text-emerald-400" />,
                title: 'AI Responses',
                desc: 'Responds instantly with smart context-aware conversational dialogs tailored to the client business.'
              },
              {
                icon: <Users className="w-4 h-4 sm:w-6 sm:h-6 text-emerald-400" />,
                title: 'Lead Qualification',
                desc: 'Asks targeted questions to assess budget, intent, and timeline before handing over to human agents.'
              },
              {
                icon: <Layers className="w-4 h-4 sm:w-6 sm:h-6 text-emerald-400" />,
                title: 'CRM Dashboard',
                desc: 'Tracks leads, tags status, logs contact parameters, and stores conversation histories in real-time.'
              },
              {
                icon: <Calendar className="w-4 h-4 sm:w-6 sm:h-6 text-emerald-400" />,
                title: 'Appointment Booking',
                desc: 'Integrates with calendars to automatically book meetings directly inside the WhatsApp chat flow.'
              },
              {
                icon: <Send className="w-4 h-4 sm:w-6 sm:h-6 text-emerald-400" />,
                title: 'Broadcast Messaging',
                desc: 'Sends bulk marketing campaigns and newsletters to client contacts with high deliverability rates.'
              },
              {
                icon: <RefreshCw className="w-4 h-4 sm:w-6 sm:h-6 text-emerald-400" />,
                title: 'Follow-Ups',
                desc: 'Schedules automated follow-up messages after chat inactivity to re-engage warm prospective buyers.'
              },
              {
                icon: <Database className="w-4 h-4 sm:w-6 sm:h-6 text-emerald-400" />,
                title: 'Knowledge Base Training',
                desc: 'Upload PDFs, docx, txt files, or paste direct URLs to train the AI assistant on custom business data.'
              },
              {
                icon: <Sparkles className="w-4 h-4 sm:w-6 sm:h-6 text-emerald-400" />,
                title: 'OpenAI Integration',
                desc: 'Native support for GPT-4o API. Harness advanced reasoning to deliver premium automation quality.'
              },
              {
                icon: <Zap className="w-4 h-4 sm:w-6 sm:h-6 text-emerald-400" />,
                title: 'Gemini Integration',
                desc: 'Configured for Google Gemini 1.5 Pro to enable low-latency, high-performance local language outputs.'
              },
              {
                icon: <BarChart3 className="w-4 h-4 sm:w-6 sm:h-6 text-emerald-400" />,
                title: 'Analytics Dashboard',
                desc: 'Visualize message volume, response velocity, lead pipeline metrics, and daily automation ratios.'
              },
              {
                icon: <Layers className="w-4 h-4 sm:w-6 sm:h-6 text-emerald-400" />,
                title: 'Multi Agent Support',
                desc: 'Allows multiple human support team members to jump into active AI chats seamlessly when needed.'
              },
              {
                icon: <Globe className="w-4 h-4 sm:w-6 sm:h-6 text-emerald-400" />,
                title: 'White Label Branding',
                desc: 'Swap logo, domain, and colors to sell this dashboard as your proprietary software system.'
              }
            ].map((feature, i) => (
              <motion.div 
                key={i}
                whileHover={{ y: -5, borderColor: 'rgba(16,185,129,0.3)', boxShadow: '0 10px 30px rgba(16,185,129,0.05)' }}
                className="glass-card p-3 sm:p-5 lg:p-6 rounded-xl sm:rounded-2xl border border-white/5 bg-slate-950/40 text-left transition-all duration-300 flex flex-col h-full justify-between w-full"
              >
                <div className="space-y-2 sm:space-y-4">
                  <div className="w-8 h-8 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl bg-emerald-500/10 flex items-center justify-center">
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
              { value: 50000, suffix: '+', label: 'Automated Conversations' },
              { value: 10000, suffix: '+', label: 'Qualified Leads' },
              { value: 500, suffix: '+', label: 'Businesses Automated' },
              { value: 24, suffix: '/7', label: 'AI Support Powered' },
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
        <section className="py-16 bg-gradient-to-b from-transparent via-emerald-500/[0.02] to-transparent">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl md:text-5xl font-extrabold text-white">
              Explore the Software Dashboard
            </h2>
            <p className="text-slate-300 max-w-lg mx-auto">
              Toggle between the tabs to preview different panels of the pre-built SaaS product included in the source code.
            </p>
          </div>

          {/* Interactive Showcase Tabs navigation */}
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {[
              { id: 'conversations', label: 'Conversations', icon: <MessageSquare className="w-4 h-4 text-current" /> },
              { id: 'crm', label: 'CRM Leads', icon: <Users className="w-4 h-4 text-current" /> },
              { id: 'analytics', label: 'Analytics', icon: <BarChart3 className="w-4 h-4 text-current" /> },
              { id: 'knowledge', label: 'AI Knowledge Base', icon: <Database className="w-4 h-4 text-current" /> }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`px-5 py-3 rounded-xl flex items-center gap-2.5 text-sm font-semibold transition-all duration-300 ${
                  activeTab === tab.id 
                    ? 'bg-gradient-to-r from-[#25D366] via-emerald-400 to-[#128C7E] text-white shadow-lg shadow-emerald-500/20' 
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
            
            {/* Top Windows Control bar */}
            <div className="flex items-center justify-between pb-4 border-b border-white/5 mb-4">
              <div className="flex items-center gap-4">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-500/70" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/70" />
                  <div className="w-3 h-3 rounded-full bg-green-500/70" />
                </div>
                <span className="text-xs text-slate-400 font-mono">App Panel / {activeTab}</span>
              </div>
              <span className="text-xs text-emerald-400 font-semibold flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
                Live Mockup
              </span>
            </div>

            <AnimatePresence mode="wait">
              {/* CONVERSATIONS TAB PREVIEW */}
              {activeTab === 'conversations' && (
                <motion.div
                  key="conversations"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                  className="grid md:grid-cols-12 gap-4 flex-1 items-stretch"
                >
                  {/* Left Chat list column */}
                  <div className="md:col-span-4 bg-white/5 rounded-xl p-3 space-y-2 border border-white/5">
                    <span className="text-[10px] uppercase font-bold text-slate-400 tracking-wider px-1">Active Chats</span>
                    <div className="space-y-1">
                      <div className="bg-emerald-500/10 border border-emerald-500/20 p-2.5 rounded-lg text-left flex items-start gap-2.5">
                        <div className="w-8 h-8 rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-400 font-bold text-xs">RJ</div>
                        <div className="flex-1 min-w-0">
                          <div className="flex justify-between items-center"><span className="text-xs font-bold text-white truncate">Rajesh Joshi</span><span className="text-[8px] text-emerald-400">AI Active</span></div>
                          <p className="text-[10px] text-slate-300 truncate">Interested in commercial license...</p>
                        </div>
                      </div>
                      <div className="p-2.5 rounded-lg text-left flex items-start gap-2.5 hover:bg-white/5 transition-colors">
                        <div className="w-8 h-8 rounded-full bg-emerald-500/10 flex items-center justify-center text-emerald-400 font-bold text-xs">AS</div>
                        <div className="flex-1 min-w-0">
                           <div className="flex justify-between items-center"><span className="text-xs font-bold text-white truncate">Amit Sharma</span><span className="text-[8px] text-slate-400">2m ago</span></div>
                          <p className="text-[10px] text-slate-300 truncate">How do I setup on VPS?</p>
                        </div>
                      </div>
                      <div className="p-2.5 rounded-lg text-left flex items-start gap-2.5 hover:bg-white/5 transition-colors">
                        <div className="w-8 h-8 rounded-full bg-emerald-500/10 flex items-center justify-center text-emerald-400 font-bold text-xs">MB</div>
                        <div className="flex-1 min-w-0">
                          <div className="flex justify-between items-center"><span className="text-xs font-bold text-white truncate">Michelle Boss</span><span className="text-[8px] text-slate-400">1h ago</span></div>
                          <p className="text-[10px] text-slate-300 truncate">Booked a consult call successfully</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Right chat content screen */}
                  <div className="md:col-span-8 bg-white/5 rounded-xl border border-white/5 flex flex-col justify-between p-4 min-h-[300px]">
                    <div className="flex justify-between items-center pb-2 border-b border-white/5">
                      <div className="flex items-center gap-2">
                        <div className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
                        <span className="text-xs font-bold text-white">Rajesh Joshi (+91 9087...)</span>
                      </div>
                      <span className="text-[9px] px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400">OpenAI Bot Running</span>
                    </div>

                    <div className="space-y-3 py-4 flex-1 overflow-y-auto">
                      <div className="flex items-end gap-2.5 justify-start">
                        <div className="bg-white/10 p-2.5 rounded-2xl rounded-bl-none text-left max-w-[80%]">
                          <p className="text-xs text-slate-200">Hello, I saw your post. I want to buy the automated setup for my digital agency. Do you provide a setup guide?</p>
                        </div>
                      </div>
                      <div className="flex items-end gap-2.5 justify-end">
                        <div className="bg-emerald-500/20 p-2.5 rounded-2xl rounded-br-none text-left max-w-[80%] border border-emerald-500/10">
                          <p className="text-xs text-emerald-300 font-medium">🤖 AI Assistant:</p>
                          <p className="text-xs text-slate-200 mt-1">Yes! We provide a complete step-by-step PDF setup manual & detailed installation videos. The package also includes code files for backend APIs and a dashboard interface.</p>
                        </div>
                      </div>
                      <div className="flex items-end gap-2.5 justify-start">
                        <div className="bg-white/10 p-2.5 rounded-2xl rounded-bl-none text-left max-w-[80%]">
                          <p className="text-xs text-slate-200">Perfect, can I purchase using a commercial license to resell it to my local agency clients?</p>
                        </div>
                      </div>
                      <div className="flex items-end gap-2.5 justify-end">
                        <div className="bg-emerald-500/20 p-2.5 rounded-2xl rounded-br-none text-left max-w-[80%] border border-emerald-500/10">
                          <p className="text-xs text-emerald-300 font-medium">🤖 AI Assistant:</p>
                          <p className="text-xs text-slate-200 mt-1">Absolutely! Our Commercial & Agency licenses give you complete rights to resell source code instances or host this service under your custom brand for clients.</p>
                        </div>
                      </div>
                    </div>

                    <div className="pt-2 border-t border-white/5 flex gap-2">
                      <input 
                        type="text" 
                        placeholder="Type reply or override bot..." 
                        disabled
                        className="bg-white/5 border border-white/10 px-3 py-2 text-xs rounded-lg flex-1 text-slate-300 cursor-not-allowed"
                      />
                      <button className="px-3 py-2 rounded-lg bg-emerald-500 text-black text-xs font-bold hover:bg-emerald-400 cursor-not-allowed" disabled>Send</button>
                    </div>
                  </div>
                </motion.div>
              )}

              {/* CRM LEADS TAB PREVIEW */}
              {activeTab === 'crm' && (
                <motion.div
                  key="crm"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                  className="flex-1"
                >
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
                    <span className="text-xs font-bold text-white">Lead Capture Database</span>
                    <div className="flex gap-2">
                      <button className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/5 text-[11px] font-bold text-slate-300">Export CSV</button>
                      <button className="px-3 py-1.5 rounded-lg bg-emerald-500 text-black text-[11px] font-bold">Add Lead</button>
                    </div>
                  </div>

                  <div className="overflow-x-auto rounded-xl border border-white/5">
                    <table className="w-full text-left text-xs text-slate-300 bg-white/[0.02]">
                      <thead className="bg-white/5 text-slate-300 uppercase text-[9px] font-bold tracking-wider">
                        <tr>
                          <th className="p-3">Customer</th>
                          <th className="p-3">Phone</th>
                          <th className="p-3">Status</th>
                          <th className="p-3">Budget</th>
                          <th className="p-3">AI Score</th>
                          <th className="p-3">Action</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-white/5 text-slate-200">
                        {[
                          { name: 'Rajesh Joshi', phone: '+91 9087...', status: 'Hot Lead', budget: '₹50,000', score: '98/100', color: 'bg-rose-500/10 text-rose-400' },
                          { name: 'Amit Sharma', phone: '+91 9832...', status: 'Qualified', budget: '₹15,000', score: '82/100', color: 'bg-emerald-500/10 text-emerald-400' },
                          { name: 'Michelle Boss', phone: '+1 4152...', status: 'Appt Booked', budget: '$2,500', score: '94/100', color: 'bg-emerald-500/10 text-emerald-400' },
                          { name: 'Carlos Vance', phone: '+34 6512...', status: 'Nurturing', budget: '$1,200', score: '71/100', color: 'bg-amber-500/10 text-amber-400' },
                        ].map((lead, i) => (
                          <tr key={i} className="hover:bg-white/[0.03] transition-colors">
                            <td className="p-3 font-bold text-white">{lead.name}</td>
                            <td className="p-3 font-mono">{lead.phone}</td>
                            <td className="p-3">
                              <span className={`px-2 py-0.5 rounded text-[10px] font-bold ${lead.color}`}>
                                {lead.status}
                              </span>
                            </td>
                            <td className="p-3">{lead.budget}</td>
                            <td className="p-3 font-semibold text-emerald-400">{lead.score}</td>
                            <td className="p-3"><button className="text-[10px] font-bold text-slate-300 hover:text-white transition-colors">View Chat</button></td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </motion.div>
              )}

              {/* ANALYTICS TAB PREVIEW */}
              {activeTab === 'analytics' && (
                <motion.div
                  key="analytics"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                  className="grid md:grid-cols-3 gap-6 flex-1"
                >
                  <div className="bg-white/5 rounded-xl border border-white/5 p-4 flex flex-col justify-between">
                    <div>
                      <span className="text-[10px] text-slate-300 font-bold uppercase tracking-wider">Conversation Automation</span>
                      <h4 className="text-2xl font-extrabold text-white mt-1">94.8%</h4>
                      <p className="text-[10px] text-emerald-400 font-semibold mt-1">▲ 4.2% from last week</p>
                    </div>
                    <div className="h-24 flex items-end gap-1.5 mt-4">
                      {[40, 55, 45, 80, 60, 95, 75, 98, 85, 94].map((h, i) => (
                        <div 
                          key={i} 
                          className="bg-emerald-500/20 hover:bg-emerald-500 rounded-t-sm w-full transition-all duration-300"
                          style={{ height: `${h}%` }}
                        />
                      ))}
                    </div>
                  </div>

                  <div className="bg-white/5 rounded-xl border border-white/5 p-4 flex flex-col justify-between">
                    <div>
                      <span className="text-[10px] text-slate-300 font-bold uppercase tracking-wider">Avg Response Time</span>
                      <h4 className="text-2xl font-extrabold text-white mt-1">1.2 Seconds</h4>
                      <p className="text-[10px] text-emerald-400 font-semibold mt-1">▼ 0.8s optimization improvement</p>
                    </div>
                    <div className="h-24 flex items-end gap-1.5 mt-4">
                      {[90, 80, 75, 60, 50, 45, 30, 22, 18, 12].map((h, i) => (
                        <div 
                          key={i} 
                          className="bg-emerald-500/20 hover:bg-emerald-500 rounded-t-sm w-full transition-all duration-300"
                          style={{ height: `${h}%` }}
                        />
                      ))}
                    </div>
                  </div>

                  <div className="bg-white/5 rounded-xl border border-white/5 p-4 flex flex-col justify-between">
                    <div>
                      <span className="text-[10px] text-slate-300 font-bold uppercase tracking-wider">Acquisition Yield</span>
                      <h4 className="text-2xl font-extrabold text-white mt-1">₹4,82,900</h4>
                      <p className="text-[10px] text-emerald-400 font-semibold mt-1">▲ 18.2% month-over-month</p>
                    </div>
                    <div className="h-24 flex items-end gap-1.5 mt-4">
                      {[25, 30, 42, 38, 55, 62, 70, 82, 90, 96].map((h, i) => (
                        <div 
                          key={i} 
                          className="bg-emerald-500/20 hover:bg-emerald-500 rounded-t-sm w-full transition-all duration-300"
                          style={{ height: `${h}%` }}
                        />
                      ))}
                    </div>
                  </div>
                </motion.div>
              )}

              {/* KNOWLEDGE BASE TAB PREVIEW */}
              {activeTab === 'knowledge' && (
                <motion.div
                  key="knowledge"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                  className="grid md:grid-cols-12 gap-6 flex-1 items-stretch"
                >
                  <div className="md:col-span-6 bg-white/5 rounded-xl p-4 border border-white/5 flex flex-col justify-between">
                    <div className="space-y-4">
                      <span className="text-xs font-bold text-white block">Add Business Context Data</span>
                      <p className="text-[11px] text-slate-300">Paste your website domain URL or upload files to instantly train the client agent bot.</p>
                      
                      <div className="space-y-3">
                        <div>
                          <label className="text-[10px] uppercase font-bold text-slate-300 block mb-1">Crawl Website Domain</label>
                          <input 
                            type="text" 
                            placeholder="https://example-client.com"
                            disabled
                            className="bg-white/5 border border-white/10 px-3 py-2 text-xs rounded-lg w-full text-slate-300 cursor-not-allowed" 
                          />
                        </div>
                        <div>
                          <label className="text-[10px] uppercase font-bold text-slate-300 block mb-1">Direct Training Text</label>
                          <textarea 
                            rows={3} 
                            placeholder="Type business details here e.g. opening hours, pricing plan details..."
                            disabled
                            className="bg-white/5 border border-white/10 px-3 py-2 text-xs rounded-lg w-full text-slate-300 cursor-not-allowed resize-none" 
                          />
                        </div>
                      </div>
                    </div>

                    <button className="px-4 py-2 bg-emerald-500 text-black text-xs font-bold rounded-lg mt-4 cursor-not-allowed" disabled>
                      Train AI Model
                    </button>
                  </div>

                  <div className="md:col-span-6 bg-white/5 rounded-xl p-4 border border-white/5 space-y-4">
                    <span className="text-xs font-bold text-white block">Active Data Sources</span>
                    <div className="space-y-2">
                      <div className="bg-emerald-500/10 border border-emerald-500/20 p-2.5 rounded-lg flex items-center justify-between">
                        <div className="flex items-center gap-2.5">
                          <Globe className="w-4 h-4 text-emerald-400" />
                          <div className="text-left">
                            <span className="text-xs font-bold text-white block">client-site-crawl.html</span>
                            <span className="text-[9px] text-slate-300 block">Crawled 12 pages successfully</span>
                          </div>
                        </div>
                        <span className="text-[9px] px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 font-bold uppercase">Ready</span>
                      </div>

                      <div className="bg-emerald-500/10 border border-emerald-500/20 p-2.5 rounded-lg flex items-center justify-between">
                        <div className="flex items-center gap-2.5">
                          <Database className="w-4 h-4 text-emerald-400" />
                          <div className="text-left">
                            <span className="text-xs font-bold text-white block">pricing-and-faq-doc.pdf</span>
                            <span className="text-[9px] text-slate-300 block">Parsed 4,891 text tokens</span>
                          </div>
                        </div>
                        <span className="text-[9px] px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 font-bold uppercase">Ready</span>
                      </div>
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
              Launch In 4 Simple Steps
            </h2>
            <p className="text-slate-300 max-w-lg mx-auto">
              Setting up your white-label WhatsApp business instance takes less than 24 hours. Here is the process.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8 relative max-w-5xl mx-auto">
            {/* Horizontal connector line on desktop */}
            <div className="hidden md:block absolute top-[40px] left-[10%] right-[10%] h-0.5 bg-gradient-to-r from-[#25D366]/20 via-emerald-400/20 to-[#128C7E]/20 z-0" />
            
            {[
              { step: 'Step 1', title: 'Upload Business Data', desc: 'Input URLs, PDFs, or support FAQs to train your AI on the target business.' },
              { step: 'Step 2', title: 'Connect WhatsApp', desc: 'Scan the QR code to link the phone number API endpoint in under 30 seconds.' },
              { step: 'Step 3', title: 'Train AI Assistant', desc: 'Select model configurations (OpenAI/Gemini) and adjust prompt behavior.' },
              { step: 'Step 4', title: 'Generate Leads Automatically', desc: 'Let the agent close appointments, qualify buyers, and capture user leads 24/7.' }
            ].map((node, i) => (
              <div key={i} className="relative z-10 flex flex-col items-center">
                <div className="w-16 h-16 rounded-2xl bg-slate-900 border border-white/10 flex items-center justify-center text-emerald-400 font-extrabold text-lg mb-6 shadow-xl group hover:border-emerald-500/50 transition-all duration-300">
                  {i + 1}
                </div>
                <span className="text-[10px] uppercase font-extrabold tracking-widest text-emerald-400 mb-2">{node.step}</span>
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
              Highly Lucrative Across All Niches
            </h2>
            <p className="text-slate-300 max-w-lg mx-auto">
              Sell WhatsApp bot automation services to client companies in massive, high-paying industries.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-6">
            {[
              { title: 'Real Estate', desc: 'Qualify property buyers automatically, collect budget expectations, and log booking dates.', icon: '🏢' },
              { title: 'Clinics', desc: 'Book medical appointments 24/7, check patient availability, and answer generic prep inquiries.', icon: '🩺' },
              { title: 'Coaching Institutes', desc: 'Handle massive student program inquiries instantly, share brochures, and collect contact sheets.', icon: '🎓' },
              { title: 'Travel Agencies', desc: 'Automate customized trip bookings, generate itineraries, and capture vacation preferences.', icon: '✈️' },
              { title: 'Digital Agencies', desc: 'Sell custom AI automation services as a agency retainer, driving massive markup profits.', icon: '💼' },
              { title: 'E-commerce', desc: 'Recover abandoned checkout carts, send tracking codes, and handle general returns logic.', icon: '🛒' }
            ].map((useCase, i) => (
              <motion.div 
                key={i}
                whileHover={{ scale: 1.02 }}
                className="glass-card p-3.5 sm:p-5 lg:p-6 rounded-xl sm:rounded-2xl text-left border border-white/5 flex flex-col justify-between hover:shadow-[0_0_30px_rgba(16,185,129,0.03)] bg-gradient-to-b from-slate-900/50 to-slate-950/80"
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
              Why Buy Source Code Instead Of SaaS
            </h2>
            <p className="text-slate-300 max-w-lg mx-auto">
              Compare the freedom and economics of hosting the product code yourself versus subscribing to monthly SaaS templates.
            </p>
          </div>

          <div className="glass border border-white/10 rounded-2xl overflow-hidden shadow-2xl">
            <table className="w-full text-left text-xs md:text-sm bg-slate-950/40">
              <thead>
                <tr className="bg-white/5 border-b border-white/10 text-slate-300 font-bold uppercase text-[10px] tracking-wider">
                  <th className="p-4">Feature</th>
                  <th className="p-4">Standard SaaS Subscriptions</th>
                  <th className="p-4 bg-emerald-500/10 text-emerald-400 border-l border-r border-emerald-500/20">Own the Source Code</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                {[
                  { feature: 'Monthly Fees', saas: '₹5,000 – ₹15,000 / mo', code: '₹0 (One-Time Payment)', highlighted: true },
                  { feature: 'Branding Control', saas: 'Limited (Powered by logo)', code: '100% Full Custom White Label', highlighted: true },
                  { feature: 'Source Ownership', saas: 'No Access (Locked on cloud)', code: 'Complete Codebase Access', highlighted: true },
                  { feature: 'Client Reselling', saas: 'Forbidden or extra charges', code: 'Allowed to resell infinitely', highlighted: true },
                  { feature: 'Customization', saas: 'Only standard parameters', code: 'Modify everything, add any features', highlighted: true },
                  { feature: 'Lifetime Access', saas: 'Expires if subscription cancels', code: 'Own forever, host anywhere', highlighted: true }
                ].map((row, idx) => (
                  <tr key={idx} className="hover:bg-white/[0.02] transition-colors">
                    <td className="p-4 font-bold text-white">{row.feature}</td>
                    <td className="p-4 text-slate-300 font-medium">{row.saas}</td>
                    <td className="p-4 bg-emerald-500/5 text-emerald-300 font-bold border-l border-r border-emerald-500/10">
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
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
              You get complete access to a production-ready software environment. No missing modules, no lock-ins.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-12 gap-3 sm:gap-6 max-w-5xl mx-auto">
            {/* Bento Card 1: Frontend */}
            <div className="col-span-1 md:col-span-8 glass-card p-3.5 sm:p-5 lg:p-6 rounded-xl sm:rounded-2xl border border-white/5 bg-slate-900/40 text-left flex flex-col justify-between min-h-[140px] sm:min-h-[200px]">
              <div>
                <Code className="w-5 h-5 sm:w-8 sm:h-8 text-emerald-400 mb-2 sm:mb-4" />
                <h3 className="text-xs sm:text-base md:text-lg font-bold text-white">Next.js 15 Premium Frontend</h3>
                <p className="text-[10px] sm:text-xs md:text-sm text-slate-300 leading-relaxed mt-1 sm:mt-2">
                  A gorgeous, dark-themed responsive dashboard UI with dashboard statistics panel, conversation overrides screen, lead tables, and training configurations interface. Built using Tailwind CSS & Framer Motion.
                </p>
              </div>
              <span className="text-[8px] sm:text-[10px] text-emerald-400 font-bold mt-2 sm:mt-4 uppercase">White-Label Configured</span>
            </div>

            {/* Bento Card 2: Backend */}
            <div className="col-span-1 md:col-span-4 glass-card p-3.5 sm:p-5 lg:p-6 rounded-xl sm:rounded-2xl border border-white/5 bg-slate-900/40 text-left flex flex-col justify-between min-h-[140px] sm:min-h-[200px]">
              <div>
                <Layers className="w-5 h-5 sm:w-8 sm:h-8 text-emerald-400 mb-2 sm:mb-4" />
                <h3 className="text-xs sm:text-base md:text-lg font-bold text-white">Node.js API Server</h3>
                <p className="text-[10px] sm:text-xs md:text-sm text-slate-300 leading-relaxed mt-1 sm:mt-2">
                  Complete robust backend logic code routing API calls, connecting databases, and parsing webhook responses from phone clients.
                </p>
              </div>
              <span className="text-[8px] sm:text-[10px] text-emerald-400 font-bold mt-2 sm:mt-4 uppercase">TypeScript Ready</span>
            </div>

            {/* Bento Card 3: WhatsApp integration */}
            <div className="col-span-1 md:col-span-4 glass-card p-3.5 sm:p-5 lg:p-6 rounded-xl sm:rounded-2xl border border-white/5 bg-slate-900/40 text-left flex flex-col justify-between min-h-[140px] sm:min-h-[200px]">
              <div>
                <MessageSquare className="w-5 h-5 sm:w-8 sm:h-8 text-emerald-400 mb-2 sm:mb-4" />
                <h3 className="text-xs sm:text-base md:text-lg font-bold text-white">WhatsApp API Engine</h3>
                <p className="text-[10px] sm:text-xs md:text-sm text-slate-300 leading-relaxed mt-1 sm:mt-2">
                  Pre-configured wrapper classes communicating with official & local WhatsApp gateway modules.
                </p>
              </div>
              <span className="text-[8px] sm:text-[10px] text-emerald-400 font-bold mt-2 sm:mt-4 uppercase">QR Code Webhook Sync</span>
            </div>

            {/* Bento Card 4: OpenAI/Gemini */}
            <div className="col-span-1 md:col-span-8 glass-card p-3.5 sm:p-5 lg:p-6 rounded-xl sm:rounded-2xl border border-white/5 bg-slate-900/40 text-left flex flex-col justify-between min-h-[140px] sm:min-h-[200px]">
              <div>
                <Sparkles className="w-5 h-5 sm:w-8 sm:h-8 text-emerald-400 mb-2 sm:mb-4" />
                <h3 className="text-xs sm:text-base md:text-lg font-bold text-white">Dual AI Core (OpenAI + Gemini)</h3>
                <p className="text-[10px] sm:text-xs md:text-sm text-slate-300 leading-relaxed mt-1 sm:mt-2">
                  Instantly switch language models based on speed or quality preferences. Code implements structured outputs parser ensuring prompt criteria variables (pricing, times) extract successfully.
                </p>
              </div>
              <span className="text-[8px] sm:text-[10px] text-emerald-400 font-bold mt-2 sm:mt-4 uppercase">Structured JSON Outputs</span>
            </div>

            {/* Bento Card 5: Guides */}
            <div className="col-span-1 md:col-span-6 glass-card p-3.5 sm:p-5 lg:p-6 rounded-xl sm:rounded-2xl border border-white/5 bg-slate-900/40 text-left flex flex-col justify-between min-h-[140px] sm:min-h-[200px]">
              <div>
                <GraduationCap className="w-5 h-5 sm:w-8 sm:h-8 text-emerald-400 mb-2 sm:mb-4" />
                <h3 className="text-xs sm:text-base md:text-lg font-bold text-white">Deploy Guide & Videos</h3>
                <p className="text-[10px] sm:text-xs md:text-sm text-slate-300 leading-relaxed mt-1 sm:mt-2">
                  Clear step-by-step setup guides showing how to host code files on a standard VPS server (like Vercel, Render, or Hostinger) in minutes.
                </p>
              </div>
              <span className="text-[8px] sm:text-[10px] text-emerald-400 font-bold mt-2 sm:mt-4 uppercase">No-code Deploy Script Included</span>
            </div>

            {/* Bento Card 6: License */}
            <div className="col-span-1 md:col-span-6 glass-card p-3.5 sm:p-5 lg:p-6 rounded-xl sm:rounded-2xl border border-white/5 bg-slate-900/40 text-left flex flex-col justify-between min-h-[140px] sm:min-h-[200px]">
              <div>
                <ShieldCheck className="w-5 h-5 sm:w-8 sm:h-8 text-emerald-400 mb-2 sm:mb-4" />
                <h3 className="text-xs sm:text-base md:text-lg font-bold text-white">Commercial Rights License</h3>
                <p className="text-[10px] sm:text-xs md:text-sm text-slate-300 leading-relaxed mt-1 sm:mt-2">
                  A signed digital certificate granting permission to modify, brand, and sell instance subscriptions to client companies globally.
                </p>
              </div>
              <span className="text-[8px] sm:text-[10px] text-emerald-400 font-bold mt-2 sm:mt-4 uppercase">Unlimited Resell Rights</span>
            </div>
          </div>
        </section>



        {/* ───────────── TESTIMONIALS SECTION ───────────── */}
        <section id="testimonials" className="scroll-mt-24 py-16 text-center">
          <div className="space-y-4 mb-12">
            <h2 className="text-3xl md:text-5xl font-extrabold text-white">
              Success Stories From Agency Owners
            </h2>
            <p className="text-slate-300 max-w-lg mx-auto">
              Read how developers, side-hustlers, and agencies leverage this automation source code to land recurring monthly clients.
            </p>
          </div>

          <div className="relative w-full overflow-hidden py-4 mask-grad max-w-7xl mx-auto">
            <div className="flex gap-6 animate-marquee">
              {[
                {
                  name: 'Swapnil Agarkhedkar',
                  role: 'The Blue Intellect, Pune',
                  text: 'Deploying this WhatsApp automation code has completely revolutionized how we handle student inquiries and service qualifications. We closed three high-ticket retainers inside our first month. The setup guide made Vercel deployment seamless.'
                },
                {
                  name: 'Parth Kore',
                  role: 'SAP TechnoEditors',
                  text: 'Owning the full source code gave us 100% control over custom CRM databases and flow configurations. We white-labeled the dashboard and sold it to two major enterprise clients. A highly recommended, top-tier codebase.'
                },
                {
                  name: 'Gaurav Nikam',
                  role: 'ddigipeddle technologies',
                  text: 'The white-label dashboard and WhatsApp broadcast features allowed us to offer a completely custom automation package to our retail clients. Setup was extremely straightforward, and our clients love the real-time analytics.'
                },
                {
                  name: 'Kalpesh Patil',
                  role: 'Sanavitas Enterprises',
                  text: 'An absolute game changer for our customer acquisition funnel. Integrating OpenAI capabilities directly inside the chat has allowed us to qualify leads 24/7 without needing full-time sales representatives.'
                },
                {
                  name: 'Yogesh Salunkhe',
                  role: 'Pyramid Agro Exports',
                  text: 'Automating our international export inquiries with Google Gemini integration has cut down response times to seconds. Leads are captured instantly and synced straight into our spreadsheet dashboard.'
                },
                {
                  name: 'Pravin Adik',
                  role: 'Afresca',
                  text: 'Owning this white-label code has allowed us to build custom WhatsApp appointment workflows for wellness clinics. The ROI on this codebase purchase is incredible. We host everything on our own VPS.'
                },
                {
                  name: 'Mayur Amrutkar',
                  role: 'Digiworld Infotech',
                  text: 'Outstanding backend logic and Next.js frontend code quality. We have successfully deployed this SaaS setup for three different local businesses, generating recurring monthly retainers effortlessly.'
                }
              ].concat([
                {
                  name: 'Swapnil Agarkhedkar',
                  role: 'The Blue Intellect, Pune',
                  text: 'Deploying this WhatsApp automation code has completely revolutionized how we handle student inquiries and service qualifications. We closed three high-ticket retainers inside our first month. The setup guide made Vercel deployment seamless.'
                },
                {
                  name: 'Parth Kore',
                  role: 'SAP TechnoEditors',
                  text: 'Owning the full source code gave us 100% control over custom CRM databases and flow configurations. We white-labeled the dashboard and sold it to two major enterprise clients. A highly recommended, top-tier codebase.'
                },
                {
                  name: 'Gaurav Nikam',
                  role: 'ddigipeddle technologies',
                  text: 'The white-label dashboard and WhatsApp broadcast features allowed us to offer a completely custom automation package to our retail clients. Setup was extremely straightforward, and our clients love the real-time analytics.'
                },
                {
                  name: 'Kalpesh Patil',
                  role: 'Sanavitas Enterprises',
                  text: 'An absolute game changer for our customer acquisition funnel. Integrating OpenAI capabilities directly inside the chat has allowed us to qualify leads 24/7 without needing full-time sales representatives.'
                },
                {
                  name: 'Yogesh Salunkhe',
                  role: 'Pyramid Agro Exports',
                  text: 'Automating our international export inquiries with Google Gemini integration has cut down response times to seconds. Leads are captured instantly and synced straight into our spreadsheet dashboard.'
                },
                {
                  name: 'Pravin Adik',
                  role: 'Afresca',
                  text: 'Owning this white-label code has allowed us to build custom WhatsApp appointment workflows for wellness clinics. The ROI on this codebase purchase is incredible. We host everything on our own VPS.'
                },
                {
                  name: 'Mayur Amrutkar',
                  role: 'Digiworld Infotech',
                  text: 'Outstanding backend logic and Next.js frontend code quality. We have successfully deployed this SaaS setup for three different local businesses, generating recurring monthly retainers effortlessly.'
                }
              ]).map((testi, i) => (
                <div 
                  key={i}
                  className="glass-card p-5 sm:p-6 rounded-2xl border border-white/5 text-left bg-gradient-to-br from-slate-900/50 to-slate-950/80 flex flex-col justify-between w-[280px] sm:w-[350px] md:w-[380px] shrink-0 select-none hover:border-emerald-500/25 transition-all duration-300"
                >
                  <div className="space-y-4">
                    <div className="flex gap-1 text-emerald-400">
                      {[...Array(5)].map((_, idx) => <Star key={idx} className="w-3.5 h-3.5 fill-current" />)}
                    </div>
                    <p className="text-xs sm:text-sm text-slate-200 italic leading-relaxed">"{testi.text}"</p>
                  </div>
                  <div className="flex items-center gap-3 mt-6 pt-4 border-t border-white/5">
                    <div className="w-8 h-8 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 font-extrabold text-xs">
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
                q: 'Do I need coding knowledge?',
                a: 'Basic knowledge of JavaScript & API configuration is helpful, but not strictly required. We provide a completely detailed setup guide and detailed step-by-step videos. You can deploy this to hosting providers like Vercel & Render with just a few button clicks.'
              },
              {
                q: 'Can I rebrand it?',
                a: 'Yes, absolutely! The license allows you to remove all of our branding, use your own business logo, connect a custom domain name, customize colors, and sell the interface platform subscriptions under your custom label.'
              },
              {
                q: 'Can I sell it to clients?',
                a: 'Yes! The Commercial & Agency resell rights allow you to install the automation engine for as many clients as you want. You can bill them setup fees + monthly retainers, keeping 100% of all profits.'
              },
              {
                q: 'Does it support OpenAI?',
                a: 'Yes! The codebase integrates natively with OpenAI APIs. You can connect your API key to power conversational replies using standard models like GPT-4o.'
              },
              {
                q: 'Does it support Gemini?',
                a: 'Yes! Google Gemini API models (including Gemini 1.5 Pro and Flash) are configured out-of-the-box. Enjoy extremely low-latency messaging and highly competitive API pricing.'
              },
              {
                q: 'Can I host it on VPS?',
                a: 'Yes! You can host the entire system on any VPS server (Hostinger, AWS, DigitalOcean, etc.). We include an outline guide detailing server setup protocols.'
              },
              {
                q: 'Will I get updates?',
                a: 'Yes, lifetime ownership includes access to all future version updates. We periodically patch the codebase to ensure compatibility with WhatsApp API standard updates.'
              },
              {
                q: 'How quickly can I launch?',
                a: 'Most users get the code deployed, configure keys, connect phone QR codes, and start automating chats in under 2 hours.'
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
          <div className="absolute inset-0 bg-emerald-500/10 blur-[120px] rounded-full pointer-events-none z-0" />
          
          <div className="relative z-10 bg-slate-950/80 border border-white/10 rounded-3xl p-8 md:p-12 lg:p-16 shadow-2xl flex flex-col items-center max-w-4xl mx-auto space-y-8">
            <span className="bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs px-3 py-1 rounded-full font-bold uppercase tracking-wider">Start Today</span>
            
            <h2 className="text-3xl md:text-5xl font-extrabold text-white max-w-2xl leading-tight">
              Start Your AI Automation Business Today
            </h2>
            
            <p className="text-slate-200 max-w-xl mx-auto text-sm md:text-base">
              Get instant lifetime downloads access. Launch, customize, and sell AI WhatsApp automation under your own brand. No monthly hosting fees, no seat lock-ins.
            </p>

            <div className="flex flex-row items-center justify-center gap-2.5 sm:gap-4 w-full">
              <Link 
                href={CHECKOUT_URL}
                onClick={trackLead}
                className="shimmer-btn heartbeat-btn group px-4 py-3 sm:px-8 sm:py-4 bg-gradient-to-r from-[#25D366] via-emerald-400 to-[#128C7E] hover:from-[#20bd5a] hover:via-emerald-500 hover:to-[#0f7c6e] text-white font-extrabold rounded-xl sm:rounded-2xl flex items-center justify-center gap-1.5 sm:gap-3 shadow-xl shadow-emerald-500/20 transition-all duration-300 active:scale-95 text-center text-xs sm:text-base flex-1 sm:flex-none"
              >
                Get Instant Access
                <ArrowRight className="w-3.5 h-3.5 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <a 
                href="#demo-video"
                className="shimmer-btn px-4 py-3 sm:px-8 sm:py-4 bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 hover:text-emerald-400 text-white font-semibold rounded-xl sm:rounded-2xl flex items-center justify-center gap-1.5 sm:gap-2 transition-all duration-300 active:scale-95 text-center text-xs sm:text-base flex-1 sm:flex-none"
              >
                Book Demo
              </a>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full pt-6 border-t border-white/5 text-xs text-slate-300">
              {['✓ Lifetime Access', '✓ Commercial License', '✓ One-Time Payment', '✓ White Label Rights'].map((badge, i) => (
                <div key={i} className="flex items-center justify-center gap-1.5 font-semibold text-emerald-400">
                  <span>{badge}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ───────────── OUR MORE PRODUCTS ───────────── */}
        <section className="py-16 border-t border-white/5 scroll-mt-24 max-w-5xl mx-auto">
          <div className="text-center space-y-4 mb-12">
            <span className="bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs px-3.5 py-1.5 rounded-full font-bold uppercase tracking-wider">
              More Software Solutions
            </span>
            <h2 className="text-3xl md:text-5xl font-extrabold text-white">
              Explore Our More <span className="bg-gradient-to-r from-[#25D366] via-emerald-400 to-[#128C7E] bg-clip-text text-transparent">White-Label Products</span>
            </h2>
            <p className="text-slate-300 max-w-lg mx-auto text-xs md:text-sm leading-relaxed">
              Expand your software agency portfolio. Download complete source codes for our other high-converting, premium automation systems.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: 'AI Local Lead Extractor',
                desc: 'Extract and scrape high-paying local business leads directly from Google Maps and business directories. Includes outreach tracking.',
                tag: '75% OFF',
                regularPrice: '₹19,999',
                offerPrice: '₹4,999',
                link: CHECKOUT_URL,
                icon: <Search className="w-6 h-6 text-emerald-400" />
              },
              {
                title: 'AI Cold Email Auto-Pilot',
                desc: 'Configure advanced multi-channel cold email and DM workflows. Automatically crafts hyper-personalized context sequences that convert.',
                tag: '80% OFF',
                regularPrice: '₹49,999',
                offerPrice: '₹9,999',
                link: CHECKOUT_URL,
                icon: <Send className="w-6 h-6 text-emerald-400" />
              },
              {
                title: 'AI Social Media Copilot',
                desc: 'Auto-generate graphics, schedule copy captions, and publish directly to Facebook, Instagram, LinkedIn, and Twitter in 1 click.',
                tag: '60% OFF',
                regularPrice: '₹19,999',
                offerPrice: '₹7,999',
                link: CHECKOUT_URL,
                icon: <Share2 className="w-6 h-6 text-emerald-400" />
              }
            ].map((prod, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -5, borderColor: 'rgba(16,185,129,0.3)', boxShadow: '0 10px 30px rgba(16,185,129,0.05)' }}
                className="bg-slate-950/60 border border-white/5 p-6 rounded-2xl flex flex-col justify-between text-left transition-all duration-300 relative overflow-hidden"
              >
                {/* Offer tag badge at top right */}
                <div className="absolute top-4 right-4 bg-red-600 text-white text-[10px] font-black uppercase px-2 py-0.5 rounded shadow-md shadow-red-600/20">
                  {prod.tag}
                </div>

                <div className="space-y-3">
                  <div className="w-12 h-12 rounded-xl bg-emerald-500/10 flex items-center justify-center mb-2">
                    {prod.icon}
                  </div>
                  <h3 className="text-lg font-bold text-white tracking-tight">{prod.title}</h3>
                  <p className="text-xs text-slate-300 leading-relaxed min-h-[60px]">{prod.desc}</p>
                </div>

                <div className="mt-6 pt-4 border-t border-white/5 flex flex-col gap-4">
                  <div className="flex justify-between items-end">
                    <div className="flex flex-col">
                      <span className="text-[9px] text-slate-500 font-medium uppercase tracking-wider">Regular Price</span>
                      <span className="text-xs text-slate-400 line-through font-mono font-semibold">{prod.regularPrice}</span>
                    </div>
                    <div className="flex flex-col text-right">
                      <span className="text-[9px] text-emerald-400 font-bold uppercase tracking-wider">Lifetime Price</span>
                      <span className="text-lg font-black text-emerald-400 font-mono leading-none">{prod.offerPrice}</span>
                    </div>
                  </div>
                  
                  <Link
                    href={prod.link}
                    onClick={trackLead}
                    className="shimmer-btn w-full py-2.5 bg-white/5 border border-white/10 hover:bg-gradient-to-r hover:from-[#25D366] hover:to-[#128C7E] hover:border-transparent text-white hover:text-white text-xs font-bold rounded-xl text-center transition-all duration-300"
                  >
                    Get Code License
                  </Link>
                </div>
              </motion.div>
            ))}
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
                <div className="w-8 h-8 rounded-lg bg-gradient-to-r from-[#25D366] via-emerald-400 to-[#128C7E] flex items-center justify-center text-white font-extrabold text-xs">WA</div>
                <div className="text-left">
                  <span className="text-xs font-bold text-white block">White Label AI WhatsApp Automation</span>
                  <span className="text-[10px] text-emerald-400 font-bold block">₹54,999 Value Bonuses Included Free</span>
                </div>
              </div>
              <div className="flex-1 md:flex-none flex items-center justify-end gap-3 w-full md:w-auto">
                <div className="hidden sm:block text-right">
                  <span className="text-[10px] text-slate-300 line-through block">Regular Price: ₹1,49,999</span>
                  <span className="text-xs font-extrabold text-white block">Secure Lifetime Ownership Now</span>
                </div>
                <Link 
                  href={CHECKOUT_URL}
                  onClick={trackLead}
                  className="shimmer-btn heartbeat-btn px-6 py-2.5 bg-gradient-to-r from-[#25D366] via-emerald-400 to-[#128C7E] hover:from-[#20bd5a] hover:via-emerald-500 hover:to-[#0f7c6e] text-white font-extrabold rounded-xl text-xs md:text-sm shadow-lg shadow-emerald-500/20 active:scale-95 transition-transform flex-1 sm:flex-none text-center"
                >
                  Buy Source Code
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
              {/* Corner Glowing Blur */}
              <div className="absolute -top-12 -left-12 w-32 h-32 bg-emerald-500/20 blur-[30px] rounded-full pointer-events-none" />
              
              <button 
                onClick={() => setShowExitIntent(false)}
                className="absolute top-4 right-4 text-slate-400 hover:text-white transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="space-y-6">
                <div className="w-12 h-12 rounded-xl bg-emerald-500/10 flex items-center justify-center text-emerald-400">
                  <AlertCircle className="w-6 h-6" />
                </div>

                <div className="space-y-2">
                  <h3 className="text-xl md:text-2xl font-extrabold text-white">Wait! Don't Leave Empty Handed</h3>
                  <p className="text-xs md:text-sm text-slate-300 leading-relaxed">
                    Secure the complete source code, commercial reselling rights, and all 5 bonuses before the price increases next hour. Keep 100% of reselling profit forever.
                  </p>
                </div>

                <div className="bg-white/5 border border-white/5 p-4 rounded-xl space-y-2 text-xs text-slate-300">
                  <div className="flex justify-between font-bold">
                    <span className="text-white">AI WhatsApp Automation Source Code</span>
                    <span className="text-emerald-400 font-extrabold">Included</span>
                  </div>
                  <div className="flex justify-between text-slate-300">
                    <span>6 Strategy Bonus Bundles</span>
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
                    className="shimmer-btn heartbeat-btn px-4 py-3 bg-gradient-to-r from-[#25D366] via-emerald-400 to-[#128C7E] hover:from-[#20bd5a] hover:via-emerald-500 hover:to-[#0f7c6e] text-white font-extrabold rounded-xl text-xs md:text-sm flex-1 text-center shadow-lg shadow-emerald-500/20 active:scale-95 transition-transform"
                  >
                    Get Instant Access
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
              <div className="absolute -top-12 -left-12 w-32 h-32 bg-emerald-500/20 blur-[30px] rounded-full pointer-events-none" />
              
              <button 
                onClick={() => setShowPrivacyModal(false)}
                className="absolute top-4 right-4 text-slate-400 hover:text-white transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="space-y-6">
                <div className="w-12 h-12 rounded-xl bg-emerald-500/10 flex items-center justify-center text-emerald-400">
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
                  className="w-full py-3 bg-gradient-to-r from-[#25D366] via-emerald-400 to-[#128C7E] text-white font-extrabold rounded-xl text-xs md:text-sm shadow-lg shadow-emerald-500/20 active:scale-95 transition-transform"
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
              <div className="absolute -top-12 -left-12 w-32 h-32 bg-emerald-500/20 blur-[30px] rounded-full pointer-events-none" />
              
              <button 
                onClick={() => setShowRefundModal(false)}
                className="absolute top-4 right-4 text-slate-400 hover:text-white transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="space-y-6">
                <div className="w-12 h-12 rounded-xl bg-emerald-500/10 flex items-center justify-center text-emerald-400">
                  <AlertCircle className="w-6 h-6" />
                </div>

                <div className="space-y-4">
                  <h3 className="text-xl md:text-2xl font-extrabold text-white">Refund Policy</h3>
                  <div className="text-xs md:text-sm text-slate-300 space-y-3 leading-relaxed">
                    <p className="text-emerald-400 font-bold">
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
                  className="w-full py-3 bg-gradient-to-r from-[#25D366] via-emerald-400 to-[#128C7E] text-white font-extrabold rounded-xl text-xs md:text-sm shadow-lg shadow-emerald-500/20 active:scale-95 transition-transform"
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
              className="bg-slate-900 border border-emerald-500/20 p-6 md:p-8 rounded-3xl max-w-md w-full relative overflow-hidden shadow-[0_0_50px_rgba(16,185,129,0.15)] text-left"
            >
              {/* Corner Glowing Blur */}
              <div className="absolute -top-12 -left-12 w-32 h-32 bg-emerald-500/20 blur-[30px] rounded-full pointer-events-none" />
              
              <button 
                onClick={() => setShowPromoModal(false)}
                className="absolute top-4 right-4 text-slate-400 hover:text-white transition-colors p-1 rounded-full hover:bg-white/5"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="space-y-6">
                <div className="w-12 h-12 rounded-xl bg-emerald-500/10 flex items-center justify-center text-emerald-400">
                  <Sparkles className="w-6 h-6 animate-pulse" />
                </div>

                <div className="space-y-2">
                  <h3 className="text-xl md:text-2xl font-extrabold text-white leading-tight">Why Own the Source Code?</h3>
                  <p className="text-xs md:text-sm text-slate-300">
                    Host it yourself, rebrand it completely, and start your own AI WhatsApp Automation SaaS in under 24 hours.
                  </p>
                </div>

                {/* Key Importance Benefits List */}
                <div className="space-y-3 pt-2">
                  {[
                    { title: "100% White-Label Branding", desc: "Use your logo, custom domain, and keep 100% of SaaS profits." },
                    { title: "No Recurring Markups", desc: "Pay once and run it forever. Zero licensing fees per client." },
                    { title: "Dual AI Integration", desc: "Configured for OpenAI GPT-4o & Google Gemini 1.5 Pro." },
                    { title: "Value Strategy Bonuses Included", desc: "Get setup guides, lead gen tools, and sales templates (Worth ₹54,999)." }
                  ].map((benefit, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
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
                    className="shimmer-btn heartbeat-btn px-4 py-3 bg-gradient-to-r from-[#25D366] via-emerald-400 to-[#128C7E] hover:from-[#20bd5a] hover:via-emerald-500 hover:to-[#0f7c6e] text-white font-extrabold rounded-xl text-xs md:text-sm flex-1 text-center shadow-lg shadow-emerald-500/25 active:scale-95 transition-transform whitespace-nowrap"
                  >
                    Get License
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
            className="fixed bottom-24 right-6 z-50 p-3 bg-gradient-to-r from-[#25D366] via-emerald-400 to-[#128C7E] text-white rounded-full shadow-xl shadow-emerald-500/20 cursor-pointer border border-white/10 hover:scale-105 transition-all"
            aria-label="Scroll to top"
          >
            <ArrowUp className="w-5 h-5 stroke-[3px]" />
          </motion.button>
        )}
      </AnimatePresence>

    </div>
  );
}
