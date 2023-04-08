module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ? '/udundi-coding-chanllenge/' : '/',
  transpileDependencies: ['vue'],
  css: {
    loaderOptions: {
      sass: {
        additionalData: `@import "~@/assets/styles/_variables.scss";`
      },
      postcss: {
        postcssOptions: {
          plugins: [
            require('tailwindcss'),
            require('autoprefixer')
          ]
        },
        sourceMap: true
      }
    }
  },
  chainWebpack: (config) => {
    config.module
      .rule('fonts')
      .test(/\.(woff2?|eot|ttf|otf)(\?.*)?$/i)
      .use('file-loader')
      .loader('file-loader')
      .options({
        name: 'assets/fonts/[name].[hash:8].[ext]'
      })
      .end()
  }
}
