'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { Menu, X, ChevronDown, Sun, Moon, Globe, Code, Smartphone, PenTool, MapPin, MousePointerClick, Share2, Search, Phone, Activity, Hotel, Layout, MessageSquare } from 'lucide-react';
import { useTheme } from './ThemeProvider';

const navLinks = [
  { label: 'HOME', href: '/' },
  { label: 'ABOUT', href: '/about' },
  { label: 'PORTFOLIO', href: '/portfolio' },
  { label: 'CONTACT', href: '/contact' },
  { label: 'BLOGS', href: '/blog' },
];

const productsMenu = [
  { label: 'Health Care Solution', href: '/products/health-care', icon: Activity },
  { label: 'Hotel Management', href: '/products/hotel-management', icon: Hotel },
  { label: 'CMS System', href: '/products/cms-system', icon: Layout },
  { label: 'WhatsApp Automation', href: '/products/whatsapp-automation', icon: MessageSquare },
];

const servicesMenu = {
  col1: {
    title: 'Development & Design',
    links: [
      { label: 'Websites', href: '/services/websites', icon: Globe },
      { label: 'Custom Softwares', href: '/services/custom-software', icon: Code },
      { label: 'App Development', href: '/services/app-development', icon: Smartphone },
      { label: 'Branding', href: '/services/branding', icon: PenTool }
    ]
  },
  col2: {
    title: 'Marketing & SEO',
    links: [
      { label: 'Local SEO', href: '/services/local-seo', icon: MapPin },
      { label: 'Google Ads', href: '/services/google-ads', icon: MousePointerClick },
      { label: 'Social Media Ads', href: '/services/social-media-ads', icon: Share2 },
      { label: 'Search Engine Optimisation', href: '/services/seo', icon: Search }
    ]
  }
};

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'glass shadow-lg'
          : 'bg-transparent'
      }`}
      style={{ borderBottom: scrolled ? '1px solid var(--glass-border)' : 'none' }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-18">
          {/* Logo */}
          <Link href="/" className="flex items-center group">
            <Image
              src="/images/logo/digigrownex-logo.png"
              alt="digigrownex"
              width={140}
              height={40}
              className="logo-dark h-10 w-auto object-contain"
              priority
            />
            <Image
              src="/images/logo/digigrownex-logo-light.png"
              alt="digigrownex"
              width={140}
              height={40}
              className="logo-light h-10 w-auto object-contain"
              priority
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            <Link
              href="/"
              className="px-4 py-2 text-sm text-muted-foreground hover:text-slate-900 dark:hover:text-white transition-colors rounded-lg hover:bg-slate-100 dark:hover:bg-white/5 uppercase tracking-wide font-medium"
            >
              HOME
            </Link>
            <Link
              href="/about"
              className="px-4 py-2 text-sm text-muted-foreground hover:text-slate-900 dark:hover:text-white transition-colors rounded-lg hover:bg-slate-100 dark:hover:bg-white/5 uppercase tracking-wide font-medium"
            >
              ABOUT
            </Link>

            {/* Services Dropdown */}
            <div
              className="relative group h-full flex items-center"
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}
            >
              <button className="flex items-center gap-1 px-4 py-2 text-sm text-muted-foreground hover:text-slate-900 dark:hover:text-white transition-colors rounded-lg hover:bg-slate-100 dark:hover:bg-white/5 uppercase tracking-wide font-medium">
                SERVICES
                <ChevronDown className={`w-3.5 h-3.5 transition-transform ${servicesOpen ? 'rotate-180' : ''}`} />
              </button>

              {servicesOpen && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 mt-0 pt-2 w-[800px] z-50 animate-fade-in group-hover:block">
                  <div className="bg-white dark:bg-[#0a0a0a] border border-slate-200 dark:border-white/10 rounded-2xl p-6 shadow-2xl flex gap-8">
                   <div className="flex-1 grid grid-cols-2 gap-8">
                     <div>
                       <h4 className="text-[11px] font-bold text-accent uppercase tracking-wider mb-5">{servicesMenu.col1.title}</h4>
                       <ul className="space-y-4">
                         {servicesMenu.col1.links.map(({ label, href, icon: Icon }) => (
                           <li key={label}>
                             <Link href={href} className="flex items-center gap-3 text-sm font-semibold text-slate-700 dark:text-slate-300 hover:text-accent dark:hover:text-accent transition-colors">
                               <div className="w-8 h-8 rounded-lg bg-slate-100 dark:bg-white/5 flex items-center justify-center text-accent">
                                 <Icon className="w-4 h-4" />
                               </div>
                               {label}
                             </Link>
                           </li>
                         ))}
                       </ul>
                     </div>
                     <div>
                       <h4 className="text-[11px] font-bold text-accent uppercase tracking-wider mb-5">{servicesMenu.col2.title}</h4>
                       <ul className="space-y-4">
                         {servicesMenu.col2.links.map(({ label, href, icon: Icon }) => (
                           <li key={label}>
                             <Link href={href} className="flex items-center gap-3 text-sm font-semibold text-slate-700 dark:text-slate-300 hover:text-accent dark:hover:text-accent transition-colors">
                               <div className="w-8 h-8 rounded-lg bg-slate-100 dark:bg-white/5 flex items-center justify-center text-accent">
                                 <Icon className="w-4 h-4" />
                               </div>
                               {label}
                             </Link>
                           </li>
                         ))}
                       </ul>
                     </div>
                   </div>
                   <div className="w-[280px] shrink-0 rounded-xl overflow-hidden relative">
                     <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=600" alt="Digital Marketing Solution" className="w-full h-full object-cover" />
                     <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex flex-col justify-end p-6">
                       <h3 className="text-white font-bold text-lg leading-tight mb-2">Scale Your Digital Presence</h3>
                       <p className="text-white/80 text-xs leading-relaxed">Transform your business with our data-driven growth strategies.</p>
                     </div>
                   </div>
                  </div>
                </div>
              )}
            </div>

            {/* Products Dropdown */}
            <div
              className="relative group h-full flex items-center"
              onMouseEnter={() => setProductsOpen(true)}
              onMouseLeave={() => setProductsOpen(false)}
            >
              <button className="flex items-center gap-1 px-4 py-2 text-sm text-muted-foreground hover:text-slate-900 dark:hover:text-white transition-colors rounded-lg hover:bg-slate-100 dark:hover:bg-white/5 uppercase tracking-wide font-medium">
                PRODUCTS
                <ChevronDown className={`w-3.5 h-3.5 transition-transform ${productsOpen ? 'rotate-180' : ''}`} />
              </button>

              {productsOpen && (
                <div className="absolute top-full left-0 mt-0 pt-2 w-[280px] z-50 animate-fade-in group-hover:block">
                  <div className="bg-white dark:bg-[#0a0a0a] border border-slate-200 dark:border-white/10 rounded-2xl p-4 shadow-2xl">
                    <ul className="space-y-2">
                      {productsMenu.map(({ label, href, icon: Icon }) => (
                        <li key={label}>
                          <Link href={href} className="flex items-center gap-3 p-2 text-sm font-semibold text-slate-700 dark:text-slate-300 hover:text-accent dark:hover:text-accent hover:bg-slate-50 dark:hover:bg-white/5 rounded-xl transition-all">
                            <div className="w-8 h-8 rounded-lg bg-slate-100 dark:bg-white/5 flex items-center justify-center text-accent">
                              <Icon className="w-4 h-4" />
                            </div>
                            {label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}
            </div>

            <Link
              href="/portfolio"
              className="px-4 py-2 text-sm text-muted-foreground hover:text-slate-900 dark:hover:text-white transition-colors rounded-lg hover:bg-slate-100 dark:hover:bg-white/5 uppercase tracking-wide font-medium"
            >
              PORTFOLIO
            </Link>
            <Link
              href="/contact"
              className="px-4 py-2 text-sm text-muted-foreground hover:text-slate-900 dark:hover:text-white transition-colors rounded-lg hover:bg-slate-100 dark:hover:bg-white/5 uppercase tracking-wide font-medium"
            >
              CONTACT
            </Link>
            <Link
              href="/blog"
              className="px-4 py-2 text-sm text-muted-foreground hover:text-slate-900 dark:hover:text-white transition-colors rounded-lg hover:bg-slate-100 dark:hover:bg-white/5 uppercase tracking-wide font-medium"
            >
              BLOGS
            </Link>
          </nav>

          {/* Desktop Actions */}
          <div className="hidden lg:flex items-center gap-3">
            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="theme-toggle"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? (
                <Sun className="w-4 h-4" />
              ) : (
                <Moon className="w-4 h-4" />
              )}
            </button>

            <Link
              href="tel:7745868073"
              className="glow-button px-5 py-2.5 text-sm font-bold rounded-full flex items-center gap-2"
              style={{ color: '#fff' }}
            >
              <Phone className="w-4 h-4" />
              7745868073
            </Link>
          </div>

          {/* Mobile Actions */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              onClick={toggleTheme}
              className="theme-toggle"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? (
                <Sun className="w-4 h-4" />
              ) : (
                <Moon className="w-4 h-4" />
              )}
            </button>
            <button
              className="p-2 text-muted-foreground hover:text-white transition-colors"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden glass animate-fade-in" style={{ borderTop: '1px solid var(--glass-border)' }}>
          <div className="max-w-7xl mx-auto px-4 py-4 space-y-1">
              <Link href="/" className="block px-4 py-3 text-sm text-muted-foreground hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-white/5 rounded-lg transition-colors font-medium" onClick={() => setMobileOpen(false)}>HOME</Link>
              <Link href="/about" className="block px-4 py-3 text-sm text-muted-foreground hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-white/5 rounded-lg transition-colors font-medium" onClick={() => setMobileOpen(false)}>ABOUT</Link>
              <button
                className="flex items-center justify-between w-full px-4 py-3 text-sm text-muted-foreground hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-white/5 rounded-lg transition-colors font-medium"
                onClick={() => setServicesOpen(!servicesOpen)}
              >
                SERVICES
                <ChevronDown className={`w-4 h-4 transition-transform ${servicesOpen ? 'rotate-180' : ''}`} />
              </button>
              {servicesOpen && (
                <div className="pl-6 space-y-1 mt-1">
                  {[...servicesMenu.col1.links, ...servicesMenu.col2.links].map(({ label, href }) => (
                    <Link
                      key={label}
                      href={href}
                      className="block px-4 py-2.5 text-[13px] text-muted-foreground hover:text-accent transition-colors"
                      onClick={() => setMobileOpen(false)}
                    >
                      {label}
                    </Link>
                  ))}
                </div>
              )}

              {/* Products Mobile */}
              <button
                className="flex items-center justify-between w-full px-4 py-3 text-sm text-muted-foreground hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-white/5 rounded-lg transition-colors font-medium"
                onClick={() => setProductsOpen(!productsOpen)}
              >
                PRODUCTS
                <ChevronDown className={`w-4 h-4 transition-transform ${productsOpen ? 'rotate-180' : ''}`} />
              </button>
              {productsOpen && (
                <div className="pl-6 space-y-1 mt-1">
                  {productsMenu.map(({ label, href }) => (
                    <Link
                      key={label}
                      href={href}
                      className="block px-4 py-2.5 text-[13px] text-muted-foreground hover:text-accent transition-colors"
                      onClick={() => setMobileOpen(false)}
                    >
                      {label}
                    </Link>
                  ))}
                </div>
              )}

              <Link href="/portfolio" className="block px-4 py-3 text-sm text-muted-foreground hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-white/5 rounded-lg transition-colors font-medium" onClick={() => setMobileOpen(false)}>PORTFOLIO</Link>
              <Link href="/contact" className="block px-4 py-3 text-sm text-muted-foreground hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-white/5 rounded-lg transition-colors font-medium" onClick={() => setMobileOpen(false)}>CONTACT</Link>
              <Link href="/blog" className="block px-4 py-3 text-sm text-muted-foreground hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-white/5 rounded-lg transition-colors font-medium" onClick={() => setMobileOpen(false)}>BLOGS</Link>
            
            <div className="pt-4 flex flex-col gap-2 px-4">
              <Link
                href="tel:7745868073"
                className="flex items-center justify-center gap-2 glow-button px-4 py-3 text-sm font-bold rounded-full"
                style={{ color: '#fff' }}
                onClick={() => setMobileOpen(false)}
              >
                <Phone className="w-4 h-4" />
                7745868073
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
