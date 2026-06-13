'use client';

import React, { useState } from 'react';
import { Briefcase, MapPin, Clock, Award, ChevronDown, Sparkles, Send, Check, User, Mail, Phone, Link as LinkIcon, FileText } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';

const jobOpenings = [
  {
    id: 'sales-executive',
    title: 'Sales Executive',
    department: 'Business Development & Growth',
    experience: '1 - 5 Years (Digital Marketing Agency)',
    location: 'Pune, India (Outdoor / On-site)',
    type: 'Full-Time',
    salary: 'Attractive Fixed + High Commission',
    description: 'We are seeking a highly motivated and result-oriented Sales Executive to acquire new corporate and local business accounts. You will drive outdoor sales activities, present our digital marketing, web dev, and automation solutions, and manage client partnerships.',
    responsibilities: [
      'Conduct outdoor sales visits to generate leads and pitch digital services directly to business owners.',
      'Consult prospective clients on SEO, social media marketing, custom web/app development, WhatsApp automation, and IVR packages.',
      'Prepare custom client proposals, negotiate contract terms, and close sales targets.',
      'Maintain strong ongoing relationships with onboarded clients to identify upsell opportunities.'
    ],
    requirements: [
      '1 to 5 years of proven sales experience, preferably in a digital agency, SaaS, or telecom partner environment.',
      'Able and willing to conduct active outdoor field sales in Pune and surrounding regions.',
      'Excellent verbal presentation, negotiation, and rapport-building skills.',
      'Familiarity with the Pune business landscape and fluency in local languages (Marathi and Hindi).'
    ]
  },
  {
    id: 'video-editor',
    title: 'Video Editor',
    department: 'Creative & Post-Production',
    experience: '1 - 2 Years',
    location: 'Pune, India (On-site / Hybrid)',
    type: 'Full-Time',
    salary: 'Competitive Base Salary',
    description: 'We are looking for a creative Video Editor with 1 to 2 years of experience to turn raw assets and shoot clips into high-retention video campaigns, social media reels, client ads, and corporate branding assets.',
    responsibilities: [
      'Assemble, cut, and edit high-impact commercial videos, client ad reels, and corporate marketing videos.',
      'Implement creative pacing, sound design, sound effects, transition elements, and color grading.',
      'Integrate basic motion graphics, subtitles, and branding badges matching client design sheets.',
      'Collaborate with project coordinators and content strategists to refine campaign output.'
    ],
    requirements: [
      '1 to 2 years of solid video editing experience (please attach portfolio link).',
      'Proficiency in industry-standard software: Adobe Premiere Pro, After Effects, or DaVinci Resolve.',
      'Good eye for visual aesthetics, pacing, storytelling flow, and audio balancing.',
      'Ability to manage timeline milestones and adapt quickly to creative feedback.'
    ]
  }
];

const benefits = [
  { icon: <Briefcase className="w-5 h-5" />, title: 'Real Impact', desc: 'Work directly on high-growth solutions for real regional and global client brands.' },
  { icon: <Award className="w-5 h-5" />, title: 'High Commissions', desc: 'Our growth executive incentives are uncapped. Real success is compensated generously.' },
  { icon: <Sparkles className="w-5 h-5" />, title: 'Skill Growth', desc: 'Access paid training tracks in Google Cloud, CRM workflows, and WhatsApp Business API.' },
  { icon: <Clock className="w-5 h-5" />, title: 'Flexible Hybrid', desc: 'Our creative post-production roles support hybrid office schedules to keep you inspired.' }
];

export default function CareersPage() {
  const [expandedJobId, setExpandedJobId] = useState<string | null>(null);
  const [selectedJob, setSelectedJob] = useState<typeof jobOpenings[0] | null>(null);
  const [applyFormData, setApplyFormData] = useState({
    name: '',
    email: '',
    phone: '',
    portfolio: '',
    coverLetter: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const toggleExpand = (id: string) => {
    setExpandedJobId(expandedJobId === id ? null : id);
  };

  const handleApplyClick = (job: typeof jobOpenings[0], e: React.MouseEvent) => {
    e.stopPropagation(); // Avoid closing the expander
    setSelectedJob(job);
    setIsSubmitted(false);
  };

  const handleApplySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1200);
  };

  return (
    <main className="min-h-screen relative overflow-hidden">
      {/* Background patterns */}
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
              <Briefcase className="w-4 h-4 text-accent animate-pulse" />
              <span className="text-xs font-semibold text-accent uppercase tracking-wider">Careers at DigiGrowNex</span>
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-7xl font-bold tracking-tight mb-6 font-display"
            >
              Join Our <span className="gradient-text">Growing Team</span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-base sm:text-lg text-muted max-w-2xl mx-auto leading-relaxed"
            >
              Ready to work at Pune's fastest growing digital agency? Explore open roles and build your career in a dynamic, client-first corporate ecosystem.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Culture Benefits */}
      <section className="py-12 relative z-10" style={{ borderTop: '1px solid var(--border)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="glass-card rounded-2xl p-6 group hover:border-accent/30 transition-all"
              >
                <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center text-accent mb-4 group-hover:scale-110 transition-transform">
                  {benefit.icon}
                </div>
                <h3 className="text-base font-bold text-white mb-2 font-display">{benefit.title}</h3>
                <p className="text-xs sm:text-sm text-muted leading-relaxed">{benefit.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Job Openings */}
      <section className="py-20 relative z-10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2 font-display text-center">Open Opportunities</h2>
          <p className="text-muted text-sm text-center mb-12">Click on a role to review responsibilities, requirements, and to submit your application.</p>
          
          <div className="space-y-4">
            {jobOpenings.map((job) => {
              const isExpanded = expandedJobId === job.id;
              return (
                <div
                  key={job.id}
                  onClick={() => toggleExpand(job.id)}
                  className="glass-card rounded-2xl border border-border/50 hover:border-accent/20 cursor-pointer overflow-hidden transition-all duration-300"
                >
                  {/* Job Accordion Header */}
                  <div className="p-6 sm:p-8 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                    <div>
                      <div className="flex gap-2 items-center mb-2 flex-wrap">
                        <span className="px-2 py-0.5 rounded bg-accent/10 border border-accent/20 text-[10px] font-bold text-accent uppercase tracking-wider">{job.type}</span>
                        <span className="px-2 py-0.5 rounded bg-surface-2 border border-border text-[10px] font-medium text-muted uppercase tracking-wider">{job.department}</span>
                      </div>
                      <h3 className="text-lg sm:text-xl font-bold text-white font-display">{job.title}</h3>
                    </div>
                    <div className="flex items-center gap-3 w-full sm:w-auto justify-between sm:justify-end">
                      <div className="flex flex-col text-left sm:text-right text-xs text-muted-foreground">
                        <span className="flex items-center gap-1"><MapPin className="w-3 h-3 text-accent" /> {job.location}</span>
                        <span className="flex items-center gap-1 mt-0.5"><Clock className="w-3 h-3 text-accent" /> Exp: {job.experience}</span>
                      </div>
                      <div className="w-8 h-8 rounded-full bg-surface-2 border border-border flex items-center justify-center text-muted group-hover:text-white shrink-0">
                        <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${isExpanded ? 'rotate-180 text-accent' : ''}`} />
                      </div>
                    </div>
                  </div>

                  {/* Accordion Expanded Content */}
                  <AnimatePresence>
                    {isExpanded && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="border-t border-border/40 bg-surface-1/20"
                      >
                        <div className="p-6 sm:p-8 space-y-6 text-sm sm:text-base text-muted-foreground leading-relaxed">
                          <p>{job.description}</p>
                          
                          <div className="space-y-2">
                            <h4 className="text-sm font-bold text-white font-display uppercase tracking-wider flex items-center gap-2">
                              <span className="w-1.5 h-1.5 rounded-full bg-accent" /> Key Responsibilities:
                            </h4>
                            <ul className="list-disc pl-5 space-y-1 text-xs sm:text-sm">
                              {job.responsibilities.map((resp, k) => (
                                <li key={k}>{resp}</li>
                              ))}
                            </ul>
                          </div>

                          <div className="space-y-2">
                            <h4 className="text-sm font-bold text-white font-display uppercase tracking-wider flex items-center gap-2">
                              <span className="w-1.5 h-1.5 rounded-full bg-accent" /> Qualifications & Requirements:
                            </h4>
                            <ul className="list-disc pl-5 space-y-1 text-xs sm:text-sm">
                              {job.requirements.map((req, k) => (
                                <li key={k}>{req}</li>
                              ))}
                            </ul>
                          </div>

                          <div className="flex items-center justify-between pt-4 border-t border-border/40 gap-4 flex-wrap">
                            <span className="text-xs text-accent">Salary Structure: <strong className="text-white">{job.salary}</strong></span>
                            <Link
                              href={`/apply?job=${job.id}`}
                              className="glow-button px-5 py-2 text-xs font-bold rounded-lg text-white"
                              style={{ color: '#fff' }}
                              onClick={(e) => e.stopPropagation()}
                            >
                              Apply Now
                            </Link>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Interactive Application Modal Popup */}
      <AnimatePresence>
        {selectedJob && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Modal backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedJob(null)}
              className="absolute inset-0 bg-black/80 backdrop-blur-sm"
            />
            
            {/* Modal Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-lg z-10 glass-card rounded-3xl p-8 border border-border/50 overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-48 h-48 bg-gradient-to-bl from-accent/5 to-transparent rounded-bl-full pointer-events-none" />
              
              <AnimatePresence mode="wait">
                {!isSubmitted ? (
                  <motion.div
                    key="form"
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="space-y-6"
                  >
                    <div>
                      <span className="text-xs font-bold text-accent uppercase tracking-wider">Application Form</span>
                      <h3 className="text-xl sm:text-2xl font-bold text-white font-display mt-1">
                        Apply for {selectedJob.title}
                      </h3>
                      <p className="text-xs text-muted-foreground mt-1">Submit your details below. We review portfolios daily.</p>
                    </div>

                    <form onSubmit={handleApplySubmit} className="space-y-4">
                      <div>
                        <label className="block text-[10px] font-bold text-white/95 uppercase tracking-wider mb-1">
                          Full Name *
                        </label>
                        <div className="relative">
                          <User className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-muted" />
                          <input
                            type="text"
                            required
                            value={applyFormData.name}
                            onChange={(e) => setApplyFormData({ ...applyFormData, name: e.target.value })}
                            className="w-full pl-10 pr-4 py-2.5 rounded-lg border text-sm text-fg transition-all bg-surface-1 border-border"
                            placeholder="Rahul Sharma"
                          />
                        </div>
                      </div>

                      <div className="grid sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-[10px] font-bold text-white/95 uppercase tracking-wider mb-1">
                            Email Address *
                          </label>
                          <div className="relative">
                            <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-muted" />
                            <input
                              type="email"
                              required
                              value={applyFormData.email}
                              onChange={(e) => setApplyFormData({ ...applyFormData, email: e.target.value })}
                              className="w-full pl-10 pr-4 py-2.5 rounded-lg border text-sm text-fg transition-all bg-surface-1 border-border"
                              placeholder="rahul@example.com"
                            />
                          </div>
                        </div>

                        <div>
                          <label className="block text-[10px] font-bold text-white/95 uppercase tracking-wider mb-1">
                            Phone Number *
                          </label>
                          <div className="relative">
                            <Phone className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-muted" />
                            <input
                              type="tel"
                              required
                              value={applyFormData.phone}
                              onChange={(e) => setApplyFormData({ ...applyFormData, phone: e.target.value })}
                              className="w-full pl-10 pr-4 py-2.5 rounded-lg border text-sm text-fg transition-all bg-surface-1 border-border"
                              placeholder="+91 98765 43210"
                            />
                          </div>
                        </div>
                      </div>

                      <div>
                        <label className="block text-[10px] font-bold text-white/95 uppercase tracking-wider mb-1">
                          Portfolio / Resume Link *
                        </label>
                        <div className="relative">
                          <LinkIcon className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-muted" />
                          <input
                            type="url"
                            required
                            value={applyFormData.portfolio}
                            onChange={(e) => setApplyFormData({ ...applyFormData, portfolio: e.target.value })}
                            className="w-full pl-10 pr-4 py-2.5 rounded-lg border text-sm text-fg transition-all bg-surface-1 border-border"
                            placeholder="https://drive.google.com/... or Behance / GitHub"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-[10px] font-bold text-white/95 uppercase tracking-wider mb-1">
                          Why do you want to join us?
                        </label>
                        <div className="relative">
                          <FileText className="absolute left-3.5 top-3 w-4 h-4 text-muted" />
                          <textarea
                            rows={3}
                            value={applyFormData.coverLetter}
                            onChange={(e) => setApplyFormData({ ...applyFormData, coverLetter: e.target.value })}
                            className="w-full pl-10 pr-4 py-2.5 rounded-lg border text-sm text-fg transition-all bg-surface-1 border-border resize-none"
                            placeholder="Brief cover note or summary..."
                          />
                        </div>
                      </div>

                      <div className="flex gap-3 pt-2">
                        <button
                          type="button"
                          onClick={() => setSelectedJob(null)}
                          className="flex-1 py-2.5 text-xs font-bold rounded-lg text-fg border border-border hover:bg-surface-1 transition-all"
                        >
                          Cancel
                        </button>
                        <button
                          type="submit"
                          disabled={isSubmitting}
                          className="flex-1 glow-button py-2.5 text-xs font-bold rounded-lg text-white"
                          style={{ color: '#fff' }}
                        >
                          {isSubmitting ? (
                            <>
                              <div className="w-3.5 h-3.5 border-2 border-white border-t-transparent rounded-full animate-spin mr-1.5" />
                              Submitting...
                            </>
                          ) : (
                            <>
                              Submit Application <Send className="w-3.5 h-3.5 ml-1" />
                            </>
                          )}
                        </button>
                      </div>
                    </form>
                  </motion.div>
                ) : (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-8 space-y-6 flex flex-col items-center justify-center"
                  >
                    <div className="w-14 h-14 rounded-full bg-accent/15 flex items-center justify-center text-accent mb-2 border border-accent/20 shadow-[0_0_15px_rgba(52,204,50,0.15)]">
                      <Check className="w-7 h-7 stroke-[3]" />
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold text-white font-display">Application Received!</h3>
                    <p className="text-xs sm:text-sm text-muted leading-relaxed max-w-xs mx-auto">
                      Thank you for applying for the <strong className="text-white">{selectedJob.title}</strong> position, <strong className="text-white">{applyFormData.name}</strong>. Our recruiting team will evaluate your portfolio and reach out shortly.
                    </p>
                    
                    <button
                      onClick={() => setSelectedJob(null)}
                      className="glow-button px-6 py-2 text-xs font-bold rounded-lg w-full"
                      style={{ color: '#fff' }}
                    >
                      Close Window
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </main>
  );
}
