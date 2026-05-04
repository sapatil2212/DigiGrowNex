'use client';

import Link from 'next/link';
import { ArrowRight, Check, Users, Target, Award, TrendingUp, Sparkles, Heart, Zap, Shield } from 'lucide-react';
import { motion } from 'framer-motion';

export default function AboutPage() {
  const values = [
    {
      icon: <Heart className="w-6 h-6" />,
      title: 'Client-First Approach',
      description: 'Your success is our success. We prioritize understanding your unique needs and delivering solutions that exceed expectations.',
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: 'Innovation & Excellence',
      description: 'We stay ahead of digital trends, constantly evolving our strategies to deliver cutting-edge solutions that drive results.',
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: 'Transparency & Trust',
      description: 'We believe in honest communication, clear reporting, and building long-term partnerships based on mutual trust.',
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: 'Results-Driven',
      description: 'Every strategy we implement is backed by data and focused on delivering measurable ROI for your business.',
    },
  ];

  const stats = [
    { value: '500+', label: 'Happy Clients' },
    { value: '1000+', label: 'Projects Completed' },
    { value: '95%', label: 'Client Retention' },
    { value: '10+', label: 'Years Experience' },
  ];

  const team = [
    { name: 'Swapnil Patil', role: 'Founder & CEO', description: 'Visionary leader with 10+ years in digital marketing' },
    { name: 'Priya Sharma', role: 'Creative Director', description: 'Award-winning designer specializing in brand identity' },
    { name: 'Rahul Mehta', role: 'Tech Lead', description: 'Full-stack expert building scalable web solutions' },
    { name: 'Anjali Desai', role: 'Marketing Strategist', description: 'Data-driven marketer with proven ROI track record' },
  ];

  const milestones = [
    { year: '2014', title: 'Company Founded', description: 'Started with a vision to transform digital marketing' },
    { year: '2016', title: 'First 100 Clients', description: 'Reached milestone of serving 100+ businesses' },
    { year: '2019', title: 'Award Recognition', description: 'Recognized as Top Digital Agency in Maharashtra' },
    { year: '2024', title: 'Global Expansion', description: 'Serving clients across 15+ countries worldwide' },
  ];

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="hero-bg relative pt-32 pb-20 lg:pt-40 lg:pb-28 min-h-[70vh] flex items-center">
        <div className="hero-dots" />
        <div className="hero-glow" />
        <div className="hero-glow-secondary" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent/10 border border-accent/20 mb-8"
            >
              <Sparkles className="w-4 h-4 text-accent" />
              <span className="text-xs font-medium text-accent">About DigiGrowNex</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-7xl font-bold tracking-tight leading-[1.1] font-display mb-6"
            >
              We Build <span className="gradient-text">Digital Success</span> Stories
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-base sm:text-lg text-muted max-w-2xl mx-auto mb-10 leading-relaxed"
            >
              DigiGrowNex is a full-service digital agency dedicated to helping businesses thrive in the digital age. From strategy to execution, we deliver results that matter.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-row items-center justify-center gap-3 sm:gap-4"
            >
              <Link
                href="/contact"
                className="glow-button px-6 py-3 text-sm font-semibold rounded-md inline-flex items-center gap-2"
                style={{ color: '#fff' }}
              >
                Get Started
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/portfolio"
                className="px-6 py-3 text-sm font-medium text-fg rounded-md inline-flex items-center gap-2 transition-colors"
                style={{ border: '1px solid var(--border)', background: 'var(--surface-1)' }}
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

      {/* Our Story Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="section-glow section-glow-top" />
        <div className="section-glow section-glow-left" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 font-display">
                Our Story
              </h2>
              <div className="space-y-4 text-muted leading-relaxed">
                <p>
                  Founded in 2014, DigiGrowNex started with a simple mission: to help businesses harness the power of digital marketing to achieve extraordinary growth.
                </p>
                <p>
                  What began as a small team of passionate digital marketers has evolved into a full-service agency serving clients across the globe. We've helped hundreds of businesses transform their online presence and achieve measurable results.
                </p>
                <p>
                  Today, we combine cutting-edge technology, creative excellence, and data-driven strategies to deliver solutions that don't just meet expectations—they exceed them.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="glass-card rounded-2xl p-8 lg:p-10"
            >
              <div className="space-y-6">
                {milestones.map((milestone, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="shrink-0 w-16 h-16 rounded-xl bg-accent/10 flex items-center justify-center text-accent font-bold text-sm">
                      {milestone.year}
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-white mb-1">{milestone.title}</h3>
                      <p className="text-sm text-muted">{milestone.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="section-glow section-glow-right" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 font-display">
              Our Core Values
            </h2>
            <p className="text-muted max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="glass-card rounded-2xl p-6 group hover:border-accent/30 transition-all"
              >
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center text-accent mb-5 group-hover:scale-110 transition-transform">
                  {value.icon}
                </div>
                <h3 className="text-lg font-bold text-white mb-3">{value.title}</h3>
                <p className="text-sm text-muted leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="section-glow section-glow-left" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 font-display">
              Meet Our Team
            </h2>
            <p className="text-muted max-w-2xl mx-auto">
              The talented people behind your success
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="glass-card rounded-2xl p-6 text-center group hover:border-accent/30 transition-all"
              >
                <div className="w-20 h-20 rounded-full bg-accent/10 flex items-center justify-center text-accent mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <Users className="w-10 h-10" />
                </div>
                <h3 className="text-lg font-bold text-white mb-1">{member.name}</h3>
                <p className="text-sm text-accent mb-3">{member.role}</p>
                <p className="text-xs text-muted leading-relaxed">{member.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="section-glow section-glow-top" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/5 rounded-full blur-[120px]" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight font-display">
            Ready to work with us?
          </h2>
          <p className="text-lg text-muted max-w-2xl mx-auto mb-10">
            Let's discuss how we can help your business grow and achieve its digital goals.
          </p>
          <Link
            href="/contact"
            className="glow-button px-8 py-3.5 text-sm font-semibold rounded-md inline-flex items-center gap-2"
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
