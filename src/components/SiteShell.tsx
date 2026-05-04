'use client';

import { usePathname } from 'next/navigation';
import Header from './Header';
import Footer from './Footer';

const HIDE_CHROME = ['/book-appointment'];

export default function SiteShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const hideChrome = HIDE_CHROME.some(p => pathname.startsWith(p));

  return (
    <>
      {!hideChrome && <Header />}
      <main className="min-h-screen">{children}</main>
      {!hideChrome && <Footer />}
    </>
  );
}
