import { Metadata } from 'next';
import AppointmentForm from '@/components/AppointmentForm';
import Link from 'next/link';
import { Home } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Book Appointment | digigrownex',
  description: 'Schedule a free consultation with digigrownex.',
};

export default function BookAppointmentPage() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-12 relative overflow-hidden" style={{ background: '#ffffff', backgroundColor: '#ffffff' }}>
      {/* Intense Animated Background Elements (Reduced Intensity) */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Movable Mouse Spotlight (Fainter) */}
        <div 
          className="absolute inset-0 z-0 opacity-10 transition-opacity duration-300"
          style={{
            background: `radial-gradient(1000px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(52, 204, 50, 0.1), transparent 70%)`
          } as any}
        />

        {/* Top-Left Intense Glow (Fainter) */}
        <div className="absolute -top-[10%] -left-[10%] w-[800px] h-[800px] animate-pulse opacity-10" 
          style={{ background: 'radial-gradient(circle, rgba(52, 204, 50, 0.05), transparent 70%)' }} />
        
        {/* Bottom-Right Intense Glow (Fainter) */}
        <div className="absolute -bottom-[10%] -right-[10%] w-[800px] h-[800px] animate-pulse opacity-10"
          style={{ background: 'radial-gradient(circle, rgba(52, 204, 50, 0.05), transparent 70%)' }} />

        {/* Existing Layout Glows (Fainter) */}
        <div className="hero-glow opacity-20 scale-150" />
        <div className="section-glow section-glow-left opacity-20 scale-150" />
        <div className="section-glow section-glow-right opacity-20 scale-150" />
        <div className="hero-dots opacity-20" />
        
        {/* Floating Particles */}
        <div className="hero-particle w-2 h-2 top-[15%] left-[10%]" style={{ animationDelay: '0s' }} />
        <div className="hero-particle w-3 h-3 top-[70%] left-[15%]" style={{ animationDelay: '2s' }} />
        <div className="hero-particle w-2 h-2 top-[85%] left-[30%]" style={{ animationDelay: '4s' }} />
        <div className="hero-particle w-3 h-3 top-[25%] left-[80%]" style={{ animationDelay: '1s' }} />
        <div className="hero-particle w-2 h-2 top-[75%] left-[85%]" style={{ animationDelay: '3s' }} />
        <div className="hero-particle w-4 h-4 top-[45%] left-[75%]" style={{ animationDelay: '5s' }} />
      </div>

      <div className="w-full max-w-2xl relative z-10">
        {/* Logo / Brand */}
        <div className="text-center mb-8">
          <img src="/images/logo/digigrownex-logo-light.png" alt="digigrownex" className="h-10 w-auto mx-auto mb-6 object-contain" />
          <h1 className="text-xl font-bold text-slate-800 mb-1">Book an Appointment</h1>
          <p className="text-xs text-slate-500">Fill in your details and we'll confirm within 24 hours.</p>
        </div>

        {/* Card */}
        <div className="bg-white no-gradient rounded-xl border border-slate-200 p-5 sm:p-7 shadow-2xl mb-6" style={{ background: '#ffffff', backgroundColor: '#ffffff' }}>
          <AppointmentForm />
        </div>

        {/* Back to Home - Outside Container */}
        <div className="text-center">
          <Link href="/"
            className="inline-flex items-center gap-2 text-sm font-semibold text-slate-500 hover:text-slate-800 transition-colors">
            <Home className="w-4 h-4" /> Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}
