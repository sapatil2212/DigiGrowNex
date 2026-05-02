import React from 'react';
import { Metadata } from 'next';
import ServiceClient from './ServiceClient';
import BrandingClient from './BrandingClient';

// Helper function to format the URL slug into a readable title string
function formatSlug(slug: string) {
  return slug
    .split('-')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}

type Props = {
  params: { service: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const serviceName = formatSlug(params.service);
  return {
    title: `${serviceName} Services | digigrownex`,
    description: `Expert ${serviceName} solutions by digigrownex designed to streamline your business and maximize your digital footprint.`,
  };
}

export default function ServicePage({ params }: Props) {
  if (params.service === 'branding') {
    return <BrandingClient />;
  }
  
  return <ServiceClient serviceSlug={params.service} />;
}
