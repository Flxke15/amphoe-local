<template>
  <v-app>
    <router-view />
  </v-app>
</template>

<script setup>
import { onMounted } from 'vue'
import { useUserStore } from './stores/user'

const userStore = useUserStore()

onMounted(() => {
  userStore.setUser({
    name: 'danii user',
    email: 'danii@example.com',
    role: 'admin' // Possible roles: 'admin', 'editor', 'viewer'
  })
})
</script>
