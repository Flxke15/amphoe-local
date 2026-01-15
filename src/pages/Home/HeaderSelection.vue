<template>
  <v-card rounded="0">
    <v-img
      src="@/assets/images/test.jpg"
      cover
      :height="xs ? '90vh' : '80vh'"
    >
      <template #placeholder>
        <v-skeleton-loader type="image" height="100%" />
      </template>
      <v-card
        :variant="vCardProps.variant"
        :color="vCardProps.color"
        class="text-white mt-6"
      >
        <v-card-text class="pa-2 mx-4" variant="outlined">
          <v-row align="center">
            <v-col cols="12" sm="auto" class="d-flex align-center">
              <v-avatar size="56" class="mr-4 bg-transparent">
                <v-img :src="amphoeLogoUrl" />
              </v-avatar>
              <div>
                <p class="font-weight-light text-h6">อำเภอดอทคอม{{ titleCC }}</p>
                <p class="font-weight-thin text-subtitle-2">กรมการปกครอง กระทรวงมหาดไทย</p>
              </div>
            </v-col>
            <v-spacer />
            <v-col cols="12" sm="auto" class="d-flex align-center justify-sm-end" v-if="!xs">
              <FontSizeController />
              <ThemeController />
            </v-col>
          </v-row>
        </v-card-text>
      </v-card>
      <v-card variant="flat" color="transparent" class="text-white" v-if="xs">
        <v-row>
          <v-spacer />
          <v-col cols="auto" class="d-flex align-center justify-sm-end">
            <FontSizeController />
            <ThemeController />
          </v-col>
        </v-row>
      </v-card>
      <v-card-text v-if="!xs">
        <v-row justify="end">
          <v-col cols="auto">
            <v-list-item
              prepend-avatar="@/assets/images/dopa-logo.png"
              class="text-white"
            >
              <template #title>
                <p class="font-weight-bold">กรมการปกครอง</p>
                <p class="font-weight-light text-subtitle-2">กระทรวงมหาดไทย</p>
              </template>
            </v-list-item>
          </v-col>
        </v-row>
        <v-row justify="end">
          <v-col cols="12" sm="6" md="4">
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
          </v-col>
        </v-row>
      </v-card-text>
      <v-card-text class="search-actions">
        <v-row justify="center">
          <v-col cols="12" sm="4">
            <Autocomplete
              v-model="dataSelect.cc"
              placeholder="เลือกจังหวัด"
              :items="listCC"
              item-title="description"
              item-value="code"
              return-object
              density="default"
              prepend-inner-icon="mdi-map-marker-outline"
              clearable
              base-color="red"
            />
          </v-col>
          <v-col cols="12" sm="4">
            <Autocomplete
              v-model="dataSelect.aa"
              prepend-inner-icon="mdi-map-marker-outline"
              :items="[]"
              placeholder="เลือกอำเภอ"
              clearable
              density="default"
            />
          </v-col>
        </v-row>
      </v-card-text>
    </v-img>
  </v-card>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useDisplay } from 'vuetify'
import amphoeLogoUrl from '@/assets/images/amphoe-logo.svg'

import { getListsCC } from '@/constants/province'

const { xs } = useDisplay()

const vCardProps = computed(() => {
  if (xs.value) {
    return {
      variant: 'tonal',
      color: '',
    }
  } else {
    return {
      variant: 'flat',
      color: 'transparent',
    }
  }
})
const titleCC = computed(() => {
  return dataSelect.value.cc?.description ? ` - จังหวัด${dataSelect.value.cc?.description}` : ''
})

const defaultDataSelect = {
  cc: null,
  aa: null
}
const listCC = getListsCC(true)

const dataSelect = ref(structuredClone(defaultDataSelect))

const currentSlide = ref(0)
const carouselItems = ref([
  { src: new URL('@/assets/images/news1.jpg', import.meta.url).href },
  { src: 'https://cdn.vuetifyjs.com/images/cards/hotel.jpg' },
  { src: 'https://cdn.vuetifyjs.com/images/cards/sunshine.jpg' },
])
</script>

<style scoped>
.search-actions {
  position: absolute;
  bottom: 10px;
  left: 0;
  right: 0;
}

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