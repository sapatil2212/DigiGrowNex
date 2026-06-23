'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Globe, Code, Smartphone, PenTool, MapPin, Share2, Search, ArrowRight, MessageSquare, Cpu, Calendar } from 'lucide-react';

const services = [
  {
    title: 'Website Development',
    desc: 'Custom corporate websites and SaaS portals.',
    subdesc: 'We design and code fast, mobile-friendly websites using Next.js/React, ensuring optimal SEO indexability and modern aesthetics.',
    icon: Globe,
    href: '/website-development'
  },
  {
    title: 'AI Automation & Workflows',
    desc: 'Business intelligence and automated triggers.',
    subdesc: 'Deploy custom LLM cognitive models, auto-trigger tasks, and sync database entries to automate legacy process bottlenecks.',
    icon: Cpu,
    href: '/ai-automation'
  },
  {
    title: 'WhatsApp Business API Solutions',
    desc: 'Official, compliant messaging pipelines.',
    subdesc: 'Send order alerts, scheduled reminders, and coordinate customer service flows in strict compliance with Meta policies.',
    icon: MessageSquare,
    href: '/whatsapp-business-api'
  },
  {
    title: 'SEO Services',
    desc: 'Rank on Google Page 1 organically.',
    subdesc: 'Technical speed audits, structured schema markup, and outreach backlink building to secure free commercial traffic.',
    icon: Search,
    href: '/seo-services'
  },
  {
    title: 'Digital Marketing & Ads',
    desc: 'High-intent client search acquisition.',
    subdesc: 'Targeted Google Search campaigns, Meta scroll-stopping creative funnels, and optimized landing pages to boost sales ROI.',
    icon: Share2,
    href: '/digital-marketing'
  },
  {
    title: 'Graphic & Brand Design',
    desc: 'Bespoke corporate visual identity systems.',
    subdesc: 'Vector logo variants, style guidelines, typography books, social post templates, and print stationery assets.',
    icon: PenTool,
    href: '/graphic-design'
  },
  {
    title: 'Custom Softwares & CRM',
    desc: 'Internal dashboards and operations portals.',
    subdesc: 'Role-based access systems (RBAC) to handle client tickets, manage leads pipelines, and automate administrative tasks.',
    icon: Code,
    href: '/services/custom-software'
  },
  {
    title: 'Local Maps SEO',
    desc: 'Dominate regional search maps rankings.',
    subdesc: 'Optimize your Google Business Profile (GBP), manage positive client reviews, and align geo-directories listings uniform.',
    icon: MapPin,
    href: '/services/local-seo'
  }
];

export default function ServicesPage() {
  return (
    <main className="min-h-screen relative overflow-hidden bg-[#0a0a0a] text-fg selection:bg-accent selection:text-white">
      {/* Background patterns */}
      <div className="hero-dots" />
      <div className="hero-glow" />
      <div className="hero-glow-secondary" />

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
            <span className="text-xs font-semibold text-accent uppercase tracking-wider">Capabilities Catalog</span>
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-7xl font-bold tracking-tight mb-6 font-display"
          >
            Our Service <span className="gradient-text">Verticals</span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-base sm:text-lg text-muted max-w-2xl mx-auto leading-relaxed"
          >
            DigiGrowNex Technologies provides an end-to-end suite of development, automation, and marketing solutions to help you get the most out of your digital presence.
          </motion.p>
        </div>
      </section>

      {/* Services Grid Section */}
      <section className="pb-32 relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                className="glass-card rounded-2xl p-6 group cursor-default flex flex-col"
              >
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center text-accent mb-5 group-hover:scale-110 transition-transform">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-white mb-1 font-display">{item.title}</h3>
                <p className="text-accent text-sm font-medium mb-3">{item.desc}</p>
                <p className="text-sm text-muted leading-relaxed flex-1 mb-5">{item.subdesc}</p>
                <div className="mt-6 pt-5 border-t border-border/40 flex items-center justify-between">
                  <Link href={item.href} className="text-[13px] font-semibold text-accent flex items-center gap-1.5 hover:text-accent-light transition-colors group-hover:gap-2.5">
                    Learn more <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                  <Link href="/contact-us" className="glow-button px-4 py-2 text-[12px] font-semibold rounded-full text-white shadow-lg shadow-accent/20 transition-transform active:scale-95">
                    Book now
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden" style={{ borderTop: '1px solid var(--border)' }}>
        <div className="section-glow section-glow-top" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight font-display">
            Need a bespoke custom development plan?
          </h2>
          <p className="text-lg text-muted max-w-2xl mx-auto mb-10">
            Let's setup a design mapping session to outline database structure, APIs dependencies, and visual requirements.
          </p>
          <Link
            href="/contact-us"
            className="glow-button px-8 py-3.5 text-sm font-bold rounded-md inline-flex items-center gap-2 text-white"
            style={{ color: '#fff' }}
          >
            Book Free Consult
            <Calendar className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </main>
  );
}
