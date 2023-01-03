import { defineConfig } from 'umi';

// const VueLoaderPlugin = require('vue-loader/lib/plugin');

import webpack from 'webpack'

console.warn('webpack',webpack.version)
export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  routes: [
    { path: '/', component: '@/pages/index' },
  ],
  fastRefresh: {},
  chainWebpack(memo, { env, webpack, createCSSRule }){
    let module = memo.module.values();
    let plugins = memo.plugins.use(require.resolve('vue-loader/lib/plugin'));
    debugger
  }
});
