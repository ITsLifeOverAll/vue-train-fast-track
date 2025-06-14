<template>
    <div>
        <video ref="videoPlayer" class="video-js"></video>
    </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
import videojs from 'video.js'
import 'video.js/dist/video-js.css'

const props = defineProps({
    options: {
        type: Object,
        default: () => ({})
    }
})

const videoPlayer = ref(null)
let player = null

onMounted(() => {
    player = videojs(videoPlayer.value,
        props.options,
        function () {
            console.log('onPlayerReady')
        })
})

onBeforeUnmount(() => {
    if (player) {
        player.dispose()
        player = null
    }
})
</script>
