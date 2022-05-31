const purgecss = require('@fullhuman/postcss-purgecss')
const cssnano = require('cssnano')
require('dotenv').config()

const { NODE_ENV } = process.env

module.exports = {
  plugins: [
    require('postcss-preset-env')({ stage: 0 }),
    require('tailwindcss'),
    require('autoprefixer'),
    NODE_ENV === 'production' ? purgecss({
      content: ['./src/views/**/*.ejs'],
      defaultExtractor: (content) => content.match(/[A-Za-z0-9-_:/]+/g) || [],
    }) : null,
    cssnano({
      preset: 'default',
    }),
  ],
}
