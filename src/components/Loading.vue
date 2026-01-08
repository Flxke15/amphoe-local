<template>
  <div class="loading-overlay" :class="{ 'hidden': !localValue }">
        <div class="comet-spinner">
          <div class="orbit"></div>
          <div class="spinner-ring">
            <div class="comet-head"></div>
          </div>
          <v-icon class="astro-icon" size="60" color="blue-lighten-4">mdi-rocket-launch-outline</v-icon>
        </div>
        <div class="loading-text text-h6">Entering Hyperspace...</div>
      </div>
</template>

<script setup>
const localValue = defineModel()
</script>

<style scoped>
  .loading-overlay {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: #050a14;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      z-index: 9999;
      transition: opacity 1.2s cubic-bezier(0.4, 0, 0.2, 1), 
                  visibility 1.2s cubic-bezier(0.4, 0, 0.2, 1),
                  transform 1.2s cubic-bezier(0.4, 0, 0.2, 1);
    }

    .loading-overlay.hidden {
      opacity: 0;
      visibility: hidden;
      transform: scale(1.1);
    }

    .main-content-wrapper {
      opacity: 0;
      transition: opacity 1.5s ease;
    }

    /* ตัวดาวหางที่หมุนรอบ */
    .comet-spinner {
      position: relative;
      width: 150px;
      height: 150px;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .orbit {
      position: absolute;
      width: 100%;
      height: 100%;
      border-radius: 50%;
      border: 1px solid rgba(255, 255, 255, 0.05);
    }

    .comet-head {
      position: absolute;
      top: 0;
      left: 50%;
      width: 8px;
      height: 8px;
      background: #fff;
      border-radius: 50%;
      box-shadow: 0 0 15px 2px var(--comet-glow), 0 0 30px 5px var(--astro-blue);
      transform: translateX(-50%);
    }

    /* หางดาวหางที่หมุนวน */
    .spinner-ring {
      position: absolute;
      width: 100%;
      height: 100%;
      border-radius: 50%;
      border: 2px solid transparent;
      border-top: 2px solid var(--comet-glow);
      animation: orbit-rotate 1.5s linear infinite;
    }

    @keyframes orbit-rotate {
      from { transform: rotate(0deg); }
      to { transform: rotate(360deg); }
    }

    .astro-icon {
      animation: float 3s ease-in-out infinite;
      z-index: 10;
    }

    @keyframes float {
      0%, 100% { transform: translateY(0); }
      50% { transform: translateY(-10px); }
    }

    .loading-text {
      margin-top: 30px;
      color: white;
      letter-spacing: 4px;
      font-weight: 300;
      text-transform: uppercase;
      animation: pulse-glow 2s infinite;
    }

    @keyframes pulse-glow {
      0%, 100% { opacity: 0.5; text-shadow: 0 0 5px var(--comet-glow); }
      50% { opacity: 1; text-shadow: 0 0 20px var(--astro-blue); }
    }
</style>