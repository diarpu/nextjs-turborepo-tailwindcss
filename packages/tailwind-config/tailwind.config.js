/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    '../../apps/page-router/pages/*.{js,ts,jsx,tsx}',
    '../../apps/pages-router/components/*.{js,ts,jsx,tsx}',
    '../../apps/app-router/app/*.{js,ts,jsx,tsx}',
    '../../apps/app-router/components/*.{js,ts,jsx,tsx}',
    '../../packages/ui/components/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {}
  },
  plugins: []
}
