import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, ExternalLink, Search, Plug } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Integrations',
  description: 'Connect Caps AI with Instagram, Facebook, Twitter, LinkedIn and 200+ other platforms.',
};

const categories = ['All', 'Social Media', 'Productivity', 'Analytics', 'Communication'];

const integrations = [
  { name: 'Instagram', desc: 'Publish posts, stories, and reels directly. Auto-generate captions optimized for the IG algorithm.', category: 'Social Media', color: 'from-pink-500/20 to-purple-500/20', initial: 'IG' },
  { name: 'Facebook', desc: 'Manage pages and groups. Schedule posts, engage with comments, and track page insights.', category: 'Social Media', color: 'from-blue-500/20 to-blue-600/20', initial: 'FB' },
  { name: 'Twitter / X', desc: 'Tweet, thread, and schedule. AI-optimized character counts and hashtag suggestions.', category: 'Social Media', color: 'from-sky-400/20 to-sky-500/20', initial: 'X' },
  { name: 'LinkedIn', desc: 'Professional content publishing. Optimize for B2B engagement and thought leadership.', category: 'Social Media', color: 'from-blue-600/20 to-blue-700/20', initial: 'LI' },
  { name: 'Pinterest', desc: 'Create and schedule pins. AI-powered image descriptions and board management.', category: 'Social Media', color: 'from-red-500/20 to-red-600/20', initial: 'PI' },
  { name: 'YouTube', desc: 'Manage video uploads, thumbnails, descriptions, and schedule premieres.', category: 'Social Media', color: 'from-red-600/20 to-red-700/20', initial: 'YT' },
  { name: 'TikTok', desc: 'Schedule short-form video content with trending sound and hashtag suggestions.', category: 'Social Media', color: 'from-slate-500/20 to-slate-600/20', initial: 'TK' },
  { name: 'Slack', desc: 'Get notifications and approve posts directly from Slack channels.', category: 'Communication', color: 'from-purple-500/20 to-purple-600/20', initial: 'SL' },
  { name: 'Notion', desc: 'Sync your content calendar with Notion databases for seamless planning.', category: 'Productivity', color: 'from-neutral-400/20 to-neutral-500/20', initial: 'NO' },
  { name: 'Google Analytics', desc: 'Pull website traffic data to correlate social media efforts with conversions.', category: 'Analytics', color: 'from-yellow-500/20 to-green-500/20', initial: 'GA' },
  { name: 'Zapier', desc: 'Connect Caps AI with 5000+ apps through Zapier automations.', category: 'Productivity', color: 'from-green-400/20 to-green-500/20', initial: 'ZP' },
  { name: 'HubSpot', desc: 'Sync leads and social engagement data with your CRM pipeline.', category: 'Analytics', color: 'from-green-500/20 to-green-600/20', initial: 'HS' },
];

export default function IntegrationsPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-16 lg:pt-40 lg:pb-20 overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-30" />
        <div className="absolute top-32 right-1/4 w-[500px] h-[400px] bg-accent/6 rounded-full blur-[120px]" />

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent/10 border border-accent/20 mb-8">
            <Plug className="w-3.5 h-3.5 text-accent" />
            <span className="text-xs font-medium text-accent">200+ Integrations</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-6">
            Your tools,{' '}
            <span className="gradient-text">connected</span>
          </h1>
          <p className="text-lg text-muted max-w-2xl mx-auto">
            Caps AI connects with the platforms you already use. Publish, analyze, and collaborate — all from one hub.
          </p>

          {/* Search */}
          <div className="mt-10 max-w-md mx-auto relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted" />
            <input
              type="text"
              placeholder="Search integrations..."
              className="w-full pl-11 pr-4 py-3 rounded-full bg-surface-1 border border-border text-sm text-white placeholder:text-muted focus:border-accent focus:ring-0"
            />
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 flex-wrap justify-center">
            {categories.map((cat, i) => (
              <button
                key={cat}
                className={`px-4 py-2 rounded-full text-sm transition-colors ${
                  i === 0
                    ? 'bg-accent text-white'
                    : 'bg-surface-1 text-muted border border-border hover:bg-surface-2 hover:text-white'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Grid */}
      <section className="py-12 pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {integrations.map((item, i) => (
              <div key={i} className="glass-card rounded-2xl p-6 group cursor-pointer">
                <div className="flex items-start justify-between mb-4">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center`}>
                    <span className="text-sm font-bold text-white/70">{item.initial}</span>
                  </div>
                  <ExternalLink className="w-4 h-4 text-muted opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <h3 className="text-base font-semibold text-white mb-2">{item.name}</h3>
                <p className="text-sm text-muted leading-relaxed">{item.desc}</p>
                <span className="inline-block mt-4 text-[10px] uppercase tracking-[0.15em] text-accent/60 bg-accent/5 px-2 py-1 rounded">
                  {item.category}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 border-t border-border relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-accent/5 rounded-full blur-[100px]" />
        <div className="relative max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Don&apos;t see your tool?</h2>
          <p className="text-muted mb-8">Request an integration or connect any app through our API and Zapier.</p>
          <div className="flex items-center justify-center gap-4">
            <Link href="/help-center" className="glow-button px-6 py-3 text-sm font-semibold text-white rounded-full inline-flex items-center gap-2">
              Request Integration <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
