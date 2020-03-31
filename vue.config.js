const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  "lintOnSave": false,
  "transpileDependencies": [
    "vuetify"
  ],
  configureWebpack: {
    plugins: [
      new HtmlWebpackPlugin({
        title: 'Practice Atomic Design'
      })
    ]
  }
}