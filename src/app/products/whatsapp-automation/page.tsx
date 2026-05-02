'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  MessageSquare, Send, Users, BarChart3, Bell, Zap, Shield, Globe,
  CheckCircle2, ArrowRight, TrendingUp, Clock, ChevronDown, Bot,
  Phone, Image, FileText, RefreshCw, Settings, Link2, Tag,
  LayoutDashboard, MessageCircle, Repeat, Filter, PieChart, Smartphone
} from 'lucide-react';
import Link from 'next/link';

const modules = [
  { icon: Bot, title: 'Chatbot & Auto-Reply', color: 'from-green-500/20 to-green-600/20', points: ['Keyword-based auto responses', 'AI-powered conversation flows', 'FAQ automation', '24/7 instant reply without agents'] },
  { icon: Send, title: 'Bulk Messaging', color: 'from-blue-500/20 to-blue-600/20', points: ['Send to unlimited contacts', 'Personalised message variables', 'Schedule bulk campaigns', 'Template message support'] },
  { icon: Users, title: 'Contact Management', color: 'from-purple-500/20 to-purple-600/20', points: ['Import contacts via CSV/Excel', 'Contact segmentation & groups', 'Custom tags & labels', 'Opt-in/opt-out management'] },
  { icon: Repeat, title: 'Drip Campaigns', color: 'from-yellow-500/20 to-yellow-600/20', points: ['Automated follow-up sequences', 'Time-delay message scheduling', 'Trigger-based workflows', 'Lead nurturing automation'] },
  { icon: Image, title: 'Rich Media Messages', color: 'from-orange-500/20 to-orange-600/20', points: ['Send images, videos & PDFs', 'Interactive buttons & CTAs', 'Product catalogue sharing', 'Location & contact cards'] },
  { icon: BarChart3, title: 'Analytics & Reports', color: 'from-teal-500/20 to-teal-600/20', points: ['Message delivery & read rates', 'Campaign performance metrics', 'Response rate tracking', 'Export reports (CSV/PDF)'] },
  { icon: Link2, title: 'CRM Integration', color: 'from-indigo-500/20 to-indigo-600/20', points: ['Sync with your existing CRM', 'Lead capture from WhatsApp', 'Deal & pipeline tracking', 'Webhook & API support'] },
  { icon: Phone, title: 'Multi-Agent Inbox', color: 'from-pink-500/20 to-pink-600/20', points: ['Team inbox for shared chats', 'Agent assignment & routing', 'Internal notes & collaboration', 'Chat transfer between agents'] },
  { icon: Tag, title: 'Labels & Segmentation', color: 'from-cyan-500/20 to-cyan-600/20', points: ['Label chats by status/type', 'Filter & search conversations', 'Segment-based broadcasts', 'Priority queue management'] },
  { icon: Shield, title: 'Compliance & Security', color: 'from-rose-500/20 to-rose-600/20', points: ['Official WhatsApp Business API', 'End-to-end encryption', 'GDPR-compliant data handling', 'Opt-in consent management'] },
  { icon: Settings, title: 'Workflow Automation', color: 'from-violet-500/20 to-violet-600/20', points: ['Visual flow builder', 'Trigger on keywords/events', 'Conditional branching logic', 'Multi-step automation chains'] },
  { icon: Globe, title: 'Multi-Channel Support', color: 'from-slate-500/20 to-slate-600/20', points: ['WhatsApp + SMS integration', 'Instagram DM automation', 'Facebook Messenger support', 'Unified inbox for all channels'] },
];

const whyChoose = [
  { icon: Zap, title: 'Official WhatsApp API', desc: 'Built on the official WhatsApp Business API — no bans, no restrictions, fully compliant with Meta policies.' },
  { icon: Bot, title: 'AI-Powered Chatbot', desc: 'Intelligent chatbot handles FAQs, lead qualification, and appointment booking automatically 24/7.' },
  { icon: Send, title: 'Bulk Campaigns', desc: 'Send personalised messages to thousands of contacts at once with high delivery and open rates.' },
  { icon: TrendingUp, title: 'Higher Engagement', desc: 'WhatsApp messages have 98% open rate vs 20% for email — reach your customers where they actually are.' },
  { icon: Users, title: 'Multi-Agent Inbox', desc: 'Your entire team manages customer conversations from one shared inbox with assignment and routing.' },
  { icon: Clock, title: 'Drip Automation', desc: 'Set up automated follow-up sequences that nurture leads and convert them without manual effort.' },
];

const useCases = [
  { icon: '🏥', title: 'Healthcare', desc: 'Appointment reminders, lab report delivery, prescription follow-ups' },
  { icon: '🏨', title: 'Hotels', desc: 'Booking confirmations, check-in instructions, feedback collection' },
  { icon: '🛒', title: 'E-Commerce', desc: 'Order updates, abandoned cart recovery, product recommendations' },
  { icon: '🏫', title: 'Education', desc: 'Admission enquiries, fee reminders, exam notifications' },
  { icon: '🏦', title: 'Finance', desc: 'Payment reminders, loan updates, KYC document collection' },
  { icon: '🏗️', title: 'Real Estate', desc: 'Property enquiries, site visit scheduling, document sharing' },
];

function WhatsAppDashboard() {
  const [tick, setTick] = useState(0);
  const [activeChat, setActiveChat] = useState(0);
  useEffect(() => { const t = setInterval(() => setTick(p => p + 1), 2500); return () => clearInterval(t); }, []);

  const chats = [
    { name: 'Rahul Sharma', msg: 'I want to book an appointment', time: '9:41', unread: 2, online: true },
    { name: 'Priya Mehta', msg: 'Thank you for the update!', time: '9:38', unread: 0, online: false },
    { name: 'Amit Kumar', msg: 'What are your timings?', time: '9:30', unread: 1, online: true },
    { name: 'Bulk Campaign', msg: '2,847 delivered · 94% read', time: '9:00', unread: 0, online: false },
  ];

  const messages = [
    { from: 'user', text: 'Hi, I want to book an appointment', time: '9:40' },
    { from: 'bot', text: '👋 Hello! I\'m your virtual assistant. Please choose:\n1️⃣ Book Appointment\n2️⃣ Check Status\n3️⃣ Talk to Agent', time: '9:40' },
    { from: 'user', text: '1', time: '9:41' },
    { from: 'bot', text: '✅ Great! Please share your preferred date & time.', time: '9:41' },
  ];

  return (
    <motion.div initial={{ opacity: 0, x: 60 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.3 }}
      className="relative w-full rounded-2xl overflow-hidden shadow-2xl select-none"
      style={{ background: '#f8fafc', border: '1px solid #e2e8f0', fontSize: 11 }}>
      <div className="flex items-center gap-1.5 px-3 py-2 bg-white border-b border-slate-200">
        <span className="w-2.5 h-2.5 rounded-full bg-red-400"/><span className="w-2.5 h-2.5 rounded-full bg-yellow-400"/><span className="w-2.5 h-2.5 rounded-full bg-green-400"/>
        <div className="flex-1 mx-3 bg-slate-100 rounded px-2 py-0.5 text-[9px] text-slate-400">wa.digigrownex.com/inbox</div>
        <Bell className="w-3 h-3 text-slate-400"/>
      </div>
      <div className="flex" style={{ minHeight: 340 }}>
        {/* Sidebar */}
        <div className="w-24 shrink-0 bg-white border-r border-slate-200 flex flex-col py-2 px-2">
          {[{icon:LayoutDashboard,label:'Dashboard',active:true},{icon:MessageCircle,label:'Inbox'},{icon:Send,label:'Campaigns'},{icon:Bot,label:'Chatbot'},{icon:Users,label:'Contacts'},{icon:BarChart3,label:'Analytics'},{icon:Settings,label:'Settings'}].map((item,i)=>{
            const Icon=item.icon;
            return <div key={i} className={`flex items-center gap-1.5 px-2 py-1.5 rounded-lg mb-0.5 ${item.active?'bg-green-500/10 text-green-600 font-bold':'text-slate-500'}`}><Icon className="w-3 h-3 shrink-0"/><span className="text-[9px] truncate">{item.label}</span></div>;
          })}
        </div>
        {/* Chat list */}
        <div className="w-32 shrink-0 border-r border-slate-200 bg-white flex flex-col">
          <div className="px-2 py-2 border-b border-slate-100">
            <div className="text-[9px] font-bold text-slate-700">Conversations</div>
          </div>
          {chats.map((chat,i)=>(
            <div key={i} onClick={()=>setActiveChat(i)} className={`px-2 py-2 border-b border-slate-50 cursor-pointer ${activeChat===i?'bg-green-50':''}`}>
              <div className="flex items-center justify-between mb-0.5">
                <div className="flex items-center gap-1">
                  <div className="w-4 h-4 rounded-full bg-green-500/20 flex items-center justify-center text-[7px] font-bold text-green-600">{chat.name[0]}</div>
                  {chat.online && <span className="w-1.5 h-1.5 rounded-full bg-green-500"/>}
                </div>
                {chat.unread>0 && <span className="w-3.5 h-3.5 rounded-full bg-green-500 text-white text-[7px] flex items-center justify-center font-bold">{chat.unread}</span>}
              </div>
              <div className="text-[8px] font-semibold text-slate-700 truncate">{chat.name}</div>
              <div className="text-[7px] text-slate-400 truncate">{chat.msg}</div>
            </div>
          ))}
        </div>
        {/* Chat window */}
        <div className="flex-1 flex flex-col overflow-hidden">
          <div className="flex items-center gap-2 px-3 py-2 bg-green-600 text-white">
            <div className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center text-[8px] font-bold">{chats[activeChat].name[0]}</div>
            <div><div className="text-[9px] font-bold">{chats[activeChat].name}</div><div className="text-[7px] opacity-80">{chats[activeChat].online?'Online':'Last seen recently'}</div></div>
            <div className="ml-auto flex items-center gap-1.5">
              <Phone className="w-3 h-3 opacity-80"/><Settings className="w-3 h-3 opacity-80"/>
            </div>
          </div>
          <div className="flex-1 p-2 overflow-hidden flex flex-col gap-1.5" style={{background:'#e5ddd5'}}>
            {messages.map((msg,i)=>(
              <motion.div key={i} initial={{opacity:0,y:5}} animate={{opacity:1,y:0}} transition={{delay:0.6+i*0.15}}
                className={`flex ${msg.from==='user'?'justify-end':'justify-start'}`}>
                <div className={`max-w-[80%] px-2 py-1.5 rounded-lg text-[8px] leading-relaxed whitespace-pre-line ${msg.from==='user'?'bg-green-100 text-slate-700':'bg-white text-slate-700'}`}>
                  {msg.text}
                  <div className="text-[6px] text-slate-400 text-right mt-0.5">{msg.time}</div>
                </div>
              </motion.div>
            ))}
            <motion.div animate={{opacity:[0,1,0]}} transition={{duration:1.5,repeat:Infinity,delay:2}} className="flex justify-start">
              <div className="bg-white px-2 py-1.5 rounded-lg text-[8px] text-slate-400">typing...</div>
            </motion.div>
          </div>
          <div className="flex items-center gap-1.5 px-2 py-1.5 bg-white border-t border-slate-200">
            <div className="flex-1 bg-slate-100 rounded-full px-2 py-1 text-[8px] text-slate-400">Type a message...</div>
            <div className="w-5 h-5 rounded-full bg-green-500 flex items-center justify-center"><Send className="w-2.5 h-2.5 text-white"/></div>
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

export default function WhatsAppAutomationPage() {
  return (
    <div className="pt-28 pb-24 min-h-screen">
      <section className="relative overflow-hidden mb-20">
        <div className="absolute inset-0 hero-dots opacity-30"/>
        <div className="absolute top-0 left-0 w-[500px] h-[500px] rounded-full blur-[140px] pointer-events-none -translate-x-1/2 -translate-y-1/4" style={{background:'radial-gradient(ellipse, rgba(52,204,50,0.12) 0%, transparent 70%)'}}/>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div initial={{opacity:0,x:-40}} animate={{opacity:1,x:0}} transition={{duration:0.7}}>
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent/10 border border-accent/20 mb-6">
                <MessageSquare className="w-3.5 h-3.5 text-accent"/>
                <span className="text-xs font-bold text-accent uppercase tracking-widest">WhatsApp Product</span>
              </div>
              <h1 className="text-4xl sm:text-5xl font-bold font-display mb-5 leading-tight" style={{color:'var(--fg)'}}>
                WhatsApp Business<br/><span className="gradient-text">Automation Platform</span>
              </h1>
              <p className="text-base mb-8 leading-relaxed max-w-lg" style={{color:'var(--muted-fg)'}}>
                Automate customer communication, run bulk campaigns, deploy AI chatbots, and manage your entire team's WhatsApp inbox — all powered by the official WhatsApp Business API with 98% message open rates.
              </p>
              <div className="flex flex-wrap gap-2 mb-8">
                {['Official API','AI Chatbot','Bulk Campaigns','Multi-Agent Inbox','Drip Automation','CRM Integration'].map((tag,i)=>(
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
                {[['98%','Open Rate'],['24/7','AI Chatbot'],['Official','WhatsApp API']].map(([val,label],i)=>(
                  <div key={i}><div className="text-xl font-bold gradient-text">{val}</div><div className="text-xs" style={{color:'var(--muted-fg)'}}>{label}</div></div>
                ))}
              </div>
            </motion.div>
            <div className="relative">
              <motion.div initial={{opacity:0,y:-10}} animate={{opacity:1,y:0}} transition={{delay:1.2}} className="absolute -top-4 -left-4 z-10 flex items-center gap-2 px-3 py-2 rounded-xl shadow-lg text-xs font-semibold" style={{background:'var(--surface-0)',border:'1px solid var(--border)',color:'var(--fg)'}}>
                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"/>Live Inbox
              </motion.div>
              <WhatsAppDashboard/>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
        <section>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold font-display mb-4" style={{color:'var(--fg)'}}>Why WhatsApp Automation?</h2>
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

        {/* Use Cases */}
        <section>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold font-display mb-4" style={{color:'var(--fg)'}}>Works for Every Industry</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {useCases.map((uc,i)=>(
              <motion.div key={i} initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{delay:i*0.08}}
                className="glass-card rounded-xl p-6 flex items-start gap-4">
                <span className="text-3xl">{uc.icon}</span>
                <div>
                  <h3 className="font-bold mb-1" style={{color:'var(--fg)'}}>{uc.title}</h3>
                  <p className="text-sm" style={{color:'var(--muted-fg)'}}>{uc.desc}</p>
                </div>
              </motion.div>
            ))}
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
              {['Official WhatsApp Business API — no bans','98% message open rate vs 20% email','AI chatbot handles queries 24/7','Bulk campaigns with personalisation','Multi-agent shared team inbox','Drip sequences for lead nurturing','CRM & webhook integrations','GDPR-compliant opt-in management'].map((adv,i)=>(
                <motion.div key={i} initial={{opacity:0,x:20}} whileInView={{opacity:1,x:0}} viewport={{once:true}} transition={{delay:i*0.06}} className="flex items-center gap-3 px-4 py-3 rounded-xl" style={{background:'var(--surface-2)'}}>
                  <CheckCircle2 className="w-4 h-4 text-accent shrink-0"/>
                  <span className="text-sm font-medium" style={{color:'var(--fg)'}}>{adv}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="text-center">
          <h2 className="text-3xl font-bold font-display mb-4" style={{color:'var(--fg)'}}>Start Automating Your WhatsApp Today</h2>
          <p className="text-base mb-8 max-w-xl mx-auto" style={{color:'var(--muted-fg)'}}>Get a personalised demo and see how WhatsApp automation can transform your customer communication.</p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link href="/contact" className="glow-button px-8 py-3 rounded-xl font-bold text-sm" style={{color:'#fff'}}>Book Free Demo</Link>
            <Link href="/contact" className="px-8 py-3 rounded-xl font-semibold text-sm transition-colors" style={{border:'1px solid var(--border)',background:'var(--surface-1)',color:'var(--fg)'}}>Contact Sales</Link>
          </div>
        </section>
      </div>
    </div>
  );
}
