/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'home': "url('https://res.cloudinary.com/dbxbxtfix/image/upload/v1707413045/OWBgs/OW2Bg_egqhoh.png')",
        'ashe':
          "url('https://res.cloudinary.com/dbxbxtfix/image/upload/v1689375279/OWBgs/1600_Ashe_jtlu8l.jpg')",
        'reaper':
          "url('https://res.cloudinary.com/dbxbxtfix/image/upload/v1689375280/OWBgs/1600_Reaper_hahggn.jpg')",
        'zenyatta':
          "url('https://res.cloudinary.com/dbxbxtfix/image/upload/v1689375280/OWBgs/1600_Zenyatta_lmbtro.jpg')",
        'dva':
          "url('https://res.cloudinary.com/dbxbxtfix/image/upload/v1689375280/OWBgs/1600_Dva_vswdr7.jpg')",
        'soldier':
          "url('https://res.cloudinary.com/dbxbxtfix/image/upload/v1689375280/OWBgs/1600_Soldier_76_gozugd.jpg')",
        'sigma':
          "url('https://res.cloudinary.com/dbxbxtfix/image/upload/v1689375280/OWBgs/1600_Sigma_mjqpum.jpg')",
      },
    },
  },
  plugins: [],
}
