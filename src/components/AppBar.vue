<template>
  <v-app-bar :elevation="2" class="px-2">
    <v-app-bar-title>{{ systemName }}</v-app-bar-title>
    <v-menu transition="fade-transition">
      <template v-slot:activator="{ props }">
        <v-list v-bind="props">
          <v-list-item prepend-avatar="https://cdn.vuetifyjs.com/images/john.jpg" >
            <v-list-item-title>{{ profile.name }}</v-list-item-title>
            <v-list-item-subtitle>{{ profile.role }}</v-list-item-subtitle>
          </v-list-item>
        </v-list>
      </template>
      <v-list>
        <v-list-item
          v-for="(item, index) in listMenu"
          :key="index"
          :value="index"
          :prepend-icon="item.icon"
          @click="onClickMenu(item)"
        >
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
  </v-app-bar>
</template>

<script setup>
import { useRouter } from 'vue-router'
import { useUserStore } from '@/stores/user'
import { alert } from '@/helpers/alert'

const router = useRouter()
const userStore = useUserStore()

const systemName = process.env.APP_SYSTEM_NAME
const listMenu = [
  { 
    title: 'Profile',
    icon: 'mdi-account-circle'
  },
  { 
    title: 'Settings',
    icon: 'mdi-cog'
  },
  { 
    title: 'Logout',
    icon: 'mdi-logout'
  }
]

const profile = computed(() => {
  return {
    name: userStore.user?.name || 'Guest',
    email: userStore.user?.email || 'guest@example.com',
    role: userStore.user?.role || 'viewer'
  }
})

const onClickMenu = (item) => {
  console.log("🚀 ~ onClickMenu ~ item:", item)
  switch (item.title) {
    case 'Profile':
      // Navigate to profile page
      break;
    case 'Settings':
      // Navigate to settings page
      break;
    case 'Logout':
      logout()
      break;
    default:
      break;
  }
}

const logout = () => {
  alert({
    icon: 'question',
    title: 'Are you sure to logout?',
    showCancelButton: true,
    confirmButtonText: 'Yes, Logout!',
    cancelButtonText: 'Cancel',
  }).then((result) => {
    if (result.isConfirmed) {
      userStore.clearUser()
      router.push({ name: 'Login' })
    }
  })
}
</script>