<template>
    <div>
        <video ref="videoPlayer" class="video-js"></video>
    </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
import videojs from 'video.js'
import 'video.js/dist/video-js.css'
import zhTW from '@/languages/videojs/zh-TW.json'
import 'videojs-youtube'

const props = defineProps({
    options: {
        type: Object,
        default: () => ({})
    }
})

videojs.addLanguage('zh-TW', zhTW)

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
