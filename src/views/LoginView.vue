<template>
    <div class="container has-text-centered">
        <h1 class="title is-3">登入 (Login)</h1>
        <button class="button is-primary" @click="login">
            點按我，就登入
        </button>
    </div>
</template>

<script setup>
import { useUserStore } from '@/stores/user'
import { useRoute, useRouter } from 'vue-router'

const userStore = useUserStore()
const route = useRoute()
const router = useRouter()

const login = () => {
    userStore.login(1)

    console.log('userId', userStore.userId)
    console.log('userName', userStore.userName)
    console.log('isLogin', userStore.isLogin)

    if (route.query.redirect) {
        // 如果有 redirect 參數，則重定向到該路徑
        router.push(route.query.redirect)
    } else {
        // 否則重定向到首頁
        router.push('/')
    }
}
</script>
