import { createWebHistory, createRouter } from 'vue-router'
import { useUserStore } from '@/stores/user.js'

import HomeView from '@/views/HomeView.vue'
import AboutView from '@/views/AboutView.vue'

const routes = [
  {
    path: '/',
    alias: '/home',
    name: 'home',
    component: HomeView,
    meta: {
      title: '首頁',
    },
  },
  {
    path: '/about',
    component: AboutView,
    meta: {
      title: '關於我們',
    },
  },
  {
    path: '/upvote',
    component: () => import('@/views/UpVoteView.vue'),
    meta: {
      title: 'Blog 投票',
    },
  },
  // {
  //   path: '/products/:id',
  //   name: 'product',
  //   component: () => import('@/views/ProductItemView.vue'),
  //   props: true,
  //   meta: {
  //     title: '產品詳細資訊',
  //   },
  // },
  {
    path: '/products',
    name: 'productlist',
    component: () => import('@/views/ProductListView.vue'),
    meta: {
      title: '產品列表',
    },
    beforeEnter: (to, from) => {
      const userStore = useUserStore()
      if (!userStore.isLogin) {
        return { name: 'login', query: { redirect: to.fullPath } }
      }
      // 如果已經登入，則允許進入產品列表頁面
      return true
    },
    children: [
      {
        path: '',
        component: () => import('@/views/ProductNoneView.vue'),
        name: 'productnone',
        meta: {
          title: '產品列表',
        },
      },
      {
        path: ':id',
        name: 'productitem',
        component: () => import('@/views/ProductItemView.vue'),
        props: true,
      },
    ],
  },
  {
    path: '/tabs',
    name: 'tabs',
    component: () => import('../views/TabsView.vue'),
    meta: { title: 'Tabs Page' },
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/LoginView.vue'),
    meta: {
      title: '登入',
    },
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: () => import('@/views/NotFoundView.vue'),
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

const DEFAULT_TITLE = 'Vue 高手直達車'
router.beforeEach((to, from, next) => {
  document.title = to.meta.title ? `${to.meta.title} | ${DEFAULT_TITLE}` : DEFAULT_TITLE
  next()
})

export default router
