/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './**/*.html',
    './public/assets/js/**/*.js',
    '!./node_modules/**/*',
    '!./dist/**/*'
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
