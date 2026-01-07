<template>
  <v-main v-if="route.name != 'Login'">
    <Navigation />
    <v-container class="pa-8" fluid>
      <router-view />
    </v-container>
  </v-main>
  <v-main v-else>
    <v-container fluid>
      <router-view />
    </v-container>
  </v-main>
  <AppFooter />
</template>

<script setup>
import { onMounted } from 'vue';
import { useRoute } from 'vue-router'
const route = useRoute()

onMounted(() => {
  console.log("🚀 ~ route:", route.name)
})
</script>