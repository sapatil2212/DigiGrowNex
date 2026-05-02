/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
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
