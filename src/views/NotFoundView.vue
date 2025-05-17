<template>
    <section class="hero is-warning m-4">
        頁面不存在:
        <p> {{ route.fullPath }}</p>

    </section>
    <div class="has-text-centered">
        <button class="button is-primary" @click="clicked">返回首頁</button>
    </div>
</template>

<script setup>
import { useRoute, useRouter } from 'vue-router'

const route = useRoute();
const router = useRouter();

const clicked = () => {
    console.log('route', route);

    router.push({ name: 'home' });
}

</script>
