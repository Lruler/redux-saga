import { defineConfig } from 'umi';

export default defineConfig({
  dva: {},
  antd: {},
  nodeModulesTransform: {
    type: 'none',
  },
  // 不能自动生成路径
  routes: [
    {
      path: '/',
      component: '@/layouts/index',
      routes: [
        {
          path: '/',
          component: '@/pages/index'
        },
        {
          path: '/hero',
          component: '@/pages/hero'
        },
        {
          path: '/item',
          component: '@/pages/item'
        },
        {
          path: '/summoner',
          component: '@/pages/summoner'
        },
      ]
    },
  ],
  fastRefresh: {},
});
