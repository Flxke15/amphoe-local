<template>
  <div class="font-size-controller">
    <!-- ปุ่มเพิ่ม/ลดขนาด font -->
    <v-btn
      icon
      variant="text"
      size="small"
      :disabled="!fontStore.canIncrease"
      @click="fontStore.increaseFontSize()"
    >
      <span class="font-btn-text">ก+</span>
    </v-btn>
    <v-btn
      icon
      variant="text"
      size="small"
      :disabled="!fontStore.canDecrease"
      @click="fontStore.decreaseFontSize()"
    >
      <span class="font-btn-text">ก-</span>
    </v-btn>
  </div>
</template>

<script setup>
import { useFontStore } from '@/stores/font'

const fontStore = useFontStore()
</script>

<style scoped>
.font-size-controller {
  display: flex;
  align-items: center;
  gap: 4px;
}

.font-btn-text {
  font-size: var(--app-font-size, 16px);
  font-weight: 500;
}
</style>