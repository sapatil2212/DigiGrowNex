'use client';

import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, ExternalLink, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';
import { useState } from 'react';

export default function PortfolioPage() {
  const [filter, setFilter] = useState('all');

  const categories = [
    { id: 'all', label: 'All Projects' },
    { id: 'web', label: 'Web Development' },
    { id: 'branding', label: 'Branding' },
    { id: 'marketing', label: 'Digital Marketing' },
  ];

  const projects = [
    {
      title: 'Aaditya Inn',
      category: 'web',
      description: 'Modern hotel website with booking system',
      image: '/images/website-previews/aadityainn.jpg',
      tags: ['Web Design', 'Booking System', 'SEO'],
      link: '#',
    },
    {
      title: 'Alkalyne',
      category: 'web',
      description: 'E-commerce platform for health products',
      image: '/images/website-previews/alkalyne.jpg',
      tags: ['E-commerce', 'UI/UX', 'Payment Integration'],
      link: '#',
    },
    {
      title: 'Aries Skin & Health',
      category: 'web',
      description: 'Healthcare clinic website with appointment booking',
      image: '/images/website-previews/ariesskinandhealth.jpg',
      tags: ['Healthcare', 'Appointments', 'Responsive'],
      link: '#',
    },
    {
      title: 'Celeb Aesthetica',
      category: 'branding',
      description: 'Luxury beauty clinic branding and website',
      image: '/images/website-previews/celebaesthecia.jpg',
      tags: ['Branding', 'Luxury Design', 'Web Development'],
      link: '#',
    },
    {
      title: 'Dhanvantari Ayurveda',
      category: 'web',
      description: 'Ayurvedic wellness center digital presence',
      image: '/images/website-previews/dhanvantari-ayurveda.jpg',
      tags: ['Wellness', 'Content Strategy', 'SEO'],
      link: '#',
    },
    {
      title: 'DL Institute',
      category: 'web',
      description: 'Educational institute website with course management',
      image: '/images/website-previews/dlinstitute.jpg',
      tags: ['Education', 'CMS', 'Student Portal'],
      link: '#',
    },
    {
      title: 'Dream Properties Nashik',
      category: 'marketing',
      description: 'Real estate marketing and lead generation',
      image: '/images/website-previews/dreampropertiesnashik.jpg',
      tags: ['Real Estate', 'Lead Gen', 'Google Ads'],
      link: '#',
    },
    {
      title: 'Gondhale Hospital',
      category: 'web',
      description: 'Multi-specialty hospital website',
      image: '/images/website-previews/gondhalehospital.jpg',
      tags: ['Healthcare', 'Patient Portal', 'Responsive'],
      link: '#',
    },
    {
      title: 'Hotel Sai Vijay',
      category: 'web',
      description: 'Hotel website with online booking',
      image: '/images/website-previews/hotelsaivijay.jpg',
      tags: ['Hospitality', 'Booking Engine', 'SEO'],
      link: '#',
    },
    {
      title: 'Hotel Skinn',
      category: 'branding',
      description: 'Boutique hotel branding and digital presence',
      image: '/images/website-previews/hotelskinn.jpg',
      tags: ['Branding', 'Web Design', 'Photography'],
      link: '#',
    },
    {
      title: 'My Jungle Trip',
      category: 'web',
      description: 'Travel and tourism booking platform',
      image: '/images/website-previews/myjungletrip.jpg',
      tags: ['Travel', 'Booking System', 'Payment Gateway'],
      link: '#',
    },
    {
      title: 'Pyramid Agro Exports',
      category: 'web',
      description: 'Agricultural export company website',
      image: '/images/website-previews/pyramidagroexports.jpg',
      tags: ['B2B', 'Export', 'Multilingual'],
      link: '#',
    },
    {
      title: 'Shree Balaji Lawns',
      category: 'marketing',
      description: 'Event venue marketing and booking',
      image: '/images/website-previews/shreebalajilawnsandresorts.jpg',
      tags: ['Events', 'Social Media', 'Lead Generation'],
      link: '#',
    },
    {
      title: 'SSISC',
      category: 'web',
      description: 'Educational institution website',
      image: '/images/website-previews/ssisc.jpg',
      tags: ['Education', 'CMS', 'Student Management'],
      link: '#',
    },
    {
      title: 'Vantara Net',
      category: 'web',
      description: 'ISP and networking services website',
      image: '/images/website-previews/vantaranet.jpg',
      tags: ['Technology', 'B2B', 'Service Portal'],
      link: '#',
    },
    {
      title: 'Zenith Hospitality',
      category: 'branding',
      description: 'Hospitality group branding and website',
      image: '/images/website-previews/zenithhospitalityservices.jpg',
      tags: ['Branding', 'Corporate', 'Multi-site'],
      link: '#',
    },
  ];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(p => p.category === filter);

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
              <span className="text-xs font-medium text-accent">Our Portfolio</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-7xl font-bold tracking-tight leading-[1.1] font-display mb-6"
            >
              Projects That <span className="gradient-text">Drive Results</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-base sm:text-lg text-muted max-w-2xl mx-auto leading-relaxed"
            >
              Explore our portfolio of successful projects across web development, branding, and digital marketing.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-12 relative" style={{ borderTop: '1px solid var(--border)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setFilter(cat.id)}
                className={`px-6 py-2.5 rounded-md text-sm font-medium transition-all ${
                  filter === cat.id
                    ? 'glow-button text-white'
                    : 'text-muted-foreground hover:text-white'
                }`}
                style={
                  filter !== cat.id
                    ? { border: '1px solid var(--border)', background: 'var(--surface-1)' }
                    : {}
                }
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16 relative overflow-hidden">
        <div className="section-glow section-glow-top" />
        <div className="section-glow section-glow-left" />
        <div className="section-glow section-glow-right" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                className="glass-card rounded-2xl overflow-hidden group hover:border-accent/30 transition-all"
              >
                <div className="relative aspect-video overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <Link
                      href={project.link}
                      className="px-4 py-2 rounded-md bg-white text-slate-900 text-sm font-semibold inline-flex items-center gap-2 transform translate-y-4 group-hover:translate-y-0 transition-transform"
                    >
                      View Project
                      <ExternalLink className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-accent transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-sm text-muted mb-4">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, j) => (
                      <span
                        key={j}
                        className="px-3 py-1 rounded-full text-xs font-medium bg-accent/10 text-accent border border-accent/20"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
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
            Ready to start your project?
          </h2>
          <p className="text-lg text-muted max-w-2xl mx-auto mb-10">
            Let's create something amazing together. Get in touch to discuss your project.
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
