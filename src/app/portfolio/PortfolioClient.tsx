'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, ExternalLink, X, Monitor, Smartphone, Layout, PenTool, Share2 } from 'lucide-react';
import Link from 'next/link';

type Project = {
  id: string;
  title: string;
  category: string;
  subCategory?: string;
  img: string;
  url?: string;
};

const allProjects: Project[] = [
  // Websites
  { id: 'r1', title: 'Dream Properties Nashik', category: 'Websites', subCategory: 'Real Estate', img: '/images/website-previews/dreampropertiesnashik.jpg', url: 'https://www.dreampropertiesnashik.com/' },

  { id: 'h1', title: 'Shree Balaji Lawns and Resorts', category: 'Websites', subCategory: 'Hotel & Resorts', img: '/images/website-previews/shreebalajilawnsandresorts.jpg', url: 'https://shreebalajilawnsandresorts.com/' },
  { id: 'h2', title: 'Hotel Skinn', category: 'Websites', subCategory: 'Hotel & Resorts', img: '/images/website-previews/hotelskinn.jpg', url: 'https://hotelskinn.in/' },
  { id: 'h3', title: 'Aaditya Inn', category: 'Websites', subCategory: 'Hotel & Resorts', img: '/images/website-previews/aadityainn.jpg', url: 'https://aadityainn.com/' },
  { id: 'h4', title: 'Hotel Sai Vijay', category: 'Websites', subCategory: 'Hotel & Resorts', img: '/images/website-previews/hotelsaivijay.jpg', url: 'https://www.hotelsaivijay.in/' },

  { id: 'e1', title: 'SSISC', category: 'Websites', subCategory: 'Education', img: '/images/website-previews/ssisc.jpg', url: 'https://www.ssisc.in/' },
  { id: 'e2', title: 'DL Institute', category: 'Websites', subCategory: 'Education', img: '/images/website-previews/dlinstitute.jpg', url: 'https://dlinstitute.in/' },

  { id: 'med1', title: 'Dhanvantari Ayurveda', category: 'Websites', subCategory: 'Ayurveda Hospital', img: '/images/website-previews/dhanvantari-ayurveda.jpg', url: 'https://dhanvantari-ayurveda-dynamic-websit.vercel.app/' },
  { id: 'med2', title: 'Gondhale Hospital', category: 'Websites', subCategory: 'Hospital', img: '/images/website-previews/gondhalehospital.jpg', url: 'https://gondhalehospital.com/' },
  { id: 'med3', title: 'Aries Skin and Health', category: 'Websites', subCategory: 'Skin Care Clinic', img: '/images/website-previews/ariesskinandhealth.jpg', url: 'https://www.ariesskinandhealth.com/' },

  { id: 't1', title: 'My Jungle Trip', category: 'Websites', subCategory: 'Jungle Safari', img: '/images/website-previews/myjungletrip.jpg', url: 'https://myjungletrip.in/' },
  { id: 'tech1', title: 'Vantara Net', category: 'Websites', subCategory: 'Hardware Technology', img: '/images/website-previews/vantaranet.jpg', url: 'https://vantaranet.com/' },

  { id: 'cms1', title: 'Alkalyne', category: 'Websites', subCategory: 'Manufacturing CMS', img: '/images/website-previews/alkalyne.jpg', url: 'http://alkalyne.in/' },
  { id: 'cms2', title: 'Pyramid Agro Exports', category: 'Websites', subCategory: 'Import/Export CMS', img: '/images/website-previews/pyramidagroexports.jpg', url: 'https://www.pyramidagroexports.com' },

  { id: 'corp1', title: 'Zenith Hospitality Services', category: 'Websites', subCategory: 'Service Apartments', img: '/images/website-previews/zenithhospitalityservices.jpg', url: 'https://zenithhospitalityservices.com/' },
  { id: 'ongoing1', title: 'Celeb Aesthetica', category: 'Websites', subCategory: 'Ongoing Project', img: '/images/website-previews/celebaesthecia.jpg', url: 'https://www.celebaesthecia.in/' },

  // Graphics & Other
  { id: 'g1', title: 'Premium Campaign', category: 'Pamphlets', img: 'https://images.unsplash.com/photo-1586192131972-e1d515a6b07c?auto=format&fit=crop&q=80&w=800' },
  { id: 'g2', title: 'Corporate Brochure', category: 'Brochures', img: 'https://images.unsplash.com/photo-1572949645841-094f3a9c4c94?auto=format&fit=crop&q=80&w=800' },
  { id: 'g3', title: 'Minimalist Networking', category: 'Business Cards', img: 'https://images.unsplash.com/photo-1589030343991-69ea1433b941?auto=format&fit=crop&q=80&w=800' },
  { id: 'g4', title: 'Official Documents', category: 'Letter Heads', img: 'https://images.unsplash.com/photo-1628155930542-3c7a64e2c833?auto=format&fit=crop&q=80&w=800' },
  { id: 'g5', title: 'Modern Identities', category: 'Logos', img: 'https://images.unsplash.com/photo-1626785774573-4b799315345d?auto=format&fit=crop&q=80&w=800' },

  // Social Media
  { id: 's1', title: 'Brand Awareness Posts', category: 'Social Media Posts', img: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&q=80&w=800' },
  { id: 's2', title: 'Lead Gen Carousels', category: 'Social Media Posts', img: 'https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?auto=format&fit=crop&q=80&w=800' },
];

const categories = ['All', 'Websites', 'Brochures', 'Business Cards', 'Letter Heads', 'Logos', 'Pamphlets', 'Social Media Posts'];

export default function PortfolioClient() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filteredProjects = allProjects.filter(
    (p) => activeCategory === 'All' || p.category === activeCategory
  );

  return (
    <div className="pt-32 pb-24 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-3xl mx-auto mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold font-display text-slate-900 dark:text-white mb-6">
            Our Work Speaks for <span className="text-accent italic">Itself</span>
          </h1>
          <p className="text-lg text-slate-600 dark:text-slate-400">
            Browse through our portfolio of successful digital transformations, web applications, and high-impact design collaterals.
          </p>
        </motion.div>

        {/* Filters */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
            {categories.map(cat => (
                <button
                    key={cat}
                    onClick={() => setActiveCategory(cat)}
                    className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${
                        activeCategory === cat 
                        ? 'bg-accent text-white shadow-lg shadow-accent/20 scale-105'
                        : 'bg-slate-100 dark:bg-white/5 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-white/10'
                    }`}
                >
                    {cat}
                </button>
            ))}
        </div>

        {/* Projects Grid */}
        <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <motion.div 
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                key={project.id} 
                className="group cursor-pointer flex flex-col"
                onClick={() => setSelectedProject(project)}
              >
                <div className="relative aspect-[4/3] rounded-xl overflow-hidden mb-5 bg-slate-100 dark:bg-[#111] border border-slate-200 dark:border-white/10 group-hover:border-accent/30 transition-all duration-300">
                  <img src={project.img} alt={project.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-8">
                    <div className="bg-accent text-white w-12 h-12 rounded-full flex items-center justify-center transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 shadow-lg mb-4">
                      {project.category === 'Websites' ? <Monitor className="w-5 h-5"/> : <Layout className="w-5 h-5" />}
                    </div>
                    {project.url && (
                        <p className="text-white/80 text-sm font-medium flex items-center gap-2 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 delay-75">
                            Click to preview <ArrowRight className="w-4 h-4" />
                        </p>
                    )}
                  </div>
                </div>
                <div className="px-2">
                  <div className="text-accent text-xs font-bold uppercase tracking-wider mb-2">
                      {project.subCategory ? `${project.category} • ${project.subCategory}` : project.category}
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-accent transition-colors">{project.title}</h3>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Interactive Web Preview Modal */}
        <AnimatePresence>
            {selectedProject && (
                <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 custom-overlay"
                >
                    <div className="absolute inset-0 bg-slate-900/80 backdrop-blur-sm" onClick={() => setSelectedProject(null)} />
                    
                    <motion.div 
                        initial={{ scale: 0.95, opacity: 0, y: 20 }}
                        animate={{ scale: 1, opacity: 1, y: 0 }}
                        exit={{ scale: 0.95, opacity: 0, y: 20 }}
                        className="relative w-full max-w-6xl h-[85vh] bg-white dark:bg-[#0a0a0a] rounded-2xl shadow-2xl border border-slate-200 dark:border-white/10 overflow-hidden flex flex-col"
                    >
                        {/* Modal Header */}
                        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-100 dark:border-white/10 bg-slate-50 dark:bg-[#111]">
                            <div>
                                <h3 className="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-3">
                                    {selectedProject.title}
                                    <span className="text-xs px-2.5 py-1 bg-accent/10 text-accent rounded-full font-bold uppercase tracking-wider">
                                        {selectedProject.category}
                                    </span>
                                </h3>
                                {selectedProject.url && (
                                    <a href={selectedProject.url} target="_blank" rel="noreferrer" className="text-sm text-slate-500 hover:text-accent transition-colors flex items-center gap-1 mt-1">
                                        {selectedProject.url} <ExternalLink className="w-3 h-3" />
                                    </a>
                                )}
                            </div>
                            <div className="flex items-center gap-4">
                                {selectedProject.url && (
                                    <a href={selectedProject.url} target="_blank" rel="noreferrer" className="glow-button px-5 py-2.5 rounded-full text-white text-sm font-bold flex items-center gap-2">
                                        Open Live Site <ExternalLink className="w-4 h-4" />
                                    </a>
                                )}
                                <button 
                                    onClick={() => setSelectedProject(null)}
                                    className="w-10 h-10 rounded-full bg-slate-200 dark:bg-white/10 flex items-center justify-center text-slate-600 dark:text-slate-300 hover:bg-slate-300 dark:hover:bg-white/20 transition-colors"
                                >
                                    <X className="w-5 h-5" />
                                </button>
                            </div>
                        </div>

                        {/* Modal Body: Interactive Preview */}
                        <div className="flex-1 bg-slate-100 dark:bg-black/50 relative">
                            {selectedProject.category === 'Websites' && selectedProject.url ? (
                                <iframe 
                                    src={selectedProject.url} 
                                    className="w-full h-full border-none"
                                    title={`Preview of ${selectedProject.title}`}
                                    sandbox="allow-scripts allow-same-origin"
                                />
                            ) : (
                                <div className="absolute inset-0 flex flex-col items-center justify-center p-8">
                                    <img src={selectedProject.img} alt={selectedProject.title} className="max-w-full max-h-full object-contain rounded-xl shadow-2xl" />
                                </div>
                            )}
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>

      </div>
    </div>
  );
}
