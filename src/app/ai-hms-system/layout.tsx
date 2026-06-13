import type { Metadata } from 'next';
import Script from 'next/script';

export const metadata: Metadata = {
  title: 'White Label AI Powered Hospital Management System Source Code',
  description: 'Launch your own AI Hospital Management System SaaS with complete multi-tenant source code, AI prescription assistant, doctor scheduler, billing, and pharmacy flow.',
  keywords: [
    'hospital management system source code',
    'white label HMS SaaS template',
    'AI doctor scheduling software',
    'electronic medical records code',
    'Next.js healthcare SaaS source code',
    'hospital management commercial rights'
  ],
  openGraph: {
    title: 'White Label AI Powered Hospital Management System Source Code',
    description: 'Launch your own AI Hospital Management System SaaS with complete multi-tenant source code, AI prescription assistant, doctor scheduler, billing, and pharmacy flow.',
    type: 'website'
  }
};

export default function AIHMSSystemLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Script id="meta-pixel" strategy="afterInteractive">
        {`
          !function(f,b,e,v,n,t,s)
          {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
          n.callMethod.apply(n,arguments):n.queue.push(arguments)};
          if(!f._fbq)f._fbq=n;
          n.push=n;
          n.loaded=!0;
          n.version='2.0';
          n.queue=[];
          t=b.createElement(e);
          t.async=!0;
          t.src=v;
          s=b.getElementsByTagName(e)[0];
          s.parentNode.insertBefore(t,s)
          }(window, document,'script',
          'https://connect.facebook.net/en_US/fbevents.js');

          fbq('init', '1023382716897796');
          fbq('track', 'PageView');
          fbq('track', 'ViewContent');
        `}
      </Script>
      {children}
    </>
  );
}
