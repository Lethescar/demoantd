module.exports = {
  productionSourceMap: false,
  css: {
    loaderOptions: {
      less: {
        lessOptions: {
          // important extra layer for less-loader^6.0.0
          javascriptEnabled: true
        }
      }
    }
  }
}