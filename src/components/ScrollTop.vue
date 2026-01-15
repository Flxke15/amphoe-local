<template>
  <v-fab-transition>
    <v-btn
      v-if="shouldShowFab"
      color="app-color"
      icon
      dark
      class="backToTop"
      @click="scrollToTop"
    >
      <v-icon>mdi-chevron-up</v-icon>
    </v-btn>
  </v-fab-transition>
</template>

<script>
export default {
  data() {
    return {
      shouldShowFab: false,
      scrollContainer: null,
    }
  },
  mounted() {
    // หา scroll container - ลอง v-main ก่อน ถ้าไม่มีใช้ window
    this.scrollContainer = document.querySelector('.v-main') || window
    this.scrollContainer.addEventListener('scroll', this.toggleButton)
    window.addEventListener('scroll', this.toggleButton)
  },
  beforeUnmount() {
    if (this.scrollContainer) {
      this.scrollContainer.removeEventListener('scroll', this.toggleButton)
    }
    window.removeEventListener('scroll', this.toggleButton)
  },
  methods: {
    toggleButton() {
      const scrollY = this.scrollContainer === window 
        ? window.scrollY 
        : (this.scrollContainer?.scrollTop || window.scrollY)
      this.shouldShowFab = scrollY > 100
    },
    scrollToTop() {
      if (this.scrollContainer && this.scrollContainer !== window) {
        this.scrollContainer.scrollTo({
          top: 0,
          behavior: 'smooth',
        })
      }
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      })
    },
  },
}
</script>

<style scoped>
.backToTop {
  position: fixed;
  right: 20px;
  bottom: 80px;
  z-index: 6;
  opacity: 40%;
}
</style>
