<template>
  <div class="map-wrapper">
    <iframe
      :src="mapUrl"
      class="map-iframe"
      allowfullscreen=""
      loading="lazy"
      referrerpolicy="no-referrer-when-downgrade"
      title="แผนที่ Google Maps"
    ></iframe>
    <!-- Overlay เพื่อป้องกันการ interact กับ map -->
    <div v-if="disableInteraction" class="map-overlay"></div>
  </div>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  lat: {
    type: Number,
    default: 13.7563 // จุดกลางประเทศไทย (กรุงเทพฯ)
  },
  lon: {
    type: Number,
    default: 101.492 // จุดกลางประเทศไทย
  },
  zoom: {
    type: Number,
    default: 6 // ให้เห็นทั้งประเทศไทย
  },
  disableInteraction: {
    type: Boolean,
    default: true
  },
  height: {
    type: String,
    default: '100%'
  },
  width: {
    type: String,
    default: '100%'
  },
  borderRadius: {
    type: String,
    default: '8px'
  }
})

// สร้าง Google Maps Embed URL แบบไม่ใช้ API Key
const mapUrl = computed(() => {
  return `https://maps.google.com/maps?q=${props.lat},${props.lon}&z=${props.zoom}&output=embed`
})
</script>

<style scoped>
.map-wrapper {
  position: relative;
  width: v-bind(width);
  height: v-bind(height);
  border-radius: v-bind(borderRadius);
  overflow: hidden;
}

.map-iframe {
  width: 100%;
  height: 100%;
  border: 0;
}

/* Overlay เพื่อป้องกันการ interact กับ map */
.map-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: transparent;
  cursor: default;
  z-index: 1;
}
</style>
