const { createGlobPatternsForDependencies } = require('@nrwl/angular/tailwind');
const { join } = require('path');

const colors = {
  secondary: '#F99D27',
  yellow: {
    500: '#FFD148',
  },
  grey: {
    100: '#FBC47D',
    50: '#F9F9F9',
    25: '#FFFFFF',
  },
};
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    join(__dirname, 'src/**/!(*.stories|*.spec).{ts,html}'),
    ...createGlobPatternsForDependencies(__dirname),
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
