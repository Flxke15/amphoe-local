import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useUserStore = defineStore('user', () => {
  const user = ref(null)

  const setUser = (userData) => {
    user.value = userData
    localStorage.setItem('user', JSON.stringify(userData))
  }

  const loadUser = () => {
    const saved = localStorage.getItem('user')
    if (saved) user.value = JSON.parse(saved)
  }

  const clearUser = () => {
    user.value = null
    localStorage.removeItem('user')
  }

  const isAuthenticated = () => !!user.value

  return {
    user,
    setUser,
    loadUser,
    clearUser,
    isAuthenticated,
  }
})
