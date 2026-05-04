'use client';

import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  User, Phone, Mail, MapPin, Calendar, Clock, ChevronDown,
  CheckCircle2, X, Home, ArrowLeft, ChevronLeft, ChevronRight
} from 'lucide-react';
import Link from 'next/link';

/* ── Indian States ── */
const INDIAN_STATES = [
  'Andhra Pradesh','Arunachal Pradesh','Assam','Bihar','Chhattisgarh',
  'Goa','Gujarat','Haryana','Himachal Pradesh','Jharkhand','Karnataka',
  'Kerala','Madhya Pradesh','Maharashtra','Manipur','Meghalaya','Mizoram',
  'Nagaland','Odisha','Punjab','Rajasthan','Sikkim','Tamil Nadu','Telangana',
  'Tripura','Uttar Pradesh','Uttarakhand','West Bengal',
  'Andaman & Nicobar Islands','Chandigarh','Dadra & Nagar Haveli and Daman & Diu',
  'Delhi','Jammu & Kashmir','Ladakh','Lakshadweep','Puducherry',
];

/* ── Mini Calendar ── */
function MiniCalendar({ value, onChange }: { value: Date | null; onChange: (d: Date) => void }) {
  const today = new Date();
  const [view, setView] = useState({ year: today.getFullYear(), month: today.getMonth() });

  const firstDay = new Date(view.year, view.month, 1).getDay();
  const daysInMonth = new Date(view.year, view.month + 1, 0).getDate();
  const monthName = new Date(view.year, view.month).toLocaleString('default', { month: 'long' });

  const prev = () => setView(v => {
    const d = new Date(v.year, v.month - 1);
    return { year: d.getFullYear(), month: d.getMonth() };
  });
  const next = () => setView(v => {
    const d = new Date(v.year, v.month + 1);
    return { year: d.getFullYear(), month: d.getMonth() };
  });

  const isPast = (day: number) => {
    const d = new Date(view.year, view.month, day);
    d.setHours(0,0,0,0);
    const t = new Date(); t.setHours(0,0,0,0);
    return d < t;
  };

  const isSelected = (day: number) =>
    value &&
    value.getFullYear() === view.year &&
    value.getMonth() === view.month &&
    value.getDate() === day;

  const isToday = (day: number) =>
    today.getFullYear() === view.year &&
    today.getMonth() === view.month &&
    today.getDate() === day;

  return (
    <div className="rounded-xl overflow-hidden" style={{ border: '1px solid var(--border)', background: 'var(--surface-1)' }}>
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-3" style={{ borderBottom: '1px solid var(--border)' }}>
        <button onClick={prev} className="p-1 rounded-lg hover:bg-accent/10 transition-colors">
          <ChevronLeft className="w-4 h-4 text-accent" />
        </button>
        <span className="font-bold text-sm" style={{ color: 'var(--fg)' }}>{monthName} {view.year}</span>
        <button onClick={next} className="p-1 rounded-lg hover:bg-accent/10 transition-colors">
          <ChevronRight className="w-4 h-4 text-accent" />
        </button>
      </div>
      {/* Day labels */}
      <div className="grid grid-cols-7 px-3 pt-2">
        {['Su','Mo','Tu','We','Th','Fr','Sa'].map(d => (
          <div key={d} className="text-center text-[10px] font-bold pb-1" style={{ color: 'var(--muted)' }}>{d}</div>
        ))}
      </div>
      {/* Days */}
      <div className="grid grid-cols-7 px-3 pb-3 gap-y-1">
        {Array.from({ length: firstDay }).map((_, i) => <div key={`e${i}`} />)}
        {Array.from({ length: daysInMonth }, (_, i) => i + 1).map(day => (
          <button
            key={day}
            disabled={isPast(day)}
            onClick={() => onChange(new Date(view.year, view.month, day))}
            className="w-7 h-7 mx-auto rounded-full text-xs font-medium transition-all flex items-center justify-center"
            style={{
              background: isSelected(day) ? 'var(--accent)' : isToday(day) ? 'rgba(52,204,50,0.12)' : 'transparent',
              color: isSelected(day) ? '#fff' : isPast(day) ? 'var(--muted)' : 'var(--fg)',
              cursor: isPast(day) ? 'not-allowed' : 'pointer',
              fontWeight: isToday(day) ? 700 : 400,
            }}
          >
            {day}
          </button>
        ))}
      </div>
    </div>
  );
}

/* ── Clock Picker ── */
function ClockPicker({ value, onChange }: { value: string; onChange: (t: string) => void }) {
  const [mode, setMode] = useState<'hour' | 'minute'>('hour');
  const [ampm, setAmpm] = useState<'AM' | 'PM'>('AM');
  const clockRef = useRef<HTMLDivElement>(null);

  const parsed = value ? value.split(':') : ['12', '00'];
  let hour = parseInt(parsed[0]);
  const minute = parseInt(parsed[1] || '0');
  const displayHour = hour > 12 ? hour - 12 : hour === 0 ? 12 : hour;

  const getAngle = () => {
    if (mode === 'hour') return ((displayHour % 12) / 12) * 360;
    return (minute / 60) * 360;
  };

  const handleClockClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = clockRef.current!.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    const dx = e.clientX - cx;
    const dy = e.clientY - cy;
    let angle = Math.atan2(dy, dx) * (180 / Math.PI) + 90;
    if (angle < 0) angle += 360;

    if (mode === 'hour') {
      let h = Math.round(angle / 30) % 12;
      if (h === 0) h = 12;
      const h24 = ampm === 'PM' ? (h === 12 ? 12 : h + 12) : (h === 12 ? 0 : h);
      onChange(`${String(h24).padStart(2,'0')}:${String(minute).padStart(2,'0')}`);
      setMode('minute');
    } else {
      const m = Math.round(angle / 6) % 60;
      const h24 = ampm === 'PM' ? (displayHour === 12 ? 12 : displayHour + 12) : (displayHour === 12 ? 0 : displayHour);
      onChange(`${String(h24).padStart(2,'0')}:${String(m).padStart(2,'0')}`);
    }
  };

  const handleAmPm = (v: 'AM' | 'PM') => {
    setAmpm(v);
    let h24 = displayHour;
    if (v === 'PM') h24 = displayHour === 12 ? 12 : displayHour + 12;
    else h24 = displayHour === 12 ? 0 : displayHour;
    onChange(`${String(h24).padStart(2,'0')}:${String(minute).padStart(2,'0')}`);
  };

  const angle = getAngle();
  const rad = (angle - 90) * (Math.PI / 180);
  const r = 72;
  const handX = 90 + r * Math.cos(rad);
  const handY = 90 + r * Math.sin(rad);

  const hourMarks = Array.from({ length: 12 }, (_, i) => {
    const a = ((i + 1) / 12) * 360;
    const ra = (a - 90) * (Math.PI / 180);
    return { label: i + 1, x: 90 + 72 * Math.cos(ra), y: 90 + 72 * Math.sin(ra) };
  });

  const minuteMarks = [0, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55].map((m, i) => {
    const a = (i / 12) * 360;
    const ra = (a - 90) * (Math.PI / 180);
    return { label: m, x: 90 + 72 * Math.cos(ra), y: 90 + 72 * Math.sin(ra) };
  });

  const marks = mode === 'hour' ? hourMarks : minuteMarks;

  return (
    <div className="flex flex-col items-center gap-3">
      {/* Display */}
      <div className="flex items-center gap-2">
        <button onClick={() => setMode('hour')}
          className="text-2xl font-bold px-3 py-1 rounded-lg transition-colors"
          style={{ background: mode === 'hour' ? 'var(--accent)' : 'var(--surface-2)', color: mode === 'hour' ? '#fff' : 'var(--fg)' }}>
          {String(displayHour).padStart(2,'0')}
        </button>
        <span className="text-2xl font-bold" style={{ color: 'var(--fg)' }}>:</span>
        <button onClick={() => setMode('minute')}
          className="text-2xl font-bold px-3 py-1 rounded-lg transition-colors"
          style={{ background: mode === 'minute' ? 'var(--accent)' : 'var(--surface-2)', color: mode === 'minute' ? '#fff' : 'var(--fg)' }}>
          {String(minute).padStart(2,'0')}
        </button>
        <div className="flex flex-col gap-1 ml-1">
          {(['AM','PM'] as const).map(v => (
            <button key={v} onClick={() => handleAmPm(v)}
              className="text-xs font-bold px-2 py-0.5 rounded transition-colors"
              style={{ background: ampm === v ? 'var(--accent)' : 'var(--surface-2)', color: ampm === v ? '#fff' : 'var(--fg)' }}>
              {v}
            </button>
          ))}
        </div>
      </div>

      {/* Clock face */}
      <div ref={clockRef} onClick={handleClockClick}
        className="relative cursor-pointer select-none"
        style={{ width: 180, height: 180 }}>
        <svg width="180" height="180">
          <circle cx="90" cy="90" r="85" fill="var(--surface-2)" stroke="var(--border)" strokeWidth="1" />
          {/* Hand */}
          <line x1="90" y1="90" x2={handX} y2={handY} stroke="var(--accent)" strokeWidth="2" strokeLinecap="round" />
          <circle cx="90" cy="90" r="4" fill="var(--accent)" />
          <circle cx={handX} cy={handY} r="6" fill="var(--accent)" />
          {/* Marks */}
          {marks.map((m, i) => {
            const isActive = mode === 'hour' ? m.label === displayHour : m.label === minute;
            return (
              <g key={i}>
                <circle cx={m.x} cy={m.y} r="12" fill={isActive ? 'var(--accent)' : 'transparent'} />
                <text x={m.x} y={m.y} textAnchor="middle" dominantBaseline="central"
                  fontSize="10" fontWeight="600"
                  fill={isActive ? '#fff' : 'var(--fg)'}>
                  {m.label}
                </text>
              </g>
            );
          })}
        </svg>
      </div>
      <p className="text-xs" style={{ color: 'var(--muted)' }}>
        Click to set {mode === 'hour' ? 'hour' : 'minutes'}
      </p>
    </div>
  );
}

/* ── State Dropdown ── */
function StateDropdown({ value, onChange }: { value: string; onChange: (s: string) => void }) {
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState('');
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  const filtered = INDIAN_STATES.filter(s => s.toLowerCase().includes(search.toLowerCase()));

  return (
    <div ref={ref} className="relative">
      <button type="button" onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between px-4 py-3 rounded-xl text-sm transition-colors"
        style={{ background: 'var(--surface-1)', border: '1px solid var(--border)', color: value ? 'var(--fg)' : 'var(--muted)' }}>
        <span>{value || 'Select state'}</span>
        <ChevronDown className={`w-4 h-4 transition-transform ${open ? 'rotate-180' : ''}`} style={{ color: 'var(--muted)' }} />
      </button>
      <AnimatePresence>
        {open && (
          <motion.div initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.15 }}
            className="absolute z-50 w-full mt-1 rounded-xl overflow-hidden shadow-xl"
            style={{ background: 'var(--surface-0)', border: '1px solid var(--border)' }}>
            <div className="p-2" style={{ borderBottom: '1px solid var(--border)' }}>
              <input autoFocus value={search} onChange={e => setSearch(e.target.value)}
                placeholder="Search state..."
                className="w-full px-3 py-2 rounded-lg text-sm outline-none"
                style={{ background: 'var(--surface-1)', border: '1px solid var(--border)', color: 'var(--fg)' }} />
            </div>
            <div className="max-h-48 overflow-y-auto">
              {filtered.length === 0 ? (
                <div className="px-4 py-3 text-sm" style={{ color: 'var(--muted)' }}>No results</div>
              ) : filtered.map(state => (
                <button key={state} type="button"
                  onClick={() => { onChange(state); setOpen(false); setSearch(''); }}
                  className="w-full text-left px-4 py-2.5 text-sm transition-colors hover:bg-accent/10"
                  style={{ color: state === value ? 'var(--accent)' : 'var(--fg)', fontWeight: state === value ? 700 : 400 }}>
                  {state}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

/* ── Input Field ── */
function Field({ label, icon: Icon, error, children }: {
  label: string; icon: React.ElementType; error?: string; children: React.ReactNode;
}) {
  return (
    <div>
      <label className="block text-sm font-semibold mb-1.5" style={{ color: 'var(--fg)' }}>
        {label}
      </label>
      <div className="relative">
        <Icon className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 pointer-events-none" style={{ color: 'var(--muted)' }} />
        <div className="pl-10">{children}</div>
      </div>
      {error && <p className="text-xs text-red-500 mt-1">{error}</p>}
    </div>
  );
}

/* ── Main Form ── */
export default function AppointmentForm() {
  const [form, setForm] = useState({
    name: '', phone: '', email: '', city: '', state: '',
  });
  const [date, setDate] = useState<Date | null>(null);
  const [time, setTime] = useState('10:00');
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);
  const [showClock, setShowClock] = useState(false);

  const set = (k: string, v: string) => setForm(f => ({ ...f, [k]: v }));

  const validate = () => {
    const e: Record<string, string> = {};
    if (!form.name.trim()) e.name = 'Name is required';
    if (!/^\d{10}$/.test(form.phone)) e.phone = 'Enter a valid 10-digit number';
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = 'Enter a valid email';
    if (!form.city.trim()) e.city = 'City is required';
    if (!form.state) e.state = 'Please select a state';
    if (!date) e.date = 'Please select a date';
    if (!time) e.time = 'Please select a time';
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) setSubmitted(true);
  };

  const formatDate = (d: Date) => d.toLocaleDateString('en-IN', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' });
  const formatTime = (t: string) => {
    const [h, m] = t.split(':').map(Number);
    const ampm = h >= 12 ? 'PM' : 'AM';
    const h12 = h % 12 || 12;
    return `${h12}:${String(m).padStart(2,'0')} ${ampm}`;
  };

  if (submitted) {
    return (
      <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }}
        className="text-center py-16 px-8">
        <div className="w-20 h-20 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-6">
          <CheckCircle2 className="w-10 h-10 text-accent" />
        </div>
        <h2 className="text-2xl font-bold font-display mb-3" style={{ color: 'var(--fg)' }}>Appointment Booked!</h2>
        <p className="text-sm mb-2" style={{ color: 'var(--muted-fg)' }}>
          <strong style={{ color: 'var(--fg)' }}>{form.name}</strong>, your appointment is confirmed for
        </p>
        <p className="text-base font-semibold text-accent mb-1">{date && formatDate(date)}</p>
        <p className="text-base font-semibold text-accent mb-8">{formatTime(time)}</p>
        <p className="text-sm mb-8" style={{ color: 'var(--muted-fg)' }}>
          We'll reach you at <strong style={{ color: 'var(--fg)' }}>{form.phone}</strong> or <strong style={{ color: 'var(--fg)' }}>{form.email}</strong>
        </p>
        <Link href="/" className="glow-button inline-flex items-center gap-2 px-8 py-3 rounded-xl font-bold text-sm" style={{ color: '#fff' }}>
          <Home className="w-4 h-4" /> Back to Home
        </Link>
      </motion.div>
    );
  }

  const inputClass = "w-full px-4 py-3 rounded-xl text-sm outline-none transition-colors";
  const inputStyle = { background: 'var(--surface-1)', border: '1px solid var(--border)', color: 'var(--fg)' };

  return (
    <form onSubmit={handleSubmit} noValidate>
      <div className="grid md:grid-cols-2 gap-5">

        {/* Name */}
        <div>
          <label className="block text-sm font-semibold mb-1.5" style={{ color: 'var(--fg)' }}>
            Your Name <span className="text-red-500">*</span>
          </label>
          <div className="relative">
            <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4" style={{ color: 'var(--muted)' }} />
            <input type="text" value={form.name} onChange={e => set('name', e.target.value)}
              placeholder="Full name" className={`${inputClass} pl-10`} style={inputStyle} />
          </div>
          {errors.name && <p className="text-xs text-red-500 mt-1">{errors.name}</p>}
        </div>

        {/* Phone */}
        <div>
          <label className="block text-sm font-semibold mb-1.5" style={{ color: 'var(--fg)' }}>
            Contact No <span className="text-red-500">*</span>
          </label>
          <div className="relative">
            <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4" style={{ color: 'var(--muted)' }} />
            <input type="tel" value={form.phone} onChange={e => set('phone', e.target.value.replace(/\D/g,'').slice(0,10))}
              placeholder="10-digit mobile number" className={`${inputClass} pl-10`} style={inputStyle} />
          </div>
          {errors.phone && <p className="text-xs text-red-500 mt-1">{errors.phone}</p>}
        </div>

        {/* Email */}
        <div>
          <label className="block text-sm font-semibold mb-1.5" style={{ color: 'var(--fg)' }}>
            Email ID <span className="text-red-500">*</span>
          </label>
          <div className="relative">
            <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4" style={{ color: 'var(--muted)' }} />
            <input type="email" value={form.email} onChange={e => set('email', e.target.value)}
              placeholder="you@example.com" className={`${inputClass} pl-10`} style={inputStyle} />
          </div>
          {errors.email && <p className="text-xs text-red-500 mt-1">{errors.email}</p>}
        </div>

        {/* City */}
        <div>
          <label className="block text-sm font-semibold mb-1.5" style={{ color: 'var(--fg)' }}>
            City <span className="text-red-500">*</span>
          </label>
          <div className="relative">
            <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4" style={{ color: 'var(--muted)' }} />
            <input type="text" value={form.city} onChange={e => set('city', e.target.value)}
              placeholder="Your city" className={`${inputClass} pl-10`} style={inputStyle} />
          </div>
          {errors.city && <p className="text-xs text-red-500 mt-1">{errors.city}</p>}
        </div>

        {/* State */}
        <div className="md:col-span-2">
          <label className="block text-sm font-semibold mb-1.5" style={{ color: 'var(--fg)' }}>
            State <span className="text-red-500">*</span>
          </label>
          <StateDropdown value={form.state} onChange={v => set('state', v)} />
          {errors.state && <p className="text-xs text-red-500 mt-1">{errors.state}</p>}
        </div>

        {/* Date */}
        <div>
          <label className="block text-sm font-semibold mb-1.5 flex items-center gap-1.5" style={{ color: 'var(--fg)' }}>
            <Calendar className="w-4 h-4 text-accent" /> Select Date <span className="text-red-500">*</span>
          </label>
          <MiniCalendar value={date} onChange={setDate} />
          {date && (
            <p className="text-xs mt-1.5 font-medium text-accent">{formatDate(date)}</p>
          )}
          {errors.date && <p className="text-xs text-red-500 mt-1">{errors.date}</p>}
        </div>

        {/* Time */}
        <div>
          <label className="block text-sm font-semibold mb-1.5 flex items-center gap-1.5" style={{ color: 'var(--fg)' }}>
            <Clock className="w-4 h-4 text-accent" /> Select Time <span className="text-red-500">*</span>
          </label>
          {/* Time display button */}
          <button type="button" onClick={() => setShowClock(!showClock)}
            className="w-full flex items-center justify-between px-4 py-3 rounded-xl text-sm mb-3 transition-colors"
            style={{ background: 'var(--surface-1)', border: `1px solid ${showClock ? 'var(--accent)' : 'var(--border)'}`, color: 'var(--fg)' }}>
            <span className="font-semibold text-accent">{formatTime(time)}</span>
            <Clock className="w-4 h-4" style={{ color: 'var(--muted)' }} />
          </button>
          <AnimatePresence>
            {showClock && (
              <motion.div initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }}
                className="rounded-xl p-4" style={{ background: 'var(--surface-1)', border: '1px solid var(--border)' }}>
                <ClockPicker value={time} onChange={setTime} />
              </motion.div>
            )}
          </AnimatePresence>
          {errors.time && <p className="text-xs text-red-500 mt-1">{errors.time}</p>}
        </div>

      </div>

      {/* Actions */}
      <div className="flex flex-wrap items-center gap-3 mt-8 pt-6" style={{ borderTop: '1px solid var(--border)' }}>
        <button type="submit"
          className="glow-button flex items-center gap-2 px-8 py-3 rounded-xl font-bold text-sm"
          style={{ color: '#fff' }}>
          <CheckCircle2 className="w-4 h-4" /> Book Appointment
        </button>
        <button type="button" onClick={() => { setForm({ name:'',phone:'',email:'',city:'',state:'' }); setDate(null); setTime('10:00'); setErrors({}); }}
          className="flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm transition-colors"
          style={{ background: 'var(--surface-2)', border: '1px solid var(--border)', color: 'var(--fg)' }}>
          <X className="w-4 h-4" /> Cancel
        </button>
        <Link href="/"
          className="flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm transition-colors"
          style={{ background: 'transparent', border: '1px solid var(--border)', color: 'var(--muted-fg)' }}>
          <Home className="w-4 h-4" /> Back to Home
        </Link>
      </div>
    </form>
  );
}
