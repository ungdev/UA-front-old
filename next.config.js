// Always restart the dev server if you edit this file
// For "Port 8080 is already in use." -> taskkill /F /IM node.exe (Windows only)

const fs = require('fs')
const path = require('path')
const Dotenv = require('dotenv-webpack')
const FilterWarningsPlugin = require('webpack-filter-warnings-plugin');

const withPlugins = require('next-compose-plugins')
const withCSS = require('@zeit/next-css')
const withImages = require('next-images')
const withProgressBar = require('next-progressbar')

// Dot env config
let env = ['.env.local', '.env']

if(process.env.NODE_ENV === 'development')
  env.unshift('.env.development.local', '.env.development')

env.forEach(item =>{
  require('dotenv').config({
    path: path.resolve(__dirname, item)
  })
})

// Process Config
const gallery_folder = './static/gallery/'
process.env.GALLERY_IMAGES = fs.readdirSync(gallery_folder).map(image => gallery_folder + image)

// Next config
const nextConfig = {
  webpack: config => {
    config.plugins = config.plugins || []

    config.plugins = [
      ...config.plugins,

      new Dotenv({
        path: path.join(__dirname, '.env'),
        systemvars: true
      }),

      // Cache misery, todo: follow this issue https://github.com/webpack-contrib/mini-css-extract-plugin/issues/250 ?
      new FilterWarningsPlugin({
        exclude: /mini-css-extract-plugin[^]*Conflicting order between:/
      })
    ]

    return config
  }
}

const progressBarConfig = {
  progressBar: {
    profile: process.env.NODE_ENV !== 'development'
  }
}

module.exports = withPlugins([withCSS, withImages, [withProgressBar, progressBarConfig]], nextConfig)
