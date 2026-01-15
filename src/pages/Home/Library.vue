<template>
  <v-card class="pa-16">
      <v-img
      src="@/assets/images/library.png"
      cover
    >
      <template #placeholder>
        <v-skeleton-loader type="image" height="100%" />
      </template>
    </v-img>
  </v-card>
</template>