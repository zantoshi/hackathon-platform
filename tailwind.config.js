/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}", // Note the addition of the `app` directory.
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        field: '#524E4E40',
      },
      boxShadow: {
        '3xl': '0 0px 65px 15px rgba(110, 57, 168, 0.3)',
      }
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
