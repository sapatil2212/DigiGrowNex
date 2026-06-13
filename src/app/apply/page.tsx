'use client';

import React, { useState, useEffect, Suspense } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import { User, Mail, Phone, Link as LinkIcon, FileText, Briefcase, Send, Check, ArrowLeft, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';

const jobsList = [
  { value: 'Sales Executive', label: 'Sales Executive (1-5 Yrs, Outdoor)' },
  { value: 'Video Editor', label: 'Video Editor (1-2 Yrs)' },
  { value: 'Other', label: 'Other/General Application' }
];

function ApplyFormContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    job: '',
    portfolio: '',
    coverLetter: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  // Pre-select job based on query parameters
  useEffect(() => {
    const jobParam = searchParams.get('job');
    if (jobParam === 'sales-executive') {
      setFormData(prev => ({ ...prev, job: 'Sales Executive' }));
    } else if (jobParam === 'video-editor') {
      setFormData(prev => ({ ...prev, job: 'Video Editor' }));
    }
  }, [searchParams]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    setErrorMessage('');
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage('');

    try {
      const response = await fetch('/api/apply', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok && result.success) {
        setIsSubmitted(true);
      } else {
        setErrorMessage(result.message || 'Submission failed. Please try again.');
      }
    } catch (err) {
      console.error(err);
      setErrorMessage('Network error occurred. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="glass-card rounded-3xl p-8 lg:p-12 border border-border/50 relative overflow-hidden max-w-2xl mx-auto">
      <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-accent/5 to-transparent rounded-bl-full pointer-events-none" />

      <AnimatePresence mode="wait">
        {!isSubmitted ? (
          <motion.div
            key="form-view"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="space-y-6"
          >
            <div>
              <Link href="/careers" className="inline-flex items-center gap-1.5 text-xs text-muted hover:text-accent transition-colors mb-6">
                <ArrowLeft className="w-3.5 h-3.5" /> Back to Careers
              </Link>
              <h2 className="text-2xl sm:text-3xl font-bold text-white font-display">Candidate Application</h2>
              <p className="text-xs sm:text-sm text-muted-foreground mt-1.5">
                Please submit your details. Your application will be emailed to our recruitment team.
              </p>
            </div>

            {errorMessage && (
              <div className="p-4 rounded-xl border border-red-500/20 bg-red-500/10 text-xs text-red-400">
                {errorMessage}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Job Selection */}
              <div>
                <label className="block text-[10px] font-bold text-white/95 uppercase tracking-wider mb-2">
                  Select Position *
                </label>
                <div className="relative">
                  <Briefcase className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-muted pointer-events-none" />
                  <select
                    name="job"
                    required
                    value={formData.job}
                    onChange={handleChange}
                    className="w-full pl-10 pr-10 py-3 rounded-lg border text-sm text-fg transition-all focus:ring-2 focus:ring-accent/20 bg-surface-1 border-border appearance-none cursor-pointer"
                    style={{
                      backgroundImage: `url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3E%3Cpath stroke='%23a3a3a3' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3E%3C/svg%3E")`,
                      backgroundPosition: 'right 1rem center',
                      backgroundSize: '1.5em 1.5em',
                      backgroundRepeat: 'no-repeat',
                    }}
                  >
                    <option value="" className="bg-[#0a0a0a] text-muted-foreground">Select a job opening</option>
                    {jobsList.map((job) => (
                      <option key={job.value} value={job.value} className="bg-[#0a0a0a]">
                        {job.label}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Name */}
              <div>
                <label className="block text-[10px] font-bold text-white/95 uppercase tracking-wider mb-2">
                  Full Name *
                </label>
                <div className="relative">
                  <User className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-muted pointer-events-none" />
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full pl-10 pr-4 py-3 rounded-lg border text-sm text-fg transition-all placeholder:text-muted/50 focus:ring-2 focus:ring-accent/20 bg-surface-1/50 border-border"
                    placeholder="e.g. Rahul Sharma"
                  />
                </div>
              </div>

              {/* Email & Phone */}
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-[10px] font-bold text-white/95 uppercase tracking-wider mb-2">
                    Email Address *
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-muted pointer-events-none" />
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full pl-10 pr-4 py-3 rounded-lg border text-sm text-fg transition-all placeholder:text-muted/50 focus:ring-2 focus:ring-accent/20 bg-surface-1/50 border-border"
                      placeholder="e.g. rahul@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[10px] font-bold text-white/95 uppercase tracking-wider mb-2">
                    Phone Number *
                  </label>
                  <div className="relative">
                    <Phone className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-muted pointer-events-none" />
                    <input
                      type="tel"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full pl-10 pr-4 py-3 rounded-lg border text-sm text-fg transition-all placeholder:text-muted/50 focus:ring-2 focus:ring-accent/20 bg-surface-1/50 border-border"
                      placeholder="e.g. +91 77458 68073"
                    />
                  </div>
                </div>
              </div>

              {/* Portfolio Link */}
              <div>
                <label className="block text-[10px] font-bold text-white/95 uppercase tracking-wider mb-2">
                  Portfolio / Resume Link *
                </label>
                <div className="relative">
                  <LinkIcon className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-muted pointer-events-none" />
                  <input
                    type="url"
                    name="portfolio"
                    required
                    value={formData.portfolio}
                    onChange={handleChange}
                    className="w-full pl-10 pr-4 py-3 rounded-lg border text-sm text-fg transition-all placeholder:text-muted/50 focus:ring-2 focus:ring-accent/20 bg-surface-1/50 border-border"
                    placeholder="https://drive.google.com/drive/... or Behance / GitHub Link"
                  />
                </div>
              </div>

              {/* Cover Letter */}
              <div>
                <label className="block text-[10px] font-bold text-white/95 uppercase tracking-wider mb-2">
                  Cover Letter / Brief Pitch
                </label>
                <div className="relative">
                  <FileText className="absolute left-3.5 top-4 w-4 h-4 text-muted pointer-events-none" />
                  <textarea
                    name="coverLetter"
                    rows={4}
                    value={formData.coverLetter}
                    onChange={handleChange}
                    className="w-full pl-10 pr-4 py-3 rounded-lg border text-sm text-fg transition-all placeholder:text-muted/50 focus:ring-2 focus:ring-accent/20 bg-surface-1/50 border-border resize-none"
                    placeholder="Why are you a good fit for this role? Share your experience details..."
                  />
                </div>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="glow-button w-full px-6 py-3.5 text-sm font-bold rounded-lg inline-flex items-center justify-center gap-2 transition-transform disabled:opacity-60 disabled:cursor-not-allowed hover:scale-[1.01] active:scale-95 shadow-lg shadow-accent/15"
                style={{ color: '#fff' }}
              >
                {isSubmitting ? (
                  <>
                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    Submitting Application...
                  </>
                ) : (
                  <>
                    Submit Application
                    <Send className="w-4 h-4" />
                  </>
                )}
              </button>
            </form>
          </motion.div>
        ) : (
          <motion.div
            key="success-view"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center py-12 space-y-6 flex flex-col items-center justify-center"
          >
            <div className="w-16 h-16 rounded-full bg-accent/15 flex items-center justify-center text-accent mb-2 border border-accent/20 shadow-[0_0_20px_rgba(52,204,50,0.2)]">
              <Check className="w-8 h-8 stroke-[3]" />
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold text-white font-display">Application Submitted!</h3>
            <p className="text-muted text-sm max-w-sm mx-auto leading-relaxed">
              Hi <strong className="text-white">{formData.name}</strong>, your application for the <strong className="text-white">{formData.job}</strong> opening has been sent to our recruitment team at <strong className="text-white">digigrownex@gmail.com</strong>. We will review your profile and reach out shortly.
            </p>
            
            <div className="p-4 rounded-xl border border-border bg-surface-1/30 text-xs text-muted max-w-sm mx-auto">
              A copy of your applicant profile was recorded in our database system. Keep your phone active for onboarding updates!
            </div>
            
            <div className="flex gap-4 w-full pt-4">
              <button
                onClick={() => {
                  setIsSubmitted(false);
                  setFormData({ name: '', email: '', phone: '', job: '', portfolio: '', coverLetter: '' });
                }}
                className="flex-1 py-2.5 text-xs font-bold rounded-lg text-fg border border-border bg-surface-1 hover:bg-surface-2 transition-all"
              >
                Apply for Another Job
              </button>
              <Link
                href="/careers"
                className="flex-1 glow-button py-2.5 text-xs font-bold rounded-lg text-white"
                style={{ color: '#fff' }}
              >
                Return to Careers
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function ApplyNowPage() {
  return (
    <main className="min-h-screen relative overflow-hidden">
      {/* Background patterns */}
      <div className="hero-dots" />
      <div className="hero-glow" />
      <div className="hero-glow-secondary" />

      {/* Hero Section */}
      <section className="relative pt-32 pb-12 lg:pt-40 lg:pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10 relative">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent/10 border border-accent/20 mb-6"
            >
              <Sparkles className="w-4 h-4 text-accent animate-pulse" />
              <span className="text-xs font-semibold text-accent uppercase tracking-wider">Hiring System</span>
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-7xl font-bold tracking-tight mb-6 font-display"
            >
              Start Your <span className="gradient-text">Journey</span>
            </motion.h1>
          </div>
        </div>
      </section>

      {/* Form Content */}
      <section className="pb-32 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Suspense fallback={
            <div className="text-center py-20 text-muted">
              Loading form components...
            </div>
          }>
            <ApplyFormContent />
          </Suspense>
        </div>
      </section>
    </main>
  );
}
