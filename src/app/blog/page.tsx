'use client';

import Link from 'next/link';
import { ArrowRight, Calendar, Clock, User, Sparkles, TrendingUp } from 'lucide-react';
import { motion } from 'framer-motion';
import { useState } from 'react';

export default function BlogPage() {
  const [filter, setFilter] = useState('all');

  const categories = [
    { id: 'all', label: 'All Posts' },
    { id: 'marketing', label: 'Digital Marketing' },
    { id: 'development', label: 'Web Development' },
    { id: 'design', label: 'Design' },
    { id: 'seo', label: 'SEO' },
  ];

  const blogPosts = [
    {
      title: '10 Digital Marketing Trends to Watch in 2024',
      category: 'marketing',
      excerpt: 'Discover the latest trends shaping the digital marketing landscape and how to leverage them for your business growth.',
      author: 'Swapnil Patil',
      date: 'May 1, 2024',
      readTime: '5 min read',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800',
      featured: true,
    },
    {
      title: 'The Complete Guide to Local SEO for Small Businesses',
      category: 'seo',
      excerpt: 'Learn how to optimize your online presence for local search and attract more customers in your area.',
      author: 'Priya Sharma',
      date: 'April 28, 2024',
      readTime: '8 min read',
      image: 'https://images.unsplash.com/photo-1432888622747-4eb9a8f2c293?auto=format&fit=crop&q=80&w=800',
      featured: false,
    },
    {
      title: 'How to Build a High-Converting Landing Page',
      category: 'development',
      excerpt: 'Essential elements and best practices for creating landing pages that convert visitors into customers.',
      author: 'Rahul Mehta',
      date: 'April 25, 2024',
      readTime: '6 min read',
      image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?auto=format&fit=crop&q=80&w=800',
      featured: false,
    },
    {
      title: 'The Psychology of Color in Branding',
      category: 'design',
      excerpt: 'Understanding how colors influence consumer behavior and how to choose the right palette for your brand.',
      author: 'Anjali Desai',
      date: 'April 22, 2024',
      readTime: '7 min read',
      image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&q=80&w=800',
      featured: false,
    },
    {
      title: 'Social Media Marketing Strategies That Actually Work',
      category: 'marketing',
      excerpt: 'Proven tactics to increase engagement, grow your following, and drive conversions on social media platforms.',
      author: 'Swapnil Patil',
      date: 'April 19, 2024',
      readTime: '9 min read',
      image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&q=80&w=800',
      featured: false,
    },
    {
      title: 'Website Speed Optimization: A Developer\'s Guide',
      category: 'development',
      excerpt: 'Technical strategies to improve your website loading speed and enhance user experience.',
      author: 'Rahul Mehta',
      date: 'April 16, 2024',
      readTime: '10 min read',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800',
      featured: false,
    },
    {
      title: 'Content Marketing: Creating Value for Your Audience',
      category: 'marketing',
      excerpt: 'How to develop a content strategy that attracts, engages, and converts your target audience.',
      author: 'Anjali Desai',
      date: 'April 13, 2024',
      readTime: '6 min read',
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=800',
      featured: false,
    },
    {
      title: 'Understanding Google Analytics 4: A Beginner\'s Guide',
      category: 'seo',
      excerpt: 'Navigate the new Google Analytics interface and leverage data to make informed marketing decisions.',
      author: 'Priya Sharma',
      date: 'April 10, 2024',
      readTime: '8 min read',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800',
      featured: false,
    },
    {
      title: 'Mobile-First Design: Why It Matters in 2024',
      category: 'design',
      excerpt: 'The importance of mobile-first approach in web design and how to implement it effectively.',
      author: 'Rahul Mehta',
      date: 'April 7, 2024',
      readTime: '5 min read',
      image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&q=80&w=800',
      featured: false,
    },
  ];

  const filteredPosts = filter === 'all' 
    ? blogPosts 
    : blogPosts.filter(p => p.category === filter);

  const featuredPost = blogPosts.find(p => p.featured);
  const regularPosts = filteredPosts.filter(p => !p.featured);

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="hero-bg relative pt-32 pb-20 lg:pt-40 lg:pb-28 min-h-[60vh] flex items-center">
        <div className="hero-dots" />
        <div className="hero-glow" />
        <div className="hero-glow-secondary" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent/10 border border-accent/20 mb-8"
            >
              <Sparkles className="w-4 h-4 text-accent" />
              <span className="text-xs font-medium text-accent">Our Blog</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-7xl font-bold tracking-tight leading-[1.1] font-display mb-6"
            >
              Insights & <span className="gradient-text">Resources</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-base sm:text-lg text-muted max-w-2xl mx-auto leading-relaxed"
            >
              Expert tips, industry insights, and actionable strategies to help your business grow online.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-12 relative" style={{ borderTop: '1px solid var(--border)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setFilter(cat.id)}
                className={`px-6 py-2.5 rounded-md text-sm font-medium transition-all ${
                  filter === cat.id
                    ? 'glow-button text-white'
                    : 'text-muted-foreground hover:text-white'
                }`}
                style={
                  filter !== cat.id
                    ? { border: '1px solid var(--border)', background: 'var(--surface-1)' }
                    : {}
                }
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Post */}
      {filter === 'all' && featuredPost && (
        <section className="py-16 relative overflow-hidden">
          <div className="section-glow section-glow-top" />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="glass-card rounded-2xl overflow-hidden group hover:border-accent/30 transition-all"
            >
              <div className="grid lg:grid-cols-2 gap-0">
                <div
                  className="relative aspect-video lg:aspect-auto min-h-[300px] lg:min-h-[400px] bg-cover bg-center"
                  style={{ backgroundImage: `url(${featuredPost.image})` }}
                >
                  <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-black/80 via-black/40 to-transparent" />
                  <div className="absolute top-6 left-6">
                    <span className="px-3 py-1 rounded-full text-xs font-bold bg-accent text-white flex items-center gap-1.5">
                      <TrendingUp className="w-3 h-3" />
                      Featured
                    </span>
                  </div>
                </div>
                
                <div className="p-8 lg:p-12 flex flex-col justify-center">
                  <div className="flex items-center gap-4 text-xs text-muted mb-4">
                    <span className="flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5" />
                      {featuredPost.date}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5" />
                      {featuredPost.readTime}
                    </span>
                  </div>
                  
                  <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4 group-hover:text-accent transition-colors">
                    {featuredPost.title}
                  </h2>
                  
                  <p className="text-muted mb-6 leading-relaxed">
                    {featuredPost.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center text-accent">
                        <User className="w-5 h-5" />
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-white">{featuredPost.author}</p>
                        <p className="text-xs text-muted">Author</p>
                      </div>
                    </div>
                    
                    <Link
                      href="#"
                      className="inline-flex items-center gap-2 text-sm font-semibold text-accent hover:text-accent-light transition-colors"
                    >
                      Read More
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      )}

      {/* Blog Grid */}
      <section className="py-16 relative overflow-hidden">
        <div className="section-glow section-glow-left" />
        <div className="section-glow section-glow-right" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {regularPosts.map((post, i) => (
              <motion.article
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                className="glass-card rounded-2xl overflow-hidden group hover:border-accent/30 transition-all"
              >
                <div
                  className="relative aspect-video bg-cover bg-center"
                  style={{ backgroundImage: `url(${post.image})` }}
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 rounded-full text-xs font-semibold bg-accent/90 text-white capitalize">
                      {post.category}
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center gap-4 text-xs text-muted mb-3">
                    <span className="flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5" />
                      {post.date}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5" />
                      {post.readTime}
                    </span>
                  </div>
                  
                  <h3 className="text-lg font-bold text-white mb-3 group-hover:text-accent transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                  
                  <p className="text-sm text-muted mb-4 line-clamp-2">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between pt-4 border-t border-border/40">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center text-accent">
                        <User className="w-4 h-4" />
                      </div>
                      <span className="text-xs font-medium text-white">{post.author}</span>
                    </div>
                    
                    <Link
                      href="#"
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-accent hover:text-accent-light transition-colors"
                    >
                      Read
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-24 relative overflow-hidden">
        <div className="section-glow section-glow-top" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/5 rounded-full blur-[120px]" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight font-display">
            Stay Updated
          </h2>
          <p className="text-lg text-muted max-w-2xl mx-auto mb-10">
            Subscribe to our newsletter and get the latest insights delivered to your inbox.
          </p>
          <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-md border text-white transition-all focus:outline-none focus:ring-2 focus:ring-accent/50"
              style={{ background: 'var(--input-bg)', borderColor: 'var(--border)' }}
            />
            <button
              type="submit"
              className="glow-button px-6 py-3 text-sm font-semibold rounded-md whitespace-nowrap"
              style={{ color: '#fff' }}
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </main>
  );
}
