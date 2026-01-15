// Utilities
import { defineStore } from 'pinia'

const FONT_SIZES = {
  small: 14,
  medium: 16,
  large: 20,
  xlarge: 24,
}

export const useFontStore = defineStore('font', {
  state: () => ({
    fontSize: localStorage.getItem('fontSize') || 'medium',
  }),
  getters: {
    fontSizeValue: (state) => FONT_SIZES[state.fontSize] || FONT_SIZES.medium,
    fontSizeLabel: (state) => {
      const labels = {
        small: 'เล็ก',
        medium: 'ปกติ',
        large: 'ใหญ่',
        xlarge: 'ใหญ่มาก',
      }
      return labels[state.fontSize] || labels.medium
    },
    canIncrease: (state) => {
      const sizes = Object.keys(FONT_SIZES)
      const currentIndex = sizes.indexOf(state.fontSize)
      return currentIndex < sizes.length - 1
    },
    canDecrease: (state) => {
      const sizes = Object.keys(FONT_SIZES)
      const currentIndex = sizes.indexOf(state.fontSize)
      return currentIndex > 0
    },
  },
  actions: {
    setFontSize(size) {
      if (FONT_SIZES[size]) {
        this.fontSize = size
        localStorage.setItem('fontSize', size)
        this.applyFontSize()
      }
    },
    increaseFontSize() {
      const sizes = Object.keys(FONT_SIZES)
      const currentIndex = sizes.indexOf(this.fontSize)
      if (currentIndex < sizes.length - 1) {
        this.setFontSize(sizes[currentIndex + 1])
      }
    },
    decreaseFontSize() {
      const sizes = Object.keys(FONT_SIZES)
      const currentIndex = sizes.indexOf(this.fontSize)
      if (currentIndex > 0) {
        this.setFontSize(sizes[currentIndex - 1])
      }
    },
    applyFontSize() {
      document.documentElement.style.setProperty('--app-font-size', `${this.fontSizeValue}px`)
    },
    initFontSize() {
      this.applyFontSize()
    },
  },
})
