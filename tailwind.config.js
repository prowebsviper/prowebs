/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
    './public/assets/js/**/*.js'
  ],
  theme: {
    extend: {
      colors: {
        primary: '#E31E24',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      }
    },
  },
  plugins: [],
  safelist: [
    'hidden',
    'opacity-0',
    'translate-y-2',
    'sheet-open',
    'active',
    'show',
    'selected',
    'bg-blue-50', 'border-blue-500', 'text-blue-700',
    'bg-slate-50', 'text-slate-700',
    'bg-primary',
  ]
}
