import { defineStore } from 'pinia'
import { computed, ref } from 'vue'

export const useUserStore = defineStore('user', () => {
  const Cookies = window.Cookies
  const userId = ref(Cookies.get('userId') ? parseInt(Cookies.get('userId')) : 0)

  const userName = computed(() => {
    return `user ${userId.value}`
  })
  const isLogin = computed(() => {
    return userId.value > 0
  })
  const login = (id) => {
    userId.value = id
    Cookies.set('userId', id, { expires: 7 }) // 設定 cookie 有效期為 7 天
  }
  const logout = () => {
    userId.value = 0
    Cookies.remove('userId') // 移除 cookie
  }

  return { userId, userName, isLogin, login, logout }
})
