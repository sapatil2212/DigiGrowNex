/**
 * PostCSS plugin to fix Tailwind v3 escaped slash selectors
 * that break cssnano-simple bundled in Next.js.
 *
 * Tailwind generates: .bg-white\/5 { ... }
 * cssnano-simple chokes on the \/ in selectors.
 * This plugin wraps them in :is() which cssnano can parse,
 * while browsers still match the original class correctly.
 */
const plugin = () => {
  return {
    postcssPlugin: 'fix-tailwind-slash-selectors',
    Rule(rule) {
      if (!rule.selector || !rule.selector.includes('\\/')) return;
      // Split compound selectors and wrap each part containing \/ in :is()
      rule.selector = rule.selector
        .split(',')
        .map((sel) => {
          sel = sel.trim();
          if (sel.includes('\\/')) {
            return `:is(${sel})`;
          }
          return sel;
        })
        .join(', ');
    },
  };
};
plugin.postcss = true;

module.exports = plugin;
