'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
    ArrowLeft, Search, Palette, PenTool, Rocket, CheckCircle2, 
    LayoutTemplate, BookOpen, Layers, Target, Package, Share2, 
    MonitorSmartphone, X, ZoomIn, ZoomOut, ChevronLeft, ChevronRight 
} from 'lucide-react';
import Link from 'next/link';

const steps = [
    { icon: Search, title: 'Business Discovery', desc: 'We begin by understanding your business goals, vision, target audience, and industry trends to define the soul of your brand.' },
    { icon: Palette, title: 'Color & Moodboard', desc: 'We explore color psychology and visual aesthetics to craft a bespoke palette that reflects your brand tone.' },
    { icon: Layers, title: 'Prototypes & Samples', desc: 'We create multiple sample designs—logos, typography systems, mockups, and layouts based on your feedback.' },
    { icon: Rocket, title: 'Final Brand Kit', desc: 'We provide finalized, high-resolution assets in all formats with a complete Brand Kit to maintain consistency.' },
];

const servicesList = [
    { icon: PenTool, title: 'Logo Creation', desc: 'Unique, memorable, and scalable logos that reflect your business values and resonate with your audience.' },
    { icon: BookOpen, title: 'Brand Guidelines', desc: 'Detailed rulebooks covering fonts, colors, logo usage, tone, and overall aesthetics to maintain consistency.' },
    { icon: LayoutTemplate, title: 'Business Stationery', desc: 'Professional Business Cards, Letterheads, Envelopes, and ID Cards for your daily operations.' },
    { icon: Layers, title: 'Brochure & Profiles', desc: 'Engaging brochures and company profiles that tell your story with clarity and style.' },
    { icon: Package, title: 'Packaging Design', desc: 'Aesthetic and functional packaging designs that help your products stand out on shelves and online stores.' },
    { icon: Target, title: 'Print Media Design', desc: 'Everything your brand needs for offline visibility: Flyers, Posters, Outdoor Banners, and Magazine Ads.' },
];

const whyUs = [
    { title: 'Creative Meets Strategy', desc: 'Every design is purposeful, impactful, and tailored to your brand goals.' },
    { title: 'Unique & Original Designs', desc: 'No templates. No repetition. Only custom-crafted brilliance.' },
    { title: 'Brand Consistency', desc: 'We think beyond one design — we build your entire visual identity.' },
    { title: 'Quick Turnaround', desc: 'Fast, flexible, and always deadline-ready for your campaigns.' },
    { title: 'Collaborative Approach', desc: 'We design with you, not just for you ensuring your vision comes true.' },
    { title: 'End-to-End Solutions', desc: 'From brand creation to digital and print media implementations.' },
];

const socialMediaPosts = [
    'https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&q=80&w=800',
    'https://images.unsplash.com/photo-1626785774573-4b799315345d?auto=format&fit=crop&q=80&w=800',
    'https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?auto=format&fit=crop&q=80&w=800',
    'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=800',
    'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=800'
];

export default function BrandingClient() {
  const [selectedIdx, setSelectedIdx] = useState<number | null>(null);
  const [scale, setScale] = useState(1);

  const nextImage = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (selectedIdx !== null) {
      setSelectedIdx((selectedIdx + 1) % socialMediaPosts.length);
      setScale(1);
    }
  };

  const prevImage = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (selectedIdx !== null) {
      setSelectedIdx((selectedIdx - 1 + socialMediaPosts.length) % socialMediaPosts.length);
      setScale(1);
    }
  };

  const zoomIn = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    setScale(prev => Math.min(prev + 0.5, 4));
  };

  const zoomOut = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    setScale(prev => Math.max(prev - 0.5, 1));
  };

  return (
    <div className="pt-32 pb-24 min-h-screen overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Back button */}
        <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}>
            <Link href="/" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-accent transition-colors mb-12">
            <ArrowLeft className="w-4 h-4" /> Back to Home
            </Link>
        </motion.div>

        {/* Hero Section */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-32 relative">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-[11px] font-bold tracking-widest uppercase mb-6 bg-accent/10 border border-accent/20 text-accent">
              From Idea to Identity
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold font-display text-slate-900 dark:text-white leading-tight mb-6">
              Crafting Creative Identities <span className="text-accent italic block mt-2">That Inspire</span>
            </h1>
            <p className="text-lg text-slate-600 dark:text-slate-400 mb-8 leading-relaxed">
              Graphic Designing is the art and science of visually communicating your brand's story, message, and values. We combine creativity, typography, color psychology, and layout to design compelling visuals that connect with your audience — both emotionally and functionally.
            </p>
            <Link href="/contact" className="glow-button inline-flex px-8 py-4 rounded-full text-white font-bold text-lg hover:scale-105 transition-transform duration-300">
              Start Your Design Journey
            </Link>
          </motion.div>
          <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="relative relative aspect-square md:aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl glass">
            <img src="https://images.unsplash.com/photo-1626785774573-4b799315345d?auto=format&fit=crop&q=80&w=1200" alt="Brand Identity Creation" className="w-full h-full object-cover" />
          </motion.div>
        </div>

        {/* What Is Branding */}
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="bg-slate-100 dark:bg-slate-900 rounded-[3rem] p-12 lg:p-20 relative overflow-hidden mb-32 border border-slate-200 dark:border-white/5">
            <div className="absolute top-0 right-0 w-96 h-96 bg-accent/10 blur-[100px] rounded-full"></div>
            <div className="max-w-3xl relative z-10">
                <h2 className="text-3xl lg:text-5xl font-bold text-slate-900 dark:text-white mb-6">What Is Branding — <span className="text-slate-500 dark:text-slate-400">And Why Does Your Business Need It?</span></h2>
                <div className="space-y-6 text-slate-700 dark:text-slate-300 text-lg leading-relaxed">
                    <p>Branding is more than a logo or a name — it's how your audience perceives your business. It's your first impression, your voice, your promise, and the emotional connection your customers form with your company.</p>
                    <p>In a competitive market, branding sets you apart. It builds trust, promotes loyalty, and helps customers remember you. Without branding, your business is just another option. With strategic branding, your business becomes the preferred choice.</p>
                </div>
            </div>
        </motion.div>

        {/* Step-by-Step Strategy */}
        <div className="mb-32">
            <div className="text-center max-w-3xl mx-auto mb-16">
                <h2 className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">Creative Branding Strategy</h2>
                <p className="text-slate-600 dark:text-slate-400 text-lg">At digigrownex, we turn ideas into impact through a structured, creative, and professional branding process.</p>
            </div>
            <div className="grid md:grid-cols-4 gap-8 relative">
                {/* Connecting Line */}
                <div className="hidden md:block absolute top-[45px] left-[10%] right-[10%] h-0.5 bg-gradient-to-r from-transparent via-accent/30 to-transparent"></div>
                
                {steps.map((step, i) => (
                    <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }} viewport={{ once: true }} className="relative z-10 flex flex-col items-center text-center">
                        <div className="w-24 h-24 rounded-full bg-white dark:bg-[#111] border border-slate-200 dark:border-white/10 shadow-xl flex items-center justify-center mb-6 relative">
                            <span className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-accent text-white flex items-center justify-center font-bold text-sm shadow-lg">{i + 1}</span>
                            <step.icon className="w-10 h-10 text-accent" />
                        </div>
                        <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">{step.title}</h3>
                        <p className="text-sm text-slate-600 dark:text-slate-400">{step.desc}</p>
                    </motion.div>
                ))}
            </div>
        </div>

        {/* Detailed Services Grid */}
        <div className="mb-32">
            <div className="mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">Creative Services for Your Business</h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {servicesList.map((srv, i) => (
                    <motion.div key={i} initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ delay: i * 0.05 }} viewport={{ once: true }} className="bg-slate-50 dark:bg-white/5 p-8 rounded-3xl border border-slate-100 dark:border-white/10 hover:border-accent/30 transition-colors group">
                        <srv.icon className="w-10 h-10 text-accent mb-6 group-hover:scale-110 transition-transform" />
                        <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">{srv.title}</h3>
                        <p className="text-slate-600 dark:text-slate-400">{srv.desc}</p>
                    </motion.div>
                ))}
            </div>
        </div>

        {/* Social Media Creatives / Sliders */}
        <div className="mb-32 bg-purple-50 dark:bg-[#0c0a11] rounded-[3rem] py-20 overflow-hidden relative border border-purple-100 dark:border-[#2d223c]">
            <div className="absolute top-0 right-0 w-96 h-96 bg-purple-500/10 blur-[100px] rounded-full"></div>
            <div className="text-center mb-16 relative z-10 px-4">
                <h2 className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">Engaging Social Media Posts</h2>
                <p className="text-slate-600 dark:text-slate-400 text-lg max-w-2xl mx-auto">Custom-designed posts tailored for maximum engagement. From carousel posts and reel covers to campaign-specific visuals.</p>
            </div>
            
            {/* The Infinite Horizontal Auto-Scroll Slider */}
            <div className="relative z-10 w-full overflow-hidden pt-4 pb-10 group before:absolute before:left-0 before:top-0 before:z-10 before:h-full before:w-[50px] md:before:w-[150px] before:bg-gradient-to-r before:from-purple-50 dark:before:from-[#0c0a11] before:to-transparent before:content-[''] after:absolute after:right-0 after:top-0 after:z-10 after:h-full after:w-[50px] md:after:w-[150px] after:bg-gradient-to-l after:from-purple-50 dark:after:from-[#0c0a11] after:to-transparent after:content-['']">
                <div className="flex w-max animate-marquee group-hover:[animation-play-state:paused]">
                    <div className="flex gap-4 pr-4">
                        {socialMediaPosts.map((img, i) => (
                            <div 
                              key={`set1-${i}`} 
                              onClick={() => { setSelectedIdx(i); setScale(1); }}
                              className="w-[60vw] sm:w-[40vw] md:w-[28vw] lg:w-[22vw] xl:w-[280px] shrink-0 aspect-square rounded-2xl overflow-hidden shadow-lg border border-white/5 hover:border-purple-500/50 hover:-translate-y-2 transition-all duration-300 cursor-zoom-in"
                            >
                                <img src={img} alt="Social Media Creative" className="w-full h-full object-cover" />
                            </div>
                        ))}
                    </div>
                    <div className="flex gap-4 pr-4" aria-hidden="true">
                        {socialMediaPosts.map((img, i) => (
                            <div 
                              key={`set2-${i}`} 
                              onClick={() => { setSelectedIdx(i); setScale(1); }}
                              className="w-[60vw] sm:w-[40vw] md:w-[28vw] lg:w-[22vw] xl:w-[280px] shrink-0 aspect-square rounded-2xl overflow-hidden shadow-lg border border-white/5 hover:border-purple-500/50 hover:-translate-y-2 transition-all duration-300 cursor-zoom-in"
                            >
                                <img src={img} alt="Social Media Creative" className="w-full h-full object-cover" />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            
            {/* Sub-features of Social */}
            <div className="grid md:grid-cols-3 gap-8 px-8 lg:px-16 mt-8 relative z-10">
                <div className="bg-white dark:bg-white/5 backdrop-blur-sm p-6 rounded-2xl border border-purple-200 dark:border-white/5 shadow-sm">
                    <MonitorSmartphone className="w-8 h-8 text-purple-500 dark:text-purple-400 mb-4" />
                    <h4 className="text-slate-900 dark:text-white font-bold mb-2">Cover & Profile Designs</h4>
                    <p className="text-slate-600 dark:text-slate-400 text-sm">First impressions matter. We design eye-catching and brand-consistent covers for every platform.</p>
                </div>
                <div className="bg-white dark:bg-white/5 backdrop-blur-sm p-6 rounded-2xl border border-purple-200 dark:border-white/5 shadow-sm">
                    <Share2 className="w-8 h-8 text-purple-500 dark:text-purple-400 mb-4" />
                    <h4 className="text-slate-900 dark:text-white font-bold mb-2">Campaign-Specific Creatives</h4>
                    <p className="text-slate-600 dark:text-slate-400 text-sm">Need visuals for a product launch or sale? We create campaigns that align with your voice.</p>
                </div>
                <div className="bg-white dark:bg-white/5 backdrop-blur-sm p-6 rounded-2xl border border-purple-200 dark:border-white/5 shadow-sm">
                    <Layers className="w-8 h-8 text-purple-500 dark:text-purple-400 mb-4" />
                    <h4 className="text-slate-900 dark:text-white font-bold mb-2">Carousel Post Design</h4>
                    <p className="text-slate-600 dark:text-slate-400 text-sm">Micro-stories that build curiosity, educate, entertain, and convert across Instagram & LinkedIn.</p>
                </div>
            </div>
        </div>

        {/* Why Choose Us */}
        <div className="mb-32">
            <div className="text-center mb-16">
                <h2 className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">Why Choose digigrownex for Graphic Designing?</h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {whyUs.map((item, i) => (
                    <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="flex items-start gap-4">
                        <div className="mt-1 shrink-0 bg-accent/10 p-2 rounded-xl">
                            <CheckCircle2 className="w-5 h-5 text-accent" />
                        </div>
                        <div>
                            <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-2">{item.title}</h4>
                            <p className="text-slate-600 dark:text-slate-400 text-sm">{item.desc}</p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>

      </div>

      {/* Lightbox / Modal */}
      <AnimatePresence>
        {selectedIdx !== null && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-sm flex items-center justify-center overflow-hidden"
            onClick={() => setSelectedIdx(null)}
          >
            {/* Top Controls */}
            <div className="absolute top-6 right-6 flex items-center gap-4 z-50">
                <button onClick={zoomIn} className="p-3 bg-white/10 hover:bg-white/20 text-white rounded-full backdrop-blur-md border border-white/10 transition-colors" title="Zoom In"><ZoomIn className="w-5 h-5"/></button>
                <button onClick={zoomOut} className="p-3 bg-white/10 hover:bg-white/20 text-white rounded-full backdrop-blur-md border border-white/10 transition-colors" title="Zoom Out"><ZoomOut className="w-5 h-5"/></button>
                <button onClick={() => setSelectedIdx(null)} className="p-3 bg-white/10 hover:bg-white/20 text-white rounded-full backdrop-blur-md border border-white/10 transition-colors"><X className="w-5 h-5"/></button>
            </div>

            {/* Navigation Buttons */}
            <button 
              onClick={prevImage}
              className="absolute left-6 top-1/2 -translate-y-1/2 p-4 bg-white/5 hover:bg-white/10 text-white rounded-full backdrop-blur-sm z-50 border border-white/5 transition-all"
            >
              <ChevronLeft className="w-8 h-8" />
            </button>
            <button 
              onClick={nextImage}
              className="absolute right-6 top-1/2 -translate-y-1/2 p-4 bg-white/5 hover:bg-white/10 text-white rounded-full backdrop-blur-sm z-50 border border-white/5 transition-all"
            >
              <ChevronRight className="w-8 h-8" />
            </button>

            {/* Main Image Container (Pannable/Zoomable) */}
            <div className="w-full h-full flex items-center justify-center p-4">
                <motion.div
                  key={selectedIdx}
                  drag={scale > 1}
                  dragConstraints={{ left: -500, right: 500, top: -500, bottom: 500 }}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: scale }}
                  transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                  className={`relative max-w-[90vw] max-h-[85vh] ${scale > 1 ? 'cursor-grab active:cursor-grabbing' : 'cursor-default'}`}
                  onClick={(e) => e.stopPropagation()}
                >
                    <img 
                      src={socialMediaPosts[selectedIdx]} 
                      alt="Full Preview" 
                      className="w-full h-full object-contain pointer-events-none rounded-lg shadow-2xl"
                    />
                </motion.div>
            </div>

            {/* Bottom Caption/Counter */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 px-6 py-2 bg-white/10 backdrop-blur-md rounded-full text-white/80 text-sm font-medium border border-white/10">
              {selectedIdx + 1} / {socialMediaPosts.length}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      
      {/* Custom Styles */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 25s linear infinite;
        }
      `}} />
    </div>
  );
}
