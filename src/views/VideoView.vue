<template>
    <div>
        <div class="container is-max-desktop">
            <h1 class="title is-4 has-text-centered">影片置中</h1>
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
    autoplay: true,
    controls: true,
    sources: [
        {
            src: 'https://videos.pexels.com/video-files/32495488/13857041_640_360_30fps.mp4',
            type: 'video/mp4'
        }
    ]
})
</script>
