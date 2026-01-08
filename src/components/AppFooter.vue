<template>
  <v-footer app height="40" class="glassy-card" >
    <div class="text-caption text-disabled" style="position: absolute; right: 16px;" >
      <p class="text-white">v-footer {{ systemName }} - Version {{ version }}</p>
    </div>
  </v-footer>
</template>

<script setup>

const version = process.env.VERSION
const systemName = process.env.APP_SYSTEM_NAME

</script>

<style scoped>
.glassy-card {
  /* From https://css.glass */
  background: rgba(104, 6, 154, 0.2);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
}
</style>
