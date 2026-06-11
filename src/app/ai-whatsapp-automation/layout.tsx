import type { Metadata } from 'next';
import Script from 'next/script';

export const metadata: Metadata = {
  title: 'White Label AI WhatsApp Automation Source Code',
  description: 'Launch your own AI WhatsApp automation business with complete source code, commercial license, CRM, lead capture, OpenAI and Gemini integration.',
  keywords: [
    'WhatsApp automation source code',
    'white label SaaS source code',
    'WhatsApp CRM template',
    'AI lead generation bot source code',
    'WhatsApp automation commercial rights',
    'Next.js WhatsApp SaaS template'
  ],
  openGraph: {
    title: 'White Label AI WhatsApp Automation Source Code',
    description: 'Launch your own AI WhatsApp automation business with complete source code, commercial license, CRM, lead capture, OpenAI and Gemini integration.',
    type: 'website'
  }
};

export default function AIWhatsAppAutomationLayout({
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

