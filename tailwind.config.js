/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      transitionProperty: {
        'height': 'height',
        'width': 'width',
        'spacing': 'margin, padding',
      },
      colors: {
        'cus-gray-50': '#F6F6F6',
        'cus-gray-100': '#E7E7E7',
        'cus-gray-200': '#D1D1D1',
        'cus-gray-300': '#B0B0B0',
        'cus-gray-400': '#888888',
        'cus-gray-500': '#6D6D6D',
        'cus-gray-600': '#5D5D5D',
        'cus-gray-700': '#4F4F4F',
        'cus-gray-800': '#454545',
        'cus-gray-900': '#3D3D3D',
        'cus-gray-950': '#121212',
        'primary': {
          '50': '#F3F7FC',
          '100': '#E6F0F8',
          '200': '#C7DFF0',
          DEFAULT: '#95C5E4',
          // dark vvv
          '400': '#5CA7D4',
          '500': '#378BC0',
          '600': '#276FA2',
          '700': '#215983',
          '800': '#1F4D6D',
          '900': '#1F415B',
          '950': '#142A3D',
        },
      },
    },
  },
  plugins: [],
}

