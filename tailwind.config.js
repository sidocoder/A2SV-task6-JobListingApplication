module.exports = {
  theme: {
    extend: {
      fontFamily: {
        jakarta: ['var(--font-jakarta)'],
        poppins: ['var(--font-poppins)'],
      },
    },
  },
  content: [
    './src/**/*.{js,ts,jsx,tsx}', 
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/app/**/*.{js,ts,jsx,tsx}',
  ],
};
