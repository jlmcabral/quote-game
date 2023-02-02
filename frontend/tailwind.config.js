/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/**/*.{html,ts}",
    ],
  theme: {
    extend: {},
    colors: {
        blue: {
            200: '#cee3e9',
            700: '#4e5d73',
            800: '#323a49',
            900: '#1f2632',
        },
        green: {
          400: '#52ffa8',
        }
    }
  },
  plugins: [],
}