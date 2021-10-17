import { defineConfig } from 'umi';

export default defineConfig({
  dva: { immer: true, hmr: false, },
  antd: {},
  nodeModulesTransform: {
    type: 'none',
  },
  // 不能自动生成路径
  // routes: [
  //   {
  //     path: '/',
  //     component: '@/layouts/index',
  //     routes: [
  //       {
  //         path: '/',
  //         component: '@/pages/hero'
  //       },
  //       {
  //         path: '/hero',
  //         component: '@/pages/hero'
  //       },
  //       {
  //         path: '/item',
  //         component: '@/pages/item'
  //       },
  //       {
  //         path: '/summoner',
  //         component: '@/pages/summoner'
  //       },
  //     ]
  //   },
  // ],
  fastRefresh: {},
  "proxy": {
    "/api/": { //设置代理请求头，当访问到/api时就会触发代理
      "target": "https://pvp.qq.com/", //代理访问的真实服务器地址
      "changeOrigin": true, // 是否跨域请求地址
      "pathRewrite": { "^/api": "" } // 是否重写请求地址，比如这里就是吧/api替换成空字符串
    }
  }
});
