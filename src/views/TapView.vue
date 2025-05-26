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
            <BigButton class="button is-large is-fullwidth" :id="button.id" @strike="handleStrike">
                {{ button.text }}
            </BigButton>
        </div>
    </div>

</template>

<script setup>
import { ref, computed } from 'vue'
import BigButton from '@/components/BigButton.vue'

const buttons = [
    { id: 1, text: 'Button 1' },
    { id: 2, text: 'Button 2' },
    { id: 3, text: 'Button 3' },
    { id: 4, text: 'Button 4' },
]

const scores = ref([0, 0, 0, 0])
const totalScore = computed(() => scores.value.reduce((acc, score) => acc + score, 0))

const reset = () => {
    scores.value = [0, 0, 0, 0]
}

const handleStrike = ({ id, datetime }) => {
    const index = buttons.findIndex(button => button.id === id)
    if (index !== -1) {
        scores.value[index] += 1
        console.log(`Button ${id} struck at ${datetime}. New score: ${scores.value[index]}`)
    }
}

</script>