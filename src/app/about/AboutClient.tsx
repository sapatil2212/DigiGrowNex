'use client';

import React, { useEffect, useRef, useState } from 'react';
import {
  Search, Map as MapIcon, Zap, ShieldCheck, Wrench, Rocket, BarChart, Lightbulb, Handshake,
  Telescope, Target, Brain, Sparkles, TrendingUp, Palette, Lock, Globe,
  Facebook, Instagram, Linkedin
} from 'lucide-react';

/* ─────────────────────────────────────────────
   useInView — fires once when element enters viewport
   ───────────────────────────────────────────── */
function useInView(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          obs.disconnect();
        }
      },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);

  return { ref, visible };
}

/* ─────────────────────────────────────────────
   DATA
   ───────────────────────────────────────────── */
const steps = [
  {
    num: '01',
    title: 'Discovery & Consultation',
    desc: "We start with understanding your brand, vision, challenges, and objectives. Through detailed meetings and audits, we identify what success looks like for your business.",
    tags: ['Initial Consultation', 'Brand Analysis', 'Vision Alignment'],
    icon: <Search className="w-6 h-6 text-white" />,
  },
  {
    num: '02',
    title: 'Strategy Development',
    desc: "Our team creates a tailored digital roadmap based on your unique goals. Whether it's a marketing strategy, website plan, or campaign blueprint—we map it out with clarity and purpose.",
    tags: ['Digital Roadmap', 'Marketing Strategy', 'Campaign Planning'],
    icon: <MapIcon className="w-6 h-6 text-white" />,
  },
  {
    num: '03',
    title: 'Creative & Technical Execution',
    desc: 'Our experts get to work—designing interfaces, writing content, building websites, or launching ad campaigns—ensuring every element reflects your brand and drives results.',
    tags: ['UI/UX Design', 'Content Creation', 'Development Implementation'],
    icon: <Zap className="w-6 h-6 text-white" />,
  },
  {
    num: '04',
    title: 'Testing & Quality Assurance',
    desc: 'Before any launch, we rigorously test websites, applications, and campaigns for responsiveness, functionality, speed, and cross-platform compatibility. No bugs, no surprises—just a polished, high-performing outcome.',
    tags: ['Functional Testing', 'Responsive Checks', 'Performance Optimization'],
    icon: <ShieldCheck className="w-6 h-6 text-white" />,
  },
  {
    num: '05',
    title: 'Review & Optimization',
    desc: 'We walk you through the deliverables and implement feedback. Then we fine-tune for performance, SEO, user experience, and brand consistency.',
    tags: ['Feedback Implementation', 'SEO Refinement', 'Performance Tuning'],
    icon: <Wrench className="w-6 h-6 text-white" />,
  },
  {
    num: '06',
    title: 'Launch & Go Live',
    desc: "With all systems ready, we go live! Whether it's a website, a campaign, or a video project, our team ensures a smooth rollout with zero downtime or errors.",
    tags: ['Deployment', 'Migration', 'Zero-Downtime Transition'],
    icon: <Rocket className="w-6 h-6 text-white" />,
  },
  {
    num: '07',
    title: 'Analyze, Support & Evolve',
    desc: 'Post-launch, we monitor performance, share detailed analytics, and offer support to help you adapt and grow. Our goal is long-term impact—not just one-time success.',
    tags: ['Performance Analytics', 'Ongoing Support', 'Growth Strategy'],
    icon: <BarChart className="w-6 h-6 text-white" />,
  },
  {
    num: '08',
    title: 'Continuous Innovation',
    desc: 'We stay ahead of digital trends to ensure your solutions remain cutting-edge and effective in a rapidly changing landscape.',
    tags: ['Technology Updates', 'Market Research', 'Feature Expansion'],
    icon: <Lightbulb className="w-6 h-6 text-white" />,
  },
  {
    num: '09',
    title: 'Long-term Partnership',
    desc: 'We believe in building lasting relationships with our clients, providing ongoing value through consistent collaboration and strategic guidance.',
    tags: ['Strategic Consulting', 'Regular Check-ins', 'Proactive Solutions'],
    icon: <Handshake className="w-6 h-6 text-white" />,
  },
];

const coreItems = [
  {
    label: 'Our Vision',
    icon: <Telescope className="w-6 h-6 text-[#34CC32]" />,
    text: 'To be the most trusted digital transformation partner for businesses worldwide, driving innovation through cutting-edge technology and creative solutions.',
  },
  {
    label: 'Our Mission',
    icon: <Target className="w-6 h-6 text-[#34CC32]" />,
    text: 'Empower businesses with digital excellence by delivering measurable results through data-driven strategies, exceptional user experiences, and future-proof technology.',
  },
  {
    label: 'Our Approach',
    icon: <Brain className="w-6 h-6 text-[#34CC32]" />,
    text: 'We combine strategic thinking with agile execution, focusing on ROI-driven solutions that align with your business objectives and market demands.',
  },
  {
    label: 'Our Promise',
    icon: <Sparkles className="w-6 h-6 text-[#34CC32]" />,
    text: 'Transparency, accountability, and continuous improvement in every project. We measure success by your success.',
  },
];

/* ─────────────────────────────────────────────
   AnimSection — fade-in-up on scroll
   ───────────────────────────────────────────── */
function AnimSection({
  children,
  className = '',
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  const { ref, visible } = useInView();
  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(40px)',
        transition: `opacity 0.7s ease ${delay}ms, transform 0.7s ease ${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}

/* ─────────────────────────────────────────────
   StepCard
   ───────────────────────────────────────────── */
function StepCard({ step, index }: { step: (typeof steps)[0]; index: number }) {
  const { ref, visible } = useInView(0.1);
  const isEven = index % 2 === 0;

  return (
    <div
      ref={ref}
      className={`relative flex items-start gap-6 md:gap-10`}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateX(0)' : `translateX(${isEven ? '-40px' : '40px'})`,
        transition: `opacity 0.6s ease ${index * 60}ms, transform 0.6s ease ${index * 60}ms`,
      }}
    >
      {/* Timeline column */}
      <div className="relative flex-shrink-0 flex flex-col items-center">
        <div
          className="w-14 h-14 rounded-2xl flex items-center justify-center text-xl z-10 relative"
          style={{
            background: 'linear-gradient(135deg, var(--accent), var(--accent-dark))',
            boxShadow: '0 0 20px rgba(249,115,22,0.35)',
          }}
        >
          {step.icon}
        </div>
        {index < steps.length - 1 && (
          <div
            className="w-px mt-2 flex-1"
            style={{
              minHeight: 32,
              background: 'linear-gradient(to bottom, rgba(249,115,22,0.5), rgba(249,115,22,0.05))',
            }}
          />
        )}
      </div>

      {/* Content card */}
      <div
        className="flex-1 mb-8 rounded-2xl p-6 relative overflow-hidden group"
        style={{
          background: 'var(--card-bg)',
          border: '1px solid var(--glass-border)',
          backdropFilter: 'blur(16px)',
          transition: 'border-color 0.3s ease, box-shadow 0.3s ease',
        }}
        onMouseEnter={(e) => {
          const el = e.currentTarget as HTMLDivElement;
          el.style.borderColor = 'rgba(249,115,22,0.35)';
          el.style.boxShadow = '0 0 30px rgba(249,115,22,0.08)';
        }}
        onMouseLeave={(e) => {
          const el = e.currentTarget as HTMLDivElement;
          el.style.borderColor = 'var(--glass-border)';
          el.style.boxShadow = 'none';
        }}
      >
        {/* Top accent line */}
        <div
          className="absolute top-0 left-0 right-0 h-px"
          style={{ background: 'linear-gradient(90deg, transparent, rgba(249,115,22,0.4), transparent)' }}
        />

        {/* Header */}
        <div className="flex items-center gap-3 mb-3">
          <span
            className="text-xs font-bold px-2.5 py-1 rounded-full"
            style={{
              background: 'rgba(249,115,22,0.12)',
              color: 'var(--accent)',
              border: '1px solid rgba(249,115,22,0.25)',
            }}
          >
            Step-{step.num}
          </span>
          <h3 className="text-base md:text-lg font-bold" style={{ color: 'var(--fg)' }}>
            {step.title}
          </h3>
        </div>

        <p className="text-sm leading-relaxed mb-4" style={{ color: 'var(--muted-fg)' }}>
          {step.desc}
        </p>

        <div className="flex flex-wrap gap-2">
          {step.tags.map((tag) => (
            <span
              key={tag}
              className="text-xs flex items-center gap-1 px-3 py-1 rounded-full"
              style={{
                background: 'var(--surface-2)',
                color: 'var(--muted-fg)',
                border: '1px solid var(--border)',
              }}
            >
              <span style={{ color: 'var(--accent)' }}>+</span> {tag}
            </span>
          ))}
        </div>

        {/* Hover glow overlay */}
        <div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
          style={{ background: 'radial-gradient(ellipse at 50% 0%, rgba(249,115,22,0.06), transparent 60%)' }}
        />
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────
   MAIN COMPONENT
   ───────────────────────────────────────────── */
export default function AboutClient() {
  const [count, setCount] = useState({ projects: 0, clients: 0, years: 0, satisfaction: 0 });
  const { ref: statsRef, visible: statsVisible } = useInView(0.3);

  useEffect(() => {
    if (!statsVisible) return;
    const targets = { projects: 250, clients: 180, years: 8, satisfaction: 100 };
    const duration = 1800;
    const start = Date.now();
    const timer = setInterval(() => {
      const elapsed = Date.now() - start;
      const progress = Math.min(elapsed / duration, 1);
      const ease = 1 - Math.pow(1 - progress, 3);
      setCount({
        projects: Math.round(targets.projects * ease),
        clients: Math.round(targets.clients * ease),
        years: Math.round(targets.years * ease),
        satisfaction: Math.round(targets.satisfaction * ease),
      });
      if (progress >= 1) clearInterval(timer);
    }, 16);
    return () => clearInterval(timer);
  }, [statsVisible]);

  return (
    <>
      {/* ══════════════════════════════
          HERO
         ══════════════════════════════ */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-28 pb-16">
        {/* Background layers */}
        <div className="hero-dots" />
        <div className="hero-glow" />
        <div className="hero-glow-secondary" />

        {/* Ambient orbs */}
        <div
          className="absolute w-[32rem] h-[32rem] rounded-full pointer-events-none"
          style={{
            top: '5%',
            left: '-8%',
            background: 'radial-gradient(circle, rgba(249,115,22,0.07), transparent 70%)',
            animation: 'float 9s ease-in-out infinite',
          }}
        />
        <div
          className="absolute w-72 h-72 rounded-full pointer-events-none"
          style={{
            bottom: '8%',
            right: '-4%',
            background: 'radial-gradient(circle, rgba(234,88,12,0.09), transparent 70%)',
            animation: 'float 11s ease-in-out infinite reverse',
          }}
        />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* ── Left: Text ── */}
            <div>
              <AnimSection delay={0}>
                <span
                  className="inline-flex items-center gap-2 text-xs font-semibold px-4 py-2 rounded-full mb-6"
                  style={{
                    background: 'rgba(249,115,22,0.12)',
                    color: 'var(--accent)',
                    border: '1px solid rgba(249,115,22,0.25)',
                  }}
                >
                  <span className="w-2 h-2 rounded-full bg-[#34CC32] animate-pulse inline-block" />
                  About digigrownex
                </span>
              </AnimSection>

              <AnimSection delay={100}>
                <h1
                  className="text-5xl md:text-7xl font-black font-display leading-[1.05] mb-6"
                  style={{ color: 'var(--fg)' }}
                >
                  Innovating{' '}
                  <span className="gradient-text">Digital</span>
                  <br />
                  <span className="gradient-text">Success</span>
                </h1>
              </AnimSection>

              <AnimSection delay={200}>
                <p className="text-base md:text-lg leading-relaxed mb-4" style={{ color: 'var(--muted-fg)', maxWidth: 560 }}>
                  At{' '}
                  <strong style={{ color: 'var(--accent)' }}>digigrownex</strong>, we believe digital
                  transformation isn't just about being online—it's about standing out, staying ahead, and
                  sparking real growth. We are a full-service digital marketing agency driven by creativity,
                  powered by data, and committed to delivering measurable results.
                </p>
                <p className="text-base leading-relaxed mb-8" style={{ color: 'var(--muted-fg)', maxWidth: 560 }}>
                  Founded on the principle of smart, ethical, and effective marketing, we combine next-gen
                  technology with human-centered strategies to help businesses of all sizes thrive. Whether
                  you're a startup aiming to make your mark or an established brand looking to scale, our team
                  crafts tailor-made solutions that fit your goals—and exceed them.
                </p>
              </AnimSection>

              <AnimSection delay={300}>
                <div className="flex flex-wrap gap-4">
                  <a href="#process" className="glow-button px-6 py-3 rounded-xl font-semibold text-white text-sm">
                    Our Process ↓
                  </a>
                  <a
                    href="/contact"
                    className="px-6 py-3 rounded-xl font-semibold text-sm"
                    style={{
                      border: '1px solid var(--border-light)',
                      color: 'var(--fg)',
                      background: 'var(--surface-1)',
                      transition: 'all 0.3s',
                    }}
                  >
                    Get In Touch
                  </a>
                </div>
              </AnimSection>
            </div>

            {/* ── Right: Image ── */}
            <AnimSection delay={150} className="relative">
              <div className="relative">
                {/* Ambient blob */}
                <div
                  className="absolute -inset-6 rounded-3xl pointer-events-none -z-10"
                  style={{ background: 'radial-gradient(ellipse, rgba(249,115,22,0.13), transparent 65%)' }}
                />

                <div
                  className="relative rounded-3xl overflow-hidden"
                  style={{ boxShadow: '0 0 80px rgba(249,115,22,0.15), 0 30px 60px rgba(0,0,0,0.4)' }}
                >
                  <img
                    src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=1000"
                    alt="Female student with laptop working on digital strategy"
                    className="w-full h-full object-cover"
                    style={{ aspectRatio: '4/5' }}
                  />
                  <div
                    className="absolute inset-0"
                    style={{ background: 'linear-gradient(to top, rgba(10,10,10,0.65), transparent 55%)' }}
                  />
                  {/* Caption overlay */}
                  <div
                    className="absolute bottom-6 left-6 right-6 px-5 py-4 rounded-2xl"
                    style={{
                      background: 'rgba(10,10,10,0.75)',
                      backdropFilter: 'blur(16px)',
                      border: '1px solid rgba(255,255,255,0.08)',
                    }}
                  >
                    <p className="text-sm font-semibold text-white mb-0.5">Full-Service Digital Agency</p>
                    <p className="text-xs" style={{ color: 'var(--muted-fg)' }}>Creativity × Data × Results</p>
                  </div>
                </div>

                {/* Floating stat chips */}
                <div
                  className="absolute -top-4 -right-4 px-4 py-3 rounded-xl text-center"
                  style={{
                    background: 'var(--surface-1)',
                    border: '1px solid var(--border)',
                    boxShadow: '0 8px 32px rgba(0,0,0,0.3)',
                    animation: 'badgeFloat 5s ease-in-out infinite',
                  }}
                >
                  <div className="text-xl font-black gradient-text">8+</div>
                  <div className="text-xs" style={{ color: 'var(--muted-fg)' }}>Years</div>
                </div>
                <div
                  className="absolute -bottom-4 -left-4 px-4 py-3 rounded-xl text-center"
                  style={{
                    background: 'var(--surface-1)',
                    border: '1px solid var(--border)',
                    boxShadow: '0 8px 32px rgba(0,0,0,0.3)',
                    animation: 'badgeFloat 7s ease-in-out infinite 1s',
                  }}
                >
                  <div className="text-xl font-black gradient-text">250+</div>
                  <div className="text-xs" style={{ color: 'var(--muted-fg)' }}>Projects</div>
                </div>
              </div>
            </AnimSection>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════
          STATS BAR
         ══════════════════════════════ */}
      <section ref={statsRef} className="py-16 relative overflow-hidden">
        <div className="section-divider mb-16" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { value: `${count.projects}+`, label: 'Projects Delivered' },
              { value: `${count.clients}+`, label: 'Happy Clients' },
              { value: `${count.years}+`, label: 'Years Experience' },
              { value: `${count.satisfaction}%`, label: 'Client Satisfaction' },
            ].map((s, i) => (
              <div
                key={s.label}
                className="text-center p-6 rounded-2xl relative overflow-hidden"
                style={{
                  background: 'var(--card-bg)',
                  border: '1px solid var(--glass-border)',
                  backdropFilter: 'blur(16px)',
                  opacity: statsVisible ? 1 : 0,
                  transform: statsVisible ? 'translateY(0)' : 'translateY(30px)',
                  transition: `opacity 0.6s ease ${i * 100}ms, transform 0.6s ease ${i * 100}ms`,
                }}
              >
                <div className="text-4xl font-black gradient-text mb-1">{s.value}</div>
                <div className="text-sm" style={{ color: 'var(--muted-fg)' }}>{s.label}</div>
                <div
                  className="absolute bottom-0 left-0 right-0 h-px"
                  style={{ background: 'linear-gradient(90deg, transparent, rgba(249,115,22,0.5), transparent)' }}
                />
              </div>
            ))}
          </div>
        </div>
        <div className="section-divider mt-16" />
      </section>

      {/* ══════════════════════════════
          PROCESS SECTION
         ══════════════════════════════ */}
      <section id="process" className="py-20 relative overflow-hidden scroll-mt-24">
        <div className="grid-pattern absolute inset-0 opacity-50 pointer-events-none" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <AnimSection className="text-center mb-16">
            <span
              className="inline-block text-xs font-bold px-4 py-1.5 rounded-full mb-4"
              style={{ background: 'rgba(249,115,22,0.12)', color: 'var(--accent)', border: '1px solid rgba(249,115,22,0.25)' }}
            >
              OUR SOLUTION PROCESS
            </span>
            <h2 className="text-4xl md:text-5xl font-black font-display mb-4" style={{ color: 'var(--fg)' }}>
              Steps We <span className="gradient-text">Follow</span>
            </h2>
            <p className="text-base max-w-xl mx-auto" style={{ color: 'var(--muted-fg)' }}>
              Offer a wide range of services to establish and enhance your online presence.
            </p>
          </AnimSection>

          {/* Timeline */}
          <div className="max-w-3xl mx-auto">
            {steps.map((step, i) => (
              <StepCard key={step.num} step={step} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════
          WHY YOU NEED US
         ══════════════════════════════ */}
      <section className="py-20 relative overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: 'radial-gradient(ellipse at 40% 50%, rgba(249,115,22,0.05), transparent 65%)' }}
        />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Image */}
            <AnimSection delay={0} className="relative order-2 lg:order-1">
              <div
                className="relative rounded-3xl overflow-hidden"
                style={{ boxShadow: '0 0 60px rgba(249,115,22,0.1), 0 24px 50px rgba(0,0,0,0.35)' }}
              >
                <img
                  src="https://images.unsplash.com/photo-1581092334651-ddf26d9a09d0?auto=format&fit=crop&q=80&w=900"
                  alt="Female student with laptop — digital growth"
                  className="w-full object-cover"
                  style={{ aspectRatio: '4/3' }}
                />
                <div
                  className="absolute inset-0"
                  style={{ background: 'linear-gradient(135deg, rgba(249,115,22,0.12), transparent 55%)' }}
                />
              </div>
              {/* Decorative rings */}
              <div
                className="absolute -top-8 -left-8 w-72 h-72 rounded-full border pointer-events-none -z-10"
                style={{ borderColor: 'rgba(249,115,22,0.08)' }}
              />
              <div
                className="absolute -bottom-6 -right-6 w-48 h-48 rounded-full pointer-events-none -z-10"
                style={{ background: 'rgba(249,115,22,0.05)' }}
              />
            </AnimSection>

            {/* Text */}
            <div className="order-1 lg:order-2">
              <AnimSection delay={0}>
                <span
                  className="inline-block text-xs font-bold px-4 py-1.5 rounded-full mb-4"
                  style={{ background: 'rgba(249,115,22,0.12)', color: 'var(--accent)', border: '1px solid rgba(249,115,22,0.25)' }}
                >
                  WHY YOU NEED US
                </span>
                <h2 className="text-4xl md:text-5xl font-black font-display mb-6" style={{ color: 'var(--fg)' }}>
                  Why You <span className="gradient-text">Need Us?</span>
                </h2>
              </AnimSection>

              <AnimSection delay={100}>
                <p className="text-base leading-relaxed mb-4" style={{ color: 'var(--muted-fg)' }}>
                  Imagine having the perfect product, just like a seed ready to bloom. But without the right
                  environment—sunlight, water, and care—it will never grow. The same goes for your brand in
                  today's fast-paced digital landscape.
                </p>
                <p className="text-base leading-relaxed mb-6" style={{ color: 'var(--muted-fg)' }}>
                  Simply existing online isn't enough. You need{' '}
                  <strong style={{ color: 'var(--fg)' }}>strategic nurturing</strong>—consistent, creative, and
                  data-backed digital marketing—to truly thrive.
                </p>
                <p
                  className="text-lg font-semibold italic px-4 py-3 rounded-xl"
                  style={{
                    color: 'var(--accent)',
                    background: 'rgba(249,115,22,0.08)',
                    border: '1px solid rgba(249,115,22,0.2)',
                  }}
                >
                  "At digigrownex, we don't just promote your business — we grow it."
                </p>
              </AnimSection>

              <AnimSection delay={200}>
                <div className="grid grid-cols-2 gap-4 mt-8">
                  {[
                    { icon: <TrendingUp className="w-5 h-5 text-[#34CC32]" />, label: 'Data-Driven Growth' },
                    { icon: <Palette className="w-5 h-5 text-[#34CC32]" />, label: 'Creative Excellence' },
                    { icon: <Lock className="w-5 h-5 text-[#34CC32]" />, label: 'Ethical Marketing' },
                    { icon: <Globe className="w-5 h-5 text-[#34CC32]" />, label: 'Full-Service Agency' },
                  ].map((item) => (
                    <div
                      key={item.label}
                      className="flex items-center gap-3 p-4 rounded-xl"
                      style={{
                        background: 'var(--surface-1)',
                        border: '1px solid var(--border)',
                        transition: 'all 0.3s',
                      }}
                    >
                      <span className="text-xl">{item.icon}</span>
                      <span className="text-sm font-medium" style={{ color: 'var(--fg)' }}>
                        {item.label}
                      </span>
                    </div>
                  ))}
                </div>
              </AnimSection>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════
          OUR CORE
         ══════════════════════════════ */}
      <section className="py-20 relative overflow-hidden">
        <div className="section-divider mb-20" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimSection className="text-center mb-16">
            <span
              className="inline-block text-xs font-bold px-4 py-1.5 rounded-full mb-4"
              style={{ background: 'rgba(249,115,22,0.12)', color: 'var(--accent)', border: '1px solid rgba(249,115,22,0.25)' }}
            >
              OUR CORE
            </span>
            <h2 className="text-4xl md:text-5xl font-black font-display mb-4" style={{ color: 'var(--fg)' }}>
              The Foundation of{' '}
              <span className="gradient-text">Everything We Do</span>
            </h2>
            <p className="text-base max-w-xl mx-auto" style={{ color: 'var(--muted-fg)' }}>
              At digigrownex
            </p>
          </AnimSection>

          <div className="grid md:grid-cols-2 gap-6">
            {coreItems.map((item, i) => (
              <AnimSection key={item.label} delay={i * 80}>
                <div
                  className="group relative p-7 rounded-2xl overflow-hidden cursor-default h-full"
                  style={{
                    background: 'var(--card-bg)',
                    border: '1px solid var(--glass-border)',
                    backdropFilter: 'blur(16px)',
                    transition: 'all 0.35s ease',
                  }}
                  onMouseEnter={(e) => {
                    const el = e.currentTarget as HTMLDivElement;
                    el.style.borderColor = 'rgba(249,115,22,0.4)';
                    el.style.transform = 'translateY(-4px)';
                    el.style.boxShadow = '0 20px 40px rgba(0,0,0,0.2), 0 0 30px rgba(249,115,22,0.08)';
                  }}
                  onMouseLeave={(e) => {
                    const el = e.currentTarget as HTMLDivElement;
                    el.style.borderColor = 'var(--glass-border)';
                    el.style.transform = 'translateY(0)';
                    el.style.boxShadow = 'none';
                  }}
                >
                  {/* Corner accent blob */}
                  <div
                    className="absolute -top-8 -right-8 w-32 h-32 rounded-full pointer-events-none opacity-50"
                    style={{ background: 'radial-gradient(circle, rgba(249,115,22,0.15), transparent 70%)' }}
                  />

                  <div className="flex items-start gap-4 relative z-10">
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl flex-shrink-0"
                      style={{
                        background: 'rgba(249,115,22,0.12)',
                        border: '1px solid rgba(249,115,22,0.25)',
                      }}
                    >
                      {item.icon}
                    </div>
                    <div>
                      <h3 className="text-lg font-bold mb-2" style={{ color: 'var(--fg)' }}>
                        {item.label}
                      </h3>
                      <p className="text-sm leading-relaxed" style={{ color: 'var(--muted-fg)' }}>
                        {item.text}
                      </p>
                    </div>
                  </div>

                  {/* Bottom highlight */}
                  <div
                    className="absolute bottom-0 left-8 right-8 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{ background: 'linear-gradient(90deg, transparent, rgba(249,115,22,0.6), transparent)' }}
                  />
                </div>
              </AnimSection>
            ))}
          </div>
        </div>
        <div className="section-divider mt-20" />
      </section>

      {/* ══════════════════════════════
          CTA
         ══════════════════════════════ */}
      <section className="py-24 relative overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: 'radial-gradient(ellipse at 50% 100%, rgba(249,115,22,0.06), transparent 70%)' }}
        />
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <AnimSection>
            <div
              className="relative p-12 md:p-20 rounded-[2rem] overflow-hidden"
              style={{
                background: 'rgba(15, 15, 15, 0.4)',
                border: '1px solid rgba(249,115,22,0.2)',
                backdropFilter: 'blur(20px)',
                boxShadow: '0 0 60px rgba(249,115,22,0.05)',
              }}
            >
              {/* Floating Icons */}
              {/* Facebook - Top Left */}
              <div
                className="absolute hidden md:flex items-center justify-center rounded-xl animate-float"
                style={{
                  top: '25%', left: '10%', width: '48px', height: '48px',
                  background: 'rgba(249,115,22,0.05)', border: '1px solid rgba(249,115,22,0.3)',
                  animationDelay: '0s'
                }}
              >
                <Facebook className="w-6 h-6 text-[#34CC32]" />
              </div>

              {/* Instagram - Bottom Left */}
              <div
                className="absolute hidden md:flex items-center justify-center rounded-xl animate-float"
                style={{
                  bottom: '25%', left: '18%', width: '48px', height: '48px',
                  background: 'rgba(249,115,22,0.05)', border: '1px solid rgba(249,115,22,0.3)',
                  animationDelay: '1s'
                }}
              >
                <Instagram className="w-6 h-6 text-[#34CC32]" />
              </div>

              {/* X / Twitter - Mid Right */}
              <div
                className="absolute hidden md:flex items-center justify-center rounded-xl animate-float"
                style={{
                  top: '35%', right: '15%', width: '48px', height: '48px',
                  background: 'rgba(249,115,22,0.05)', border: '1px solid rgba(249,115,22,0.3)',
                  animationDelay: '2s'
                }}
              >
                <div className="text-[#34CC32] font-bold text-xl leading-none font-display mb-0.5">X</div>
              </div>

              {/* LinkedIn - Bottom Right */}
              <div
                className="absolute hidden md:flex items-center justify-center rounded-xl animate-float"
                style={{
                  bottom: '30%', right: '8%', width: '48px', height: '48px',
                  background: 'rgba(249,115,22,0.05)', border: '1px solid rgba(249,115,22,0.3)',
                  animationDelay: '3s'
                }}
              >
                <Linkedin className="w-6 h-6 text-[#34CC32]" />
              </div>

              {/* Content */}
              <div className="max-w-2xl mx-auto relative z-10">
                <h2 className="text-4xl md:text-5xl font-black font-display mb-6 tracking-tight" style={{ color: 'var(--fg)' }}>
                  Unlock Your Social Media<br />
                  Success with AI
                </h2>
                <p className="text-base md:text-lg mb-10 leading-relaxed" style={{ color: 'var(--muted-fg)' }}>
                  Unlock the power of AI-driven content creation and scheduling to
                  elevate your social media game.<br className="hidden md:block" />
                  Experience seamless integration, insightful analytics, and more.
                </p>

                <div className="flex justify-center">
                  <a href="/contact" className="glow-button px-8 py-3.5 rounded-lg font-bold text-white text-sm">
                    Get Started - It&apos;s Free
                  </a>
                </div>
              </div>
            </div>
          </AnimSection>
        </div>
      </section>
    </>
  );
}
