'use client';

import React, { useState, useRef, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import {
  User, Phone, Mail, MapPin, Calendar, Clock, ChevronDown,
  CheckCircle2, X, Home, ChevronLeft, ChevronRight,
} from 'lucide-react';
import Link from 'next/link';

/* ─── Data ─────────────────────────────────────────── */
const STATES = [
  'Andhra Pradesh','Arunachal Pradesh','Assam','Bihar','Chhattisgarh','Goa',
  'Gujarat','Haryana','Himachal Pradesh','Jharkhand','Karnataka','Kerala',
  'Madhya Pradesh','Maharashtra','Manipur','Meghalaya','Mizoram','Nagaland',
  'Odisha','Punjab','Rajasthan','Sikkim','Tamil Nadu','Telangana','Tripura',
  'Uttar Pradesh','Uttarakhand','West Bengal','Andaman & Nicobar Islands',
  'Chandigarh','Dadra & Nagar Haveli and Daman & Diu','Delhi',
  'Jammu & Kashmir','Ladakh','Lakshadweep','Puducherry',
];

const TIME_SLOTS = [
  '09:00 AM','09:30 AM','10:00 AM','10:30 AM','11:00 AM','11:30 AM',
  '12:00 PM','12:30 PM','01:00 PM','01:30 PM','02:00 PM','02:30 PM',
  '03:00 PM','03:30 PM','04:00 PM','04:30 PM','05:00 PM','05:30 PM',
  '06:00 PM',
];

/* ─── Helpers ───────────────────────────────────────── */
const MONTHS = ['January','February','March','April','May','June',
  'July','August','September','October','November','December'];
const DAYS = ['Su','Mo','Tu','We','Th','Fr','Sa'];

function formatDate(d: Date) {
  return d.toLocaleDateString('en-IN', { weekday: 'short', day: 'numeric', month: 'short', year: 'numeric' });
}

/* ─── Calendar Dropdown ─────────────────────────────── */
function CalendarDropdown({ value, onChange }: { value: Date | null; onChange: (d: Date) => void }) {
  const [open, setOpen] = useState(false);
  const [view, setView] = useState(() => { const t = new Date(); return { y: t.getFullYear(), m: t.getMonth() }; });
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const h = (e: MouseEvent) => { if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false); };
    document.addEventListener('mousedown', h);
    return () => document.removeEventListener('mousedown', h);
  }, []);

  const today = new Date(); today.setHours(0,0,0,0);
  const firstDay = new Date(view.y, view.m, 1).getDay();
  const daysInMonth = new Date(view.y, view.m + 1, 0).getDate();

  const prev = () => setView(v => { const d = new Date(v.y, v.m - 1); return { y: d.getFullYear(), m: d.getMonth() }; });
  const next = () => setView(v => { const d = new Date(v.y, v.m + 1); return { y: d.getFullYear(), m: d.getMonth() }; });

  const isPast = (day: number) => new Date(view.y, view.m, day) < today;
  const isSelected = (day: number) => value?.getFullYear() === view.y && value?.getMonth() === view.m && value?.getDate() === day;
  const isToday = (day: number) => today.getFullYear() === view.y && today.getMonth() === view.m && today.getDate() === day;

  return (
    <div ref={ref} className="relative">
      <button type="button" onClick={() => setOpen(!open)}
        className="w-full no-gradient flex items-center justify-between px-2 sm:px-3 py-1.5 sm:py-2 rounded-lg text-[10px] sm:text-xs border transition-colors hover:border-slate-300"
        style={{ 
          borderColor: open ? '#1e293b' : '#e2e8f0', 
          color: value ? '#1e293b' : '#94a3b8',
          backgroundColor: '#ffffff'
        }}>
        <span className="flex items-center gap-1.5 sm:gap-2 truncate">
          <Calendar className="w-3 sm:w-3.5 h-3 sm:h-3.5 text-slate-400 shrink-0" />
          {value ? formatDate(value) : 'Select date'}
        </span>
        <ChevronDown className={`w-3 sm:w-3.5 h-3 sm:h-3.5 text-slate-400 transition-transform shrink-0 ${open ? 'rotate-180' : ''}`} />
      </button>

      <AnimatePresence>
        {open && (
          <motion.div initial={{ opacity: 0, y: -6 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.15 }}
            className="absolute z-50 mt-1 w-full no-gradient rounded-2xl border border-slate-200 shadow-xl overflow-hidden"
            style={{ backgroundColor: '#ffffff' }}>
            {/* Month nav */}
            <div className="flex items-center justify-between px-4 py-3 border-b border-slate-100" style={{ backgroundColor: '#ffffff' }}>
              <button type="button" onClick={prev} className="p-1.5 rounded-lg hover:bg-slate-100 transition-colors">
                <ChevronLeft className="w-4 h-4 text-slate-500" />
              </button>
              <span className="text-sm font-semibold text-slate-700">{MONTHS[view.m]} {view.y}</span>
              <button type="button" onClick={next} className="p-1.5 rounded-lg hover:bg-slate-100 transition-colors">
                <ChevronRight className="w-4 h-4 text-slate-500" />
              </button>
            </div>
            {/* Day headers */}
            <div className="grid grid-cols-7 px-3 pt-2" style={{ backgroundColor: '#ffffff' }}>
              {DAYS.map(d => <div key={d} className="text-center text-[10px] font-semibold text-slate-400 pb-1">{d}</div>)}
            </div>
            {/* Days */}
            <div className="grid grid-cols-7 px-3 pb-3 gap-y-0.5" style={{ backgroundColor: '#ffffff' }}>
              {Array.from({ length: firstDay }).map((_, i) => <div key={i} />)}
              {Array.from({ length: daysInMonth }, (_, i) => i + 1).map(day => (
                <button key={day} type="button" disabled={isPast(day)}
                  onClick={() => { onChange(new Date(view.y, view.m, day)); setOpen(false); }}
                  className="w-8 h-8 mx-auto rounded-full text-xs font-medium transition-all flex items-center justify-center"
                  style={{
                    background: isSelected(day) ? '#1e293b' : isToday(day) ? '#f8fafc' : 'transparent',
                    color: isSelected(day) ? '#fff' : isPast(day) ? '#cbd5e1' : isToday(day) ? '#1e293b' : '#334155',
                    cursor: isPast(day) ? 'not-allowed' : 'pointer',
                    fontWeight: isToday(day) || isSelected(day) ? 700 : 400,
                  }}>
                  {day}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

/* ─── Time Dropdown ─────────────────────────────────── */
function TimeDropdown({ value, onChange }: { value: string; onChange: (t: string) => void }) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const listRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const h = (e: MouseEvent) => { if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false); };
    document.addEventListener('mousedown', h);
    return () => document.removeEventListener('mousedown', h);
  }, []);

  useEffect(() => {
    if (open && value && listRef.current) {
      const idx = TIME_SLOTS.indexOf(value);
      if (idx > -1) {
        const el = listRef.current.children[idx] as HTMLElement;
        el?.scrollIntoView({ block: 'nearest' });
      }
    }
  }, [open, value]);

  return (
    <div ref={ref} className="relative">
      <button type="button" onClick={() => setOpen(!open)}
        className="w-full no-gradient flex items-center justify-between px-2 sm:px-3 py-1.5 sm:py-2 rounded-lg text-[10px] sm:text-xs border transition-colors hover:border-slate-300"
        style={{ 
          borderColor: open ? '#1e293b' : '#e2e8f0', 
          color: value ? '#1e293b' : '#94a3b8',
          backgroundColor: '#ffffff'
        }}>
        <span className="flex items-center gap-1.5 sm:gap-2 truncate">
          <Clock className="w-3 sm:w-3.5 h-3 sm:h-3.5 text-slate-400 shrink-0" />
          {value || 'Select time'}
        </span>
        <ChevronDown className={`w-3 sm:w-3.5 h-3 sm:h-3.5 text-slate-400 transition-transform shrink-0 ${open ? 'rotate-180' : ''}`} />
      </button>

      <AnimatePresence>
        {open && (
          <motion.div initial={{ opacity: 0, y: -6 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.15 }}
            className="absolute z-50 mt-1 w-full no-gradient rounded-2xl border border-slate-200 shadow-xl overflow-hidden"
            style={{ backgroundColor: '#ffffff' }}>
            <div ref={listRef} className="max-h-52 overflow-y-auto py-1" style={{ backgroundColor: '#ffffff' }}>
              {TIME_SLOTS.map(slot => (
                <button key={slot} type="button"
                  onClick={() => { onChange(slot); setOpen(false); }}
                  className="w-full text-left px-3 py-2 text-xs transition-colors flex items-center gap-2"
                  style={{
                    background: value === slot ? '#f8fafc' : 'transparent',
                    color: value === slot ? '#1e293b' : '#334155',
                    fontWeight: value === slot ? 700 : 400,
                  }}>
                  <Clock className="w-3 h-3 opacity-40" />
                  {slot}
                  {value === slot && <CheckCircle2 className="w-3 h-3 ml-auto text-slate-600" />}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

/* ─── State Dropdown ────────────────────────────────── */
function StateDropdown({ value, onChange }: { value: string; onChange: (s: string) => void }) {
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState('');
  const ref = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const h = (e: MouseEvent) => { if (ref.current && !ref.current.contains(e.target as Node)) { setOpen(false); setSearch(''); } };
    document.addEventListener('mousedown', h);
    return () => document.removeEventListener('mousedown', h);
  }, []);

  useEffect(() => { if (open) setTimeout(() => inputRef.current?.focus(), 50); }, [open]);

  const filtered = STATES.filter(s => s.toLowerCase().includes(search.toLowerCase()));

  return (
    <div ref={ref} className="relative">
      <button type="button" onClick={() => setOpen(!open)}
        className="w-full no-gradient flex items-center justify-between px-2 sm:px-3 py-1.5 sm:py-2 rounded-lg text-[10px] sm:text-xs border transition-colors hover:border-slate-300"
        style={{ 
          borderColor: open ? '#1e293b' : '#e2e8f0', 
          color: value ? '#1e293b' : '#94a3b8',
          backgroundColor: '#ffffff'
        }}>
        <span className="flex items-center gap-1.5 sm:gap-2 truncate">
          <MapPin className="w-3 sm:w-3.5 h-3 sm:h-3.5 text-slate-400 shrink-0" />
          {value || 'Select state'}
        </span>
        <ChevronDown className={`w-3 sm:w-3.5 h-3 sm:h-3.5 text-slate-400 transition-transform shrink-0 ${open ? 'rotate-180' : ''}`} />
      </button>

      <AnimatePresence>
        {open && (
          <motion.div initial={{ opacity: 0, y: -6 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.15 }}
            className="absolute z-50 mt-1 w-full no-gradient rounded-2xl border border-slate-200 shadow-xl overflow-hidden"
            style={{ backgroundColor: '#ffffff' }}>
            <div className="p-2 border-b border-slate-100" style={{ backgroundColor: '#ffffff' }}>
              <input ref={inputRef} value={search} onChange={e => setSearch(e.target.value)}
                placeholder="Search state..." 
                className="w-full px-3 py-2 text-sm rounded-lg border border-slate-200 outline-none focus:border-slate-400 text-slate-700 no-gradient form-input-no-glow"
                style={{ backgroundColor: '#ffffff' }} />
            </div>
            <div className="max-h-48 overflow-y-auto py-1" style={{ backgroundColor: '#ffffff' }}>
              {filtered.length === 0
                ? <div className="px-4 py-3 text-sm text-slate-400">No results</div>
                : filtered.map(s => (
                  <button key={s} type="button"
                    onClick={() => { onChange(s); setOpen(false); setSearch(''); }}
                    className="w-full text-left px-3 py-2 text-xs transition-colors"
                    style={{ background: s === value ? '#f8fafc' : 'transparent', color: s === value ? '#1e293b' : '#334155', fontWeight: s === value ? 700 : 400 }}>
                    {s}
                  </button>
                ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

/* ─── Input ─────────────────────────────────────────── */
function Input({ label, required, icon: Icon, error, ...props }: {
  label: string; required?: boolean; icon: React.ElementType; error?: string;
} & React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <div>
      <label className="block text-[10px] sm:text-xs font-medium text-slate-600 mb-1 truncate">
        {label}{required && <span className="text-red-500 ml-0.5">*</span>}
      </label>
      <div className="relative">
        <Icon className="absolute left-2 sm:left-3 top-1/2 -translate-y-1/2 w-3 sm:w-3.5 h-3 sm:h-3.5 text-slate-400 pointer-events-none" />
        <input {...props}
          className="w-full pl-7 sm:pl-9 pr-2 sm:pr-3 py-1.5 sm:py-2 rounded-lg text-[10px] sm:text-xs border border-slate-200 bg-white no-gradient form-input-no-glow outline-none transition-colors text-slate-800 placeholder:text-slate-400"
          style={{ 
            borderColor: error ? '#ef4444' : '#e2e8f0',
            backgroundColor: '#ffffff'
          }} />
      </div>
      {error && <p className="text-[9px] sm:text-[10px] text-red-500 mt-0.5">{error}</p>}
    </div>
  );
}

/* ─── Main Form ─────────────────────────────────────── */
export default function AppointmentForm() {
  const [form, setForm] = useState({ name: '', phone: '', email: '', city: '', state: '' });
  const [date, setDate] = useState<Date | null>(null);
  const [time, setTime] = useState('');
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);

  const set = (k: string, v: string) => { setForm(f => ({ ...f, [k]: v })); setErrors(e => ({ ...e, [k]: '' })); };

  const validate = () => {
    const e: Record<string, string> = {};
    if (!form.name.trim()) e.name = 'Required';
    if (!/^\d{10}$/.test(form.phone)) e.phone = 'Enter valid 10-digit number';
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = 'Enter valid email';
    if (!form.city.trim()) e.city = 'Required';
    if (!form.state) e.state = 'Please select a state';
    if (!date) e.date = 'Please select a date';
    if (!time) e.time = 'Please select a time';
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => { e.preventDefault(); if (validate()) setSubmitted(true); };
  const handleReset = () => { setForm({ name:'',phone:'',email:'',city:'',state:'' }); setDate(null); setTime(''); setErrors({}); };

  if (submitted) {
    return (
      <motion.div initial={{ opacity: 0, scale: 0.97 }} animate={{ opacity: 1, scale: 1 }} className="text-center py-10">
        <div className="w-16 h-16 rounded-full bg-slate-100 flex items-center justify-center mx-auto mb-5">
          <CheckCircle2 className="w-8 h-8 text-slate-700" />
        </div>
        <h2 className="text-xl font-bold text-slate-800 mb-2">Appointment Confirmed!</h2>
        <p className="text-sm text-slate-500 mb-1">Hi <strong className="text-slate-700">{form.name}</strong>, you're booked for</p>
        <p className="text-base font-semibold text-slate-800 mb-0.5">{date && formatDate(date)}</p>
        <p className="text-base font-semibold text-slate-800 mb-6">{time}</p>
        <p className="text-sm text-slate-500 mb-8">We'll reach you at <strong className="text-slate-700">{form.phone}</strong></p>
        <Link href="/"
          className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl text-sm font-semibold neutral-button">
          <Home className="w-4 h-4" /> Back to Home
        </Link>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-4 sm:space-y-5">
      <div className="grid grid-cols-2 gap-3 sm:gap-5">
        <Input label="Your Name" required icon={User} value={form.name}
          onChange={e => set('name', e.target.value)} placeholder="Full name" error={errors.name} />
        <Input label="Contact No" required icon={Phone} value={form.phone}
          onChange={e => set('phone', e.target.value.replace(/\D/g,'').slice(0,10))}
          placeholder="10-digit mobile" error={errors.phone} />
        <Input label="Email ID" required icon={Mail} type="email" value={form.email}
          onChange={e => set('email', e.target.value)} placeholder="you@example.com" error={errors.email} />
        <Input label="City" required icon={MapPin} value={form.city}
          onChange={e => set('city', e.target.value)} placeholder="Your city" error={errors.city} />
      </div>

      {/* State */}
      <div>
        <label className="block text-[10px] sm:text-xs font-medium text-slate-600 mb-1">
          State<span className="text-red-500 ml-0.5">*</span>
        </label>
        <StateDropdown value={form.state} onChange={v => { set('state', v); }} />
        {errors.state && <p className="text-[10px] text-red-500 mt-0.5">{errors.state}</p>}
      </div>

      <div className="grid grid-cols-2 gap-3 sm:gap-5">
        {/* Date */}
        <div>
          <label className="block text-[10px] sm:text-xs font-medium text-slate-600 mb-1">
            Preferred Date<span className="text-red-500 ml-0.5">*</span>
          </label>
          <CalendarDropdown value={date} onChange={d => { setDate(d); setErrors(e => ({ ...e, date: '' })); }} />
          {errors.date && <p className="text-[10px] text-red-500 mt-0.5">{errors.date}</p>}
        </div>

        {/* Time */}
        <div>
          <label className="block text-[10px] sm:text-xs font-medium text-slate-600 mb-1">
            Preferred Time<span className="text-red-500 ml-0.5">*</span>
          </label>
          <TimeDropdown value={time} onChange={t => { setTime(t); setErrors(e => ({ ...e, time: '' })); }} />
          {errors.time && <p className="text-[10px] text-red-500 mt-0.5">{errors.time}</p>}
        </div>
      </div>

      {/* Actions */}
      <div className="flex items-center justify-end pt-2">
        <button type="submit"
          className="flex items-center gap-2 px-6 py-2.5 rounded-lg text-xs font-bold text-white transition-all hover:opacity-90 active:scale-95"
          style={{ background: '#34CC32', color: '#ffffff' }}>
          <CheckCircle2 className="w-4 h-4 text-white" stroke="#ffffff" /> Book Appointment
        </button>
      </div>
    </form>
  );
}
