'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Hotel, BedDouble, Users, CreditCard, UtensilsCrossed, Car, BarChart3,
  CheckCircle2, ArrowRight, Shield, Globe, Zap, Clock, Star, TrendingUp,
  ChevronDown, QrCode, Wifi, Coffee, CalendarCheck, UserCheck, Package,
  Bell, RefreshCw, LogOut, LayoutDashboard, MapPin, Phone, Settings,
  PieChart, DollarSign, Key, ClipboardList, Wrench, MessageSquare
} from 'lucide-react';
import Link from 'next/link';

const modules = [
  { icon: BedDouble, title: 'Room Management', color: 'from-blue-500/20 to-blue-600/20', points: ['Real-time room availability', 'Room type & rate configuration', 'Housekeeping status tracking', 'Maintenance request management'] },
  { icon: CalendarCheck, title: 'Reservations & Booking', color: 'from-green-500/20 to-green-600/20', points: ['Online & walk-in bookings', 'OTA channel integration', 'Group & corporate bookings', 'Booking modification & cancellation'] },
  { icon: Users, title: 'Front Desk (Check-in/out)', color: 'from-purple-500/20 to-purple-600/20', points: ['Quick check-in/check-out', 'Guest ID verification', 'Room assignment & upgrade', 'Early/late checkout handling'] },
  { icon: CreditCard, title: 'Billing & Invoicing', color: 'from-yellow-500/20 to-yellow-600/20', points: ['Folio management', 'GST/non-GST billing', 'Split billing & advance payment', 'Multiple payment modes'] },
  { icon: UtensilsCrossed, title: 'Restaurant / F&B', color: 'from-orange-500/20 to-orange-600/20', points: ['Table & room service orders', 'Menu management', 'KOT/BOT generation', 'F&B billing integration'] },
  { icon: Package, title: 'Inventory & Housekeeping', color: 'from-teal-500/20 to-teal-600/20', points: ['Linen & amenity tracking', 'Stock alerts & reorder', 'Housekeeping task assignment', 'Lost & found management'] },
  { icon: Car, title: 'Transport & Concierge', color: 'from-indigo-500/20 to-indigo-600/20', points: ['Airport pickup/drop scheduling', 'Cab & taxi management', 'Tour & activity booking', 'Guest request tracking'] },
  { icon: UserCheck, title: 'Staff & HR', color: 'from-pink-500/20 to-pink-600/20', points: ['Staff attendance & shifts', 'Payroll management', 'Department-wise roles', 'Performance tracking'] },
  { icon: BarChart3, title: 'Reports & Analytics', color: 'from-cyan-500/20 to-cyan-600/20', points: ['Occupancy & revenue reports', 'Guest history analytics', 'Channel-wise booking stats', 'Daily/monthly MIS reports'] },
  { icon: Star, title: 'Guest Experience', color: 'from-rose-500/20 to-rose-600/20', points: ['Guest profile & preferences', 'Loyalty program management', 'Feedback & review collection', 'Personalized communication'] },
  { icon: Wifi, title: 'Online Presence', color: 'from-violet-500/20 to-violet-600/20', points: ['SEO-friendly hotel website', 'Direct booking engine', 'OTA sync (MakeMyTrip, Booking.com)', 'Social media integration'] },
  { icon: Settings, title: 'Admin & Configuration', color: 'from-slate-500/20 to-slate-600/20', points: ['Multi-property support', 'Rate & season management', 'Tax configuration', 'Role-based access control'] },
];

const whyChoose = [
  { icon: Globe, title: 'Direct Booking Website', desc: 'SEO-optimised hotel website with integrated booking engine to reduce OTA commission dependency.' },
  { icon: Zap, title: 'Real-Time Room Status', desc: 'Live dashboard showing room availability, housekeeping status, and maintenance requests across all floors.' },
  { icon: QrCode, title: 'QR-Based Check-in', desc: 'Guests scan a QR code to check in, reducing front desk queues and improving guest experience.' },
  { icon: Shield, title: 'Secure Payment Gateway', desc: 'PCI-compliant payment processing with support for UPI, cards, net banking, and cash.' },
  { icon: TrendingUp, title: 'Revenue Management', desc: 'Dynamic pricing, occupancy analytics, and channel-wise revenue tracking to maximise RevPAR.' },
  { icon: Clock, title: '24/7 Operations', desc: 'Night audit automation, shift handover reports, and round-the-clock operational continuity.' },
];

const guestFlow = [
  { step: '01', label: 'Booking', desc: 'Online / walk-in / OTA' },
  { step: '02', label: 'Check-in', desc: 'ID verify & room assign' },
  { step: '03', label: 'Stay', desc: 'Services & requests' },
  { step: '04', label: 'F&B', desc: 'Restaurant & room service' },
  { step: '05', label: 'Billing', desc: 'Folio & payment' },
  { step: '06', label: 'Check-out', desc: 'Feedback & loyalty' },
];

function ModuleCard({ mod, index }: { mod: typeof modules[0]; index: number }) {
  const [open, setOpen] = useState(false);
  const Icon = mod.icon;
  return (
    <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
      transition={{ delay: (index % 4) * 0.07 }}
      className="rounded-xl border overflow-hidden cursor-pointer"
      style={{ borderColor: 'var(--border)', background: 'var(--card-bg)' }}
      onClick={() => setOpen(!open)}>
      <div className="flex items-center justify-between px-5 py-4 gap-3">
        <div className="flex items-center gap-3">
          <div className={`w-9 h-9 rounded-lg bg-gradient-to-br ${mod.color} flex items-center justify-center shrink-0`}>
            <Icon className="w-4 h-4 text-accent" />
          </div>
          <span className="font-semibold text-sm" style={{ color: 'var(--fg)' }}>{mod.title}</span>
        </div>
        <ChevronDown className={`w-4 h-4 text-muted shrink-0 transition-transform duration-300 ${open ? 'rotate-180' : ''}`} />
      </div>
      <AnimatePresence>
        {open && (
          <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.25 }} className="overflow-hidden">
            <ul className="px-5 pb-4 space-y-2 border-t" style={{ borderColor: 'var(--border)' }}>
              {mod.points.map((p, i) => (
                <li key={i} className="flex items-start gap-2 pt-2 text-sm" style={{ color: 'var(--muted-fg)' }}>
                  <CheckCircle2 className="w-3.5 h-3.5 text-accent mt-0.5 shrink-0" />{p}
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

function HotelDashboard() {
  const [tick, setTick] = useState(0);
  useEffect(() => { const t = setInterval(() => setTick(p => p + 1), 3000); return () => clearInterval(t); }, []);

  const rooms = [
    { no: '101', type: 'Deluxe', status: 'occupied', guest: 'Rahul S.' },
    { no: '102', type: 'Suite', status: 'available', guest: '' },
    { no: '103', type: 'Standard', status: 'cleaning', guest: '' },
    { no: '104', type: 'Deluxe', status: 'occupied', guest: 'Priya M.' },
    { no: '201', type: 'Suite', status: 'available', guest: '' },
    { no: '202', type: 'Standard', status: 'occupied', guest: 'Amit K.' },
  ];
  const statusColor: Record<string, string> = { occupied: 'bg-blue-500', available: 'bg-green-500', cleaning: 'bg-yellow-500' };

  return (
    <motion.div initial={{ opacity: 0, x: 60 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.3 }}
      className="relative w-full rounded-2xl overflow-hidden shadow-2xl select-none"
      style={{ background: '#f8fafc', border: '1px solid #e2e8f0', fontSize: 11 }}>
      {/* browser bar */}
      <div className="flex items-center gap-1.5 px-3 py-2 bg-white border-b border-slate-200">
        <span className="w-2.5 h-2.5 rounded-full bg-red-400" /><span className="w-2.5 h-2.5 rounded-full bg-yellow-400" /><span className="w-2.5 h-2.5 rounded-full bg-green-400" />
        <div className="flex-1 mx-3 bg-slate-100 rounded px-2 py-0.5 text-[9px] text-slate-400">hms.digigrownex.com/hotel/dashboard</div>
        <Bell className="w-3 h-3 text-slate-400" />
      </div>
      <div className="flex" style={{ minHeight: 340 }}>
        {/* Sidebar */}
        <div className="w-24 shrink-0 bg-white border-r border-slate-200 flex flex-col py-2 px-2">
          {[{icon: LayoutDashboard, label:'Dashboard',active:true},{icon:BedDouble,label:'Rooms'},{icon:CalendarCheck,label:'Bookings'},{icon:Users,label:'Guests'},{icon:UtensilsCrossed,label:'F&B'},{icon:CreditCard,label:'Billing'},{icon:BarChart3,label:'Reports'},{icon:Settings,label:'Settings'}].map((item,i)=>{
            const Icon=item.icon;
            return <div key={i} className={`flex items-center gap-1.5 px-2 py-1.5 rounded-lg mb-0.5 ${item.active?'bg-accent/10 text-accent font-bold':'text-slate-500'}`}><Icon className="w-3 h-3 shrink-0"/><span className="text-[9px] truncate">{item.label}</span></div>;
          })}
          <div className="mt-auto border-t border-slate-100 pt-2">
            <div className="flex items-center gap-1.5 px-2 py-1.5">
              <div className="w-5 h-5 rounded-full bg-accent flex items-center justify-center text-white text-[8px] font-bold">HA</div>
              <div><div className="text-[9px] font-bold text-slate-700">Hotel Admin</div><div className="text-[7px] text-slate-400">Super Admin</div></div>
            </div>
          </div>
        </div>
        {/* Main */}
        <div className="flex-1 flex flex-col overflow-hidden">
          <div className="flex items-center justify-between px-3 py-2 bg-white border-b border-slate-200">
            <div><div className="font-bold text-slate-800 text-xs">Hotel Dashboard</div><div className="text-[8px] text-slate-400">Live overview</div></div>
            <div className="flex items-center gap-1 text-[9px] text-accent"><RefreshCw className="w-2.5 h-2.5"/>Refresh</div>
          </div>
          <div className="p-2 flex flex-col gap-2 flex-1">
            {/* Stats */}
            <div className="grid grid-cols-4 gap-1.5">
              {[
                {label:'Total Rooms',value:'24',icon:BedDouble,color:'bg-blue-500/10 text-blue-400'},
                {label:'Occupied',value:tick%2===0?'16':'17',icon:Key,color:'bg-green-500/10 text-green-400'},
                {label:"Today's Revenue",value:'₹28,400',icon:DollarSign,color:'bg-yellow-500/10 text-yellow-400'},
                {label:'Check-outs',value:'4',icon:LogOut,color:'bg-purple-500/10 text-purple-400'},
              ].map((s,i)=>{const Icon=s.icon;return(
                <motion.div key={i} initial={{opacity:0,y:10}} animate={{opacity:1,y:0}} transition={{delay:0.4+i*0.1}} className="bg-white rounded-lg p-2 border border-slate-100 shadow-sm">
                  <div className={`w-5 h-5 rounded-md ${s.color} flex items-center justify-center mb-1`}><Icon className="w-2.5 h-2.5"/></div>
                  <div className="text-[8px] text-slate-400">{s.label}</div>
                  <motion.div key={s.value} initial={{opacity:0}} animate={{opacity:1}} className="text-sm font-bold text-slate-800">{s.value}</motion.div>
                </motion.div>
              );})}
            </div>
            {/* Room grid */}
            <div className="bg-white rounded-lg border border-slate-100 p-2 flex-1">
              <div className="text-[9px] font-bold text-slate-700 mb-2">Room Status</div>
              <div className="grid grid-cols-3 gap-1.5">
                {rooms.map((r,i)=>(
                  <motion.div key={i} initial={{opacity:0,scale:0.9}} animate={{opacity:1,scale:1}} transition={{delay:0.5+i*0.08}}
                    className="rounded-lg p-2 border border-slate-100" style={{background:'#f8fafc'}}>
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-[9px] font-bold text-slate-700">#{r.no}</span>
                      <span className={`w-2 h-2 rounded-full ${statusColor[r.status]}`}/>
                    </div>
                    <div className="text-[7px] text-slate-400">{r.type}</div>
                    <div className="text-[7px] text-slate-500 truncate">{r.guest||r.status}</div>
                  </motion.div>
                ))}
              </div>
              <div className="flex items-center gap-3 mt-2">
                {[['occupied','bg-blue-500','Occupied'],['available','bg-green-500','Available'],['cleaning','bg-yellow-500','Cleaning']].map(([k,c,l])=>(
                  <div key={k} className="flex items-center gap-1"><span className={`w-2 h-2 rounded-full ${c}`}/><span className="text-[7px] text-slate-400">{l}</span></div>
                ))}
              </div>
            </div>
            {/* Alerts */}
            <div className="bg-white rounded-lg border border-slate-100 p-2">
              <div className="text-[9px] font-bold text-slate-700 mb-1.5">Today's Alerts</div>
              <motion.div animate={{opacity:[1,0.7,1]}} transition={{duration:2,repeat:Infinity}} className="flex items-center gap-1.5 bg-yellow-50 border border-yellow-200 rounded-lg p-1.5 mb-1">
                <Bell className="w-2.5 h-2.5 text-yellow-600 shrink-0"/>
                <span className="text-[8px] text-yellow-700">{tick%2===0?'3':'4'} checkouts pending today</span>
              </motion.div>
              <div className="flex items-center gap-1.5 bg-green-50 border border-green-200 rounded-lg p-1.5">
                <CheckCircle2 className="w-2.5 h-2.5 text-green-600 shrink-0"/>
                <span className="text-[8px] text-green-700">Room 201 & 205 ready for check-in</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function HotelManagementPage() {
  return (
    <div className="pt-28 pb-24 min-h-screen">
      {/* Hero */}
      <section className="relative overflow-hidden mb-20">
        <div className="absolute inset-0 hero-dots opacity-30"/>
        <div className="absolute top-0 left-0 w-[500px] h-[500px] rounded-full blur-[140px] pointer-events-none -translate-x-1/2 -translate-y-1/4" style={{background:'radial-gradient(ellipse, rgba(52,204,50,0.12) 0%, transparent 70%)'}}/>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div initial={{opacity:0,x:-40}} animate={{opacity:1,x:0}} transition={{duration:0.7}}>
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent/10 border border-accent/20 mb-6">
                <Hotel className="w-3.5 h-3.5 text-accent"/>
                <span className="text-xs font-bold text-accent uppercase tracking-widest">HMS Product</span>
              </div>
              <h1 className="text-4xl sm:text-5xl font-bold font-display mb-5 leading-tight" style={{color:'var(--fg)'}}>
                Hotel Management<br/><span className="gradient-text">System (HMS)</span>
              </h1>
              <p className="text-base mb-8 leading-relaxed max-w-lg" style={{color:'var(--muted-fg)'}}>
                A complete cloud-based hotel management platform covering reservations, front desk, housekeeping, F&B, billing, and analytics — all in one unified system designed to maximise occupancy and guest satisfaction.
              </p>
              <div className="flex flex-wrap gap-2 mb-8">
                {['Online Booking Engine','Room Management','F&B Integration','OTA Sync','Revenue Analytics','QR Check-in'].map((tag,i)=>(
                  <span key={i} className="flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold" style={{background:'var(--surface-2)',border:'1px solid var(--border)',color:'var(--fg)'}}>
                    <CheckCircle2 className="w-3 h-3 text-accent"/>{tag}
                  </span>
                ))}
              </div>
              <div className="flex flex-wrap gap-3">
                <Link href="/contact" className="glow-button px-7 py-3 rounded-xl font-bold text-sm flex items-center gap-2" style={{color:'#fff'}}>Request Demo <ArrowRight className="w-4 h-4"/></Link>
                <Link href="/contact" className="px-7 py-3 rounded-xl font-semibold text-sm flex items-center gap-2 transition-colors" style={{border:'1px solid var(--border)',background:'var(--surface-1)',color:'var(--fg)'}}>Get Pricing</Link>
              </div>
              <div className="flex gap-6 mt-10 pt-8" style={{borderTop:'1px solid var(--border)'}}>
                {[['12+','Modules'],['100%','Cloud-Based'],['OTA','Integrated']].map(([val,label],i)=>(
                  <div key={i}><div className="text-xl font-bold gradient-text">{val}</div><div className="text-xs" style={{color:'var(--muted-fg)'}}>{label}</div></div>
                ))}
              </div>
            </motion.div>
            <div className="relative">
              <motion.div initial={{opacity:0,y:-10}} animate={{opacity:1,y:0}} transition={{delay:1.2}} className="absolute -top-4 -left-4 z-10 flex items-center gap-2 px-3 py-2 rounded-xl shadow-lg text-xs font-semibold" style={{background:'var(--surface-0)',border:'1px solid var(--border)',color:'var(--fg)'}}>
                <span className="w-2 h-2 rounded-full bg-accent animate-pulse"/>Live Dashboard
              </motion.div>
              <HotelDashboard/>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
        {/* Why Choose */}
        <section>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold font-display mb-4" style={{color:'var(--fg)'}}>Why Choose Our Hotel System?</h2>
            <p className="text-base max-w-2xl mx-auto" style={{color:'var(--muted-fg)'}}>Built for hotels, resorts, and service apartments of all sizes.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyChoose.map((item,i)=>{const Icon=item.icon;return(
              <motion.div key={i} initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{delay:i*0.08}} className="glass-card rounded-xl p-6">
                <div className="w-11 h-11 rounded-xl bg-accent/10 flex items-center justify-center mb-4"><Icon className="w-5 h-5 text-accent"/></div>
                <h3 className="font-bold mb-2" style={{color:'var(--fg)'}}>{item.title}</h3>
                <p className="text-sm leading-relaxed" style={{color:'var(--muted-fg)'}}>{item.desc}</p>
              </motion.div>
            );})}
          </div>
        </section>

        {/* Guest Flow */}
        <section>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold font-display mb-4" style={{color:'var(--fg)'}}>Guest Journey Flow</h2>
          </div>
          <div className="relative">
            <div className="absolute top-8 left-0 right-0 h-0.5 hidden lg:block" style={{background:'linear-gradient(90deg, transparent, var(--accent), transparent)'}}/>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
              {guestFlow.map((step,i)=>(
                <motion.div key={i} initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{delay:i*0.1}} className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 rounded-full flex items-center justify-center font-bold text-lg mb-3 relative z-10" style={{background:'var(--surface-2)',border:'2px solid var(--accent)',color:'var(--accent)'}}>{step.step}</div>
                  <div className="font-bold text-sm mb-1" style={{color:'var(--fg)'}}>{step.label}</div>
                  <div className="text-xs" style={{color:'var(--muted-fg)'}}>{step.desc}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Modules */}
        <section>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold font-display mb-4" style={{color:'var(--fg)'}}>12 Functional Modules</h2>
            <p className="text-base max-w-2xl mx-auto" style={{color:'var(--muted-fg)'}}>Every aspect of hotel operations covered with dedicated modules.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {modules.map((mod,i)=><ModuleCard key={i} mod={mod} index={i}/>)}
          </div>
        </section>

        {/* Advantages */}
        <section className="rounded-2xl p-8 lg:p-14" style={{background:'var(--surface-1)',border:'1px solid var(--border)'}}>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold font-display mb-6" style={{color:'var(--fg)'}}>Key Advantages</h2>
              <p className="text-base mb-8 leading-relaxed" style={{color:'var(--muted-fg)'}}>From boutique hotels to large resorts — our system scales with your property.</p>
              <Link href="/contact" className="glow-button inline-flex px-8 py-3 rounded-xl font-bold text-sm items-center gap-2" style={{color:'#fff'}}>Schedule a Demo <ArrowRight className="w-4 h-4"/></Link>
            </div>
            <div className="grid gap-3">
              {['Fully cloud-based — access from anywhere','Real-time room & booking management','OTA channel manager integration','Automated night audit & reports','Multi-property support','Paperless check-in with QR code','Integrated POS for restaurant & spa','GST-compliant billing & invoicing'].map((adv,i)=>(
                <motion.div key={i} initial={{opacity:0,x:20}} whileInView={{opacity:1,x:0}} viewport={{once:true}} transition={{delay:i*0.06}} className="flex items-center gap-3 px-4 py-3 rounded-xl" style={{background:'var(--surface-2)'}}>
                  <CheckCircle2 className="w-4 h-4 text-accent shrink-0"/>
                  <span className="text-sm font-medium" style={{color:'var(--fg)'}}>{adv}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="text-center">
          <h2 className="text-3xl font-bold font-display mb-4" style={{color:'var(--fg)'}}>Ready to Modernise Your Hotel?</h2>
          <p className="text-base mb-8 max-w-xl mx-auto" style={{color:'var(--muted-fg)'}}>Get a personalised demo and see how our HMS can transform your property operations.</p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link href="/contact" className="glow-button px-8 py-3 rounded-xl font-bold text-sm" style={{color:'#fff'}}>Book Free Demo</Link>
            <Link href="/contact" className="px-8 py-3 rounded-xl font-semibold text-sm transition-colors" style={{border:'1px solid var(--border)',background:'var(--surface-1)',color:'var(--fg)'}}>Contact Sales</Link>
          </div>
        </section>
      </div>
    </div>
  );
}
