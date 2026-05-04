'use client';

import { ArrowRight, Mail, Phone, MapPin, Clock, Send, Sparkles } from 'lucide-react';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaXTwitter } from 'react-icons/fa6';
import { motion } from 'framer-motion';
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const contactInfo = [
    {
      icon: <Phone className="w-5 h-5" />,
      title: 'Phone',
      details: ['+91 98765 43210', '+91 87654 32109'],
      link: 'tel:+919876543210',
    },
    {
      icon: <Mail className="w-5 h-5" />,
      title: 'Email',
      details: ['info@digigrownex.com', 'support@digigrownex.com'],
      link: 'mailto:info@digigrownex.com',
    },
    {
      icon: <MapPin className="w-5 h-5" />,
      title: 'Office',
      details: ['123 Business Park', 'Nashik, Maharashtra 422001'],
      link: '#',
    },
    {
      icon: <Clock className="w-5 h-5" />,
      title: 'Working Hours',
      details: ['Mon - Fri: 9:00 AM - 6:00 PM', 'Sat: 10:00 AM - 4:00 PM'],
      link: '#',
    },
  ];

  const services = [
    'Web Development',
    'Mobile App Development',
    'Digital Marketing',
    'SEO Services',
    'Branding & Design',
    'Social Media Marketing',
    'Content Creation',
    'E-commerce Solutions',
    'Other',
  ];

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="hero-bg relative pt-32 pb-20 lg:pt-40 lg:pb-28 min-h-[60vh] flex items-center">
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
              <span className="text-xs font-medium text-accent">Get In Touch</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-7xl font-bold tracking-tight leading-[1.1] font-display mb-6"
            >
              Let's Build Something <span className="gradient-text">Amazing</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-base sm:text-lg text-muted max-w-2xl mx-auto leading-relaxed"
            >
              Have a project in mind? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-16 relative" style={{ borderTop: '1px solid var(--border)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((info, i) => (
              <motion.a
                key={i}
                href={info.link}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="glass-card rounded-2xl p-6 group hover:border-accent/30 transition-all cursor-pointer"
              >
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center text-accent mb-4 group-hover:scale-110 transition-transform">
                  {info.icon}
                </div>
                <h3 className="text-lg font-bold text-white mb-3">{info.title}</h3>
                {info.details.map((detail, j) => (
                  <p key={j} className="text-sm text-muted">
                    {detail}
                  </p>
                ))}
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Map */}
      <section className="py-24 relative overflow-hidden">
        <div className="section-glow section-glow-top" />
        <div className="section-glow section-glow-left" />
        <div className="section-glow section-glow-right" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6 font-display">
                Send us a message
              </h2>
              <p className="text-muted mb-8">
                Fill out the form below and we'll get back to you within 24 hours.
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-white mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-md border text-white transition-all focus:outline-none focus:ring-2 focus:ring-accent/50"
                      style={{ background: 'var(--input-bg)', borderColor: 'var(--border)' }}
                      placeholder="John Doe"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-white mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-md border text-white transition-all focus:outline-none focus:ring-2 focus:ring-accent/50"
                      style={{ background: 'var(--input-bg)', borderColor: 'var(--border)' }}
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-white mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-md border text-white transition-all focus:outline-none focus:ring-2 focus:ring-accent/50"
                      style={{ background: 'var(--input-bg)', borderColor: 'var(--border)' }}
                      placeholder="+91 98765 43210"
                    />
                  </div>

                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-white mb-2">
                      Company Name
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-md border text-white transition-all focus:outline-none focus:ring-2 focus:ring-accent/50"
                      style={{ background: 'var(--input-bg)', borderColor: 'var(--border)' }}
                      placeholder="Your Company"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-white mb-2">
                    Service Interested In *
                  </label>
                  <select
                    id="service"
                    name="service"
                    required
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-md border text-white transition-all focus:outline-none focus:ring-2 focus:ring-accent/50"
                    style={{ background: 'var(--input-bg)', borderColor: 'var(--border)' }}
                  >
                    <option value="">Select a service</option>
                    {services.map((service) => (
                      <option key={service} value={service}>
                        {service}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-white mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-md border text-white transition-all focus:outline-none focus:ring-2 focus:ring-accent/50 resize-none"
                    style={{ background: 'var(--input-bg)', borderColor: 'var(--border)' }}
                    placeholder="Tell us about your project..."
                  />
                </div>

                <button
                  type="submit"
                  className="glow-button w-full px-6 py-3.5 text-sm font-semibold rounded-md inline-flex items-center justify-center gap-2"
                  style={{ color: '#fff' }}
                >
                  Send Message
                  <Send className="w-4 h-4" />
                </button>
              </form>
            </motion.div>

            {/* Map & Social */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              {/* Map */}
              <div className="glass-card rounded-2xl overflow-hidden h-[400px]">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3749.4926891384!2d73.78271631490284!3d19.997453986478436!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bddeb0c0c0c0c0d%3A0x0!2sNashik%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1234567890123!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>

              {/* Social Links */}
              <div className="glass-card rounded-2xl p-8">
                <h3 className="text-xl font-bold text-white mb-4">Follow Us</h3>
                <p className="text-sm text-muted mb-6">
                  Stay connected with us on social media for updates and insights.
                </p>
                <div className="flex gap-4">
                  {[
                    { icon: <FaFacebookF />, link: '#', color: '#1877F2' },
                    { icon: <FaInstagram />, link: '#', color: '#E4405F' },
                    { icon: <FaLinkedinIn />, link: '#', color: '#0A66C2' },
                    { icon: <FaXTwitter />, link: '#', color: '#fff' },
                  ].map((social, i) => (
                    <a
                      key={i}
                      href={social.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 rounded-xl flex items-center justify-center transition-all hover:scale-110 hover:shadow-lg"
                      style={{ background: 'var(--surface-2)', border: '1px solid var(--border)' }}
                    >
                      <span style={{ color: social.color }}>{social.icon}</span>
                    </a>
                  ))}
                </div>
              </div>

              {/* Quick Response */}
              <div className="glass-card rounded-2xl p-8">
                <h3 className="text-xl font-bold text-white mb-4">Quick Response</h3>
                <p className="text-sm text-muted mb-4">
                  Need immediate assistance? Call us directly or schedule a consultation.
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <a
                    href="tel:+919876543210"
                    className="flex-1 px-4 py-2.5 rounded-md text-sm font-medium text-white text-center transition-all hover:scale-105"
                    style={{ background: 'var(--accent)' }}
                  >
                    Call Now
                  </a>
                  <a
                    href="/book-appointment"
                    className="flex-1 px-4 py-2.5 rounded-md text-sm font-medium text-fg text-center transition-all hover:scale-105"
                    style={{ border: '1px solid var(--border)', background: 'var(--surface-1)' }}
                  >
                    Book Meeting
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
}
