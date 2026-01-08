<template>
  <p>index.vue</p>
  <p>This is the index page path = '/'</p>
  <v-btn
    text="open dialog"
    class="mt-2"
    @click="openDialog"
  />
  <v-dialog v-model="dialog" scrollable persistent width="80%" height="80%">
    <v-card>
      <v-card-title class="pa-4 mx-2">
        <p class="text-h4">Dialog Title</p>
      </v-card-title>
      <v-divider />
      <v-card-text>
        <v-row>
          <v-col cols="12" sm="4">
            <TextField
              v-model="dataDialog.name"
              label="Title"
              placeholder="Enter your title"
              clearable
            />
          </v-col>
          <v-col cols="auto">
            <v-btn
              color="green"
              variant="flat"
              @click="addItem"
            >
              <v-icon>mdi-plus</v-icon>
            </v-btn>
          </v-col>
        </v-row>
        <v-row v-for="(item, index) in dataDialog.list" :key="index">
          <v-col cols="12" sm="10">
            <TextField
              v-model="dataDialog.list[index]"
              :label="`Address ` + (index + 1)"
              :placeholder="`Enter your address ` + (index + 1)"
              clearable
            />
          </v-col>
          <v-col cols="12" sm="2">
            <v-btn
              color="red"
              variant="flat"
              @click="removeItem(index)"
            >
              <v-icon>mdi-delete</v-icon>
            </v-btn>
          </v-col>
        </v-row>
      </v-card-text>
      <v-divider />
      <v-card-actions>
        <v-spacer />
        <v-btn
          text="Reset"
          variant="flat"
          color="warning"
          @click="resetDialog"
        />
        <v-btn
          text="Close"
          variant="flat"
          @click="closeDialog"
        />
      </v-card-actions>
    </v-card>
  </v-dialog>
  <v-card color="grey" class="pa-4 mt-4">
    <v-card class="glassy-card pa-4 mt-4" color="blue">
      <v-card-title class="text-h4 white--text">
        Glassy Card
      </v-card-title>
      <v-card-text class="white--text">
        This is a glassy card using backdrop-filter CSS property.
      </v-card-text>
    </v-card>
  </v-card> 
</template>

<script setup>
import { ref } from 'vue'
import { alert } from '@/helpers/alert'

const defaultDialog = {
  name: null,
  list: ['']
}

const dataDialog = ref(structuredClone(defaultDialog))

const dialog = ref(false)

const openDialog = () => {
  dialog.value = true
}

const closeDialog = () => {
  dialog.value = false
}

const addItem = () => {
  dataDialog.value.list.push('')
}

const removeItem = (index) => {
  dataDialog.value.list.splice(index, 1)
}

const resetDialog = () => {
  alert({
    icon: 'warning',
    title: 'Are you sure to reset?',
    showCancelButton: true,
    confirmButtonText: 'Yes, Reset it!',
    cancelButtonText: 'Cancel',
  }).then((result) => {
    if (result.isConfirmed) {
      dataDialog.value = structuredClone(defaultDialog)
    }
  })
}

</script>

<style scoped>
.glassy-card {
  background: rgba(138, 108, 217, 0.62) !important;
  border-radius: 16px !important; 
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1) !important;
  backdrop-filter: blur(13.3px);
 -webkit-backdrop-filter: blur(13.3px);
}
</style>
