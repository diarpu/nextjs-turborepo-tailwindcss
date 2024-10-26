/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    '../../apps/**/pages/*.{js,ts,jsx,tsx}',
    '../../apps/**/app/*.{js,ts,jsx,tsx}',
    '../../apps/**/components/*.{js,ts,jsx,tsx}',
    '../../packages/**/components/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {}
  },
  plugins: []
}
