<template>
    <div>
        <div class="container is-max-desktop">
            <h1 class="title is-4 has-text-centered">影片播放</h1>
            <div class="has-text-centered">
                <VideoPlayer :options="videoOptions" />
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import VideoPlayer from '@/components/VideoPlayer.vue'

const videoOptions = ref({
    autoplay: false,
    controls: true,
    sources: [
        {
            src: 'https://youtu.be/mPy58GQ77cg',
            type: 'video/youtube'
        }
    ],
    fluid: true,
    width: 360,
    language: 'zh-TW',
    techOrder: ['html5', 'youtube'],
})
</script>
