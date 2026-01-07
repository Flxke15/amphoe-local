<template>
  <v-navigation-drawer 
    expand-on-hover
    permanent
    rail
    @update:rail="onRailChange"
  >
    <v-list
      v-model:opened="openedGroups"
      v-model:selected="selectedMenu"
      lines="two"
      class="py-0"
    >
      <template v-for="item in listMenu" :key="item.title">
        <v-list-group v-if="item.subItems" :value="item.title">
          <template v-slot:activator="{ props }">
            <v-list-item
              v-bind="props"
              :title="item.title"
              :prepend-icon="item.icon"
            />
          </template>
          <v-list-item
            v-for="subItem in item.subItems"
            :key="subItem.title"
            :title="subItem.title"
            :prepend-icon="subItem.icon"
            :to="subItem.to"
            :value="subItem.to"
            link
            :disabled="!subItem.isActive"
          />
        </v-list-group>
        <v-list-item
          v-else
          :title="item.title"
          :prepend-icon="item.icon"
          :to="item.to"
          :value="item.to"
          link
        />
      </template>
    </v-list>
  </v-navigation-drawer>
  <AppBar />
</template>

<script setup>
import { ref, watch } from 'vue'
import { useRoute } from 'vue-router'
// constants
import { getListMenu } from '@/constants/menu'
import AppBar from './AppBar.vue'

const route = useRoute()
const listMenu = getListMenu()
const openedGroups = ref([])
const selectedMenu = ref([route.path])

// เมื่อเปลี่ยนหน้า ให้อัพเดท active menu
watch(() => route.path, (newPath) => {
  selectedMenu.value = [newPath]
})

const onRailChange = (isRail) => {
  // เมื่อ drawer หด (rail = true) ให้ปิด list group ทั้งหมด
  if (isRail) {
    openedGroups.value = []
  }
}
</script>