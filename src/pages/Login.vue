<template>
  <v-container class="d-flex justify-center align-center h-screen" fluid>
    <v-card>
      <v-card-title>
        <p class="text-h4 text-center">Test System Login</p>
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
              color="primary"
              width="100%"
              @click="onLogin"
            />
          </v-col>
        </v-row>
      </v-card-actions>
    </v-card>
  </v-container>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'
import { useUserStore } from '@/stores/user'

const router = useRouter()
const userStore = useUserStore()

const eyeIcon = computed(() => {
  return eye.value ? 'mdi-eye' : 'mdi-eye-off'
})
const passwordType = computed(() => {
  return eye.value ? 'text' : 'password'
})

const eye = ref(false)

const watchPassword = () => {
  eye.value = !eye.value
}

const onLogin = () => {
  // Handle login logic here
  userStore.setUser({
    name: 'danii user',
    email: 'danii@example.com',
    role: 'admin' // Possible roles: 'admin', 'editor', 'viewer'
  })
  router.push({ name: 'Home' })
}
</script>