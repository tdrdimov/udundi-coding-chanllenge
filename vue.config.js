module.exports = {
  transpileDependencies: ['vue'],
  css: {
    loaderOptions: {
      sass: {
        additionalData: `@import "~@/assets/styles/_variables.scss";`
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
