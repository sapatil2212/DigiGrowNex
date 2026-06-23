'use client';

import React, { useState, useEffect } from 'react';
import { DollarSign, FileText, ChevronRight, Scale, Mail, MapPin, Phone, ArrowUp } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const sections = [
  { id: 'overview', label: '1. Policy Overview', icon: <FileText className="w-4 h-4" /> },
  { id: 'website-development', label: '2. Website Development', icon: <Scale className="w-4 h-4" /> },
  { id: 'digital-marketing', label: '3. Digital Marketing', icon: <Scale className="w-4 h-4" /> },
  { id: 'ai-automation', label: '4. AI Automation Services', icon: <Scale className="w-4 h-4" /> },
  { id: 'saas-products', label: '5. SaaS Products', icon: <Scale className="w-4 h-4" /> },
  { id: 'consultation', label: '6. Consultation Services', icon: <Scale className="w-4 h-4" /> },
  { id: 'contact', label: '7. Claims & Support', icon: <Mail className="w-4 h-4" /> },
];

export default function RefundPolicyPage() {
  const [activeSection, setActiveSection] = useState('overview');
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
              <DollarSign className="w-4 h-4 text-accent animate-pulse" />
              <span className="text-xs font-semibold text-accent uppercase tracking-wider">Financial Transparency</span>
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-4 font-display"
            >
              Refund <span className="gradient-text">Policy</span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-sm sm:text-base text-muted"
            >
              Last Updated: June 23, 2026 • Review how refunds are managed at DigiGrowNex Technologies.
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
              
              {/* Policy Overview */}
              <div id="overview" className="scroll-mt-28 space-y-4">
                <h2 className="text-xl sm:text-2xl font-bold text-white flex items-center gap-3 font-display border-b border-border pb-3">
                  <span className="p-1.5 rounded-lg bg-accent/10 text-accent"><FileText className="w-5 h-5" /></span>
                  1. Policy Overview
                </h2>
                <div className="text-sm sm:text-base text-muted-foreground leading-relaxed space-y-4">
                  <p>
                    At DigiGrowNex Technologies, we strive to deliver premium digital solutions. Because our services require significant dedicated resources, engineering hours, and operational setups, refunds are handled systematically.
                  </p>
                  <p>
                    <strong>Refund eligibility is determined based on project stage and signed agreements.</strong> We outline standard cancellation and refund terms below for each core service vertical.
                  </p>
                </div>
              </div>

              {/* Website Development */}
              <div id="website-development" className="scroll-mt-28 space-y-4">
                <h2 className="text-xl sm:text-2xl font-bold text-white flex items-center gap-3 font-display border-b border-border pb-3">
                  <span className="p-1.5 rounded-lg bg-accent/10 text-accent"><DollarSign className="w-5 h-5" /></span>
                  2. Website Development
                </h2>
                <div className="text-sm sm:text-base text-muted-foreground leading-relaxed space-y-4">
                  <p>
                    Our web builds are executed in alignment with design milestones.
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li><strong>Before Wireframe Sign-off:</strong> If a cancellation is requested before wireframing begins, a 70% refund of the advance payment will be granted.</li>
                    <li><strong>During Development Phase:</strong> Once wireframes are approved and backend scaffolding has commenced, refund requests are limited to 30% of payments to cover initial code assembly costs.</li>
                    <li><strong>Post-Launch / Final Phase:</strong> No refunds are issued after website testing, hosting setup, or code repository transfer has completed.</li>
                  </ul>
                </div>
              </div>

              {/* Digital Marketing */}
              <div id="digital-marketing" className="scroll-mt-28 space-y-4">
                <h2 className="text-xl sm:text-2xl font-bold text-white flex items-center gap-3 font-display border-b border-border pb-3">
                  <span className="p-1.5 rounded-lg bg-accent/10 text-accent"><DollarSign className="w-5 h-5" /></span>
                  3. Digital Marketing & Ads
                </h2>
                <div className="text-sm sm:text-base text-muted-foreground leading-relaxed space-y-4">
                  <p>
                    Digital Marketing packages involve upfront market audits, pixel setup, and copywriting.
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Setup fees are non-refundable once media copywriting, graphic layouts, and ad settings structures have been initiated.</li>
                    <li>Monthly service retainers can be cancelled with a 15-day written notice before the next billing cycle. Retainer fees for ongoing active cycles are non-refundable.</li>
                    <li><strong>Advertising Budget:</strong> Ad spend budgets paid directly to platforms like Google Ads or Meta Ads are strictly non-refundable as they are consumed by the ad networks directly.</li>
                  </ul>
                </div>
              </div>

              {/* AI Automation Services */}
              <div id="ai-automation" className="scroll-mt-28 space-y-4">
                <h2 className="text-xl sm:text-2xl font-bold text-white flex items-center gap-3 font-display border-b border-border pb-3">
                  <span className="p-1.5 rounded-lg bg-accent/10 text-accent"><DollarSign className="w-5 h-5" /></span>
                  4. AI Automation Services
                </h2>
                <div className="text-sm sm:text-base text-muted-foreground leading-relaxed space-y-4">
                  <p>
                    AI automation integrations involve custom database schema builds and system modeling.
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Initial setup fees are non-refundable once API synchronization, data scoping, or LLM agent fine-tuning begins.</li>
                    <li>Subsequent stage payments can be evaluated for partial refunds strictly based on delivery sheets and work completed up to the date of request.</li>
                  </ul>
                </div>
              </div>

              {/* SaaS Products */}
              <div id="saas-products" className="scroll-mt-28 space-y-4">
                <h2 className="text-xl sm:text-2xl font-bold text-white flex items-center gap-3 font-display border-b border-border pb-3">
                  <span className="p-1.5 rounded-lg bg-accent/10 text-accent"><DollarSign className="w-5 h-5" /></span>
                  5. SaaS Products
                </h2>
                <div className="text-sm sm:text-base text-muted-foreground leading-relaxed space-y-4">
                  <p>
                    Subscriptions or licensing payments for our SaaS tools are governed as follows:
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li><strong>Monthly Plans:</strong> Subscriptions are billed on a month-to-month basis and are non-refundable. You can cancel at any time to prevent billing on subsequent cycles.</li>
                    <li><strong>Annual Plans:</strong> Annual purchases are eligible for a partial refund (calculated on a pro-rata basis subtracting standard monthly rates for active months) if requested within 14 days of purchase.</li>
                  </ul>
                </div>
              </div>

              {/* Consultation Services */}
              <div id="consultation" className="scroll-mt-28 space-y-4">
                <h2 className="text-xl sm:text-2xl font-bold text-white flex items-center gap-3 font-display border-b border-border pb-3">
                  <span className="p-1.5 rounded-lg bg-accent/10 text-accent"><DollarSign className="w-5 h-5" /></span>
                  6. Consultation Services
                </h2>
                <div className="text-sm sm:text-base text-muted-foreground leading-relaxed space-y-4">
                  <p>
                    Fees for booked business advisory sessions, cloud engineering consults, or audits are non-refundable once the session has been held.
                  </p>
                  <p>
                    Rescheduling is permitted up to 24 hours prior to the session time without incurring penalties.
                  </p>
                </div>
              </div>

              {/* Claims & Support */}
              <div id="contact" className="scroll-mt-28 space-y-4">
                <h2 className="text-xl sm:text-2xl font-bold text-white flex items-center gap-3 font-display border-b border-border pb-3">
                  <span className="p-1.5 rounded-lg bg-accent/10 text-accent"><Mail className="w-5 h-5" /></span>
                  7. Claims & Support
                </h2>
                <div className="text-sm sm:text-base text-muted-foreground leading-relaxed space-y-6">
                  <p>
                    To submit a policy cancellation request, report billing discrepancies, or initiate review requests under a signed SOW, please contact us:
                  </p>
                  
                  <div className="grid sm:grid-cols-2 gap-4 pt-2">
                    <div className="flex gap-4 p-4 rounded-xl border border-border bg-surface-1">
                      <Mail className="w-5 h-5 text-accent shrink-0 mt-1" />
                      <div>
                        <h4 className="text-sm font-bold text-white mb-0.5">Email Support</h4>
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
                        <h4 className="text-sm font-bold text-white mb-0.5">Office Address</h4>
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
