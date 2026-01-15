<template>
  <v-card rounded="0">
    <v-img
      src="@/assets/images/test.jpg"
      cover
      :height="xs ? '90vh' : '100vh'"
    >
      <template #placeholder>
        <v-skeleton-loader type="image" height="100%" />
      </template>
      <!-- Content ของ card -->
      <v-card
        :variant="vCardProps.variant"
        :color="vCardProps.color"
        class="text-white mt-6"
      >
        <v-card-text class="pa-2 mx-4" variant="outlined">
          <v-row align="center">
            <!-- Logo + Title -->
            <v-col cols="12" sm="auto" class="d-flex align-center">
              <v-icon size="60" color="white" class="mr-4">mdi-home-assistant</v-icon>
              <div>
                <div class="text-h5 text-sm-h4 font-weight-bold">อำเภอดอทคอม{{ titleCC }}</div>
                <div class="text-subtitle-2 text-grey-lighten-2">กรมการปกครอง กระทรวงมหาดไทย</div>
              </div>
            </v-col>
            <v-spacer />
            <!-- Controls -->
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
      <v-card-text>
        <div v-if="!xs">
          <v-row>
            <v-col cols="12" sm="4">
              <v-carousel height="300">
                <v-carousel-item
                  src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
                  cover
                ></v-carousel-item>

                <v-carousel-item
                  src="https://cdn.vuetifyjs.com/images/cards/hotel.jpg"
                  cover
                ></v-carousel-item>

                <v-carousel-item
                  src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
                  cover
                ></v-carousel-item>
              </v-carousel>
            </v-col>
          </v-row>
        </div>
      </v-card-text>
      <v-card-actions class="search-actions">
          <v-row justify="center">
            <v-col cols="12" sm="4">
              <Autocomplete
                v-model="dataSelect.cc"
                placeholder="เลือกจังหวัด"
                :items="listCC"
                item-title="description"
                item-value="code"
                return-object
                prepend-inner-icon="mdi-map-marker-outline"
                clearable
                base-color="red"
              />
            </v-col>
            <v-col cols="12" sm="4">
              <Autocomplete
                v-model="dataSelect.aa"
                prepend-inner-icon="mdi-map-marker-outline"
                :items="[
                  'จังหวัดสมุทรปราการ',
                  'จังหวัดกรุงเทพมหานคร',
                  'จังหวัดนนทบุรี',
                  'จังหวัดปทุมธานี',
                  'จังหวัดสมุทรสาคร',
                ]"
                placeholder="เลือกอำเภอ"
                clearable
              />
            </v-col>
          </v-row>
        </v-card-actions>
    </v-img>
  </v-card>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useDisplay } from 'vuetify'

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
  return dataSelect.value.cc?.description ? ` - ${dataSelect.value.cc?.description}` : ''
})

const defaultDataSelect = {
  cc: null,
  aa: null
}
const listCC = getListsCC(true)

const dataSelect = ref(structuredClone(defaultDataSelect))
</script>

<style scoped>
.search-actions {
  position: absolute;
  bottom: 20px;
  left: 0;
  right: 0;
}
</style>