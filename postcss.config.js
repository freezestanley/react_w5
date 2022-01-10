module.exports = {
  plugins: [
    // 'cssnano',
    // 'autoprefixer'
    [
      'postcss-preset-env',
      {
        // Options
        stage: 3,
        browsers: ['> 1%', 'last 2 versions']
      }
    ]
  ]
}
