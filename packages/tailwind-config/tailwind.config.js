/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    '../../apps/**/components/*.{js,ts,jsx,tsx}',
    '../../apps/**/pages/*.{js,ts,jsx,tsx}',
    '../../packages/ui/components/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {}
  },
  plugins: []
}
