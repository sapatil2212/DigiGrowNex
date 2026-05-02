'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, useAnimation } from 'framer-motion';
import {
  Activity, Users, FileText, Pill, CreditCard, Heart, UserCheck, BarChart3,
  Home, Truck, Wrench, Scissors, Microscope, Droplets, Dumbbell, Smile,
  Eye, Zap, FlaskConical, Scan, Building2, Plus, ChevronDown, CheckCircle2,
  Globe, QrCode, Server, ArrowRight, Shield, TrendingUp, Clock, Star,
  Bell, RefreshCw, Calendar, AlertTriangle, ChevronRight, IndianRupee,
  Stethoscope, LayoutDashboard, Package, BedDouble, UserCog, BookOpen,
  MapPin, Newspaper, LogOut
} from 'lucide-react';
import Link from 'next/link';

const departments = [
  { icon: Users, title: 'Reception / Front Desk', color: 'from-blue-500/20 to-blue-600/20', points: ['Patient registration (new/existing)', 'Token-based appointment allocation', 'Queue management', 'Patient check-in/check-out'] },
  { icon: Activity, title: 'Doctor (OPD)', color: 'from-green-500/20 to-green-600/20', points: ['View assigned patients', 'Access patient medical history', 'Add diagnosis & prescriptions', 'Refer to sub-departments'] },
  { icon: Zap, title: 'Sub-Departments', color: 'from-purple-500/20 to-purple-600/20', points: ['Receive patient referrals', 'Track procedure status', 'Update treatment details', 'Specialized treatments'] },
  { icon: Pill, title: 'Pharmacy', color: 'from-orange-500/20 to-orange-600/20', points: ['Prescription-based dispensing', 'Inventory management', 'Stock alerts', 'Billing integration'] },
  { icon: CreditCard, title: 'Billing (GST/Non-GST)', color: 'from-yellow-500/20 to-yellow-600/20', points: ['Generate invoices', 'GST/non-GST billing', 'Payment tracking', 'Insurance support'] },
  { icon: Heart, title: 'Nursing', color: 'from-pink-500/20 to-pink-600/20', points: ['Patient vitals monitoring', 'Medication administration', 'Nursing notes', 'Alerts for critical patients'] },
  { icon: UserCheck, title: 'HR Department', color: 'from-indigo-500/20 to-indigo-600/20', points: ['Staff management', 'Attendance tracking', 'Payroll management', 'Role assignments'] },
  { icon: BarChart3, title: 'Accounts', color: 'from-teal-500/20 to-teal-600/20', points: ['Financial reporting', 'Expense tracking', 'Revenue analysis', 'Audit trails'] },
  { icon: Home, title: 'Housekeeping', color: 'from-cyan-500/20 to-cyan-600/20', points: ['Room cleaning schedules', 'Bed management', 'Hygiene tracking', 'Task assignments'] },
  { icon: Truck, title: 'Ambulance', color: 'from-red-500/20 to-red-600/20', points: ['Ambulance tracking', 'Emergency dispatch', 'Driver management', 'Route optimization'] },
  { icon: Wrench, title: 'Biomedical / Equipment', color: 'from-slate-500/20 to-slate-600/20', points: ['Equipment tracking', 'Maintenance schedules', 'Repair logs', 'Asset management'] },
  { icon: Scissors, title: 'Operation Theatre (OT)', color: 'from-violet-500/20 to-violet-600/20', points: ['Surgery scheduling', 'OT availability tracking', 'Staff coordination', 'Pre/post-op records'] },
  { icon: Droplets, title: 'Dialysis Unit', color: 'from-blue-400/20 to-blue-500/20', points: ['Session scheduling', 'Patient monitoring', 'Treatment records', 'Machine tracking'] },
  { icon: Dumbbell, title: 'Physiotherapy', color: 'from-lime-500/20 to-lime-600/20', points: ['Therapy session management', 'Progress tracking', 'Exercise plans', 'Patient history'] },
  { icon: Smile, title: 'Dental', color: 'from-sky-500/20 to-sky-600/20', points: ['Treatment planning', 'Patient records', 'Appointment scheduling', 'X-ray management'] },
  { icon: Star, title: 'Cosmetic / Aesthetic', color: 'from-rose-500/20 to-rose-600/20', points: ['Procedure booking', 'Client history tracking', 'Before/after records', 'Package management'] },
  { icon: Eye, title: 'Endoscopy', color: 'from-amber-500/20 to-amber-600/20', points: ['Procedure scheduling', 'Reports management', 'Equipment tracking', 'Patient prep notes'] },
  { icon: Activity, title: 'Clinical Procedures', color: 'from-emerald-500/20 to-emerald-600/20', points: ['Minor procedure tracking', 'Patient updates', 'Consent management', 'Outcome recording'] },
  { icon: FlaskConical, title: 'Pathology / Lab', color: 'from-fuchsia-500/20 to-fuchsia-600/20', points: ['Test booking', 'Sample tracking', 'Report generation', 'Doctor access'] },
  { icon: Scan, title: 'Radiology (X-ray, MRI, CT)', color: 'from-cyan-600/20 to-cyan-700/20', points: ['Scan scheduling', 'Image/report storage', 'Doctor access', 'DICOM support'] },
  { icon: Droplets, title: 'Blood Bank', color: 'from-red-600/20 to-red-700/20', points: ['Blood inventory management', 'Donor records', 'Request handling', 'Expiry tracking'] },
  { icon: Plus, title: 'Custom Department', color: 'from-accent/20 to-accent/30', points: ['Create new modules', 'Define workflows', 'Assign roles & permissions', 'Fully configurable'] },
];

const whyChoose = [
  { icon: Globe, title: 'SEO-Friendly Next.js Frontend', desc: 'Modern hospital website with server-side rendering, fast loading, mobile-responsive design, and online appointment booking.' },
  { icon: Server, title: 'Serverless Backend', desc: 'Auto-scaling architecture that handles high patient load, cost-efficient, high availability with minimal downtime.' },
  { icon: QrCode, title: 'QR Code & Online Booking', desc: 'Patients book via website or QR code scan. Token-based system reduces waiting time with real-time slot availability.' },
  { icon: Shield, title: 'Role-Based Access Control', desc: 'Each staff member sees only what they need. Secure, department-specific dashboards with audit trails.' },
  { icon: TrendingUp, title: 'Real-Time Analytics', desc: 'Hospital-wide performance metrics, patient inflow stats, revenue tracking, and department-wise reports.' },
  { icon: Clock, title: 'Paperless Operations', desc: 'All data stored digitally. No manual registers or files. Easy access from any department, any device.' },
];

const patientFlow = [
  { step: '01', label: 'Reception', desc: 'Registration & token allocation' },
  { step: '02', label: 'Doctor (OPD)', desc: 'Consultation & diagnosis' },
  { step: '03', label: 'Sub-Departments', desc: 'Procedures & treatments' },
  { step: '04', label: 'Pharmacy', desc: 'Medicine dispensing' },
  { step: '05', label: 'Billing', desc: 'Invoice & payment' },
  { step: '06', label: 'Discharge', desc: 'Summary & follow-up' },
];

function DeptCard({ dept, index }: { dept: typeof departments[0]; index: number }) {
  const [open, setOpen] = useState(false);
  const Icon = dept.icon;
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: (index % 4) * 0.07 }}
      className="rounded-xl border overflow-hidden cursor-pointer"
      style={{ borderColor: 'var(--border)', background: 'var(--card-bg)' }}
      onClick={() => setOpen(!open)}
    >
      <div className="flex items-center justify-between px-5 py-4 gap-3">
        <div className="flex items-center gap-3">
          <div className={`w-9 h-9 rounded-lg bg-gradient-to-br ${dept.color} flex items-center justify-center shrink-0`}>
            <Icon className="w-4 h-4 text-accent" />
          </div>
          <span className="font-semibold text-sm" style={{ color: 'var(--fg)' }}>{dept.title}</span>
        </div>
        <ChevronDown className={`w-4 h-4 text-muted shrink-0 transition-transform duration-300 ${open ? 'rotate-180' : ''}`} />
      </div>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden"
          >
            <ul className="px-5 pb-4 space-y-2 border-t" style={{ borderColor: 'var(--border)' }}>
              {dept.points.map((p, i) => (
                <li key={i} className="flex items-start gap-2 pt-2 text-sm" style={{ color: 'var(--muted-fg)' }}>
                  <CheckCircle2 className="w-3.5 h-3.5 text-accent mt-0.5 shrink-0" />
                  {p}
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

/* ── Animated Dashboard Mockup ── */
function AnimatedChart() {
  const points = [2, 4, 3, 6, 5, 9, 7, 11, 8, 13, 10, 14];
  const max = 14;
  const w = 300, h = 80;
  const pts = points.map((v, i) => `${(i / (points.length - 1)) * w},${h - (v / max) * h}`).join(' ');
  return (
    <svg viewBox={`0 0 ${w} ${h}`} className="w-full h-full" preserveAspectRatio="none">
      <defs>
        <linearGradient id="chartGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#34CC32" stopOpacity="0.3" />
          <stop offset="100%" stopColor="#34CC32" stopOpacity="0" />
        </linearGradient>
      </defs>
      <motion.polyline
        points={pts}
        fill="none"
        stroke="#34CC32"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={{ duration: 2, ease: 'easeInOut', delay: 0.8 }}
      />
      <motion.polygon
        points={`0,${h} ${pts} ${w},${h}`}
        fill="url(#chartGrad)"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5, delay: 1.2 }}
      />
    </svg>
  );
}

function HMSDashboard() {
  const [tick, setTick] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setTick(p => p + 1), 3000);
    return () => clearInterval(t);
  }, []);

  const stats = [
    { label: 'Staff & Doctors', value: '24', sub: '3 active doctors', icon: UserCog, color: 'bg-blue-500/10 text-blue-400' },
    { label: 'Total Patients', value: '312', sub: '+7 this month', icon: Users, color: 'bg-green-500/10 text-green-400' },
    { label: "Today's Appts", value: tick % 2 === 0 ? '4' : '5', sub: '3 completed', icon: Calendar, color: 'bg-purple-500/10 text-purple-400' },
    { label: 'Revenue Today', value: '₹0', sub: '₹4.1k this month', icon: IndianRupee, color: 'bg-yellow-500/10 text-yellow-400' },
  ];

  const statusRow = [
    { label: 'SCHEDULED', value: '0', color: 'text-slate-400' },
    { label: 'CONFIRMED', value: '1', color: 'text-blue-400' },
    { label: 'COMPLETED', value: '3', color: 'text-green-400' },
    { label: 'CANCELLED', value: '0', color: 'text-red-400' },
    { label: 'PENDING BILLS', value: tick % 2 === 0 ? '14' : '12', color: 'text-yellow-400' },
    { label: 'ACTIVE PLANS', value: '0', color: 'text-slate-400' },
  ];

  const navItems = [
    { icon: LayoutDashboard, label: 'Dashboard', active: true },
    { icon: Calendar, label: 'Appointments' },
    { icon: CreditCard, label: 'Billing' },
    { icon: Package, label: 'Inventory' },
    { icon: BedDouble, label: 'IPD / Wards' },
    { icon: UserCog, label: 'Staff' },
    { icon: Stethoscope, label: 'Doctors' },
    { icon: Users, label: 'Patients' },
    { icon: Activity, label: 'Departments' },
    { icon: MapPin, label: 'Medical Tourism' },
    { icon: Newspaper, label: 'Blogs' },
  ];

  const doctors = [
    { name: 'Dr. Yogesh Salunkhe', dept: 'Dermatology', time: '6 appts · 09:00 – 16:00' },
    { name: 'Swapnil Pati', dept: 'Dental Department', time: '0 appts · 09:00 – 21:00' },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, x: 60 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut', delay: 0.3 }}
      className="relative w-full rounded-2xl overflow-hidden shadow-2xl select-none"
      style={{ background: '#f8fafc', border: '1px solid #e2e8f0', fontSize: 11 }}
    >
      {/* browser bar */}
      <div className="flex items-center gap-1.5 px-3 py-2 bg-white border-b border-slate-200">
        <span className="w-2.5 h-2.5 rounded-full bg-red-400" />
        <span className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
        <span className="w-2.5 h-2.5 rounded-full bg-green-400" />
        <div className="flex-1 mx-3 bg-slate-100 rounded px-2 py-0.5 text-[9px] text-slate-400">hms.digigrownex.com/dashboard</div>
        <Bell className="w-3 h-3 text-slate-400" />
      </div>

      <div className="flex" style={{ minHeight: 340 }}>
        {/* Sidebar */}
        <div className="w-28 shrink-0 bg-white border-r border-slate-200 flex flex-col py-2">
          <div className="px-2 mb-2">
            <div className="text-[8px] font-bold text-slate-400 uppercase tracking-wider px-1 mb-1">General</div>
            {navItems.map((item, i) => {
              const Icon = item.icon;
              return (
                <div key={i} className={`flex items-center gap-1.5 px-2 py-1.5 rounded-lg mb-0.5 cursor-pointer transition-colors ${item.active ? 'bg-accent/10 text-accent font-bold' : 'text-slate-500 hover:bg-slate-50'}`}>
                  <Icon className="w-3 h-3 shrink-0" />
                  <span className="text-[9px] truncate">{item.label}</span>
                </div>
              );
            })}
          </div>
          <div className="mt-auto px-2 border-t border-slate-100 pt-2">
            <div className="flex items-center gap-1.5 px-2 py-1.5">
              <div className="w-5 h-5 rounded-full bg-accent flex items-center justify-center text-white text-[8px] font-bold shrink-0">DJ</div>
              <div>
                <div className="text-[9px] font-bold text-slate-700">Dr Jaybhave</div>
                <div className="text-[8px] text-slate-400">Hospital Admin</div>
              </div>
            </div>
            <div className="flex items-center gap-1 px-2 py-1 text-red-400 text-[9px] cursor-pointer">
              <LogOut className="w-2.5 h-2.5" /> Log Out
            </div>
          </div>
        </div>

        {/* Main */}
        <div className="flex-1 overflow-hidden flex flex-col">
          {/* Top bar */}
          <div className="flex items-center justify-between px-3 py-2 bg-white border-b border-slate-200">
            <div>
              <div className="font-bold text-slate-800 text-xs">Dashboard</div>
              <div className="text-[8px] text-slate-400">Last updated 9:35:43 PM</div>
            </div>
            <div className="flex items-center gap-1 text-[9px] text-accent cursor-pointer">
              <RefreshCw className="w-2.5 h-2.5" /> Refresh
            </div>
          </div>

          <div className="flex-1 overflow-hidden p-2 flex gap-2">
            {/* Center column */}
            <div className="flex-1 flex flex-col gap-2 min-w-0">
              {/* Stat cards */}
              <div className="grid grid-cols-4 gap-1.5">
                {stats.map((s, i) => {
                  const Icon = s.icon;
                  return (
                    <motion.div key={i}
                      initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4 + i * 0.1 }}
                      className="bg-white rounded-lg p-2 border border-slate-100 shadow-sm"
                    >
                      <div className={`w-5 h-5 rounded-md ${s.color} flex items-center justify-center mb-1`}>
                        <Icon className="w-2.5 h-2.5" />
                      </div>
                      <div className="text-[8px] text-slate-400 leading-tight">{s.label}</div>
                      <motion.div
                        key={s.value}
                        initial={{ opacity: 0 }} animate={{ opacity: 1 }}
                        className="text-sm font-bold text-slate-800"
                      >{s.value}</motion.div>
                      <div className="text-[7px] text-slate-400">{s.sub}</div>
                    </motion.div>
                  );
                })}
              </div>

              {/* Status row */}
              <div className="grid grid-cols-6 gap-1">
                {statusRow.map((s, i) => (
                  <div key={i} className="bg-white rounded-lg p-1.5 border border-slate-100 text-center">
                    <div className="text-[7px] text-slate-400 uppercase leading-tight">{s.label}</div>
                    <motion.div key={s.value} initial={{ scale: 0.8 }} animate={{ scale: 1 }}
                      className={`text-xs font-bold ${s.color}`}>{s.value}</motion.div>
                  </div>
                ))}
              </div>

              {/* Chart */}
              <div className="bg-white rounded-lg border border-slate-100 p-2 flex-1">
                <div className="flex items-center justify-between mb-1">
                  <div>
                    <div className="text-[9px] font-bold text-slate-700">Monthly Activity Trends</div>
                    <div className="text-[7px] text-slate-400">Appointments & new patients – last 9 months</div>
                  </div>
                  <div className="flex items-center gap-2 text-[7px] text-slate-400">
                    <span className="flex items-center gap-0.5"><span className="w-2 h-0.5 bg-blue-400 inline-block rounded" /> Appointments</span>
                    <span className="flex items-center gap-0.5"><span className="w-2 h-0.5 bg-accent inline-block rounded" /> New Patients</span>
                  </div>
                </div>
                <div className="h-14">
                  <AnimatedChart />
                </div>
                <div className="flex justify-between text-[7px] text-slate-300 mt-0.5 px-1">
                  {['Sep','Oct','Nov','Dec','Jan','Feb','Mar','Apr','May'].map(m => <span key={m}>{m}</span>)}
                </div>
              </div>

              {/* Alerts */}
              <div className="bg-white rounded-lg border border-slate-100 p-2">
                <div className="flex items-center justify-between mb-1.5">
                  <span className="text-[9px] font-bold text-slate-700">Live Alerts</span>
                  <Activity className="w-2.5 h-2.5 text-slate-400" />
                </div>
                <motion.div animate={{ opacity: [1, 0.7, 1] }} transition={{ duration: 2, repeat: Infinity }}
                  className="flex items-start gap-1.5 bg-red-50 border border-red-200 rounded-lg p-1.5 mb-1">
                  <AlertTriangle className="w-2.5 h-2.5 text-red-500 shrink-0 mt-0.5" />
                  <div>
                    <div className="text-[8px] font-semibold text-red-700">1 Inventory items below minimum stock level</div>
                    <div className="text-[7px] text-red-400">Go to Inventory → Check stock</div>
                  </div>
                </motion.div>
                <div className="flex items-start gap-1.5 bg-yellow-50 border border-yellow-200 rounded-lg p-1.5">
                  <CreditCard className="w-2.5 h-2.5 text-yellow-600 shrink-0 mt-0.5" />
                  <div>
                    <div className="text-[8px] font-semibold text-yellow-700">{tick % 2 === 0 ? '14' : '12'} bills pending collection</div>
                    <div className="text-[7px] text-yellow-500">Go to Billing → Pending queue</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right panel */}
            <div className="w-28 shrink-0 flex flex-col gap-2">
              {/* Calendar */}
              <div className="bg-white rounded-lg border border-slate-100 p-2">
                <div className="text-[7px] font-bold text-slate-400 uppercase mb-1">Date</div>
                <div className="text-[9px] font-bold text-slate-700 mb-1">May 2026</div>
                <div className="grid grid-cols-7 gap-0.5 text-[7px] text-center text-slate-400 mb-0.5">
                  {['M','T','W','T','F','S','S'].map((d,i) => <span key={i}>{d}</span>)}
                </div>
                <div className="grid grid-cols-7 gap-0.5 text-[7px] text-center">
                  {Array.from({length:31},(_,i)=>i+1).map(d => (
                    <span key={d} className={`rounded-full w-3.5 h-3.5 flex items-center justify-center mx-auto ${d===2?'bg-accent text-white font-bold':d===1||d===3?'text-slate-300':'text-slate-600'}`}>{d}</span>
                  ))}
                </div>
              </div>

              {/* Doctors on duty */}
              <div className="bg-white rounded-lg border border-slate-100 p-2 flex-1">
                <div className="flex items-center justify-between mb-1.5">
                  <span className="text-[8px] font-bold text-slate-700">Doctors on Duty</span>
                  <span className="text-[7px] bg-accent/10 text-accent font-bold px-1 rounded">2</span>
                </div>
                {doctors.map((doc, i) => (
                  <motion.div key={i} initial={{ opacity: 0, x: 10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.6 + i * 0.15 }}
                    className="flex items-start gap-1.5 mb-2 pb-2 border-b border-slate-50 last:border-0 last:mb-0 last:pb-0">
                    <div className="w-5 h-5 rounded-full bg-accent/10 flex items-center justify-center shrink-0">
                      <Stethoscope className="w-2.5 h-2.5 text-accent" />
                    </div>
                    <div>
                      <div className="text-[8px] font-semibold text-slate-700 leading-tight">{doc.name}</div>
                      <div className="text-[7px] text-accent">{doc.dept}</div>
                      <div className="text-[7px] text-slate-400">{doc.time}</div>
                    </div>
                  </motion.div>
                ))}

                <div className="mt-2 pt-2 border-t border-slate-100">
                  <div className="text-[8px] font-bold text-slate-700 mb-1.5">Today's Summary</div>
                  {[["Follow-ups","0"],["New Patients","0"]].map(([label, val], i) => (
                    <div key={i} className="flex items-center justify-between py-1 border-b border-slate-50">
                      <span className="text-[7px] text-slate-500">{label}</span>
                      <span className="text-[7px] font-bold text-slate-700">{val}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function HealthCarePage() {
  return (
    <div className="pt-28 pb-24 min-h-screen">
      {/* Hero */}
      <section className="relative overflow-hidden mb-20">
        <div className="absolute inset-0 hero-dots opacity-30" />
        <div className="absolute top-0 left-0 w-[500px] h-[500px] rounded-full blur-[140px] pointer-events-none -translate-x-1/2 -translate-y-1/4"
          style={{ background: 'radial-gradient(ellipse, rgba(52,204,50,0.12) 0%, transparent 70%)' }} />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full blur-[120px] pointer-events-none translate-x-1/4 translate-y-1/4"
          style={{ background: 'radial-gradient(ellipse, rgba(52,204,50,0.08) 0%, transparent 70%)' }} />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left — content */}
            <motion.div initial={{ opacity: 0, x: -40 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.7 }}>
              <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent/10 border border-accent/20 mb-6">
                <Activity className="w-3.5 h-3.5 text-accent" />
                <span className="text-xs font-bold text-accent uppercase tracking-widest">HMS Product</span>
              </motion.div>

              <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
                className="text-4xl sm:text-5xl font-bold font-display mb-5 leading-tight" style={{ color: 'var(--fg)' }}>
                Hospital Management<br />
                <span className="gradient-text">System (HMS)</span>
              </motion.h1>

              <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}
                className="text-base mb-8 leading-relaxed max-w-lg" style={{ color: 'var(--muted-fg)' }}>
                A comprehensive, cloud-based platform that integrates clinical, administrative, and financial workflows across all 22+ hospital departments into one unified portal — eliminating paperwork and improving patient experience.
              </motion.p>

              {/* Feature pills */}
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}
                className="flex flex-wrap gap-2 mb-8">
                {['22+ Departments','QR Appointments','Serverless Backend','Real-Time Analytics','Paperless Ops'].map((tag, i) => (
                  <span key={i} className="flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold"
                    style={{ background: 'var(--surface-2)', border: '1px solid var(--border)', color: 'var(--fg)' }}>
                    <CheckCircle2 className="w-3 h-3 text-accent" /> {tag}
                  </span>
                ))}
              </motion.div>

              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }}
                className="flex flex-wrap gap-3">
                <Link href="/contact" className="glow-button px-7 py-3 rounded-full font-bold text-sm flex items-center gap-2" style={{ color: '#fff' }}>
                  Request Demo <ArrowRight className="w-4 h-4" />
                </Link>
                <Link href="/contact" className="px-7 py-3 rounded-full font-semibold text-sm flex items-center gap-2 transition-colors"
                  style={{ border: '1px solid var(--border)', background: 'var(--surface-1)', color: 'var(--fg)' }}>
                  Get Pricing
                </Link>
              </motion.div>

              {/* Stats row */}
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.7 }}
                className="flex gap-6 mt-10 pt-8" style={{ borderTop: '1px solid var(--border)' }}>
                {[['22+','Departments'],['100%','Paperless'],['Real-Time','Data Sync']].map(([val, label], i) => (
                  <div key={i}>
                    <div className="text-xl font-bold gradient-text">{val}</div>
                    <div className="text-xs" style={{ color: 'var(--muted-fg)' }}>{label}</div>
                  </div>
                ))}
              </motion.div>
            </motion.div>

            {/* Right — animated dashboard */}
            <div className="relative">
              {/* floating badge top-left */}
              <motion.div
                initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.2 }}
                className="absolute -top-4 -left-4 z-10 flex items-center gap-2 px-3 py-2 rounded-xl shadow-lg text-xs font-semibold"
                style={{ background: 'var(--surface-0)', border: '1px solid var(--border)', color: 'var(--fg)' }}
              >
                <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                Live Dashboard
              </motion.div>
              {/* floating badge bottom-right */}
              <motion.div
                initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.4 }}
                className="absolute -bottom-4 -right-4 z-10 flex items-center gap-2 px-3 py-2 rounded-xl shadow-lg text-xs font-semibold"
                style={{ background: 'var(--surface-0)', border: '1px solid var(--border)', color: 'var(--fg)' }}
              >
                <Shield className="w-3.5 h-3.5 text-accent" />
                Role-Based Access
              </motion.div>
              <HMSDashboard />
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">

        {/* Why Choose */}
        <section>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold font-display mb-4" style={{ color: 'var(--fg)' }}>Why Choose Our HMS?</h2>
            <p className="text-base max-w-2xl mx-auto" style={{ color: 'var(--muted-fg)' }}>Built with modern technology to eliminate manual processes and improve every aspect of hospital operations.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyChoose.map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}
                  className="glass-card rounded-xl p-6">
                  <div className="w-11 h-11 rounded-xl bg-accent/10 flex items-center justify-center mb-4">
                    <Icon className="w-5 h-5 text-accent" />
                  </div>
                  <h3 className="font-bold mb-2" style={{ color: 'var(--fg)' }}>{item.title}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: 'var(--muted-fg)' }}>{item.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </section>

        {/* Patient Flow */}
        <section>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold font-display mb-4" style={{ color: 'var(--fg)' }}>Structured Patient Flow</h2>
            <p className="text-base max-w-2xl mx-auto" style={{ color: 'var(--muted-fg)' }}>End-to-end journey from registration to discharge — automated data transfer at every stage.</p>
          </div>
          <div className="relative">
            {/* connector line */}
            <div className="absolute top-8 left-0 right-0 h-0.5 hidden lg:block" style={{ background: 'linear-gradient(90deg, transparent, var(--accent), transparent)' }} />
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
              {patientFlow.map((step, i) => (
                <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                  className="flex flex-col items-center text-center relative">
                  <div className="w-16 h-16 rounded-full flex items-center justify-center font-bold text-lg mb-3 relative z-10"
                    style={{ background: 'var(--surface-2)', border: '2px solid var(--accent)', color: 'var(--accent)' }}>
                    {step.step}
                  </div>
                  <div className="font-bold text-sm mb-1" style={{ color: 'var(--fg)' }}>{step.label}</div>
                  <div className="text-xs" style={{ color: 'var(--muted-fg)' }}>{step.desc}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Departments */}
        <section>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold font-display mb-4" style={{ color: 'var(--fg)' }}>22 Department Modules</h2>
            <p className="text-base max-w-2xl mx-auto" style={{ color: 'var(--muted-fg)' }}>Every department gets a dedicated dashboard with role-based access, real-time data sync, and custom workflows.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {departments.map((dept, i) => (
              <DeptCard key={i} dept={dept} index={i} />
            ))}
          </div>
        </section>

        {/* Key Advantages */}
        <section className="rounded-2xl p-8 lg:p-14" style={{ background: 'var(--surface-1)', border: '1px solid var(--border)' }}>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold font-display mb-6" style={{ color: 'var(--fg)' }}>Key Advantages</h2>
              <p className="text-base mb-8 leading-relaxed" style={{ color: 'var(--muted-fg)' }}>
                This HMS solution is designed to digitally transform hospital operations — connecting every department under one platform with advanced technology.
              </p>
              <Link href="/contact" className="glow-button inline-flex px-8 py-3.5 rounded-full font-bold text-sm items-center gap-2" style={{ color: '#fff' }}>
                Schedule a Demo <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            <div className="grid grid-cols-1 gap-3">
              {[
                'Fully integrated hospital ecosystem',
                'Paperless operations across all departments',
                'Real-time data synchronization',
                'Reduced waiting time via token system',
                'Scalable and future-ready architecture',
                'Improved patient satisfaction scores',
                'Enhanced operational efficiency',
                'Data-driven decision making',
              ].map((adv, i) => (
                <motion.div key={i} initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.06 }}
                  className="flex items-center gap-3 px-4 py-3 rounded-xl" style={{ background: 'var(--surface-2)' }}>
                  <CheckCircle2 className="w-4 h-4 text-accent shrink-0" />
                  <span className="text-sm font-medium" style={{ color: 'var(--fg)' }}>{adv}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="text-center">
          <h2 className="text-3xl font-bold font-display mb-4" style={{ color: 'var(--fg)' }}>Ready to Transform Your Hospital?</h2>
          <p className="text-base mb-8 max-w-xl mx-auto" style={{ color: 'var(--muted-fg)' }}>Get a personalised demo and see how HMS can streamline your entire hospital workflow.</p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link href="/contact" className="glow-button px-8 py-3.5 rounded-full font-bold text-sm" style={{ color: '#fff' }}>
              Book Free Demo
            </Link>
            <Link href="/contact" className="px-8 py-3.5 rounded-full font-semibold text-sm transition-colors"
              style={{ border: '1px solid var(--border)', background: 'var(--surface-1)', color: 'var(--fg)' }}>
              Contact Sales
            </Link>
          </div>
        </section>

      </div>
    </div>
  );
}
