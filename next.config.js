/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
  },
  turbopack: {},
  async redirects() {
    return [
      {
        source: '/about',
        destination: '/about-us',
        permanent: true,
      },
      {
        source: '/contact',
        destination: '/contact-us',
        permanent: true,
      },
      {
        source: '/privacy',
        destination: '/privacy-policy',
        permanent: true,
      },
      {
        source: '/terms',
        destination: '/terms-and-conditions',
        permanent: true,
      },
    ];
  },
  webpack(config, { dev }) {
    if (!dev) {
      // Find and remove the CSS minimizer that uses cssnano-simple
      // which cannot handle Tailwind v3's escaped slash selectors
      const minimizers = config.optimization?.minimizer;
      if (minimizers) {
        config.optimization.minimizer = minimizers.filter((m) => {
          const name = m?.constructor?.name || '';
          // Remove CssMinimizerPlugin (cssnano-simple)
          return !name.includes('Css') && !name.includes('css');
        });
      }
    }
    return config;
  },
};

module.exports = nextConfig;
