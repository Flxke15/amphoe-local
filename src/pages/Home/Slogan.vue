<template>
  <v-card class="pa-16" rounded="0">
    <v-row justify="center">
      <v-col cols="12" md="4">
        <div>
          <p class="text-h1 text-bold">คำขวัญ</p>
          <p class="text-h2 text-thin">ประจำจังหวัด</p>
        </div>
      </v-col>
      <v-col cols="12" md="4" align-self="center">
        <v-card variant="outlined" class="pa-6">
          <p class="text-center">
            ป้อมยุทธนาวี พระเจดีย์กลางน้ำ ฟาร์มจระเข้ใหญ่ งามวิไลเมืองโบราณ สงกรานต์พระประแดง ปลาสลิดแห้งรสดี ประเพณีรับบัว ครบถ้วนทั่วอุตสาหกรรม
          </p>
        </v-card>
      </v-col>
    </v-row>
    
  </v-card>
</template>

<script setup>
const localValue = defineModel()
</script>