'use client';

import { ArrowRight, Mail, Phone, MapPin, Clock, Send, Sparkles, Check } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API request
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1500);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const contactInfo = [
    {
      icon: <Phone className="w-4 h-4" />,
      title: 'Call Us',
      details: ['+91 77458 68073'],
      link: 'tel:+917745868073',
    },
    {
      icon: <Mail className="w-4 h-4" />,
      title: 'Email Address',
      details: ['digigrownex@gmail.com'],
      link: 'mailto:digigrownex@gmail.com',
    },
    {
      icon: <MapPin className="w-4 h-4" />,
      title: 'Office Address',
      details: ['B-92, Poonam apartment,', 'Sahakar Nagar, Pune 411009'],
      link: 'https://maps.google.com/?q=Poonam+apartment+Sahakar+Nagar+Pune+411009',
    },
    {
      icon: <Clock className="w-4 h-4" />,
      title: 'Working Hours',
      details: ['Mon - Sat: 9:00 AM - 7:00 PM', 'Sunday: Closed'],
      link: '#',
    },
  ];

  const services = [
    'Custom Web Development',
    'UI/UX Design',
    'Digital Marketing & SEO',
    'Google Cloud Services',
    'WhatsApp Business API',
    'Tata Tele Telecom Solutions',
    'IVR & Cloud Telephony',
    'Branding & Graphic Design',
    'Other Service Inquiry',
  ];

  return (
    <main className="min-h-screen relative overflow-hidden">
      {/* Background decoration */}
      <div className="hero-dots" />
      <div className="hero-glow" />
      <div className="hero-glow-secondary" />

      {/* Hero Section */}
      <section className="relative pt-32 pb-12 lg:pt-40 lg:pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10 relative">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent/10 border border-accent/20 mb-6"
            >
              <Sparkles className="w-4 h-4 text-accent" />
              <span className="text-xs font-semibold text-accent uppercase tracking-wider">Get In Touch</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-7xl font-bold tracking-tight leading-[1.1] font-display mb-6"
            >
              Let's Build Something <span className="gradient-text">Amazing</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-base sm:text-lg text-muted max-w-2xl mx-auto leading-relaxed"
            >
              Have a project in mind, need tech support, or want to explore digital growth strategies? Message our experts now.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Contact Form & Information section */}
      <section className="pb-32 relative overflow-hidden z-10" style={{ borderTop: '1px solid var(--border)', paddingTop: '3rem' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-10">
            
            {/* Contact Form Container (Left) */}
            <div className="lg:col-span-7">
              <div className="glass-card rounded-3xl p-8 lg:p-10 border border-border/50 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-accent/5 to-transparent rounded-bl-full pointer-events-none" />
                
                <AnimatePresence mode="wait">
                  {!isSubmitted ? (
                    <motion.div
                      key="form"
                      initial={{ opacity: 1 }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={{ duration: 0.3 }}
                    >
                      <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3 font-display">
                        Send us a message
                      </h2>
                      <p className="text-muted text-sm mb-8 leading-relaxed">
                        Fill out the details below. Our technical specialists will respond within 24 hours.
                      </p>

                      <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="grid sm:grid-cols-2 gap-6">
                          <div>
                            <label htmlFor="name" className="block text-xs font-semibold text-white/90 uppercase tracking-wider mb-2">
                              Full Name *
                            </label>
                            <input
                              type="text"
                              id="name"
                              name="name"
                              required
                              value={formData.name}
                              onChange={handleChange}
                              className="w-full px-4 py-3 rounded-lg border text-sm text-fg transition-all placeholder:text-muted/50 focus:ring-2 focus:ring-accent/20 bg-surface-1/50 border-border"
                              placeholder="e.g. Rahul Sharma"
                            />
                          </div>

                          <div>
                            <label htmlFor="email" className="block text-xs font-semibold text-white/90 uppercase tracking-wider mb-2">
                              Email Address *
                            </label>
                            <input
                              type="email"
                              id="email"
                              name="email"
                              required
                              value={formData.email}
                              onChange={handleChange}
                              className="w-full px-4 py-3 rounded-lg border text-sm text-fg transition-all placeholder:text-muted/50 focus:ring-2 focus:ring-accent/20 bg-surface-1/50 border-border"
                              placeholder="e.g. rahul@example.com"
                            />
                          </div>
                        </div>

                        <div className="grid sm:grid-cols-2 gap-6">
                          <div>
                            <label htmlFor="phone" className="block text-xs font-semibold text-white/90 uppercase tracking-wider mb-2">
                              Phone Number
                            </label>
                            <input
                              type="tel"
                              id="phone"
                              name="phone"
                              value={formData.phone}
                              onChange={handleChange}
                              className="w-full px-4 py-3 rounded-lg border text-sm text-fg transition-all placeholder:text-muted/50 focus:ring-2 focus:ring-accent/20 bg-surface-1/50 border-border"
                              placeholder="e.g. +91 98765 43210"
                            />
                          </div>

                          <div>
                            <label htmlFor="company" className="block text-xs font-semibold text-white/90 uppercase tracking-wider mb-2">
                              Company Name
                            </label>
                            <input
                              type="text"
                              id="company"
                              name="company"
                              value={formData.company}
                              onChange={handleChange}
                              className="w-full px-4 py-3 rounded-lg border text-sm text-fg transition-all placeholder:text-muted/50 focus:ring-2 focus:ring-accent/20 bg-surface-1/50 border-border"
                              placeholder="e.g. Tech Solutions Pvt Ltd"
                            />
                          </div>
                        </div>

                        <div>
                          <label htmlFor="service" className="block text-xs font-semibold text-white/90 uppercase tracking-wider mb-2">
                            Service Interested In *
                          </label>
                          <select
                            id="service"
                            name="service"
                            required
                            value={formData.service}
                            onChange={handleChange}
                            className="w-full px-4 py-3 rounded-lg border text-sm text-fg transition-all focus:ring-2 focus:ring-accent/20 bg-surface-1 border-border appearance-none cursor-pointer"
                            style={{
                              backgroundImage: `url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3E%3Cpath stroke='%23a3a3a3' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3E%3C/svg%3E")`,
                              backgroundPosition: 'right 1rem center',
                              backgroundSize: '1.5em 1.5em',
                              backgroundRepeat: 'no-repeat',
                              paddingRight: '2.5rem'
                            }}
                          >
                            <option value="" className="bg-[#0a0a0a] text-muted-foreground">Select a service</option>
                            {services.map((service) => (
                              <option key={service} value={service} className="bg-[#0a0a0a]">
                                {service}
                              </option>
                            ))}
                          </select>
                        </div>

                        <div>
                          <label htmlFor="message" className="block text-xs font-semibold text-white/90 uppercase tracking-wider mb-2">
                            Message Details *
                          </label>
                          <textarea
                            id="message"
                            name="message"
                            required
                            rows={5}
                            value={formData.message}
                            onChange={handleChange}
                            className="w-full px-4 py-3 rounded-lg border text-sm text-fg transition-all placeholder:text-muted/50 focus:ring-2 focus:ring-accent/20 bg-surface-1/50 border-border resize-none"
                            placeholder="Briefly describe your requirements or inquiry details..."
                          />
                        </div>

                        <button
                          type="submit"
                          disabled={isSubmitting}
                          className="glow-button w-full px-6 py-3.5 text-sm font-bold rounded-lg inline-flex items-center justify-center gap-2 transition-transform disabled:opacity-60 disabled:cursor-not-allowed hover:scale-[1.01] active:scale-95 shadow-lg shadow-accent/10"
                          style={{ color: '#fff' }}
                        >
                          {isSubmitting ? (
                            <>
                              <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                              Processing Inquiry...
                            </>
                          ) : (
                            <>
                              Send Message
                              <Send className="w-4 h-4" />
                            </>
                          )}
                        </button>
                      </form>
                    </motion.div>
                  ) : (
                    <motion.div
                      key="success"
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.4 }}
                      className="text-center py-12 space-y-6 flex flex-col items-center justify-center min-h-[500px]"
                    >
                      <div className="w-16 h-16 rounded-full bg-accent/15 flex items-center justify-center text-accent mb-4 border border-accent/20 shadow-[0_0_20px_rgba(52,204,50,0.2)] animate-pulse">
                        <Check className="w-8 h-8 stroke-[3]" />
                      </div>
                      <h3 className="text-2xl sm:text-3xl font-bold text-white font-display">Inquiry Received!</h3>
                      <p className="text-muted text-sm max-w-sm mx-auto leading-relaxed">
                        Thank you for reaching out, <strong className="text-white">{formData.name}</strong>. We have saved your request for <strong className="text-white">{formData.service}</strong> and will follow up with you shortly.
                      </p>
                      
                      <div className="p-4 rounded-xl border border-border bg-surface-1/30 text-xs text-muted max-w-xs mx-auto">
                        <strong>Confidentiality Note:</strong> We treat all corporate project details under strict NDA standards.
                      </div>
                      
                      <button
                        onClick={() => {
                          setIsSubmitted(false);
                          setFormData({ name: '', email: '', phone: '', company: '', service: '', message: '' });
                        }}
                        className="glow-button px-6 py-2.5 text-xs font-bold rounded-lg mt-4"
                        style={{ color: '#fff' }}
                      >
                        Send Another Inquiry
                      </button>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>

            {/* Google Map & Contact Details (Right) */}
            <div className="lg:col-span-5 space-y-6">
              
              {/* Google Map of Sahakar Nagar (Pune) */}
              <div className="glass-card rounded-3xl overflow-hidden h-[300px] border border-border/50 relative group">
                <div className="absolute inset-0 bg-accent/10 opacity-0 group-hover:opacity-10 pointer-events-none transition-opacity duration-300 z-10" />
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3783.842784534723!2d73.8505417!3d18.4907997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c0199d91fbb9%3A0x95db6efd254d3cd5!2sSahakar%20Nagar%2C%20Pune%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1234567890123"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="grayscale dark:contrast-[1.2] dark:invert transition-all duration-500 group-hover:grayscale-0"
                />
              </div>

              {/* Unified Contact Information Card */}
              <div className="glass-card rounded-3xl p-6 lg:p-8 border border-border/50 space-y-6">
                <h3 className="text-xl font-bold text-white font-display border-b border-border pb-3 flex items-center gap-2">
                  <Sparkles className="w-5 h-5 text-accent animate-pulse" />
                  Contact Details
                </h3>
                
                <div className="space-y-4">
                  {contactInfo.map((info, i) => {
                    const isLinkable = info.link !== '#';
                    return (
                      <a
                        key={i}
                        href={isLinkable ? info.link : undefined}
                        target={info.link.startsWith('http') ? '_blank' : undefined}
                        rel={info.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                        className={`flex gap-4 p-4 rounded-xl border bg-surface-1/40 transition-all duration-300 ${
                          isLinkable 
                            ? 'border-border hover:border-accent/20 hover:bg-surface-2/65 cursor-pointer group' 
                            : 'border-border'
                        }`}
                      >
                        <div className={`w-9 h-9 rounded-lg bg-accent/10 flex items-center justify-center text-accent shrink-0 ${
                          isLinkable ? 'group-hover:scale-105 transition-transform' : ''
                        }`}>
                          {info.icon}
                        </div>
                        <div>
                          <h4 className="text-xs font-semibold text-white/95 uppercase tracking-wider mb-1">
                            {info.title}
                          </h4>
                          <div className="space-y-0.5">
                            {info.details.map((detail, j) => (
                              <p key={j} className="text-xs sm:text-sm text-muted">
                                {detail}
                              </p>
                            ))}
                          </div>
                        </div>
                      </a>
                    );
                  })}
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
