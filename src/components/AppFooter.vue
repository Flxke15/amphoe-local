<template>
  <v-footer app height="40" class="bg-app-color" >
    <div class="text-caption text-disabled" style="position: absolute; right: 16px;" >
      <p class="text-white">v-footer {{ systemName }} - Version {{ version }}</p>
    </div>
  </v-footer>
</template>

<script setup>

const version = process.env.VERSION
const systemName = process.env.APP_SYSTEM_NAME

</script>
