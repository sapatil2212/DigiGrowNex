'use client';

import Link from 'next/link';
import { ArrowRight, Check, Target, Award, TrendingUp, Sparkles, Heart, Zap, Shield, Laptop, Cpu, MessageSquare, Database, LineChart, Search, Palette, Users } from 'lucide-react';
import { motion } from 'framer-motion';

export default function AboutUsPage() {
  const coreServices = [
    { icon: <Laptop className="w-5 h-5 text-accent" />, title: 'Website Development', description: 'Bespoke, fast, responsive corporate websites and portals.' },
    { icon: <Cpu className="w-5 h-5 text-accent" />, title: 'SaaS Development', description: 'Scalable cloud software, billing nodes, and multi-tenant panels.' },
    { icon: <Cpu className="w-5 h-5 text-accent" />, title: 'AI Automation', description: 'Workflow automation, customized LLM tools, and automated triggers.' },
    { icon: <MessageSquare className="w-5 h-5 text-accent" />, title: 'WhatsApp Business Automation', description: 'Compliant notification templates, reminders, and support routing.' },
    { icon: <Database className="w-5 h-5 text-accent" />, title: 'CRM Solutions', description: 'Lead pipelines, client management hubs, and customer records.' },
    { icon: <LineChart className="w-5 h-5 text-accent" />, title: 'Lead Generation Systems', description: 'Optimized conversion paths and pipeline integrations.' },
    { icon: <LineChart className="w-5 h-5 text-accent" />, title: 'Digital Marketing', description: 'High-ROAS Meta Ads, Google PPC campaigns, and branding.' },
    { icon: <Search className="w-5 h-5 text-accent" />, title: 'SEO Services', description: 'On-page audits, technical optimizations, and organic search ranks.' },
    { icon: <Palette className="w-5 h-5 text-accent" />, title: 'Graphic Design', description: 'Brand books, corporate vectors, logos, and post formats.' },
  ];

  const valuePillars = [
    {
      icon: <Users className="w-6 h-6" />,
      title: 'Professional Team',
      description: 'Our certified engineers, digital marketers, and designers bring years of combined agency expertise to build robust solutions.',
    },
    {
      icon: <Heart className="w-6 h-6" />,
      title: 'Client-Centric Approach',
      description: 'Your growth is our goal. We work closely to align our technology systems with your target customer behaviors and business requirements.',
    },
    {
      icon: <Cpu className="w-6 h-6" />,
      title: 'AI-Driven Solutions',
      description: 'We integrate smart LLMs, cognitive bots, and advanced automated workflows to lower operating costs and boost productivity.',
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: 'Scalable Business Systems',
      description: 'We build applications with modular infrastructure, ready to scale from small teams to enterprise-level database volumes.',
    },
  ];

  const stats = [
    { value: '500+', label: 'Happy Clients' },
    { value: '1000+', label: 'Projects Completed' },
    { value: '95%', label: 'Client Retention' },
    { value: '10+', label: 'Years Experience' },
  ];

  return (
    <main className="min-h-screen relative overflow-hidden bg-[#0a0a0a] text-fg selection:bg-accent selection:text-white">
      {/* Background decoration */}
      <div className="hero-dots" />
      <div className="hero-glow" />
      <div className="hero-glow-secondary" />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 min-h-[70vh] flex items-center">
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent/10 border border-accent/20 mb-8"
            >
              <Sparkles className="w-4 h-4 text-accent" />
              <span className="text-xs font-semibold text-accent uppercase tracking-wider">AI Agency Overview</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-7xl font-bold tracking-tight leading-[1.1] font-display mb-6"
            >
              AI-Powered <span className="gradient-text">Digital Innovation</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-base sm:text-lg text-muted max-w-2xl mx-auto mb-10 leading-relaxed"
            >
              DigiGrowNex Technologies is a premier AI-powered digital agency. We construct high-converting websites, automate processes, build custom SaaS products, and run targeted SEO and growth campaigns.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-row items-center justify-center gap-3 sm:gap-4"
            >
              <Link
                href="/contact-us"
                className="glow-button px-6 py-3 text-sm font-bold rounded-md inline-flex items-center gap-2 text-white"
                style={{ color: '#fff' }}
              >
                Get Started
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/portfolio"
                className="px-6 py-3 text-sm font-medium text-fg rounded-md inline-flex items-center gap-2 transition-colors bg-surface-1 hover:bg-surface-2 border border-border"
              >
                View Our Work
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 relative" style={{ borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl lg:text-5xl font-bold gradient-text mb-2">{stat.value}</div>
                <div className="text-sm text-muted">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Services Section */}
      <section className="py-24 relative overflow-hidden" id="services">
        <div className="section-glow section-glow-top" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 font-display">
              Our Digital Capabilities
            </h2>
            <p className="text-muted max-w-2xl mx-auto">
              We offer end-to-end software engineering and marketing services to scale corporate performance.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {coreServices.map((service, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                className="glass-card rounded-2xl p-6 border border-border/50 flex gap-4 hover:border-accent/30 transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center shrink-0">
                  {service.icon}
                </div>
                <div>
                  <h3 className="text-base font-bold text-white mb-1.5">{service.title}</h3>
                  <p className="text-xs sm:text-sm text-muted leading-relaxed">{service.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Value Pillars Section */}
      <section className="py-24 relative overflow-hidden" style={{ borderTop: '1px solid var(--border)' }}>
        <div className="section-glow section-glow-right" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 font-display">
              Why DigiGrowNex Technologies?
            </h2>
            <p className="text-muted max-w-2xl mx-auto">
              Our business foundations guarantee high execution standards.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {valuePillars.map((pillar, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="glass-card rounded-2xl p-6 group hover:border-accent/30 transition-all"
              >
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center text-accent mb-5 group-hover:scale-110 transition-transform">
                  {pillar.icon}
                </div>
                <h3 className="text-lg font-bold text-white mb-3 font-display">{pillar.title}</h3>
                <p className="text-xs sm:text-sm text-muted leading-relaxed">{pillar.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-24 relative overflow-hidden" style={{ borderTop: '1px solid var(--border)' }}>
        <div className="section-glow section-glow-left" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="glass-card rounded-3xl p-8 lg:p-10 border border-border/50 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-accent/5 rounded-bl-full pointer-events-none" />
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-4 font-display flex items-center gap-3">
                <Target className="w-6 h-6 text-accent" />
                Our Mission
              </h3>
              <p className="text-sm sm:text-base text-muted leading-relaxed">
                To empower global enterprises by designing smart, high-performance web systems and AI workflows that streamline daily operations, expand brand authority, and maximize investment returns.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="glass-card rounded-3xl p-8 lg:p-10 border border-border/50 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-accent/5 rounded-bl-full pointer-events-none" />
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-4 font-display flex items-center gap-3">
                <Award className="w-6 h-6 text-accent" />
                Our Vision
              </h3>
              <p className="text-sm sm:text-base text-muted leading-relaxed">
                To become a trusted global partner in corporate digital acceleration, recognized for engineering secure cloud infrastructure, compliant customer engagement nodes, and intuitive AI-powered software products.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden" style={{ borderTop: '1px solid var(--border)' }}>
        <div className="section-glow section-glow-top" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight font-display">
            Ready to accelerate your growth?
          </h2>
          <p className="text-lg text-muted max-w-2xl mx-auto mb-10">
            Let's discuss how our custom software builds and AI automation pipelines can elevate your operation levels.
          </p>
          <Link
            href="/contact-us"
            className="glow-button px-8 py-3.5 text-sm font-bold rounded-md inline-flex items-center gap-2 text-white"
            style={{ color: '#fff' }}
          >
            Start Your Project
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </main>
  );
}
