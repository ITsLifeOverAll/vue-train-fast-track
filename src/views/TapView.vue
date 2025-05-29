<template>
    <h1 class="title is-3 has-text-centered">Tap 點看看</h1>
    <h2 class="subtitle is-4 has-text-centered p-4">Total score: {{ totalScore }}</h2>
    <div class="container level-right p-4">
        <div class="button is-primary" @click="reset">Reset</div>
    </div>

    <div class="columns container">
        <div class="column" v-for="(button, index) in buttons" :key="button.id">
            <h2 class="subtitle is-4 has-text-centered">
                {{ `Column ${index + 1}: ` }} {{ scores[index] }}
            </h2>
            <BigButton class="button is-large is-fullwidth" :id="index">
                {{ button.text }}
                <span class="p-2">( {{ lastTapId }} )</span>
            </BigButton>
        </div>
    </div>

</template>

<script setup>
import { ref, computed } from 'vue'
import BigButton from '@/components/BigButton.vue'
import { useTapScoreStore } from '@/stores/tapScore'
import { storeToRefs } from 'pinia'
const tapScoreStore = useTapScoreStore()

const buttons = [
    { id: 0, text: 'Button 1' },
    { id: 1, text: 'Button 2' },
    { id: 2, text: 'Button 3' },
    { id: 3, text: 'Button 4' },
]

const { scores, totalScore, lastTapId } = storeToRefs(tapScoreStore)

const reset = () => {
    tapScoreStore.resetScore()
}

</script>