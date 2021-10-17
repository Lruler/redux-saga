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
    "/api/": {
      "target": "https://pvp.qq.com/",
      "changeOrigin": true,
      "pathRewrite": { "^/api": "" }
    }
  }
});
