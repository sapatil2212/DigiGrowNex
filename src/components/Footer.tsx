import Link from 'next/link';
import Image from 'next/image';
import { Github, Facebook, Linkedin, Instagram, Mail, Phone, MapPin } from 'lucide-react';

const footerLinks = {
  Services: [
    { label: 'WhatsApp Automation', href: '/ai-whatsapp-automation' },
    { label: 'AI HMS System', href: '/ai-hms-system' },
    { label: 'Web Development', href: '#' },
    { label: 'Digital Marketing', href: '#' },
  ],
  Company: [
    { label: 'About', href: '#' },
    { label: 'Careers', href: '/careers' },
    { label: 'Blog', href: '/blog' },
    { label: 'Contact', href: '/help-center' },
  ],
};

const socialLinks = [
  { icon: Facebook, href: 'https://www.facebook.com/profile.php?id=61588671227643', label: 'Facebook' },
  { icon: Github, href: 'https://github.com/sapatil2212?tab=repositories', label: 'GitHub' },
  { icon: Linkedin, href: '#', label: 'LinkedIn' },
  { icon: Instagram, href: 'https://www.instagram.com/digigrownex/', label: 'Instagram' },
];

export default function Footer() {
  return (
    <footer style={{ borderTop: '1px solid var(--border)', background: 'var(--surface-0)' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-16 grid grid-cols-2 md:grid-cols-6 gap-8">
          <div className="col-span-2">
            <Link href="/" className="flex items-center mb-4">
              {/* dark logo — hidden in light mode */}
              <Image
                src="/images/logo/digigrownex-logo.png"
                alt="digigrownex"
                width={140}
                height={40}
                className="logo-dark h-10 w-auto object-contain"
              />
              {/* light logo — hidden in dark mode */}
              <Image
                src="/images/logo/digigrownex-logo-light.png"
                alt="digigrownex"
                width={140}
                height={40}
                className="logo-light h-10 w-auto object-contain"
              />
            </Link>
            <p className="text-sm text-muted leading-relaxed max-w-xs mb-6">
              Elevating digital performance. Strategy, design, cloud infrastructure, and execution for the modern enterprise.
            </p>
            <div className="flex gap-3">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <a key={label} href={href} aria-label={label}
                  className="w-9 h-9 rounded-lg flex items-center justify-center text-muted hover:text-accent transition-all duration-200"
                  style={{ background: 'var(--surface-2)', border: '1px solid var(--border)' }}>
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="text-sm font-semibold text-white mb-4">{title}</h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link href={link.href} className="text-sm text-muted hover:text-accent transition-colors duration-200">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          <div>
            <h4 className="text-sm font-semibold text-white mb-4">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-sm text-muted">
                <Mail className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                <a href="mailto:digigrownex@gmail.com" className="hover:text-accent transition-colors break-all">
                  digigrownex@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-2 text-sm text-muted">
                <Phone className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                <a href="tel:+917745868073" className="hover:text-accent transition-colors">
                  +91 77458 68073
                </a>
              </li>
              <li className="flex items-start gap-2 text-sm text-muted">
                <MapPin className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                <span className="leading-relaxed">
                  B-92, Poonam apartment, Sahakar Nagar Pune 411009
                </span>
              </li>
            </ul>
          </div>
        </div>
        <div className="py-6 flex flex-col sm:flex-row items-center justify-between gap-4" style={{ borderTop: '1px solid var(--border)' }}>
          <p className="text-xs text-muted">© {new Date().getFullYear()} digigrownex. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/privacy" className="text-xs text-muted hover:text-accent transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="text-xs text-muted hover:text-accent transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
