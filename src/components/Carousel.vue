<template>
  <v-carousel 
    v-model="currentSlide"
    height="175" 
    :show-arrows="false"
    hide-delimiters
    cycle
    interval="5000"
  >
    <v-carousel-item
      v-for="(item, index) in carouselItems"
      :key="index"
      :src="item.src"
      cover
    />
  </v-carousel>
  <div class="carousel-indicators d-flex justify-center mt-2 ga-4">
    <div
      v-for="(item, index) in carouselItems.length"
      :key="index"
      class="indicator-line"
      :class="{ active: currentSlide === index }"
      @click="currentSlide = index"
    />
  </div>
</template>

<script setup>
const localValue = defineModel()

const currentSlide = ref(0)
const carouselItems = ref([
  { src: new URL('@/assets/images/news1.jpg', import.meta.url).href },
  { src: 'https://cdn.vuetifyjs.com/images/cards/hotel.jpg' },
  { src: 'https://cdn.vuetifyjs.com/images/cards/sunshine.jpg' },
])
</script>

<style scoped>
.indicator-line {
  width: 40px;
  height: 4px;
  background-color: rgba(255, 255, 255, 0.4);
  border-radius: 2px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.indicator-line.active {
  background-color: white;
}

.indicator-line:hover {
  background-color: rgba(255, 255, 255, 0.7);
}
</style>