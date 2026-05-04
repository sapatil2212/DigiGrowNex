import React from 'react';
import { Metadata } from 'next';
import { Mail, Phone, Send } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Contact Us | digigrownex',
  description: 'Get in touch with digigrownex. Schedule a consultation for digital marketing, web development, and digital scaling solutions.',
};

export default function ContactPage() {
  return (
    <div className="pt-32 pb-24 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h1 className="text-4xl md:text-5xl font-bold font-display text-slate-900 dark:text-white mb-4">
            Let's Start Your <span className="text-accent italic">Journey</span>
          </h1>
          <p className="text-lg text-slate-600 dark:text-slate-400">
            Have a project in mind? Reach out to our experts and discover how we can accelerate your digital growth.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="flex gap-4">
              <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center shrink-0">
                <Phone className="w-6 h-6 text-accent" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-1">Call Us Directly</h3>
                <p className="text-slate-600 dark:text-slate-400 mb-2">Available Mon-Fri, 9am - 6pm</p>
                <a href="tel:7745868073" className="text-xl font-bold text-accent">7745868073</a>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center shrink-0">
                <Mail className="w-6 h-6 text-accent" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-1">Email Our Team</h3>
                <p className="text-slate-600 dark:text-slate-400 mb-2">We'll respond within 24 hours</p>
                <a href="mailto:digigrownex@gmail.com" className="font-semibold text-slate-800 dark:text-white">digigrownex@gmail.com</a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2 bg-white dark:bg-[#0a0a0a] rounded-3xl p-8 border border-slate-200 dark:border-white/10 shadow-xl">
            <div className="mb-6">
              <h2 className="text-xl font-bold mb-2" style={{ color: 'var(--fg)' }}>Send a Message</h2>
              <p className="text-sm" style={{ color: 'var(--muted-fg)' }}>
                Want to schedule a call?{' '}
                <a href="/book-appointment" className="text-accent font-semibold hover:underline">
                  Book an appointment →
                </a>
              </p>
            </div>
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">First Name</label>
                  <input type="text" className="w-full bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-xl px-4 py-3 text-slate-900 dark:text-white outline-none focus:border-accent transition-colors" placeholder="John" />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">Last Name</label>
                  <input type="text" className="w-full bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-xl px-4 py-3 text-slate-900 dark:text-white outline-none focus:border-accent transition-colors" placeholder="Doe" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">Email Address</label>
                <input type="email" className="w-full bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-xl px-4 py-3 text-slate-900 dark:text-white outline-none focus:border-accent transition-colors" placeholder="john@example.com" />
              </div>
              <div>
                <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">Message</label>
                <textarea rows={4} className="w-full bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-xl px-4 py-3 text-slate-900 dark:text-white outline-none focus:border-accent transition-colors" placeholder="Tell us about your project..."></textarea>
              </div>
              <button type="button" className="glow-button w-full sm:w-auto px-8 py-3.5 rounded-full text-white font-bold flex items-center justify-center gap-2">
                Send Message <Send className="w-4 h-4" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
