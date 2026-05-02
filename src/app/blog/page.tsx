import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, Calendar, User, Tag } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Blog | digigrownex',
  description: 'Insights on digital marketing, SEO trends, web development, and exponential brand growth from the digigrownex experts.',
};

const featured = {
  tag: 'GROWTH STRATEGY',
  date: 'October 12, 2024',
  title: 'Beyond Basic SEO: The Rise of Comprehensive Digital Dominance.',
  excerpt: 'Explore how digigrownex is redefining typical marketing funnels by integrating hyper-localized SEO with data-driven social advertising to create explosive ROI.',
  author: 'Marketing Team',
};

const posts = [
  {
    tag: 'WEB DEVELOPMENT',
    date: 'October 08, 2024',
    title: 'Optimizing Core Web Vitals for E-Commerce.',
    excerpt: 'A deep dive into our custom development practices and how we achieved 40% faster load speeds across our client portfolios.',
    author: 'Jordan Lind',
    color: 'from-blue-900 to-blue-800',
  },
  {
    tag: 'LOCAL SEO',
    date: 'October 01, 2024',
    title: 'The Architecture of Local Search.',
    excerpt: 'Traffic isn\'t just numbers, it\'s local customers. Learn how our precise SEO strategies put your business at the top of Google Maps.',
    author: 'Sandra Chen',
    color: 'from-amber-900 to-amber-800',
  },
  {
    tag: 'PAID ADS',
    date: 'September 28, 2024',
    title: 'Balancing Ad Spend with Conversion Integrity.',
    excerpt: 'As we push the boundaries of paid advertising, we must reason rigidly about what converts. Our stance on ethical, high-conversion PPC campaigns.',
    author: 'Nita Sundright',
    color: 'from-teal-900 to-teal-800',
  },
  {
    tag: 'BRANDING',
    date: 'September 15, 2024',
    title: 'Designing for Trust: The Modern UI.',
    excerpt: 'The psychological story behind visual identity and why we choose to embrace specific color palettes to maximize SaaS credibility.',
    author: 'Elena Grar',
    color: 'from-purple-900 to-purple-800',
  },
  {
    tag: 'UPDATES',
    date: 'September 02, 2024',
    title: 'Introducing digigrownex Analytics 2.0.',
    excerpt: 'A look at the seismic shifts we\'re making in our reporting dashboard, giving our clients real-time collaborative insights on their ad spend.',
    author: 'Tech Admin',
    color: 'from-green-900 to-green-800',
  },
  {
    tag: 'COMPANY',
    date: 'August 14, 2024',
    title: 'Scaling Global Digital Campaigns.',
    excerpt: 'How we\'re expanding our marketing efforts to bring low-CPA advertising to every major market across the globe.',
    author: 'Adrian Bron',
    color: 'from-indigo-900 to-indigo-800',
  },
];

export default function BlogPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-16 lg:pt-40 lg:pb-20 overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-30" />
        <div className="absolute top-40 left-1/4 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[120px]" />

        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-[10px] uppercase tracking-[0.25em] text-accent mb-4">THE DIGIGROWNEX EXPERTISE</p>
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold font-display tracking-tight text-slate-900 dark:text-white leading-[1.1]">
            Insights on the<br />
            <span className="text-accent italic">Future of Digital.</span>
          </h1>
        </div>
      </section>

      {/* Featured Post */}
      <section className="pb-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="glass-card rounded-2xl overflow-hidden lg:grid lg:grid-cols-2 gap-0">
            {/* Image placeholder */}
            <div className="aspect-[4/3] lg:aspect-auto bg-gradient-to-br from-amber-900/40 via-surface-2 to-surface-1 relative overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-40 h-40 rounded-full bg-accent/10 blur-3xl" />
              </div>
              <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-surface-0/80 to-transparent" />
            </div>

            {/* Content */}
            <div className="p-8 lg:p-10 flex flex-col justify-center">
              <div className="flex items-center gap-3 mb-4">
                <span className="px-2.5 py-1 rounded-full bg-accent/10 text-accent text-[10px] font-semibold uppercase tracking-wider">
                  {featured.tag}
                </span>
                <span className="text-xs text-muted">{featured.date}</span>
              </div>
              <h2 className="text-2xl lg:text-3xl font-bold text-white mb-4 leading-tight">
                {featured.title}
              </h2>
              <p className="text-sm text-muted leading-relaxed mb-6">{featured.excerpt}</p>
              <Link href="#" className="inline-flex items-center gap-2 text-sm font-medium text-accent hover:text-accent-light transition-colors">
                Read the full story <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Posts Grid */}
      <section className="pb-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {posts.map((post, i) => (
              <Link key={i} href="#" className="group glass-card rounded-2xl overflow-hidden">
                {/* Image */}
                <div className={`aspect-[16/10] bg-gradient-to-br ${post.color} relative`}>
                  <div className="absolute inset-0 bg-surface-0/20" />
                </div>
                {/* Content */}
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-[10px] uppercase tracking-[0.15em] text-accent/70">{post.tag}</span>
                    <span className="text-[10px] text-muted">{post.date}</span>
                  </div>
                  <h3 className="text-base font-bold text-white mb-2 group-hover:text-accent transition-colors leading-snug">
                    {post.title}
                  </h3>
                  <p className="text-sm text-muted leading-relaxed line-clamp-2">{post.excerpt}</p>
                  <div className="flex items-center gap-2 mt-4 pt-4 border-t border-slate-200 dark:border-white/10">
                    <div className="w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center text-[8px] font-bold text-accent">
                      {post.author.split(' ').map(n => n[0]).join('')}
                    </div>
                    <span className="text-xs text-slate-500 hover:text-slate-700 dark:text-slate-400">{post.author}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* Load More */}
          <div className="text-center mt-12">
            <button className="px-6 py-3 rounded-full text-sm font-medium text-white border border-border hover:bg-surface-1 transition-colors">
              Load More Insights
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
