import { createWebHistory, createRouter } from 'vue-router'
import { useUserStore } from '@/stores/user.js'
import { createWebHashHistory } from 'vue-router'

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
    path: '/tap',
    name: 'tap',
    component: () => import('@/views/TapView.vue'),
    meta: {
      title: '點點看',
    },
  },
  {
    path: '/promise',
    name: 'promise',
    component: () => import('@/views/PromiseView.vue'),
    meta: {
      title: 'Promise 示範',
    },
  },
  {
    path: '/apidemo',
    name: 'apidemo',
    component: () => import('@/views/ApiDemoView.vue'),
    meta: {
      title: 'API Demo',
    },
  },
  {
    path: '/async',
    name: 'async',
    component: () => import('@/views/AsyncView.vue'),
    meta: {
      title: 'Async/Await 示範',
    },
  },
  {
    path: '/transition',
    name: 'transition',
    component: () => import('@/views/TransitionView.vue'),
    meta: {
      title: '轉場效果',
    },
  },
  {
    path: '/watch',
    name: 'watch',
    component: () => import('@/views/WatchView.vue'),
    meta: {
      title: 'Watch 示範',
    },
  },
  {
    path: '/composables',
    name: 'composables',
    component: () => import('@/views/ComposablesView.vue'),
    meta: {
      title: 'Composables 示範',
    },
  },
  {
    path: '/modal',
    name: 'modal',
    component: () => import('@/views/ModalView.vue'),
    meta: {
      title: 'Modal 示範',
    },
  },
  {
    path: '/video',
    name: 'video',
    component: () => import('@/views/VideoView.vue'),
    meta: {
      title: 'Video 示範 (videojs)',
    },
  },
  {
    path: '/youtube',
    name: 'youtube',
    component: () => import('@/views/YoutubeView.vue'),
    meta: {
      title: 'YouTube 示範',
    },
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: () => import('@/views/NotFoundView.vue'),
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

const DEFAULT_TITLE = 'Vue 高手直達車'
router.beforeEach((to, from, next) => {
  document.title = to.meta.title ? `${to.meta.title} | ${DEFAULT_TITLE}` : DEFAULT_TITLE
  next()
})

export default router
