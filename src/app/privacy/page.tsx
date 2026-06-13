'use client';

import React, { useState, useEffect } from 'react';
import { Shield, Lock, Eye, FileText, ChevronRight, Scale, Mail, MapPin, Phone, ArrowUp } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const sections = [
  { id: 'introduction', label: '1. Introduction', icon: <FileText className="w-4 h-4" /> },
  { id: 'collection', label: '2. Information We Collect', icon: <Eye className="w-4 h-4" /> },
  { id: 'usage', label: '3. How We Use Information', icon: <Lock className="w-4 h-4" /> },
  { id: 'channels', label: '4. WhatsApp & SMS Automation', icon: <Phone className="w-4 h-4" /> },
  { id: 'sharing', label: '5. Data Sharing & Security', icon: <Shield className="w-4 h-4" /> },
  { id: 'rights', label: '6. Your Rights & Choices', icon: <Scale className="w-4 h-4" /> },
  { id: 'contact', label: '7. Contact Us', icon: <Mail className="w-4 h-4" /> },
];

export default function PrivacyPolicy() {
  const [activeSection, setActiveSection] = useState('introduction');
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
              <Shield className="w-4 h-4 text-accent animate-pulse" />
              <span className="text-xs font-semibold text-accent uppercase tracking-wider">Privacy Center</span>
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-4 font-display"
            >
              Privacy <span className="gradient-text">Policy</span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-sm sm:text-base text-muted"
            >
              Last Updated: June 13, 2026 • Read how DigiGrowNex safeguards your personal data.
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
              
              {/* Introduction */}
              <div id="introduction" className="scroll-mt-28 space-y-4">
                <h2 className="text-xl sm:text-2xl font-bold text-white flex items-center gap-3 font-display border-b border-border pb-3">
                  <span className="p-1.5 rounded-lg bg-accent/10 text-accent"><FileText className="w-5 h-5" /></span>
                  1. Introduction
                </h2>
                <div className="text-sm sm:text-base text-muted-foreground leading-relaxed space-y-4">
                  <p>
                    Welcome to DigiGrowNex ("we," "our," or "us"). We are committed to protecting your privacy and ensuring the security of your personal data.
                  </p>
                  <p>
                    This Privacy Policy explains how we collect, use, process, and protect your information when you visit our website, utilize our digital marketing and web consulting services, or interact with our automated systems (such as our AI WhatsApp Automation tool and Hospital Management Systems).
                  </p>
                  <p>
                    By accessing or using our services, you consent to the collection and use of your information in accordance with this Privacy Policy. If you do not agree with these terms, please do not use our services.
                  </p>
                </div>
              </div>

              {/* Information We Collect */}
              <div id="collection" className="scroll-mt-28 space-y-4">
                <h2 className="text-xl sm:text-2xl font-bold text-white flex items-center gap-3 font-display border-b border-border pb-3">
                  <span className="p-1.5 rounded-lg bg-accent/10 text-accent"><Eye className="w-5 h-5" /></span>
                  2. Information We Collect
                </h2>
                <div className="text-sm sm:text-base text-muted-foreground leading-relaxed space-y-4">
                  <p>
                    We collect several types of information to provide and improve our services to you:
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>
                      <strong>Personal Identifiable Information (PII):</strong> When you register on our website, fill out appointment forms, or contact us, we may collect your name, email address, telephone number, business details, and job title.
                    </li>
                    <li>
                      <strong>Usage and Technical Data:</strong> We automatically collect log data and device parameters, including your IP address, browser type, operating system, page views, and time spent on our site.
                    </li>
                    <li>
                      <strong>Communication Data:</strong> We may archive details of email exchanges, WhatsApp chat interactions, SMS logs, or IVR records if you contact us through these automated channels.
                    </li>
                  </ul>
                </div>
              </div>

              {/* How We Use Information */}
              <div id="usage" className="scroll-mt-28 space-y-4">
                <h2 className="text-xl sm:text-2xl font-bold text-white flex items-center gap-3 font-display border-b border-border pb-3">
                  <span className="p-1.5 rounded-lg bg-accent/10 text-accent"><Lock className="w-5 h-5" /></span>
                  3. How We Use Information
                </h2>
                <div className="text-sm sm:text-base text-muted-foreground leading-relaxed space-y-4">
                  <p>
                    DigiGrowNex utilizes the collected data for the following core business purposes:
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li><strong>Service Delivery:</strong> To set up, operate, and maintain our digital consulting, cloud infrastructure, and marketing services.</li>
                    <li><strong>Appointment Scheduling:</strong> To coordinate bookings and reservations made via our web tools.</li>
                    <li><strong>Analytics & Improvement:</strong> To analyze how users interact with our website to optimize design, navigation, and loading performance.</li>
                    <li><strong>Customer Engagement:</strong> To address service inquiries, distribute project updates, and provide operational assistance.</li>
                    <li><strong>Compliance:</strong> To satisfy legal responsibilities, prevent fraud, and enforce our client agreements.</li>
                  </ul>
                </div>
              </div>

              {/* WhatsApp & SMS Automation */}
              <div id="channels" className="scroll-mt-28 space-y-4">
                <h2 className="text-xl sm:text-2xl font-bold text-white flex items-center gap-3 font-display border-b border-border pb-3">
                  <span className="p-1.5 rounded-lg bg-accent/10 text-accent"><Phone className="w-5 h-5" /></span>
                  4. WhatsApp & SMS Automation
                </h2>
                <div className="text-sm sm:text-base text-muted-foreground leading-relaxed space-y-4">
                  <p>
                    As part of our specialized WhatsApp Business API and Bulk SMS automation suites, we process customer contact details:
                  </p>
                  <p>
                    <strong>Consent:</strong> Phone numbers are collected only with active, explicit user consent (such as checking a confirmation box when scheduling an appointment or sending an inquiry).
                  </p>
                  <p>
                    <strong>Data Integrity:</strong> Phone numbers and chat content handled via our AI Automation modules are strictly encrypted and used exclusively for sending requested notifications, reminders, or support messages. We do not engage in unsolicited spamming.
                  </p>
                </div>
              </div>

              {/* Data Sharing & Security */}
              <div id="sharing" className="scroll-mt-28 space-y-4">
                <h2 className="text-xl sm:text-2xl font-bold text-white flex items-center gap-3 font-display border-b border-border pb-3">
                  <span className="p-1.5 rounded-lg bg-accent/10 text-accent"><Shield className="w-5 h-5" /></span>
                  5. Data Sharing & Security
                </h2>
                <div className="text-sm sm:text-base text-muted-foreground leading-relaxed space-y-4">
                  <p>
                    We prioritize data security and implement appropriate technical measures to prevent unauthorized access, modification, or leakage.
                  </p>
                  <p>
                    <strong>No Data Selling:</strong> We do not sell, trade, or rent your PII to third parties.
                  </p>
                  <p>
                    <strong>Trusted Partners:</strong> We may share data with verified third-party partners (such as Google Cloud for hosting, or Tata Tele Business Services for communications) strictly to deliver our services. These partners are bound by strict non-disclosure obligations.
                  </p>
                  <p>
                    <strong>Legal Disclosures:</strong> We may disclose information if required to do so by applicable laws in India or to protect our legitimate legal interests.
                  </p>
                </div>
              </div>

              {/* Your Rights & Choices */}
              <div id="rights" className="scroll-mt-28 space-y-4">
                <h2 className="text-xl sm:text-2xl font-bold text-white flex items-center gap-3 font-display border-b border-border pb-3">
                  <span className="p-1.5 rounded-lg bg-accent/10 text-accent"><Scale className="w-5 h-5" /></span>
                  6. Your Rights & Choices
                </h2>
                <div className="text-sm sm:text-base text-muted-foreground leading-relaxed space-y-4">
                  <p>
                    You maintain the following rights regarding the personal information you store with us:
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li><strong>Access:</strong> Request copies of the personal data we hold about you.</li>
                    <li><strong>Correction:</strong> Prompt us to correct any details you believe are inaccurate or outdated.</li>
                    <li><strong>Erasure:</strong> Request the deletion of your personal data from our active databases, subject to regulatory compliance.</li>
                    <li><strong>Opt-Out:</strong> Unsubscribe from marketing emails or SMS/WhatsApp alerts at any time by clicking the "unsubscribe" link or replying "STOP".</li>
                  </ul>
                </div>
              </div>

              {/* Contact Us */}
              <div id="contact" className="scroll-mt-28 space-y-4">
                <h2 className="text-xl sm:text-2xl font-bold text-white flex items-center gap-3 font-display border-b border-border pb-3">
                  <span className="p-1.5 rounded-lg bg-accent/10 text-accent"><Mail className="w-5 h-5" /></span>
                  7. Contact Us
                </h2>
                <div className="text-sm sm:text-base text-muted-foreground leading-relaxed space-y-6">
                  <p>
                    If you have questions about this Privacy Policy or wish to exercise your rights, please reach out to our team:
                  </p>
                  
                  <div className="grid sm:grid-cols-2 gap-4 pt-2">
                    <div className="flex gap-4 p-4 rounded-xl border border-border bg-surface-1">
                      <Mail className="w-5 h-5 text-accent shrink-0 mt-1" />
                      <div>
                        <h4 className="text-sm font-bold text-white mb-0.5">Email Support</h4>
                        <a href="mailto:support@digigrownex.com" className="text-xs sm:text-sm text-accent hover:underline break-all">support@digigrownex.com</a>
                      </div>
                    </div>

                    <div className="flex gap-4 p-4 rounded-xl border border-border bg-surface-1">
                      <Phone className="w-5 h-5 text-accent shrink-0 mt-1" />
                      <div>
                        <h4 className="text-sm font-bold text-white mb-0.5">Phone Contact</h4>
                        <a href="tel:+919876543210" className="text-xs sm:text-sm text-muted-foreground hover:text-white">+91 98765 43210</a>
                      </div>
                    </div>

                    <div className="flex gap-4 p-4 rounded-xl border border-border bg-surface-1 sm:col-span-2">
                      <MapPin className="w-5 h-5 text-accent shrink-0 mt-1" />
                      <div>
                        <h4 className="text-sm font-bold text-white mb-0.5">Office Address</h4>
                        <p className="text-xs sm:text-sm text-muted-foreground">
                          DigiGrowNex Headquarters, Shivajinagar, Pune, Maharashtra 411005, India
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
