<template>
  <v-switch
    v-model="isDark"
    hide-details
    density="compact"
    color="primary"
    inset
    class="theme-switch"
  >
    <template #prepend>
      <v-icon size="small" :color="isDark ? 'grey' : 'yellow-darken-2'">mdi-white-balance-sunny</v-icon>
    </template>
    <template #append>
      <v-icon size="small" :color="isDark ? 'blue-lighten-3' : 'grey'">mdi-weather-night</v-icon>
    </template>
  </v-switch>
</template>

<script setup>
import { computed } from 'vue'
import { useTheme } from 'vuetify'

const theme = useTheme()

const isDark = computed({
  get: () => theme.global.current.value.dark,
  set: (value) => {
    const themeName = value ? 'dark' : 'light'
    theme.change(themeName)
    localStorage.setItem('theme', themeName)
  },
})

// โหลด theme จาก localStorage ตอนเริ่มต้น
const savedTheme = localStorage.getItem('theme')
if (savedTheme) {
  theme.change(savedTheme)
}
</script>

<style scoped>
.theme-switch :deep(.v-switch__track) {
  opacity: 1;
}
</style>
