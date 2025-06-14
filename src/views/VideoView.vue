<template>
    <div>
        <div class="container is-max-desktop">
            <h1 class="title is-4 has-text-centered">影片置中</h1>
            <VideoPlayer :options="videoOptions" />
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import VideoPlayer from '@/components/VideoPlayer.vue'

const videoOptions = ref({
    autoplay: true,
    controls: true,
    sources: [
        {
            src: '/path/to/video.mp4',
            type: 'video/mp4'
        }
    ]
})
</script>
