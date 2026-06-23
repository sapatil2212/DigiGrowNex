'use client';

import React, { useState, useEffect } from 'react';
import { Scale, FileText, UserCheck, Shield, AlertTriangle, Globe, Mail, MapPin, Phone, ArrowUp, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const sections = [
  { id: 'acceptance', label: '1. Acceptance of Terms', icon: <FileText className="w-4 h-4" /> },
  { id: 'services', label: '2. Services Offered', icon: <Globe className="w-4 h-4" /> },
  { id: 'user-rules', label: '3. User Responsibilities', icon: <UserCheck className="w-4 h-4" /> },
  { id: 'payments', label: '4. Payment Terms', icon: <Shield className="w-4 h-4" /> },
  { id: 'ip', label: '5. Intellectual Property', icon: <Shield className="w-4 h-4" /> },
  { id: 'limitations', label: '6. Service Limitations', icon: <AlertTriangle className="w-4 h-4" /> },
  { id: 'liability', label: '7. Liability Disclaimer', icon: <AlertTriangle className="w-4 h-4" /> },
  { id: 'governing-law', label: '8. Governing Law', icon: <Scale className="w-4 h-4" /> },
  { id: 'contact', label: '9. Contact Information', icon: <Mail className="w-4 h-4" /> },
];

export default function TermsAndConditionsPage() {
  const [activeSection, setActiveSection] = useState('acceptance');
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }

      const scrollPosition = window.scrollY + 200;
      for (const section of sections) {
        const el = document.getElementById(section.id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section.id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      window.scrollTo({
        top: el.offsetTop - 120,
        behavior: 'smooth',
      });
      setActiveSection(id);
    }
  };

  return (
    <main className="min-h-screen relative overflow-hidden bg-[#0a0a0a] text-fg selection:bg-accent selection:text-white">
      {/* Background decoration */}
      <div className="hero-dots" />
      <div className="hero-glow" />
      <div className="hero-glow-secondary" />

      {/* Hero Section */}
      <section className="relative pt-32 pb-16 lg:pt-40 lg:pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10 relative">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent/10 border border-accent/20 mb-6"
            >
              <Scale className="w-4 h-4 text-accent animate-pulse" />
              <span className="text-xs font-semibold text-accent uppercase tracking-wider">Legal Framework</span>
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-4 font-display"
            >
              Terms & <span className="gradient-text">Conditions</span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-sm sm:text-base text-muted"
            >
              Last Updated: June 23, 2026 • Review the legal framework for using DigiGrowNex Technologies services.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Main content grid */}
      <section className="pb-32 relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-10">
          
          {/* Left Sticky Sidebar Table of Contents */}
          <div className="lg:col-span-4 hidden lg:block">
            <div className="sticky top-28 glass-card rounded-2xl p-6 border border-border/50">
              <h3 className="text-base font-bold text-white mb-6 uppercase tracking-wider font-display">
                Table of Contents
              </h3>
              <nav className="space-y-1">
                {sections.map((section) => {
                  const isActive = activeSection === section.id;
                  return (
                    <button
                      key={section.id}
                      onClick={() => scrollTo(section.id)}
                      className={`w-full flex items-center justify-between px-4 py-3 rounded-lg text-sm font-medium transition-all duration-200 text-left ${
                        isActive
                          ? 'text-accent bg-accent/10 border-l-2 border-accent pl-5 font-bold shadow-md shadow-accent/5'
                          : 'text-muted hover:text-white hover:bg-white/5 border-l-2 border-transparent'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <span className={isActive ? 'text-accent' : 'text-muted-foreground'}>
                          {section.icon}
                        </span>
                        <span>{section.label}</span>
                      </div>
                      <ChevronRight className={`w-3.5 h-3.5 transition-transform duration-200 ${isActive ? 'translate-x-0.5 text-accent' : 'opacity-0'}`} />
                    </button>
                  );
                })}
              </nav>
            </div>
          </div>

          {/* Right Content Sections */}
          <div className="lg:col-span-8 space-y-8">
            <div className="glass-card rounded-2xl p-8 lg:p-10 border border-border/50 space-y-12">
              
              {/* Acceptance of Terms */}
              <div id="acceptance" className="scroll-mt-28 space-y-4">
                <h2 className="text-xl sm:text-2xl font-bold text-white flex items-center gap-3 font-display border-b border-border pb-3">
                  <span className="p-1.5 rounded-lg bg-accent/10 text-accent"><FileText className="w-5 h-5" /></span>
                  1. Acceptance of Terms
                </h2>
                <div className="text-sm sm:text-base text-muted-foreground leading-relaxed space-y-4">
                  <p>
                    By accessing or using the website of DigiGrowNex Technologies ("we," "our," or "us"), or by purchasing any of our digital agency packages, custom development, or AI automation solutions, you represent that you have read, understood, and agreed to be bound by these Terms & Conditions.
                  </p>
                  <p>
                    These terms constitute a legally binding agreement between you and DigiGrowNex Technologies. If you are accepting these terms on behalf of a company or corporate entity, you represent and warrant that you hold the legal authority to bind such entity.
                  </p>
                </div>
              </div>

              {/* Services Offered */}
              <div id="services" className="scroll-mt-28 space-y-4">
                <h2 className="text-xl sm:text-2xl font-bold text-white flex items-center gap-3 font-display border-b border-border pb-3">
                  <span className="p-1.5 rounded-lg bg-accent/10 text-accent"><Globe className="w-5 h-5" /></span>
                  2. Services Offered
                </h2>
                <div className="text-sm sm:text-base text-muted-foreground leading-relaxed space-y-4">
                  <p>
                    DigiGrowNex Technologies provides high-performance web development, SaaS product development, AI automation workflows, WhatsApp Business API integrations, CRM solutions, search engine optimization (SEO), and digital marketing campaigns.
                  </p>
                  <p>
                    The scope, deliverables, milestones, and specifications for custom services are finalized in a separate Statement of Work (SOW) or project agreement. We reserve the right to modify or discontinue services with reasonable notice to active clients.
                  </p>
                </div>
              </div>

              {/* User Responsibilities */}
              <div id="user-rules" className="scroll-mt-28 space-y-4">
                <h2 className="text-xl sm:text-2xl font-bold text-white flex items-center gap-3 font-display border-b border-border pb-3">
                  <span className="p-1.5 rounded-lg bg-accent/10 text-accent"><UserCheck className="w-5 h-5" /></span>
                  3. User Responsibilities
                </h2>
                <div className="text-sm sm:text-base text-muted-foreground leading-relaxed space-y-4">
                  <p>
                    When using this website or our digital solutions, you agree to:
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Provide accurate, current, and complete corporate registration details.</li>
                    <li>Ensure you do not use our services for any unlawful, harassing, or fraudulent activity.</li>
                    <li>Strictly use our WhatsApp Business API configurations and communications solutions in accordance with Meta and WhatsApp Business policies.</li>
                    <li>Protect your account credentials and immediately report any security breaches to us.</li>
                  </ul>
                </div>
              </div>

              {/* Payment Terms */}
              <div id="payments" className="scroll-mt-28 space-y-4">
                <h2 className="text-xl sm:text-2xl font-bold text-white flex items-center gap-3 font-display border-b border-border pb-3">
                  <span className="p-1.5 rounded-lg bg-accent/10 text-accent"><Shield className="w-5 h-5" /></span>
                  4. Payment Terms
                </h2>
                <div className="text-sm sm:text-base text-muted-foreground leading-relaxed space-y-4">
                  <p>
                    All payments for custom development packages, retaining services, or consultancy must be cleared through our approved digital channels. Payments are governed by invoice milestones specified in the signed agreements. Late payments may result in service suspension.
                  </p>
                </div>
              </div>

              {/* Intellectual Property */}
              <div id="ip" className="scroll-mt-28 space-y-4">
                <h2 className="text-xl sm:text-2xl font-bold text-white flex items-center gap-3 font-display border-b border-border pb-3">
                  <span className="p-1.5 rounded-lg bg-accent/10 text-accent"><Shield className="w-5 h-5" /></span>
                  5. Intellectual Property
                </h2>
                <div className="text-sm sm:text-base text-muted-foreground leading-relaxed space-y-4">
                  <p>
                    All materials on our website, including text, graphics, user interface layouts, software code, databases, logos, designs, and animations, are the exclusive intellectual property of DigiGrowNex Technologies, protected under copyright and trademark laws in India and internationally.
                  </p>
                  <p>
                    Clients receive complete ownership and licenses to custom codebases, media assets, and final deliverables only upon full clearance of all due invoice payments.
                  </p>
                </div>
              </div>

              {/* Service Limitations */}
              <div id="limitations" className="scroll-mt-28 space-y-4">
                <h2 className="text-xl sm:text-2xl font-bold text-white flex items-center gap-3 font-display border-b border-border pb-3">
                  <span className="p-1.5 rounded-lg bg-accent/10 text-accent"><AlertTriangle className="w-5 h-5" /></span>
                  6. Service Limitations
                </h2>
                <div className="text-sm sm:text-base text-muted-foreground leading-relaxed space-y-4">
                  <p>
                    Our services are dependent on third-party frameworks and systems (such as Google Cloud Hosting, Meta Business Platform, WhatsApp APIs, and OpenAI models). We are not responsible for service interruptions, data latency, or policy changes originating from these third-party platforms.
                  </p>
                </div>
              </div>

              {/* Liability Disclaimer */}
              <div id="liability" className="scroll-mt-28 space-y-4">
                <h2 className="text-xl sm:text-2xl font-bold text-white flex items-center gap-3 font-display border-b border-border pb-3">
                  <span className="p-1.5 rounded-lg bg-accent/10 text-accent"><AlertTriangle className="w-5 h-5" /></span>
                  7. Liability Disclaimer
                </h2>
                <div className="text-sm sm:text-base text-muted-foreground leading-relaxed space-y-4">
                  <p>
                    To the maximum extent permitted by applicable Indian laws, DigiGrowNex Technologies and its employees, partners, and contractors will not be held liable for any indirect, incidental, or consequential damages (including loss of profits, data corruption, or business interruption) resulting from your use of our website or services.
                  </p>
                  <p>
                    Our total cumulative liability under these Terms will never exceed the absolute amount paid by you to DigiGrowNex Technologies during the immediately preceding three (3) months for the specific service in dispute.
                  </p>
                </div>
              </div>

              {/* Governing Law */}
              <div id="governing-law" className="scroll-mt-28 space-y-4">
                <h2 className="text-xl sm:text-2xl font-bold text-white flex items-center gap-3 font-display border-b border-border pb-3">
                  <span className="p-1.5 rounded-lg bg-accent/10 text-accent"><Scale className="w-5 h-5" /></span>
                  8. Governing Law
                </h2>
                <div className="text-sm sm:text-base text-muted-foreground leading-relaxed space-y-4">
                  <p>
                    These Terms & Conditions are governed by and construed in accordance with the laws of India. Any disputes arising under these Terms shall be subject to the exclusive jurisdiction of the courts located in Pune, Maharashtra, India.
                  </p>
                </div>
              </div>

              {/* Contact Information */}
              <div id="contact" className="scroll-mt-28 space-y-4">
                <h2 className="text-xl sm:text-2xl font-bold text-white flex items-center gap-3 font-display border-b border-border pb-3">
                  <span className="p-1.5 rounded-lg bg-accent/10 text-accent"><Mail className="w-5 h-5" /></span>
                  9. Contact Information
                </h2>
                <div className="text-sm sm:text-base text-muted-foreground leading-relaxed space-y-6">
                  <p>
                    If you have questions about these Terms & Conditions or wish to seek legal clarifications, please reach out to us:
                  </p>
                  
                  <div className="grid sm:grid-cols-2 gap-4 pt-2">
                    <div className="flex gap-4 p-4 rounded-xl border border-border bg-surface-1">
                      <Mail className="w-5 h-5 text-accent shrink-0 mt-1" />
                      <div>
                        <h4 className="text-sm font-bold text-white mb-0.5">Email Contact</h4>
                        <a href="mailto:support@digigrownex.online" className="text-xs sm:text-sm text-accent hover:underline break-all">support@digigrownex.online</a>
                      </div>
                    </div>

                    <div className="flex gap-4 p-4 rounded-xl border border-border bg-surface-1">
                      <Phone className="w-5 h-5 text-accent shrink-0 mt-1" />
                      <div>
                        <h4 className="text-sm font-bold text-white mb-0.5">Phone Contact</h4>
                        <a href="tel:+917745868073" className="text-xs sm:text-sm text-muted-foreground hover:text-white">+91 77458 68073</a>
                      </div>
                    </div>

                    <div className="flex gap-4 p-4 rounded-xl border border-border bg-surface-1 sm:col-span-2">
                      <MapPin className="w-5 h-5 text-accent shrink-0 mt-1" />
                      <div>
                        <h4 className="text-sm font-bold text-white mb-0.5">Corporate Office</h4>
                        <p className="text-xs sm:text-sm text-muted-foreground">
                          DigiGrowNex Technologies, Sahakar Nagar, Pune, Maharashtra, India
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* Floating Scroll to Top Button */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="fixed bottom-6 right-6 z-50 w-10 h-10 rounded-xl flex items-center justify-center bg-accent text-white shadow-lg shadow-accent/25 hover:bg-accent-light active:scale-95 transition-colors border border-accent-light/10"
            aria-label="Scroll to top"
          >
            <ArrowUp className="w-5 h-5" />
          </motion.button>
        )}
      </AnimatePresence>
    </main>
  );
}
