<template>
  <v-app>
    <router-view />
  </v-app>
</template>

<script setup>
import { onMounted } from 'vue'
import { useFontStore } from '@/stores/font'

const fontStore = useFontStore()

onMounted(() => {
  fontStore.initFontSize()
})
</script>
