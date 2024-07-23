/** @type {import('tailwindcss').Config} */
import {colors} from './client/styles/color'
export default {
  content: ['./index.html', './client/**/*.tsx'],
  theme: {
    extend: { 
      colors: {
      neutral: colors.neutral,
      brand: colors.brand,
      danger: colors.danger,
      warning: colors.warning,
      success: colors.success,
      background: colors.background,
    },},
  },
  plugins: [],
}
