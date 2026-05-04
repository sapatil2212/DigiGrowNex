import { Metadata } from 'next';
import AppointmentForm from '@/components/AppointmentForm';
import { Calendar } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Book Appointment | digigrownex',
  description: 'Schedule a free consultation with digigrownex. Book your appointment online.',
};

export default function BookAppointmentPage() {
  return (
    <div className="pt-28 pb-24 min-h-screen">
      <div className="section-glow section-glow-top" />
      <div className="section-glow section-glow-left" />
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent/10 border border-accent/20 mb-5">
            <Calendar className="w-3.5 h-3.5 text-accent" />
            <span className="text-xs font-bold text-accent uppercase tracking-widest">Free Consultation</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold font-display mb-3" style={{ color: 'var(--fg)' }}>
            Book an <span className="gradient-text">Appointment</span>
          </h1>
          <p className="text-sm max-w-md mx-auto" style={{ color: 'var(--muted-fg)' }}>
            Fill in your details and pick a date & time that works for you. We'll confirm within 24 hours.
          </p>
        </div>

        {/* Form card */}
        <div className="rounded-2xl p-6 sm:p-8" style={{ background: 'var(--card-bg)', border: '1px solid var(--border)' }}>
          <AppointmentForm />
        </div>
      </div>
    </div>
  );
}
