module.exports = {
  plugins: [
    require('postcss-easings'),
    require('postcss-100vh-fix'),
    require('autoprefixer'),
    require('postcss-nested'),
    require('postcss-custom-media')({
      importFrom: './src/custom-media.css',
    }),
  ],
};