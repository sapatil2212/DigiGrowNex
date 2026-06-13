'use client';

import React, { useState, useEffect, useRef, use } from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Globe, Code, Smartphone, PenTool, MapPin, MousePointerClick, 
  Share2, Search, ArrowRight, BarChart3, Users, Clock, 
  HelpCircle, Check, Star, Calendar, ChevronDown, CheckCircle2,
  Sparkles, CheckSquare, Layers, DollarSign, Activity, FileText
} from 'lucide-react';

// Define service details type schema
interface ServiceItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  icon: React.ComponentType<any>;
  stats: { value: string; label: string }[];
  tabTitle1: string;
  tabTitle2: string;
  features: { title: string; description: string }[];
  process: { step: string; title: string; description: string }[];
  faqs: { q: string; a: string }[];
  calculator: {
    title: string;
    subtitle: string;
    basePrice: number;
    options: {
      id: string;
      label: string;
      type: 'select' | 'checkbox' | 'radio';
      choices?: { label: string; price: number }[];
      price?: number; // for checkboxes
    }[];
  };
}

// Full 8 Service Database
const serviceDatabase: Record<string, ServiceItem> = {
  'websites': {
    id: 'websites',
    title: 'Websites & Web App Development',
    subtitle: 'Stunning, high-conversion websites custom-engineered for your enterprise.',
    description: 'We design and build fast, secure, and SEO-friendly websites. From conversion-driven landing pages to complex corporate portals, we focus on responsiveness, user experience, and measurable business growth.',
    icon: Globe,
    stats: [
      { value: '150+', label: 'Websites Launched' },
      { value: '99.9%', label: 'Average Core Web Vitals Uptime' },
      { value: '3.2x', label: 'Average Client Conversion Boost' }
    ],
    tabTitle1: 'Core Capabilities',
    tabTitle2: 'Launch Checklist',
    features: [
      { title: 'Responsive UI/UX design', description: 'Custom-designed layouts optimized for all screens, matching your unique brand guidelines.' },
      { title: 'Performance Optimization', description: 'Super-fast load speeds using modern static generation (Next.js/React) and CDN caching.' },
      { title: 'CMS Integrations', description: 'Easily manage contents via Sanity, Strapi, or headless WordPress dashboards.' },
      { title: 'Enterprise Security', description: 'SSL, server hardening, custom firewalls, and protection against web vulnerabilities.' }
    ],
    process: [
      { step: '01', title: 'UX Wireframing', description: 'We map user journeys and create interactive visual prototypes for approval.' },
      { step: '02', title: 'Agile Coding', description: 'We construct clean, component-based codebases prioritizing speed.' },
      { step: '03', title: 'SEO Audit & Polish', description: 'We embed schema markup, optimized meta titles, and test speed metrics.' },
      { step: '04', title: 'Launch & Handoff', description: 'Deploy to cloud hosting and provide full training guides for your team.' }
    ],
    faqs: [
      { q: 'How long does a standard corporate website build take?', a: 'Typically, a corporate website takes between 3 to 5 weeks from initial design wireframes to final deployment, depending on content depth and integrations.' },
      { q: 'Will my website be mobile-friendly and optimized for Google search?', a: 'Yes. Every project we launch is mobile-responsive and follows strict SEO guidelines, including fast loading speeds, semantically-structured HTML headings, and automated sitemap generation.' },
      { q: 'Can I easily edit content on the website myself later?', a: 'Yes! We configure user-friendly CMS management systems (like Strapi or Sanity) that allow you to modify text, images, and posts instantly without touch coding.' }
    ],
    calculator: {
      title: 'Interactive Web Estimator',
      subtitle: 'Build your custom web package and check estimated pricing.',
      basePrice: 15000, // INR
      options: [
        {
          id: 'tier',
          label: 'Project Scale',
          type: 'select',
          choices: [
            { label: 'Single Landing Page (Fast Pitch)', price: 0 },
            { label: 'Standard Corporate Site (5-8 Pages)', price: 15000 },
            { label: 'E-Commerce Store / Portal (8+ Pages)', price: 45000 }
          ]
        },
        {
          id: 'cms',
          label: 'Headless CMS Dashboard integration',
          type: 'checkbox',
          price: 10000
        },
        {
          id: 'seo_setup',
          label: 'Advanced SEO & Schema Implementation',
          type: 'checkbox',
          price: 5000
        },
        {
          id: 'support',
          label: 'Monthly Hosting & Priority Support Plan',
          type: 'checkbox',
          price: 3000
        }
      ]
    }
  },
  'custom-software': {
    id: 'custom-software',
    title: 'Custom Software & SaaS Solutions',
    subtitle: 'Scalable CRM, ERP, and bespoke dashboard architectures built for modern business processes.',
    description: 'Automate legacy bottlenecks and build robust SaaS systems. We engineer custom architectures, design secure cloud workflows, and build intuitive internal dashboards tailored to your operation model.',
    icon: Code,
    stats: [
      { value: '45+', label: 'Softwares Deployed' },
      { value: '40%', label: 'Operational Speed Gain' },
      { value: '10M+', label: 'Daily API Calls Managed' }
    ],
    tabTitle1: 'Enterprise Tech Stack',
    tabTitle2: 'System Features',
    features: [
      { title: 'Custom CRM & ERP Panels', description: 'Configure dashboards that streamline client data, inventory pipelines, and staff operations.' },
      { title: 'APIs & Database Design', description: 'High-speed relational (PostgreSQL) and caching (Redis) architectures for heavy operations.' },
      { title: 'Security & Auth Protocols', description: 'Secure user authentication, multi-factor logins, encryption protocols, and audit logs.' },
      { title: 'Third-Party Sync', description: 'Integrate billing (Razorpay/Stripe), communication nodes (Twilio/WhatsApp), and tracking APIs.' }
    ],
    process: [
      { step: '01', title: 'Architecture Mapping', description: 'Define database relations, third-party hooks, and operational flowcharts.' },
      { step: '02', title: 'Database Scaffolding', description: 'Develop schema structures, server clusters, and secure system APIs.' },
      { step: '03', title: 'Frontend Assembly', description: 'Build lightning-fast React/Next.js dashboard interfaces with role controls.' },
      { step: '04', title: 'Penetration Testing', description: 'Conduct stress tests and security audits to check code vulnerability.' }
    ],
    faqs: [
      { q: 'Do we get full ownership of the source code and database?', a: 'Absolutely. Upon project completion, we hand over full ownership, licenses, and repository access to your company.' },
      { q: 'How do you handle hosting and infrastructure setup?', a: 'We set up secure VPS or cloud clusters (AWS, Google Cloud, or DigitalOcean) configured with automatic back-ups, database caching, and scaling parameters.' },
      { q: 'Do you offer ongoing post-launch software maintenance?', a: 'Yes! We offer monthly SLA contracts covering bug fixes, server monitoring, database maintenance, and incremental feature updates.' }
    ],
    calculator: {
      title: 'Custom Software Budget Estimator',
      subtitle: 'Select features to estimate SaaS and database systems pricing.',
      basePrice: 80000,
      options: [
        {
          id: 'type',
          label: 'Dashboard Structure',
          type: 'select',
          choices: [
            { label: 'Admin Tool / Custom CRM', price: 0 },
            { label: 'Multi-Tenant SaaS Portal', price: 60000 },
            { label: 'Full Enterprise ERP Network', price: 120000 }
          ]
        },
        {
          id: 'auth',
          label: 'Advanced Role-Based Access Control (RBAC)',
          type: 'checkbox',
          price: 15000
        },
        {
          id: 'api_sync',
          label: 'Integration with 3rd Party APIs',
          type: 'checkbox',
          price: 20000
        },
        {
          id: 'sla',
          label: 'Dedicated Server Setup & Deploy Assistance',
          type: 'checkbox',
          price: 15000
        }
      ]
    }
  },
  'app-development': {
    id: 'app-development',
    title: 'Cross-Platform Mobile Apps',
    subtitle: 'High-performance React Native & Flutter applications for iOS and Android.',
    description: 'We build high-retention mobile applications with native pacing, push alerts, in-app billing, geolocation services, and modern aesthetic interfaces published successfully to store marketplaces.',
    icon: Smartphone,
    stats: [
      { value: '30+', label: 'Mobile Apps Live' },
      { value: '3M+', label: 'Combined Store Downloads' },
      { value: '4.8★', label: 'Average Store Rating' }
    ],
    tabTitle1: 'App Offerings',
    tabTitle2: 'App Capabilities',
    features: [
      { title: 'Cross-Platform SDKs', description: 'Single codebase builds for iOS and Android using React Native or Flutter, lowering timeline costs.' },
      { title: 'Push Alerts Funnels', description: 'Increase daily active users with custom notification templates and target parameters.' },
      { title: 'Offline-First Syncing', description: 'Allow app features to function offline, auto-uploading logs to cloud database when back online.' },
      { title: 'In-App Transactions', description: 'Seamlessly link digital gateways, Google/Apple Pay accounts, and subscriptions.' }
    ],
    process: [
      { step: '01', title: 'Mobile Wireframes', description: 'Create high-fidelity mobile prototypes focusing on thumb-zone usability.' },
      { step: '02', title: 'React Native Coding', description: 'Integrate app logic, state managers, offline cache models, and local databases.' },
      { step: '03', title: 'Marketplace Review', description: 'Test app flows against strict Apple Store & Google Play guidelines.' },
      { step: '04', title: 'Store Deployment', description: 'Manage metadata, privacy disclosures, asset sheets, and deploy live.' }
    ],
    faqs: [
      { q: 'Should I choose React Native/Flutter or build native apps?', a: 'For 95% of businesses, cross-platform frameworks (React Native/Flutter) are ideal as they deliver indistinguishable native performance while reducing build costs by up to 50%.' },
      { q: 'Do you manage the App Store submission process?', a: 'Yes. We handle the submission setup, privacy policies, screenshot mockups, and store approval reviews for both Apple and Google.' },
      { q: 'How do you handle app updates after launch?', a: 'We set up OTA (Over-The-Air) update systems for immediate JS fixes, and support native binary updates for larger system changes.' }
    ],
    calculator: {
      title: 'Mobile App Project Estimator',
      subtitle: 'Build your target app structure to calculate budget estimate.',
      basePrice: 90000,
      options: [
        {
          id: 'platform',
          label: 'Platform Target',
          type: 'select',
          choices: [
            { label: 'Single OS (Android or iOS Only)', price: 0 },
            { label: 'Dual OS (React Native Hybrid)', price: 45000 }
          ]
        },
        {
          id: 'push',
          label: 'Advanced Push Notification System',
          type: 'checkbox',
          price: 10000
        },
        {
          id: 'gps',
          label: 'Geolocation / Real-Time Tracking SDK',
          type: 'checkbox',
          price: 15000
        },
        {
          id: 'billing',
          label: 'In-App Purchases & Subscriptions',
          type: 'checkbox',
          price: 15000
        }
      ]
    }
  },
  'branding': {
    id: 'branding',
    title: 'Brand Identity & Design',
    subtitle: 'Vibrant visuals and brand guidelines that position you as an industry leader.',
    description: 'We craft memorable corporate brand guidelines, logo variants, color sheets, custom typography structures, social template patterns, and sales presentations to make you stand out.',
    icon: PenTool,
    stats: [
      { value: '180+', label: 'Brand Packages Built' },
      { value: '15+', label: 'Markets Serviced' },
      { value: '100%', label: 'Original Bespoke Design' }
    ],
    tabTitle1: 'Brand Package',
    tabTitle2: 'Brand Strategy',
    features: [
      { title: 'Vector Logo Layouts', description: 'Logo variants (wordmarks, brandmarks, favicons) exported in scalable files.' },
      { title: 'Corporate Style Books', description: 'Comprehensive design guidelines defining color theories, margins, and typography usage.' },
      { title: 'Social Content Kits', description: 'Bespoke Figma templates for social graphics ensuring brand alignment across channels.' },
      { title: 'Business Collaterals', description: 'Designs for business cards, letterheads, invoice shells, and marketing packages.' }
    ],
    process: [
      { step: '01', title: 'Brand Discovery', description: 'We research your target demographic, competitive positioning, and style tone.' },
      { step: '02', title: 'Visual Iterations', description: 'Develop 3 distinct logo concepts and palette variants for review.' },
      { step: '03', title: 'Style System', description: 'Build font scales, secondary graphics patterns, and guidelines.' },
      { step: '04', title: 'Asset Handoff', description: 'Package vector and web formats (SVG, EPS, PNG) into organized folders.' }
    ],
    faqs: [
      { q: 'Who owns the final design files and copyright?', a: 'You do. Once the invoice is completed, we transfer all visual assets, raw vector files, and copyrights to you.' },
      { q: 'Can we modify or customize the branding system later?', a: 'Yes. We deliver all guidelines in an editable format alongside Figma design files so your design team can adapt assets.' },
      { q: 'Do you design physical marketing collaterals?', a: 'Yes. We deliver print-ready files (CMYK, correct crop margins) for brochures, business cards, boxes, and flags.' }
    ],
    calculator: {
      title: 'Branding Project Estimator',
      subtitle: 'Build your custom brand package to estimate project pricing.',
      basePrice: 8000,
      options: [
        {
          id: 'kit',
          label: 'Identity Scope',
          type: 'select',
          choices: [
            { label: 'Essential Logo Design Set', price: 0 },
            { label: 'Standard Brand Guide & Typography', price: 8000 },
            { label: 'Full Corporate Identity Package', price: 20000 }
          ]
        },
        {
          id: 'figma',
          label: '10 Custom Social Media Post Templates',
          type: 'checkbox',
          price: 5000
        },
        {
          id: 'stationery',
          label: 'Print Stationery Templates (Letterhead, Envelope, Card)',
          type: 'checkbox',
          price: 4000
        },
        {
          id: 'revisions',
          label: 'Uncapped Revisions Pack (Priority Turnaround)',
          type: 'checkbox',
          price: 5000
        }
      ]
    }
  },
  'local-seo': {
    id: 'local-seo',
    title: 'Hyper-Local SEO & GBP Growth',
    subtitle: 'Dominate local search results and drive immediate store visits in your region.',
    description: 'We optimize your Google Business Profile (GBP), build high-authority local citations, manage map review campaigns, and optimize geo-targeted keywords to rank your branches at the top of local maps.',
    icon: MapPin,
    stats: [
      { value: '300+', label: 'Store Locations Ranked' },
      { value: '150%', label: 'Average Increase in Calls' },
      { value: 'No. 1', label: 'Spot Map Placement Success' }
    ],
    tabTitle1: 'Map Optimization',
    tabTitle2: 'Citation Growth',
    features: [
      { title: 'Google Maps Optimization', description: 'Fully audit, configure, and optimize map listings to match high-volume local keywords.' },
      { title: 'Local Citation Audits', description: 'Ensure Name, Address, and Phone (NAP) uniformity across 80+ online business directories.' },
      { title: 'Review Growth Automations', description: 'Integrate QR codes and automated SMS nodes to collect positive customer reviews.' },
      { title: 'Geo-Targeted Content Pages', description: 'Deploy localized landing pages to capture search queries from surrounding suburbs.' }
    ],
    process: [
      { step: '01', title: 'Location Audit', description: 'Analyze your GBP ranking gaps and audit NAP inconsistencies.' },
      { step: '02', title: 'Directory Sync', description: 'Deploy standardized directory profiles across Justdial, Yelp, Sulekha, and more.' },
      { step: '03', title: 'Geo-Tag Optimization', description: 'Optimize profile photos and product menus with local geotags.' },
      { step: '04', title: 'Monthly Reports', description: 'Track maps views, search keywords, driving route clicks, and direct calls.' }
    ],
    faqs: [
      { q: 'How long does it take to rank in Google Maps Local Pack?', a: 'Optimized local profiles typically begin climbing maps rankings within 2 to 4 weeks. Harder niches require 3 months of consistent citations.' },
      { q: 'What does "NAP consistency" mean?', a: 'NAP stands for Name, Address, and Phone number. Google compares listings across directories; keeping these details identical is critical for local maps SEO.' },
      { q: 'Do you respond to reviews and answer customer queries on GBP?', a: 'Yes. Our local SEO packages cover responding to user reviews (applying SEO keywords) and monitoring questions.' }
    ],
    calculator: {
      title: 'Local SEO Package Estimator',
      subtitle: 'Calculate your local campaign pricing per location target.',
      basePrice: 6000,
      options: [
        {
          id: 'locations',
          label: 'Locations Target',
          type: 'select',
          choices: [
            { label: 'Single Physical Store Listing', price: 0 },
            { label: '2 to 4 Locations (Regional Package)', price: 9000 },
            { label: '5+ Locations (Enterprise Maps Plan)', price: 20000 }
          ]
        },
        {
          id: 'reviews',
          label: 'Automated Review Collection Tool Integration',
          type: 'checkbox',
          price: 3000
        },
        {
          id: 'citations',
          label: 'Bespoke 100+ Local Directory Citations Submission',
          type: 'checkbox',
          price: 4000
        },
        {
          id: 'audit',
          label: 'Spam Listing Removal (Competitor GBP Audit)',
          type: 'checkbox',
          price: 5000
        }
      ]
    }
  },
  'google-ads': {
    id: 'google-ads',
    title: 'Google PPC Search & Shopping Ads',
    subtitle: 'Capture high-intent traffic instantly and scale leads through target Google Ads.',
    description: 'We build profit-focused Search, Shopping, and Display campaigns. By targeting intent-driven search queries, optimized landing page funnels, and negative keywords, we minimize ad waste and maximize conversion ROI.',
    icon: MousePointerClick,
    stats: [
      { value: '₹5Cr+', label: 'Client Budget Managed' },
      { value: '3.8x', label: 'Average Campaign ROAS' },
      { value: '24 Hrs', label: 'Average Time to First Leads' }
    ],
    tabTitle1: 'Ad Networks',
    tabTitle2: 'Management System',
    features: [
      { title: 'Intent Keyword Audits', description: 'Bid exclusively on search phrases indicating immediate purchase interest.' },
      { title: 'Negative Keyword Filtering', description: 'Clean traffic daily, blocking irrelevant query clicks that waste budget.' },
      { title: 'A/B Ad Text Tests', description: 'Test copy variants to improve Quality Score metrics and lower CPC costs.' },
      { title: 'Conversion Tagging Audits', description: 'Configure Google Tag Manager tracking to log precise lead metrics.' }
    ],
    process: [
      { step: '01', title: 'Target Research', description: 'Evaluate search volumes, competitor bids, and set cost per lead targets.' },
      { step: '02', title: 'Campaign Build', description: 'Draft search copy, build asset structures, and set bidding strategies.' },
      { step: '03', title: 'Landing Page Test', description: 'Test speed and form tracking on mobile to optimize conversions.' },
      { step: '04', title: 'Bid Management', description: 'Monitor campaigns daily to optimize keyword bids and lower CPC.' }
    ],
    faqs: [
      { q: 'Is the Google Ads budget included in your pricing package?', a: 'No. The advertising budget is paid directly to Google. Our package covers campaign design, setup, copywriting, and daily bid optimizations.' },
      { q: 'What is a "Quality Score" and why is it important?', a: 'Quality Score is Google\'s rating of your ads\' relevance. A higher score lowers your cost-per-click (CPC) and improves ad placement.' },
      { q: 'How fast will my business start receiving phone calls/leads?', a: 'Google Ads campaigns go live immediately after approval, meaning you can start receiving targeted traffic and leads within 24 hours.' }
    ],
    calculator: {
      title: 'Google Ads Fee Estimator',
      subtitle: 'Calculate campaign management fees based on ad spend budget.',
      basePrice: 8000,
      options: [
        {
          id: 'spend',
          label: 'Monthly Ad Spend Target',
          type: 'select',
          choices: [
            { label: 'Up to ₹50,000 / month', price: 0 },
            { label: '₹50,000 to ₹1,50,000 / month', price: 7000 },
            { label: '₹1,50,000 to ₹4,00,000 / month', price: 17000 }
          ]
        },
        {
          id: 'landing_page',
          label: 'Custom High-Converting Landing Page Design',
          type: 'checkbox',
          price: 8000
        },
        {
          id: 'retargeting',
          label: 'Configure Display/YouTube Retargeting Campaigns',
          type: 'checkbox',
          price: 4000
        },
        {
          id: 'tracking',
          label: 'Advanced Google Tag Manager Custom Setup',
          type: 'checkbox',
          price: 3000
        }
      ]
    }
  },
  'social-media-ads': {
    id: 'social-media-ads',
    title: 'Meta (Facebook & Instagram) Campaigns',
    subtitle: 'Stop the scroll and scale conversions with target social ad funnels.',
    description: 'We structure scroll-stopping social campaigns. Combining high-impact ad layouts, custom lookalike audiences, retargeting funnels, and hook-based copy, we scale leads and e-commerce conversions.',
    icon: Share2,
    stats: [
      { value: '25M+', label: 'Ad Impressions' },
      { value: '4.2x', label: 'Average Creative ROI' },
      { value: '60K+', label: 'Quality Leads Generated' }
    ],
    tabTitle1: 'Campaign Formats',
    tabTitle2: 'Target Funnels',
    features: [
      { title: 'Scroll-Stopping Creatives', description: 'Design custom graphics and video hooks optimized for social feeds.' },
      { title: 'Custom Lookalike Segments', description: 'Create targeting parameters modeled after your existing top customers.' },
      { title: 'Dynamic Product Ads', description: 'Deliver personalized ads displaying products users viewed on your site.' },
      { title: 'Advanced Pixel Tracking', description: 'Install Meta Pixel and Conversions API to track user action events.' }
    ],
    process: [
      { step: '01', title: 'Creative Hook Design', description: 'Outline design directions, write copy, and script video clips.' },
      { step: '02', title: 'Target Scaffolding', description: 'Configure custom segments and structure campaign budgets.' },
      { step: '03', title: 'A/B Creative Test', description: 'Deploy design and audience variations to identify top performers.' },
      { step: '04', title: 'Scaling Budget', description: 'Scale spend on winning ad sets without raising target lead costs.' }
    ],
    faqs: [
      { q: 'Do you design the ad graphics and edit the video reels?', a: 'Yes! All social packages cover banner layout designs, hook copywriting, and professional reel video edits.' },
      { q: 'What is the Meta Conversions API (CAPI) and do we need it?', a: 'CAPI bypasses browser ad-blockers by sending conversion data directly from the server to Meta, preserving tracking accuracy.' },
      { q: 'How long do social media ad campaigns require testing?', a: 'We run A/B split tests for 4 to 7 days to evaluate creative variants and locate the lowest-cost target audience.' }
    ],
    calculator: {
      title: 'Meta Ads Package Estimator',
      subtitle: 'Calculate your social campaign management fee options.',
      basePrice: 9000,
      options: [
        {
          id: 'creative',
          label: 'Monthly Creative Output',
          type: 'select',
          choices: [
            { label: 'Standard Ad Pack (5 Graphics / 1 Video Edit)', price: 0 },
            { label: 'Growth Ad Pack (10 Graphics / 3 Video Edits)', price: 6000 },
            { label: 'Scale Ad Pack (15 Graphics / 6 Video Edits)', price: 14000 }
          ]
        },
        {
          id: 'meta_pixel',
          label: 'Meta Pixel & Conversion API (CAPI) Setup',
          type: 'checkbox',
          price: 4000
        },
        {
          id: 'funnel',
          label: 'Design Custom Multi-Stage Retargeting Funnel',
          type: 'checkbox',
          price: 5000
        },
        {
          id: 'report',
          label: 'Real-Time Performance Dashboard Access',
          type: 'checkbox',
          price: 3000
        }
      ]
    }
  },
  'seo': {
    id: 'seo',
    title: 'Organic Search Engine Optimization (SEO)',
    subtitle: 'Secure sustainable rankings and organic traffic without paying for clicks.',
    description: 'We audit and optimize your site architecture, secure high-authority backlinks, build structural content hubs, and fix page-speed bottlenecks to rank your business on Google page 1.',
    icon: Search,
    stats: [
      { value: '1.2M+', label: 'Organic Site Impressions' },
      { value: '180+', label: 'Keywords Ranked on Page 1' },
      { value: '4.5x', label: 'Average Growth in Free Traffic' }
    ],
    tabTitle1: 'On-Page & Technical',
    tabTitle2: 'Off-Page Authority',
    features: [
      { title: 'Technical Speed Audits', description: 'Optimize code, images, and files to clear Google Core Web Vitals checks.' },
      { title: 'Content Hub Structure', description: 'Write high-quality articles mapping informational search queries.' },
      { title: 'High-Authority Backlinks', description: 'Acquire links from trusted websites to grow your Domain Authority.' },
      { title: 'Semantic Schema Markup', description: 'Embed structured data code to help search engine crawlers index you.' }
    ],
    process: [
      { step: '01', title: 'Site Architecture Audit', description: 'Analyze your page speed, crawl errors, and target keyword gaps.' },
      { step: '02', title: 'Keyword Research', description: 'Identify terms with high volume and commercial intent.' },
      { step: '03', title: 'On-Page Optimization', description: 'Optimize title tags, meta tags, and body copy across your pages.' },
      { step: '04', title: 'Link Building Outreach', description: 'Secure editorial mentions on relevant business websites.' }
    ],
    faqs: [
      { q: 'Why does organic SEO require 3 to 6 months to see results?', a: 'Search engines index websites gradually. Authority and link building campaigns require time to grow naturally to outrank older sites.' },
      { q: 'Can you guarantee number 1 rankings on Google search?', a: 'No honest SEO agency guarantees No. 1 spots as search algorithms change daily. We guarantee using safe, white-hat practices that build traffic.' },
      { q: 'What is technical SEO?', a: 'Technical SEO refers to optimizations that help search crawlers access and index your site easily (e.g. sitemaps, page speed, mobile checks, redirect chains).' }
    ],
    calculator: {
      title: 'Organic SEO Campaign Estimator',
      subtitle: 'Select SEO parameters to estimate monthly retainer packages.',
      basePrice: 15000,
      options: [
        {
          id: 'size',
          label: 'Target Site Scale',
          type: 'select',
          choices: [
            { label: 'Local Business / Portfolio Site', price: 0 },
            { label: 'National Brand / Multi-Service Site', price: 10000 },
            { label: 'High-Volume Enterprise Portal', price: 25000 }
          ]
        },
        {
          id: 'articles',
          label: '4 Custom SEO Optimized Articles per Month',
          type: 'checkbox',
          price: 8000
        },
        {
          id: 'backlinks',
          label: 'Link-Building Outreach (5+ Guest Posts / month)',
          type: 'checkbox',
          price: 12000
        },
        {
          id: 'speed',
          label: 'Priority Core Web Vitals Optimization Audit',
          type: 'checkbox',
          price: 5000
        }
      ]
    }
  }
};

export default function DynamicServicePage({ params }: { params: Promise<{ service: string }> }) {
  // Await the promise parameter using React's use() hook
  const resolvedParams = use(params);
  const serviceKey = resolvedParams.service;
  
  // Look up service in the database
  const service = serviceDatabase[serviceKey];
  
  if (!service) {
    // If route parameter is invalid, render Next.js not-found state
    return notFound();
  }

  const [activeTab, setActiveTab] = useState<'features' | 'process'>('features');
  const [calculatorState, setCalculatorState] = useState<Record<string, string | boolean>>({});
  const [faqOpen, setFaqOpen] = useState<number | null>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const ServiceIcon = service.icon;

  // Initialize calculator defaults
  useEffect(() => {
    const defaults: Record<string, string | boolean> = {};
    service.calculator.options.forEach(opt => {
      if (opt.type === 'select') {
        defaults[opt.id] = opt.choices ? opt.choices[0].label : '';
      } else if (opt.type === 'checkbox') {
        defaults[opt.id] = false;
      }
    });
    setCalculatorState(defaults);
    setFaqOpen(null);
    setActiveTab('features');
  }, [serviceKey]);

  // Particle background animation
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationId: number;
    let particles: Array<{
      x: number; y: number; vx: number; vy: number;
      size: number; opacity: number; life: number; maxLife: number;
    }> = [];

    const resize = () => {
      canvas.width = canvas.offsetWidth * window.devicePixelRatio;
      canvas.height = canvas.offsetHeight * window.devicePixelRatio;
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
    };

    resize();
    window.addEventListener('resize', resize);

    const createParticle = () => {
      const centerX = canvas.offsetWidth / 2;
      return {
        x: centerX + (Math.random() - 0.5) * 500,
        y: Math.random() * canvas.offsetHeight * 0.5,
        vx: (Math.random() - 0.5) * 0.4,
        vy: -Math.random() * 0.4 - 0.1,
        size: Math.random() * 1.8 + 0.6,
        opacity: 0,
        life: 0,
        maxLife: Math.random() * 200 + 100,
      };
    };

    for (let i = 0; i < 30; i++) {
      const p = createParticle();
      p.life = Math.random() * p.maxLife;
      particles.push(p);
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.offsetWidth, canvas.offsetHeight);

      if (particles.length < 40 && Math.random() < 0.08) {
        particles.push(createParticle());
      }

      particles = particles.filter(p => p.life < p.maxLife);

      particles.forEach(p => {
        p.life++;
        p.x += p.vx;
        p.y += p.vy;

        const progress = p.life / p.maxLife;
        if (progress < 0.2) p.opacity = progress * 5;
        else if (progress > 0.8) p.opacity = (1 - progress) * 5;
        else p.opacity = 1;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(52, 204, 50, ${p.opacity * 0.35})`;
        ctx.fill();

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size * 3.5, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(52, 204, 50, ${p.opacity * 0.06})`;
        ctx.fill();
      });

      animationId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', resize);
    };
  }, [serviceKey]);

  // Handle calculator toggle/selection changes
  const handleCalcChange = (id: string, value: string | boolean) => {
    setCalculatorState(prev => ({ ...prev, [id]: value }));
  };

  // Calculate project estimate price total
  const calculateTotal = () => {
    let price = service.calculator.basePrice;
    
    service.calculator.options.forEach(opt => {
      const stateVal = calculatorState[opt.id];
      if (opt.type === 'select' && opt.choices) {
        const choice = opt.choices.find(c => c.label === stateVal);
        if (choice) price += choice.price;
      } else if (opt.type === 'checkbox' && stateVal === true && opt.price) {
        price += opt.price;
      }
    });

    return price;
  };

  const formattedEstimate = new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0
  }).format(calculateTotal());

  return (
    <main className="min-h-screen relative overflow-hidden bg-[#0a0a0a] text-fg selection:bg-accent selection:text-white">
      {/* Background patterns */}
      <div className="hero-dots" />
      <div className="hero-glow" />
      <div className="hero-glow-secondary" />

      {/* Canvas animation background */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none"
        style={{ zIndex: 1 }}
      />

      {/* 1. Hero Section */}
      <section className="relative z-10 pt-32 pb-16 lg:pt-40 lg:pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent/10 border border-accent/20 mb-6"
            >
              <ServiceIcon className="w-4 h-4 text-accent animate-pulse" />
              <span className="text-xs font-semibold text-accent uppercase tracking-wider">Services / {service.title}</span>
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-7xl font-bold tracking-tight mb-6 font-display"
            >
              <span className="gradient-text">{service.title}</span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-base sm:text-lg text-muted max-w-2xl mx-auto leading-relaxed mb-10"
            >
              {service.subtitle}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-row items-center justify-center gap-4"
            >
              <a
                href="#estimate-calculator"
                className="glow-button px-6 py-3 text-sm font-bold rounded-lg inline-flex items-center gap-2 text-white"
                style={{ color: '#fff' }}
              >
                Estimate Cost
                <ArrowRight className="w-4 h-4" />
              </a>
              <Link
                href="/book-appointment"
                className="px-6 py-3 text-sm font-medium text-fg rounded-lg inline-flex items-center gap-2 transition-colors bg-surface-1 hover:bg-surface-2 border border-border"
              >
                Book Appointment
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 2. Stats Summary */}
      <section className="py-12 relative z-10" style={{ borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            {service.stats.map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="text-center"
              >
                <div className="text-3xl sm:text-4xl lg:text-5xl font-bold text-accent mb-2 font-display">{stat.value}</div>
                <div className="text-xs sm:text-sm text-muted-foreground">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Interactive process / features tabs */}
      <section className="py-20 relative z-10">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="flex justify-center gap-4 mb-12">
            <button
              onClick={() => setActiveTab('features')}
              className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold border transition-all ${
                activeTab === 'features' 
                  ? 'bg-accent/10 border-accent text-accent' 
                  : 'bg-surface-1 border-border text-muted hover:text-white'
              }`}
            >
              {service.tabTitle1}
            </button>
            <button
              onClick={() => setActiveTab('process')}
              className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold border transition-all ${
                activeTab === 'process' 
                  ? 'bg-accent/10 border-accent text-accent' 
                  : 'bg-surface-1 border-border text-muted hover:text-white'
              }`}
            >
              {service.tabTitle2}
            </button>
          </div>

          <AnimatePresence mode="wait">
            {activeTab === 'features' ? (
              <motion.div
                key="features-tab"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="grid sm:grid-cols-2 gap-6"
              >
                {service.features.map((feat, idx) => (
                  <div key={idx} className="glass-card rounded-2xl p-6 border border-border/50 hover:border-accent/20 transition-all">
                    <div className="w-8 h-8 rounded-lg bg-accent/10 flex items-center justify-center text-accent mb-4">
                      <CheckSquare className="w-4 h-4" />
                    </div>
                    <h3 className="text-base font-bold text-white mb-2">{feat.title}</h3>
                    <p className="text-xs sm:text-sm text-muted leading-relaxed">{feat.description}</p>
                  </div>
                ))}
              </motion.div>
            ) : (
              <motion.div
                key="process-tab"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="space-y-6 max-w-3xl mx-auto"
              >
                {service.process.map((step, idx) => (
                  <div key={idx} className="glass-card rounded-2xl p-6 border border-border/50 hover:border-accent/20 transition-all flex gap-4 sm:gap-6 items-start">
                    <span className="text-2xl font-black text-accent/30 font-mono tracking-wider shrink-0 mt-0.5">{step.step}</span>
                    <div>
                      <h3 className="text-base sm:text-lg font-bold text-white mb-1.5">{step.title}</h3>
                      <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">{step.description}</p>
                    </div>
                  </div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      {/* 4. Interactive Estimate Calculator */}
      <section id="estimate-calculator" className="py-20 relative z-10 bg-surface-1/30" style={{ borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)' }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <span className="px-2.5 py-1 rounded bg-accent/10 border border-accent/20 text-[10px] font-bold text-accent uppercase tracking-widest inline-block mb-3">Project Pricing</span>
            <h2 className="text-2xl sm:text-4xl font-bold text-white font-display">{service.calculator.title}</h2>
            <p className="text-xs sm:text-sm text-muted-foreground mt-1.5">{service.calculator.subtitle}</p>
          </div>

          <div className="grid md:grid-cols-12 gap-8 items-stretch max-w-4xl mx-auto">
            {/* Calculator Options Form */}
            <div className="md:col-span-7 glass-card rounded-3xl p-6 sm:p-8 border border-border/50 flex flex-col justify-between space-y-6">
              <div className="space-y-5">
                {service.calculator.options.map((opt) => (
                  <div key={opt.id} className="space-y-2.5">
                    <label className="block text-[10px] font-bold text-white/95 uppercase tracking-wider">
                      {opt.label}
                    </label>

                    {opt.type === 'select' && opt.choices && (
                      <div className="relative">
                        <select
                          value={(calculatorState[opt.id] as string) || ''}
                          onChange={(e) => handleCalcChange(opt.id, e.target.value)}
                          className="w-full pl-4 pr-10 py-2.5 rounded-lg border text-xs sm:text-sm text-fg transition-all bg-surface-2 border-border cursor-pointer appearance-none"
                          style={{
                            backgroundImage: `url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3E%3Cpath stroke='%23a3a3a3' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3E%3C/svg%3E")`,
                            backgroundPosition: 'right 1rem center',
                            backgroundSize: '1.25em 1.25em',
                            backgroundRepeat: 'no-repeat',
                          }}
                        >
                          {opt.choices.map((c) => (
                            <option key={c.label} value={c.label} className="bg-[#0a0a0a]">
                              {c.label} (+ {c.price > 0 ? `₹${c.price.toLocaleString()}` : 'Included'})
                            </option>
                          ))}
                        </select>
                      </div>
                    )}

                    {opt.type === 'checkbox' && (
                      <label className="flex items-center gap-3 p-3 rounded-lg border border-border bg-surface-2/40 hover:bg-surface-2/70 cursor-pointer transition-all">
                        <input
                          type="checkbox"
                          checked={(calculatorState[opt.id] as boolean) || false}
                          onChange={(e) => handleCalcChange(opt.id, e.target.checked)}
                          className="w-4 h-4 rounded text-accent bg-[#0a0a0a] border-border focus:ring-0 cursor-pointer accent-accent"
                        />
                        <span className="text-xs text-muted-foreground select-none flex-1">
                          Add package feature (+ ₹{opt.price?.toLocaleString()})
                        </span>
                      </label>
                    )}
                  </div>
                ))}
              </div>

              <div className="p-3.5 rounded-xl border border-border bg-[#0a0a0a]/50 text-[11px] text-muted-foreground leading-normal flex gap-2.5 items-start">
                <FileText className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                <span>Pricing is generated based on standard scope configurations. Final quotes might vary depending on unique server integrations or revision cycles.</span>
              </div>
            </div>

            {/* Live Pricing Breakdown Card */}
            <div className="md:col-span-5 glass-card rounded-3xl p-6 sm:p-8 border border-border/50 flex flex-col justify-between items-center text-center relative overflow-hidden bg-gradient-to-b from-accent/5 to-transparent">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-accent/10 to-transparent rounded-bl-full pointer-events-none" />
              
              <div className="space-y-4">
                <span className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center text-accent mx-auto mb-2 border border-accent/20">
                  <DollarSign className="w-5 h-5" />
                </span>
                <h3 className="text-lg font-bold text-white tracking-wide">Estimated Budget</h3>
                <p className="text-xs text-muted-foreground leading-relaxed px-4">Instant budget calculated based on selected configuration parameters.</p>
              </div>

              <div className="my-6">
                <div className="text-3xl sm:text-4xl lg:text-5xl font-black text-white font-display tracking-tight leading-none text-accent">
                  {formattedEstimate}
                </div>
                <div className="text-[10px] text-slate-500 uppercase font-semibold mt-2 tracking-widest">Calculated Price</div>
              </div>

              <Link
                href={`/book-appointment?service=${serviceKey}&estimate=${encodeURIComponent(formattedEstimate)}`}
                className="glow-button w-full px-5 py-3 text-xs sm:text-sm font-bold rounded-lg inline-flex items-center justify-center gap-2 text-white hover:scale-[1.01] transition-transform active:scale-95 shadow-lg shadow-accent/15"
                style={{ color: '#fff' }}
              >
                Book with Estimate
                <Calendar className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 5. FAQs Accordion */}
      <section className="py-20 relative z-10">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-4xl font-bold text-white font-display">Frequently Asked Questions</h2>
            <p className="text-xs sm:text-sm text-muted-foreground mt-1.5">Got questions about our service? Find quick answers below.</p>
          </div>

          <div className="space-y-3">
            {service.faqs.map((faq, idx) => {
              const isOpen = faqOpen === idx;
              return (
                <div
                  key={idx}
                  onClick={() => setFaqOpen(isOpen ? null : idx)}
                  className="glass-card rounded-xl border border-border/50 hover:border-accent/20 cursor-pointer overflow-hidden transition-all duration-200"
                >
                  <div className="p-5 flex justify-between items-center gap-4">
                    <h3 className="text-xs sm:text-sm font-bold text-white">{faq.q}</h3>
                    <div className="w-6 h-6 rounded-full bg-surface-2 border border-border flex items-center justify-center text-muted shrink-0">
                      <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${isOpen ? 'rotate-180 text-accent' : ''}`} />
                    </div>
                  </div>

                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-muted-foreground leading-relaxed border-t border-border/30">
                          {faq.a}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 6. Contact CTA Section */}
      <section className="py-20 relative z-10 bg-surface-1/10" style={{ borderTop: '1px solid var(--border)' }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center space-y-6">
          <h2 className="text-2xl sm:text-4xl font-bold text-white font-display">Have a Custom Project Requirement?</h2>
          <p className="text-xs sm:text-sm text-muted max-w-xl mx-auto leading-relaxed">
            Need a tailored solution that isn't covered by the estimators above? Connect with our development consultants to discuss custom integrations or specific corporate SLAs.
          </p>
          <div className="flex justify-center gap-4 pt-2">
            <Link
              href="/contact"
              className="glow-button px-6 py-3 text-xs sm:text-sm font-bold rounded-lg text-white"
              style={{ color: '#fff' }}
            >
              Speak to Consultant
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
