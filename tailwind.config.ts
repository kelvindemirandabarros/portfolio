import type { Config } from 'tailwindcss';

import colors from 'tailwindcss/colors';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))'
      }
    },
    colors: {
      ...colors,
      primary: colors.blue,
      secondary: colors.purple
    },
    screens: {
      // => @media (min-width: 640px) { ... }
      sm: '640px',

      // => @media (min-width: 768px) { ... }
      md: '768px',

      // => @media (min-width: 1024px) { ... }
      lg: '1024px',

      // => @media (min-width: 1280px) { ... }
      xl: '1280px',

      // => @media (min-width: 1536px) { ... }
      '2xl': '1536px',

      // => @media (max-width: 639px) { ... }
      maxw639: { max: '639px' }
    }
  },
  plugins: []
};

export default config;
