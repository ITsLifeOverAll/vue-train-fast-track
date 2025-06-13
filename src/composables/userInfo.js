import { toValue, watchEffect } from 'vue'
import { ref } from 'vue'
import axios from 'axios'

export function useUserInfo(userId) {
  const data = ref(null)
  const error = ref(null)

  const fetchUserInfo = () => {
    data.value = null
    error.value = null

    const userIdStr = toValue(userId)
    console.log('Fetching user info for ID:', userIdStr)
    if (!userIdStr) {
      error.value = 'User ID is required'
      return
    }

    axios
      .get(`https://jsonplaceholder.typicode.com/users/${userIdStr}`)
      .then((response) => {
        data.value = response.data
      })
      .catch((err) => {
        error.value = err.message || 'Failed to fetch user info'
      })
  }

  watchEffect(() => {
    fetchUserInfo()
  })

  return {
    data,
    error,
  }
}
