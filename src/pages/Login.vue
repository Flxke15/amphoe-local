<template>
  <!-- <v-container class="d-flex justify-center align-center h-screen" fluid>
    <v-card class="glassy-card pa-8" max-width="800" width="100%">
      <v-card-title>
        <p class="text-h4 text-center">Astro System</p>
      </v-card-title>
      <v-divider />
      <v-card-text>
        <v-form>
          <v-row>
            <v-col>
              <TextField
                label="Email"
                placeholder="Enter your email"
                clearable
              />
            </v-col>
          </v-row>
          <v-row>
            <v-col>
              <TextField
                label="Password"
                placeholder="Enter your password"
                :type="passwordType"
                clearable
                :append-inner-icon="eyeIcon"
                @click:append-inner="watchPassword"
              />
            </v-col>
          </v-row>
        </v-form>
      </v-card-text>
      <v-divider />
      <v-card-actions>
        <v-row justify="center">
          <v-col cols="12" sm="8">
            <v-btn
              text="Login"
              variant="flat"
              width="100%"
              height="60"
              class="glassy-btn"
              @click="onLogin"
            />
          </v-col>
        </v-row>
      </v-card-actions>
    </v-card>
  </v-container> -->
  <v-container class="fill-height d-flex align-center justify-center" fluid>
    <v-row justify="center">
      <v-col cols="12" md="6" class="text-center">
        <v-card class="glass-card pa-10" elevation="0">
          <v-icon size="64" color="blue-lighten-3" class="mb-4">
            mdi-star-shooting
          </v-icon>
          <h1 class="text-h2 font-weight-black text-white mb-4 hero-text">
            Comets System
          </h1>
          <v-row>
            <v-col cols="12">
              <TextField
                label="อีเมล"
                placeholder="กรอกอีเมลของคุณ"
                clearable
              />
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="12">
              <TextField
                label="รหัสผ่าน"
                placeholder="กรอกรหัสผ่านของคุณ"
                :type="passwordType"
                clearable
                :append-inner-icon="eyeIcon"
                @click:append-inner="watchPassword"
              />
            </v-col>
          </v-row>
          <v-btn
            color="blue-darken-2"
            size="large"
            variant="flat"
            rounded="lg"
            class="px-8 mt-4"
            @click="onLogin"
          >
            เข้าสู่ระบบ
          </v-btn>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
  <Loading v-model="loadingPage" />
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { useUserStore } from '@/stores/user'

import { apiUsers } from '@/services'

const router = useRouter()
const userStore = useUserStore()

const eyeIcon = computed(() => {
  return eye.value ? 'mdi-eye' : 'mdi-eye-off'
})
const passwordType = computed(() => {
  return eye.value ? 'text' : 'password'
})

const eye = ref(false)
const loadingPage = ref(false)

const watchPassword = () => {
  eye.value = !eye.value
}

const onLogin = async () => {
  loadingPage.value = true;
  await new Promise(resolve => setTimeout(resolve, 2000)); // Simulate loading for 2 seconds
  // Handle login logic here
  userStore.setUser({
    name: 'danii user',
    email: 'danii@example.com',
    role: 'admin' // Possible roles: 'admin', 'editor', 'viewer'
  })
  router.push({ name: 'Home' })
  loadingPage.value = false;
}

onMounted(async () => {
  // Any initialization logic can go here
  // const res = await apiUsers.getListUsers()
  // console.log(res.data)
})
</script>

<style scoped>
.glassy-card {
  backdrop-filter: blur(4px) saturate(180%);
  -webkit-backdrop-filter: blur(4px) saturate(180%);
  background-color: rgba(17, 25, 40, 0.75);
  border-radius: 12px;
  border: 1px solid rgba(255, 255, 255, 0.125);
}

.glassy-btn {
  background: rgba(144, 21, 206, 0.2);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
}
</style>