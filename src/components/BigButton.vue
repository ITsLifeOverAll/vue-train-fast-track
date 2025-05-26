<template>
    <button class="button is-large is-fullwidth" @click="strike">
        <slot></slot>
    </button>
</template>

<script setup>
import { ref } from 'vue'

const props = defineProps({
    id: {
        type: Number,
        required: true
    }
})

const emit = defineEmits(['strike'])

console.log('props', props)

const strike = () => {
    console.log('strike', props.id)
    emit('strike', { id: props.id, datetime: new Date() })
}
</script>