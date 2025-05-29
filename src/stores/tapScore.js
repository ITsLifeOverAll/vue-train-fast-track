import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useTapScoreStore = defineStore('tapScore', () => {
  const scores = ref([0, 0, 0, 0])
  const totalScore = computed(() => {
    return scores.value.reduce((acc, score) => acc + score, 0)
  })
  const lastTapId = ref(null)

  const incrementScore = (index) => {
    if (index < 0 || index >= scores.value.length) {
      console.error('Index out of bounds')
      return
    }
    scores.value[index] += 1
    lastTapId.value = index + 1
  }

  const resetScore = () => {
    scores.value = [0, 0, 0, 0]
    lastTapId.value = null
  }

  return { scores, totalScore, lastTapId, incrementScore, resetScore }
})
