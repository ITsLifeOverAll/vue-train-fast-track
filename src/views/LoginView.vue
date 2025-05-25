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

const userStore = useUserStore()
const login = () => {
    userStore.login(1)

    console.log('userId', userStore.userId)
    console.log('userName', userStore.userName)
    console.log('isLogin', userStore.isLogin)
}
</script>
