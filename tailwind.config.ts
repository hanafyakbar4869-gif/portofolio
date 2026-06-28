import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        "surface-container": "#f3ebf8",
        "on-secondary-container": "#76014e",
        "secondary-container": "#fc79bd",
        "on-background": "#1d1a23",
        "secondary-fixed": "#ffd8e7",
        "on-primary-fixed-variant": "#5516be",
        "on-secondary-fixed-variant": "#85145a",
        "on-primary-container": "#fffbff",
        "outline": "#7b7486",
        "on-secondary": "#ffffff",
        "on-primary": "#ffffff",
        "primary-fixed": "#e9ddff",
        "on-tertiary-fixed-variant": "#5c4300",
        "on-primary-fixed": "#23005c",
        "error-container": "#ffdad6",
        "surface-container-low": "#f8f1fe",
        "on-secondary-fixed": "#3d0026",
        "on-surface-variant": "#494454",
        "surface-dim": "#ded7e4",
        "secondary": "#a43073",
        "on-tertiary": "#ffffff",
        "inverse-on-surface": "#f5eefb",
        "primary": "#6b38d4",
        "surface-container-highest": "#e7e0ed",
        "on-surface": "#1d1a23",
        "inverse-primary": "#d0bcff",
        "on-error": "#ffffff",
        "primary-fixed-dim": "#d0bcff",
        "surface-container-high": "#ede5f3",
        "background": "#fef7ff",
        "on-error-container": "#93000a",
        "on-tertiary-fixed": "#261a00",
        "surface-bright": "#fef7ff",
        "surface-variant": "#e7e0ed",
        "surface-tint": "#6d3bd7",
        "on-tertiary-container": "#fffbff",
        "surface": "#fef7ff",
        "error": "#ba1a1a",
        "primary-container": "#8455ef",
        "outline-variant": "#cbc3d7",
        "tertiary-fixed": "#ffdf9f",
        "tertiary-container": "#956e00",
        "surface-container-lowest": "#ffffff",
        "inverse-surface": "#322f39",
        "tertiary": "#765700",
        "secondary-fixed-dim": "#ffafd3",
        "tertiary-fixed-dim": "#f9bd22",
        "brand-cream": "#FFFDF5"
      },
      borderRadius: {
        "DEFAULT": "0.25rem",
        "lg": "0.5rem",
        "xl": "0.75rem",
        "full": "9999px"
      },
      spacing: {
        "margin-desktop": "64px",
        "gutter": "24px",
        "unit": "4px",
        "margin-mobile": "24px",
        "container-max": "1280px"
      },
      fontFamily: {
        "headline-lg": ["var(--font-outfit)"],
        "body-lg": ["var(--font-jakarta)"],
        "headline-md": ["var(--font-outfit)"],
        "display-lg": ["var(--font-outfit)"],
        "display-lg-mobile": ["var(--font-outfit)"],
        "headline-lg-mobile": ["var(--font-outfit)"],
        "body-md": ["var(--font-jakarta)"],
        "label-bold": ["var(--font-jakarta)"]
      },
      fontSize: {
        "headline-lg": ["48px", { "lineHeight": "1.2", "fontWeight": "700" }],
        "body-lg": ["20px", { "lineHeight": "1.6", "fontWeight": "500" }],
        "headline-md": ["32px", { "lineHeight": "1.3", "fontWeight": "700" }],
        "display-lg": ["72px", { "lineHeight": "1.1", "letterSpacing": "-0.02em", "fontWeight": "800" }],
        "display-lg-mobile": ["40px", { "lineHeight": "1.2", "fontWeight": "800" }],
        "headline-lg-mobile": ["32px", { "lineHeight": "1.2", "fontWeight": "700" }],
        "body-md": ["16px", { "lineHeight": "1.6", "fontWeight": "400" }],
        "label-bold": ["14px", { "lineHeight": "1.0", "letterSpacing": "0.05em", "fontWeight": "700" }]
      },
      boxShadow: {
        'pop': '4px 4px 0px #1E293B',
        'pop-sm': '2px 2px 0px #1E293B',
        'pop-pink': '4px 4px 0px #fc79bd',
        'pop-yellow': '4px 4px 0px #ffdf9f',
        'pop-mint': '4px 4px 0px #34d399',
      },
      transitionTimingFunction: {
        'bounce-pop': 'cubic-bezier(0.34, 1.56, 0.64, 1)',
      },
      backgroundImage: {
        'dot-grid': 'radial-gradient(#cbc3d7 1px, transparent 1px)'
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/container-queries'),
    require('tailwindcss-animate')
  ],
};
export default config;
