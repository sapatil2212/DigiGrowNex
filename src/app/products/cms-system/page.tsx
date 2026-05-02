'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Layout, FileText, Image, Users, BarChart3, Globe, Shield, Zap,
  CheckCircle2, ArrowRight, TrendingUp, Clock, ChevronDown, Settings,
  Search, Tag, Bell, RefreshCw, PenTool, Database, Link2, Eye,
  FolderOpen, LayoutDashboard, Plus, Edit, Trash2, Upload, Filter
} from 'lucide-react';
import Link from 'next/link';

const modules = [
  { icon: FileText, title: 'Content Management', color: 'from-blue-500/20 to-blue-600/20', points: ['Rich text editor (WYSIWYG)', 'Multi-language content support', 'Content versioning & history', 'Draft, review & publish workflow'] },
  { icon: Image, title: 'Media Library', color: 'from-green-500/20 to-green-600/20', points: ['Centralised image & video storage', 'Auto image optimisation & compression', 'Folder organisation & tagging', 'CDN integration for fast delivery'] },
  { icon: Layout, title: 'Page Builder', color: 'from-purple-500/20 to-purple-600/20', points: ['Drag & drop page builder', 'Pre-built section templates', 'Mobile-responsive layouts', 'Custom CSS & code injection'] },
  { icon: Users, title: 'User & Role Management', color: 'from-yellow-500/20 to-yellow-600/20', points: ['Multi-user collaboration', 'Role-based permissions (Admin/Editor/Viewer)', 'Activity logs & audit trail', 'SSO & 2FA support'] },
  { icon: Search, title: 'SEO Management', color: 'from-orange-500/20 to-orange-600/20', points: ['Meta title & description editor', 'Open Graph & Twitter card support', 'XML sitemap auto-generation', 'Canonical URL management'] },
  { icon: Tag, title: 'Categories & Tags', color: 'from-teal-500/20 to-teal-600/20', points: ['Hierarchical category structure', 'Tag-based content filtering', 'Custom taxonomy creation', 'Bulk content organisation'] },
  { icon: BarChart3, title: 'Analytics & Reports', color: 'from-indigo-500/20 to-indigo-600/20', points: ['Page view & traffic analytics', 'Content performance metrics', 'User engagement tracking', 'Export reports (CSV/PDF)'] },
  { icon: Globe, title: 'Multi-Site Management', color: 'from-pink-500/20 to-pink-600/20', points: ['Manage multiple websites', 'Shared media & content library', 'Centralised user management', 'Per-site configuration'] },
  { icon: Link2, title: 'API & Integrations', color: 'from-cyan-500/20 to-cyan-600/20', points: ['REST & GraphQL API', 'Webhook support', 'Third-party app integrations', 'Headless CMS capability'] },
  { icon: Shield, title: 'Security & Backup', color: 'from-rose-500/20 to-rose-600/20', points: ['Automated daily backups', 'SSL & HTTPS enforcement', 'Spam & bot protection', 'Content access control'] },
  { icon: Database, title: 'Custom Content Types', color: 'from-violet-500/20 to-violet-600/20', points: ['Create custom post types', 'Custom field builder', 'Repeatable field groups', 'Relationship fields'] },
  { icon: Settings, title: 'System Configuration', color: 'from-slate-500/20 to-slate-600/20', points: ['Theme & branding settings', 'Email notification setup', 'Cache & performance tuning', 'Plugin/extension support'] },
];

const whyChoose = [
  { icon: Zap, title: 'Lightning Fast Editor', desc: 'Intuitive WYSIWYG editor with real-time preview — no technical knowledge required to manage content.' },
  { icon: Globe, title: 'Headless CMS Ready', desc: 'Use as a traditional CMS or go headless with our REST/GraphQL API to power any frontend framework.' },
  { icon: Search, title: 'Built-in SEO Tools', desc: 'Every page has dedicated SEO fields, sitemap generation, and structured data support out of the box.' },
  { icon: Shield, title: 'Enterprise Security', desc: 'Role-based access, 2FA, automated backups, and audit logs keep your content and data secure.' },
  { icon: TrendingUp, title: 'Content Analytics', desc: 'Track which content performs best with built-in analytics and exportable performance reports.' },
  { icon: Clock, title: 'Scheduled Publishing', desc: 'Plan your content calendar and schedule posts to publish automatically at the right time.' },
];

function CMSDashboard() {
  const [tick, setTick] = useState(0);
  useEffect(() => { const t = setInterval(() => setTick(p => p + 1), 3000); return () => clearInterval(t); }, []);

  const recentPosts = [
    { title: 'New Product Launch 2026', status: 'published', date: 'May 2' },
    { title: 'Company Blog Update', status: 'draft', date: 'May 1' },
    { title: 'Service Page Revision', status: 'review', date: 'Apr 30' },
    { title: 'Case Study: Hotel Client', status: 'published', date: 'Apr 29' },
  ];
  const statusColor: Record<string, string> = { published: 'text-green-600 bg-green-50', draft: 'text-yellow-600 bg-yellow-50', review: 'text-blue-600 bg-blue-50' };

  return (
    <motion.div initial={{ opacity: 0, x: 60 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.3 }}
      className="relative w-full rounded-2xl overflow-hidden shadow-2xl select-none"
      style={{ background: '#f8fafc', border: '1px solid #e2e8f0', fontSize: 11 }}>
      <div className="flex items-center gap-1.5 px-3 py-2 bg-white border-b border-slate-200">
        <span className="w-2.5 h-2.5 rounded-full bg-red-400"/><span className="w-2.5 h-2.5 rounded-full bg-yellow-400"/><span className="w-2.5 h-2.5 rounded-full bg-green-400"/>
        <div className="flex-1 mx-3 bg-slate-100 rounded px-2 py-0.5 text-[9px] text-slate-400">cms.digigrownex.com/admin</div>
        <Bell className="w-3 h-3 text-slate-400"/>
      </div>
      <div className="flex" style={{ minHeight: 340 }}>
        <div className="w-24 shrink-0 bg-white border-r border-slate-200 flex flex-col py-2 px-2">
          {[{icon:LayoutDashboard,label:'Dashboard',active:true},{icon:FileText,label:'Posts'},{icon:Layout,label:'Pages'},{icon:Image,label:'Media'},{icon:Tag,label:'Categories'},{icon:Users,label:'Users'},{icon:BarChart3,label:'Analytics'},{icon:Settings,label:'Settings'}].map((item,i)=>{
            const Icon=item.icon;
            return <div key={i} className={`flex items-center gap-1.5 px-2 py-1.5 rounded-lg mb-0.5 ${item.active?'bg-accent/10 text-accent font-bold':'text-slate-500'}`}><Icon className="w-3 h-3 shrink-0"/><span className="text-[9px] truncate">{item.label}</span></div>;
          })}
        </div>
        <div className="flex-1 flex flex-col overflow-hidden">
          <div className="flex items-center justify-between px-3 py-2 bg-white border-b border-slate-200">
            <div><div className="font-bold text-slate-800 text-xs">Content Dashboard</div><div className="text-[8px] text-slate-400">Manage all your content</div></div>
            <div className="flex items-center gap-1.5">
              <div className="flex items-center gap-1 text-[9px] bg-accent text-white px-2 py-1 rounded-lg cursor-pointer"><Plus className="w-2.5 h-2.5"/>New Post</div>
            </div>
          </div>
          <div className="p-2 flex flex-col gap-2 flex-1">
            <div className="grid grid-cols-4 gap-1.5">
              {[
                {label:'Total Posts',value:tick%2===0?'142':'143',icon:FileText,color:'bg-blue-500/10 text-blue-400'},
                {label:'Published',value:'128',icon:Eye,color:'bg-green-500/10 text-green-400'},
                {label:'Drafts',value:'11',icon:Edit,color:'bg-yellow-500/10 text-yellow-400'},
                {label:'Media Files',value:'847',icon:Image,color:'bg-purple-500/10 text-purple-400'},
              ].map((s,i)=>{const Icon=s.icon;return(
                <motion.div key={i} initial={{opacity:0,y:10}} animate={{opacity:1,y:0}} transition={{delay:0.4+i*0.1}} className="bg-white rounded-lg p-2 border border-slate-100 shadow-sm">
                  <div className={`w-5 h-5 rounded-md ${s.color} flex items-center justify-center mb-1`}><Icon className="w-2.5 h-2.5"/></div>
                  <div className="text-[8px] text-slate-400">{s.label}</div>
                  <motion.div key={s.value} initial={{opacity:0}} animate={{opacity:1}} className="text-sm font-bold text-slate-800">{s.value}</motion.div>
                </motion.div>
              );})}
            </div>
            <div className="bg-white rounded-lg border border-slate-100 p-2 flex-1">
              <div className="flex items-center justify-between mb-2">
                <span className="text-[9px] font-bold text-slate-700">Recent Content</span>
                <div className="flex items-center gap-1 text-[8px] text-slate-400"><Filter className="w-2.5 h-2.5"/>Filter</div>
              </div>
              {recentPosts.map((post,i)=>(
                <motion.div key={i} initial={{opacity:0,x:-10}} animate={{opacity:1,x:0}} transition={{delay:0.5+i*0.1}}
                  className="flex items-center justify-between py-1.5 border-b border-slate-50 last:border-0">
                  <div className="flex items-center gap-2">
                    <FileText className="w-3 h-3 text-slate-400 shrink-0"/>
                    <span className="text-[9px] text-slate-700 font-medium truncate max-w-[120px]">{post.title}</span>
                  </div>
                  <div className="flex items-center gap-2 shrink-0">
                    <span className={`text-[7px] font-bold px-1.5 py-0.5 rounded-full ${statusColor[post.status]}`}>{post.status}</span>
                    <span className="text-[7px] text-slate-400">{post.date}</span>
                  </div>
                </motion.div>
              ))}
            </div>
            <div className="grid grid-cols-2 gap-1.5">
              <div className="bg-white rounded-lg border border-slate-100 p-2">
                <div className="text-[8px] font-bold text-slate-700 mb-1">Storage Used</div>
                <div className="w-full bg-slate-100 rounded-full h-1.5 mb-1"><motion.div initial={{width:0}} animate={{width:'68%'}} transition={{duration:1.5,delay:0.8}} className="h-1.5 rounded-full bg-accent"/></div>
                <div className="text-[7px] text-slate-400">6.8 GB / 10 GB</div>
              </div>
              <div className="bg-white rounded-lg border border-slate-100 p-2">
                <div className="text-[8px] font-bold text-slate-700 mb-1">Active Users</div>
                <div className="flex items-center gap-1 mt-1">
                  {['A','B','C'].map((u,i)=><div key={i} className="w-5 h-5 rounded-full bg-accent/20 flex items-center justify-center text-[7px] font-bold text-accent -ml-1 first:ml-0 border border-white">{u}</div>)}
                  <span className="text-[7px] text-slate-400 ml-1">+2 online</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function ModuleCard({ mod, index }: { mod: typeof modules[0]; index: number }) {
  const [open, setOpen] = useState(false);
  const Icon = mod.icon;
  return (
    <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: (index % 4) * 0.07 }}
      className="rounded-xl border overflow-hidden cursor-pointer" style={{ borderColor: 'var(--border)', background: 'var(--card-bg)' }} onClick={() => setOpen(!open)}>
      <div className="flex items-center justify-between px-5 py-4 gap-3">
        <div className="flex items-center gap-3">
          <div className={`w-9 h-9 rounded-lg bg-gradient-to-br ${mod.color} flex items-center justify-center shrink-0`}><Icon className="w-4 h-4 text-accent"/></div>
          <span className="font-semibold text-sm" style={{ color: 'var(--fg)' }}>{mod.title}</span>
        </div>
        <ChevronDown className={`w-4 h-4 text-muted shrink-0 transition-transform duration-300 ${open ? 'rotate-180' : ''}`}/>
      </div>
      <AnimatePresence>
        {open && (
          <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.25 }} className="overflow-hidden">
            <ul className="px-5 pb-4 space-y-2 border-t" style={{ borderColor: 'var(--border)' }}>
              {mod.points.map((p, i) => (
                <li key={i} className="flex items-start gap-2 pt-2 text-sm" style={{ color: 'var(--muted-fg)' }}>
                  <CheckCircle2 className="w-3.5 h-3.5 text-accent mt-0.5 shrink-0"/>{p}
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function CMSSystemPage() {
  return (
    <div className="pt-28 pb-24 min-h-screen">
      <section className="relative overflow-hidden mb-20">
        <div className="absolute inset-0 hero-dots opacity-30"/>
        <div className="absolute top-0 left-0 w-[500px] h-[500px] rounded-full blur-[140px] pointer-events-none -translate-x-1/2 -translate-y-1/4" style={{background:'radial-gradient(ellipse, rgba(52,204,50,0.12) 0%, transparent 70%)'}}/>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div initial={{opacity:0,x:-40}} animate={{opacity:1,x:0}} transition={{duration:0.7}}>
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent/10 border border-accent/20 mb-6">
                <Layout className="w-3.5 h-3.5 text-accent"/>
                <span className="text-xs font-bold text-accent uppercase tracking-widest">CMS Product</span>
              </div>
              <h1 className="text-4xl sm:text-5xl font-bold font-display mb-5 leading-tight" style={{color:'var(--fg)'}}>
                Content Management<br/><span className="gradient-text">System (CMS)</span>
              </h1>
              <p className="text-base mb-8 leading-relaxed max-w-lg" style={{color:'var(--muted-fg)'}}>
                A powerful, flexible CMS built for businesses that need full control over their digital content — from blog posts and landing pages to product catalogues and media libraries, all without writing a single line of code.
              </p>
              <div className="flex flex-wrap gap-2 mb-8">
                {['Drag & Drop Builder','SEO Built-in','Multi-User','Headless API','Scheduled Publishing','Media CDN'].map((tag,i)=>(
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
                {[['12+','Modules'],['No-Code','Editor'],['REST/GraphQL','API Ready']].map(([val,label],i)=>(
                  <div key={i}><div className="text-xl font-bold gradient-text">{val}</div><div className="text-xs" style={{color:'var(--muted-fg)'}}>{label}</div></div>
                ))}
              </div>
            </motion.div>
            <div className="relative">
              <motion.div initial={{opacity:0,y:-10}} animate={{opacity:1,y:0}} transition={{delay:1.2}} className="absolute -top-4 -left-4 z-10 flex items-center gap-2 px-3 py-2 rounded-xl shadow-lg text-xs font-semibold" style={{background:'var(--surface-0)',border:'1px solid var(--border)',color:'var(--fg)'}}>
                <span className="w-2 h-2 rounded-full bg-accent animate-pulse"/>Live CMS
              </motion.div>
              <CMSDashboard/>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
        <section>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold font-display mb-4" style={{color:'var(--fg)'}}>Why Choose Our CMS?</h2>
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

        <section>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold font-display mb-4" style={{color:'var(--fg)'}}>12 Powerful Modules</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {modules.map((mod,i)=><ModuleCard key={i} mod={mod} index={i}/>)}
          </div>
        </section>

        <section className="rounded-2xl p-8 lg:p-14" style={{background:'var(--surface-1)',border:'1px solid var(--border)'}}>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold font-display mb-6" style={{color:'var(--fg)'}}>Key Advantages</h2>
              <Link href="/contact" className="glow-button inline-flex px-8 py-3 rounded-xl font-bold text-sm items-center gap-2" style={{color:'#fff'}}>Schedule a Demo <ArrowRight className="w-4 h-4"/></Link>
            </div>
            <div className="grid gap-3">
              {['No technical knowledge required to manage content','SEO-optimised pages out of the box','Multi-user collaboration with role permissions','Headless CMS for any frontend framework','Automated backups & version history','Scheduled content publishing','Custom content types & fields','Multi-site management from one dashboard'].map((adv,i)=>(
                <motion.div key={i} initial={{opacity:0,x:20}} whileInView={{opacity:1,x:0}} viewport={{once:true}} transition={{delay:i*0.06}} className="flex items-center gap-3 px-4 py-3 rounded-xl" style={{background:'var(--surface-2)'}}>
                  <CheckCircle2 className="w-4 h-4 text-accent shrink-0"/>
                  <span className="text-sm font-medium" style={{color:'var(--fg)'}}>{adv}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="text-center">
          <h2 className="text-3xl font-bold font-display mb-4" style={{color:'var(--fg)'}}>Ready to Take Control of Your Content?</h2>
          <p className="text-base mb-8 max-w-xl mx-auto" style={{color:'var(--muted-fg)'}}>Get a personalised demo and see how our CMS can simplify your content operations.</p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link href="/contact" className="glow-button px-8 py-3 rounded-xl font-bold text-sm" style={{color:'#fff'}}>Book Free Demo</Link>
            <Link href="/contact" className="px-8 py-3 rounded-xl font-semibold text-sm transition-colors" style={{border:'1px solid var(--border)',background:'var(--surface-1)',color:'var(--fg)'}}>Contact Sales</Link>
          </div>
        </section>
      </div>
    </div>
  );
}
