const { defineConfig } = require('@vue/cli-service')
const path = require('path') // 引入path模块

function resolve(dir) {
  return path.join(__dirname, dir) //path.join(_dirname)设置绝对路径
}
module.exports = defineConfig({
  chainWebpack: (config) => {
    config.resolve.alias.set('_c', resolve('src/components'))
  },
  transpileDependencies: true,
  lintOnSave: false
})
