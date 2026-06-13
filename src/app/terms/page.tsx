'use client';

import React, { useState, useEffect } from 'react';
import { Scale, ShieldCheck, UserCheck, AlertTriangle, CreditCard, HelpCircle, ChevronRight, ArrowUp, Mail, Phone, MapPin } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const sections = [
  { id: 'acceptance', label: '1. Acceptance of Terms', icon: <UserCheck className="w-4 h-4" /> },
  { id: 'services', label: '2. Description of Services', icon: <HelpCircle className="w-4 h-4" /> },
  { id: 'property', label: '3. Intellectual Property Rights', icon: <ShieldCheck className="w-4 h-4" /> },
  { id: 'billing', label: '4. Billing & Fees', icon: <CreditCard className="w-4 h-4" /> },
  { id: 'conduct', label: '5. Prohibited Conduct', icon: <AlertTriangle className="w-4 h-4" /> },
  { id: 'liability', label: '6. Limitation of Liability', icon: <Scale className="w-4 h-4" /> },
  { id: 'governing', label: '7. Governing Law', icon: <Scale className="w-4 h-4" /> },
];

export default function TermsOfService() {
  const [activeSection, setActiveSection] = useState('acceptance');
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Toggle back to top button
      if (window.scrollY > 400) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }

      // Determine active section based on scroll position
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
    <main className="min-h-screen relative overflow-hidden">
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
              <span className="text-xs font-semibold text-accent uppercase tracking-wider">Legal Terms</span>
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-4 font-display"
            >
              Terms of <span className="gradient-text">Service</span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-sm sm:text-base text-muted"
            >
              Last Updated: June 13, 2026 • Review the legal framework for using DigiGrowNex services.
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
                  <span className="p-1.5 rounded-lg bg-accent/10 text-accent"><UserCheck className="w-5 h-5" /></span>
                  1. Acceptance of Terms
                </h2>
                <div className="text-sm sm:text-base text-muted-foreground leading-relaxed space-y-4">
                  <p>
                    By accessing or using the website of DigiGrowNex ("we," "our," or "us"), or by purchasing any of our digital agency packages, custom development, cloud consulting, or branding services, you represent that you have read, understood, and agreed to be bound by these Terms of Service.
                  </p>
                  <p>
                    These terms constitute a legally binding agreement between you and DigiGrowNex. If you are accepting these terms on behalf of a company, organization, or corporate entity, you represent and warrant that you hold the legal authority to bind such entity.
                  </p>
                </div>
              </div>

              {/* Description of Services */}
              <div id="services" className="scroll-mt-28 space-y-4">
                <h2 className="text-xl sm:text-2xl font-bold text-white flex items-center gap-3 font-display border-b border-border pb-3">
                  <span className="p-1.5 rounded-lg bg-accent/10 text-accent"><HelpCircle className="w-5 h-5" /></span>
                  2. Description of Services
                </h2>
                <div className="text-sm sm:text-base text-muted-foreground leading-relaxed space-y-4">
                  <p>
                    DigiGrowNex is a digital agency offering digital marketing, UI/UX design, custom web development, graphic design, analytics tools, SMS/WhatsApp marketing interfaces, IVR setups, email marketing campaigns, Google Cloud migration services, and telecom integrations (such as Tata Tele Business Services partner channels).
                  </p>
                  <p>
                    The scope, deliverable milestones, and specifications for custom services are finalized in a separate Statement of Work (SOW) or digital order checkout. We reserve the right to modify or discontinue services with reasonable notice to active clients.
                  </p>
                </div>
              </div>

              {/* Intellectual Property Rights */}
              <div id="property" className="scroll-mt-28 space-y-4">
                <h2 className="text-xl sm:text-2xl font-bold text-white flex items-center gap-3 font-display border-b border-border pb-3">
                  <span className="p-1.5 rounded-lg bg-accent/10 text-accent"><ShieldCheck className="w-5 h-5" /></span>
                  3. Intellectual Property Rights
                </h2>
                <div className="text-sm sm:text-base text-muted-foreground leading-relaxed space-y-4">
                  <p>
                    All materials on our website, including text, graphics, user interface layouts, software code, databases, logos, designs, and animations, are the exclusive intellectual property of DigiGrowNex or licensed to us, protected under intellectual property laws in India and internationally.
                  </p>
                  <p>
                    Unless explicitly provided in a written SOW or service agreement, you may not copy, republish, scrap, or reverse engineer any section of our website, source code, or internal application layers.
                  </p>
                </div>
              </div>

              {/* Billing & Fees */}
              <div id="billing" className="scroll-mt-28 space-y-4">
                <h2 className="text-xl sm:text-2xl font-bold text-white flex items-center gap-3 font-display border-b border-border pb-3">
                  <span className="p-1.5 rounded-lg bg-accent/10 text-accent"><CreditCard className="w-5 h-5" /></span>
                  4. Billing & Fees
                </h2>
                <div className="text-sm sm:text-base text-muted-foreground leading-relaxed space-y-4">
                  <p>
                    All payments for packages, consulting sessions, or monthly digital retainer contracts must be cleared through our approved digital channels.
                  </p>
                  <p>
                    <strong>Billing Terms:</strong> Recurring subscriptions are invoiced in advance of the monthly cycle. Custom dev work utilizes step-wise milestone payouts as defined in client contracts.
                  </p>
                  <p>
                    <strong>Taxes:</strong> Unless indicated otherwise, pricing plans are exclusive of applicable Indian taxes (such as GST).
                  </p>
                  <p>
                    <strong>Cancellations:</strong> If you cancel a subscription, service access remains open until the close of the current paid billing cycle. Refunds are evaluated strictly case-by-case based on work completed.
                  </p>
                </div>
              </div>

              {/* Prohibited Conduct */}
              <div id="conduct" className="scroll-mt-28 space-y-4">
                <h2 className="text-xl sm:text-2xl font-bold text-white flex items-center gap-3 font-display border-b border-border pb-3">
                  <span className="p-1.5 rounded-lg bg-accent/10 text-accent"><AlertTriangle className="w-5 h-5" /></span>
                  5. Prohibited Conduct
                </h2>
                <div className="text-sm sm:text-base text-muted-foreground leading-relaxed space-y-4">
                  <p>
                    When using this website or our digital client interfaces, you agree not to:
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Launch any automated scrapers, spiders, robots, or crawler scripts to harvest content.</li>
                    <li>Attempt to disrupt, overload, or execute Denial of Service (DDoS) attacks against our servers.</li>
                    <li>Inject malware, scripts, or hostile files into booking fields, contact inputs, or CMS dashboards.</li>
                    <li>Utilize our WhatsApp Business API integrations or Bulk SMS resources to send spam or bulk unconsented communications.</li>
                  </ul>
                </div>
              </div>

              {/* Limitation of Liability */}
              <div id="liability" className="scroll-mt-28 space-y-4">
                <h2 className="text-xl sm:text-2xl font-bold text-white flex items-center gap-3 font-display border-b border-border pb-3">
                  <span className="p-1.5 rounded-lg bg-accent/10 text-accent"><Scale className="w-5 h-5" /></span>
                  6. Limitation of Liability
                </h2>
                <div className="text-sm sm:text-base text-muted-foreground leading-relaxed space-y-4">
                  <p>
                    To the maximum extent permitted by applicable Indian laws, DigiGrowNex and its employees, founder, partners, and contractors will not be held liable for any indirect, incidental, punitive, or consequential damages (including loss of profits, data corruption, or business interruption) resulting from your use of our website or services.
                  </p>
                  <p>
                    Our total cumulative liability under these Terms of Service will never exceed the absolute amount paid by you to DigiGrowNex during the immediately preceding three (3) months for the specific service in dispute.
                  </p>
                </div>
              </div>

              {/* Governing Law */}
              <div id="governing" className="scroll-mt-28 space-y-4">
                <h2 className="text-xl sm:text-2xl font-bold text-white flex items-center gap-3 font-display border-b border-border pb-3">
                  <span className="p-1.5 rounded-lg bg-accent/10 text-accent"><Scale className="w-5 h-5" /></span>
                  7. Governing Law
                </h2>
                <div className="text-sm sm:text-base text-muted-foreground leading-relaxed space-y-4">
                  <p>
                    These Terms of Service are governed by and construed in accordance with the laws of India.
                  </p>
                  <p>
                    Any disputes, controversies, or legal complaints arising out of or in connection with these terms, website access, or our services shall be subject to the exclusive jurisdiction of the competent courts of Pune, Maharashtra, India.
                  </p>
                </div>
              </div>

              {/* Contact Block */}
              <div className="pt-8 border-t border-border/40">
                <h3 className="text-base font-bold text-white mb-4 font-display">Questions about our Terms?</h3>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="flex gap-4 p-4 rounded-xl border border-border bg-surface-1">
                    <Mail className="w-5 h-5 text-accent shrink-0 mt-1" />
                    <div>
                      <h4 className="text-sm font-bold text-white mb-0.5">Email Support</h4>
                      <a href="mailto:support@digigrownex.com" className="text-xs sm:text-sm text-accent hover:underline break-all">support@digigrownex.com</a>
                    </div>
                  </div>

                  <div className="flex gap-4 p-4 rounded-xl border border-border bg-surface-1">
                    <MapPin className="w-5 h-5 text-accent shrink-0 mt-1" />
                    <div>
                      <h4 className="text-sm font-bold text-white mb-0.5">Corporate Location</h4>
                      <p className="text-xs sm:text-sm text-muted-foreground">Shivajinagar, Pune, MH 411005, India</p>
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
