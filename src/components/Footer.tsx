import Link from 'next/link';
import Image from 'next/image';
import { Facebook, Linkedin, Instagram, Mail, Phone, MapPin } from 'lucide-react';

const quickLinks = [
  { label: 'Home', href: '/' },
  { label: 'About Us', href: '/about-us' },
  { label: 'Services', href: '/services' },
  { label: 'Contact Us', href: '/contact-us' },
];

const policyLinks = [
  { label: 'Privacy Policy', href: '/privacy-policy' },
  { label: 'Terms & Conditions', href: '/terms-and-conditions' },
  { label: 'Refund Policy', href: '/refund-policy' },
];

const socialLinks = [
  { icon: Facebook, href: 'https://www.facebook.com/profile.php?id=61588671227643', label: 'Facebook' },
  { icon: Instagram, href: 'https://www.instagram.com/digigrownex/', label: 'Instagram' },
  { icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
];

export default function Footer() {
  return (
    <footer style={{ borderTop: '1px solid var(--border)', background: 'var(--surface-0)' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <Link href="/" className="flex items-center mb-4">
              {/* dark logo — hidden in light mode */}
              <Image
                src="/images/logo/digigrownex-logo.png"
                alt="DigiGrowNex Technologies"
                width={140}
                height={40}
                className="logo-dark h-10 w-auto object-contain"
              />
              {/* light logo — hidden in dark mode */}
              <Image
                src="/images/logo/digigrownex-logo-light.png"
                alt="DigiGrowNex Technologies"
                width={140}
                height={40}
                className="logo-light h-10 w-auto object-contain"
              />
            </Link>
            <p className="text-sm text-muted leading-relaxed max-w-xs mb-6">
              DigiGrowNex Technologies is an AI-powered digital agency. We deliver high-performance web development, AI automation, and customer engagement solutions that scale your business.
            </p>
            <div className="flex gap-3">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label}
                  className="w-9 h-9 rounded-lg flex items-center justify-center text-muted hover:text-accent transition-all duration-200"
                  style={{ background: 'var(--surface-2)', border: '1px solid var(--border)' }}>
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-white mb-4">Quick Links</h4>
            <div className="grid grid-cols-2 gap-4">
              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.label}>
                    <Link href={link.href} className="text-sm text-muted hover:text-accent transition-colors duration-200">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
              <ul className="space-y-3">
                {policyLinks.map((link) => (
                  <li key={link.label}>
                    <Link href={link.href} className="text-sm text-muted hover:text-accent transition-colors duration-200">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-white mb-4">Contact Info</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-sm text-muted">
                <Mail className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                <a href="mailto:support@digigrownex.online" className="hover:text-accent transition-colors break-all">
                  support@digigrownex.online
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
                  Sahakar Nagar, Pune, Maharashtra, India
                </span>
              </li>
            </ul>
          </div>
        </div>
        <div className="py-6 flex flex-col sm:flex-row items-center justify-between gap-4" style={{ borderTop: '1px solid var(--border)' }}>
          <p className="text-xs text-muted">© 2026 DigiGrowNex Technologies. All Rights Reserved.</p>
          <div className="flex gap-6">
            <Link href="/privacy-policy" className="text-xs text-muted hover:text-accent transition-colors">Privacy Policy</Link>
            <Link href="/terms-and-conditions" className="text-xs text-muted hover:text-accent transition-colors">Terms & Conditions</Link>
            <Link href="/refund-policy" className="text-xs text-muted hover:text-accent transition-colors">Refund Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
