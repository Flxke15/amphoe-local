<template>
  <v-card
    image="@/assets/images/test.jpg"
    height="100%"
    rounded="0"
  >
    <v-card
      :variant="vCardProps.variant"
      :color="vCardProps.color"
      class="text-white mt-6 mx-10"
      :title="`อำเภอดอทคอม - ${titleCC}`"
      subtitle="กรมการปกครอง กระทรวงมหาดไทย"
    >
      <template #prepend>
        <v-icon size="60" color="white">mdi-home-assistant</v-icon>
      </template>
      <template #append>
        <FontSizeController />
        <ThemeController />
      </template>
    </v-card>
    <v-card-actions class="search-actions">
        <v-row justify="center">
          <v-col xs="12" sm="4">
            <Autocomplete
              prepend-inner-icon="mdi-map-marker-outline"
              :items="[
                'จังหวัดสมุทรปราการ',
                'จังหวัดกรุงเทพมหานคร',
                'จังหวัดนนทบุรี',
                'จังหวัดปทุมธานี',
                'จังหวัดสมุทรสาคร',
              ]"
              placeholder="เลือกจังหวัด"
              clearable
              base-color="red"
              
            />
          </v-col>
          <v-col xs="12" sm="4">
            <Autocomplete
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
  </v-card>
  <v-card>
    <p class="text-h1">
      คำขวัญ
    </p>
  </v-card>
  <ScrollTop />

</template>

<script setup>
import ScrollTop from '@/components/ScrollTop.vue'
import { ref, watch, computed } from 'vue'
import { useDisplay } from 'vuetify'

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

const titleCC = ref('จังหวัดสมุทรปราการ')

watch(xs, (newVal) => {
  console.log(newVal);
}, { immediate: true })
</script>

<style scoped>
.search-actions {
  position: absolute;
  bottom: 104px;
  left: 0;
  right: 0;
}
</style>