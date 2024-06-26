const { fontFamily } = require('tailwindcss/defaultTheme');

module.exports = {
  content: [
    './layout/*.liquid',
    './templates/*.liquid',
    './templates/customers/*.liquid',
    './sections/*.liquid',
    './snippets/*.liquid',
  ],
  theme: {
    colors: {
      white: '#f1f6f9',
      medium: '#394867',
      dark: '#212a3e',
      gray: '#9ba4b5',
      transparent: 'transparent',
    },
    fontSize: {
      'fluid--3': 'clamp(0.9261rem, 0.8187rem + 0.5369vi, 1.2348rem)',
      'fluid--2': 'clamp(0.9882rem, 0.9196rem + 0.3427vi, 1.1852rem)',
      'fluid--1': 'clamp(1.0544rem, 0.9573rem + 0.4852vi, 1.3333rem)',
      'fluid-0': 'clamp(1.125rem, 0.9946rem + 0.6522vi, 1.5rem)',
      'fluid-1': 'clamp(1.2004rem, 1.0309rem + 0.8472vi, 1.6875rem)',
      'fluid-2': 'clamp(1.2808rem, 1.066rem + 1.0742vi, 1.8984rem)',
      'fluid-3': 'clamp(1.3666rem, 1.0991rem + 1.3376vi, 2.1357rem)',
      'fluid-4': 'clamp(1.4582rem, 1.1296rem + 1.6427vi, 2.4027rem)',
      'fluid-5': 'clamp(1.5559rem, 1.1569rem + 1.9951vi, 2.703rem)',
      'fluid-6': 'clamp(1.659rem, 1.182rem + 2.3971vi, 3.031rem)',
      'fluid-7': 'clamp(1.768rem, 1.205rem + 2.8511vi, 3.390rem)',
    },
    container: {
      padding: {
        DEFAULT: 'clamp(1.125rem, 0.9946rem + 0.6522vi, 1.5rem)',
      },
    },
    extend: {
      fontFamily: {
        serif: ['var(--font-gastroe-demo)', ...fontFamily.serif],
      },
      spacing: {
        'space-3xs': 'clamp(0.3125rem, 0.2908rem + 0.1087vi, 0.375rem)',
        'space-2xs': 'clamp(0.5625rem, 0.4973rem + 0.3261vi, 0.75rem)',
        'space-xs': 'clamp(0.875rem, 0.788rem + 0.4348vi, 1.125rem)',
        'space-s': 'clamp(1.125rem, 0.9946rem + 0.6522vi, 1.5rem)',
        'space-m': 'clamp(1.6875rem, 1.4918rem + 0.9783vi, 2.25rem)',
        'space-l': 'clamp(2.25rem, 1.9891rem + 1.3043vi, 3rem)',
        'space-xl': 'clamp(3.375rem, 2.9837rem + 1.9565vi, 4.5rem)',
        'space-2xl': 'clamp(4.5rem, 3.9783rem + 2.6087vi, 6rem)',
        'space-3xl': 'clamp(6.75rem, 5.9674rem + 3.913vi, 9rem)',
        'space-3xs-2xs': 'clamp(0.3125rem, 0.1603rem + 0.7609vi, 0.75rem)',
        'space-2xs-xs': 'clamp(0.5625rem, 0.3668rem + 0.9783vi, 1.125rem)',
        'space-xs-s': 'clamp(0.875rem, 0.6576rem + 1.087vi, 1.5rem)',
        'space-s-m': 'clamp(1.125rem, 0.7337rem + 1.9565vi, 2.25rem)',
        'space-m-l': 'clamp(1.6875rem, 1.231rem + 2.2826vi, 3rem)',
        'space-l-xl': 'clamp(2.25rem, 1.4674rem + 3.913vi, 4.5rem)',
        'space-xl-2xl': 'clamp(3.375rem, 2.462rem + 4.5652vi, 6rem)',
        'space-2xl-3xl': 'clamp(4.5rem, 2.9348rem + 7.8261vi, 9rem)',
        'space-s-l': 'clamp(1.125rem, 0.4728rem + 3.2609vi, 3rem)',
      },
      keyframes: {
        fadeIn: {
          from: { opacity: 0 },
          to: { opacity: 1 },
        },
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
        blink: {
          '0%': { opacity: 0.2 },
          '20%': { opacity: 1 },
          '100% ': { opacity: 0.2 },
        },
      },
      animation: {
        fadeIn: 'fadeIn .3s ease-in-out',
        carousel: 'marquee 60s linear infinite',
        blink: 'blink 1.4s both infinite',
      },
    },
  },
  plugins: [],
};
