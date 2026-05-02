import React from 'react';
import { Metadata } from 'next';
import PortfolioClient from './PortfolioClient';

export const metadata: Metadata = {
  title: 'Our Portfolio & Case Studies | digigrownex',
  description: 'Explore our comprehensive portfolio featuring successful website launches, modern brand identities, and high-impact digital campaigns.',
};

export default function PortfolioPage() {
  return <PortfolioClient />;
}
