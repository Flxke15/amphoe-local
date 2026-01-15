<template>
  <div class="mobile-layout">
    <!-- Search Bar -->
    <v-container class="search-container pa-4">
      <v-text-field
        placeholder="ค้นหาจังหวัด / ตำบล"
        variant="outlined"
        prepend-inner-icon="mdi-magnify"
        hide-details
        class="search-field"
        density="comfortable"
      ></v-text-field>
    </v-container>

    <!-- Map Section -->
    <div class="map-section">
      <div class="map-container position-relative">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3876.254672662409!2d100.5408753758003!3d13.703019586683734!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30e29f45aca9c46f%3A0x7ebfe95171835559!2z4Lit4Liy4LiE4Liy4Lij4LiL4Li14LiU4Li14LiI4Li1IOC5gOC4ruC4suC4quC5jCAtIENERyBIb3VzZQ!5e0!3m2!1sth!2sth!4v1768448690000!5m2!1sth!2sth"
          width="100%"
          height="250"
          style="border: 0; border-radius: 8px;"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
          title="Interactive map"
        ></iframe>
      </div>
    </div>

    <!-- Province Info Card -->
    <v-container class="pa-4">
      <v-card class="province-info-card" elevation="2" rounded="lg">
        <v-card-text class="pa-4">
          <!-- Header with logo and title -->
          <div class="d-flex align-center mb-4">
            <img 
              :src="provinceLogo" 
              alt="ตราสัญลักษณ์จังหวัด" 
              class="province-logo"
            >
            <div class="ml-3">
              <div class="text-body-2 text-grey-600">ภาคกลาง</div>
              <div class="text-h6 font-weight-bold text-primary">จ.สมุทรปราการ</div>
            </div>
          </div>

          <!-- Population Data Section -->
          <div class="section-title mb-3">
            <h3 class="text-subtitle-1 font-weight-bold text-primary ma-0">
              ข้อมูลจำนวนประชากร
            </h3>
          </div>

          <v-row class="mb-4" dense>
            <v-col cols="6">
              <div class="stat-item d-flex align-center">
                <v-icon class="mr-2 text-grey-600" size="20">mdi-account-group</v-icon>
                <div>
                  <div class="stat-number">66,090,475</div>
                  <div class="stat-label">คน</div>
                </div>
              </div>
            </v-col>
            <v-col cols="6">
              <div class="stat-item d-flex align-center">
                <v-icon class="mr-2 text-grey-600" size="20">mdi-account</v-icon>
                <div>
                  <div class="stat-number">32,270,615</div>
                  <div class="stat-label">ชาย</div>
                </div>
              </div>
            </v-col>
            <v-col cols="6">
              <div class="stat-item d-flex align-center">
                <v-icon class="mr-2 text-grey-600" size="20">mdi-map-marker</v-icon>
                <div>
                  <div class="stat-number">32,270,615</div>
                  <div class="stat-label">หลัง</div>
                </div>
              </div>
            </v-col>
            <v-col cols="6">
              <div class="stat-item d-flex align-center">
                <v-icon class="mr-2 text-grey-600" size="20">mdi-home</v-icon>
                <div>
                  <div class="stat-number">26,713,936</div>
                  <div class="stat-label">ครอบครัว</div>
                </div>
              </div>
            </v-col>
          </v-row>

          <!-- Contact Info Section -->
          <div class="section-title mb-3">
            <h3 class="text-subtitle-1 font-weight-bold text-primary ma-0">
              ข้อมูลการติดต่อ
            </h3>
          </div>

          <div class="contact-info mb-4">
            <div class="contact-item mb-2">
              <div class="text-body-2 text-grey-800">
                ที่ว่าการอำเภอเมืองสมุทรปราการ อันการจังหวัด
              </div>
              <div class="text-body-2 text-grey-800">
                ตำบลปากคลองบางปลากด ตำบลแพรกษาใหม่
              </div>
              <div class="text-body-2 text-grey-800">
                อันการจังหวัดใหม่ 10540
              </div>
            </div>
            
            <div class="contact-item mb-2">
              <div class="text-body-2">
                <span class="font-weight-medium">โทรศัพท์:</span> 0-3539-3005,0538-3451
              </div>
            </div>
            
            <div class="contact-item">
              <div class="text-body-2">
                <span class="font-weight-medium">Fax:</span> 0-3539-3005,0538-3461
              </div>
            </div>
          </div>

          <!-- Action Button -->
          <v-btn
            color="primary"
            block
            size="large"
            class="action-btn"
            prepend-icon="mdi-open-in-new"
          >
            ไปสู่หน้าแรก
          </v-btn>
        </v-card-text>
      </v-card>
    </v-container>
  </div>
</template>

<script setup>
import provinceLogo from "../assets/images/provinceLogo.png";
</script>

<style scoped>
.nav-item {
  cursor: pointer;
  padding: 8px;
  border-radius: 8px;
  transition: background-color 0.2s;
}

.nav-item:hover {
  background-color: rgba(0, 0, 0, 0.1);
}

.map-section {
  background: #e5ebf4;
  background: linear-gradient(
    180deg,
    rgba(229, 235, 244, 1) 0%,
    rgba(197, 221, 255, 1) 50%
  );
}

.left-section {
  border-right: 1px solid #e0e0e0;
}

.map-info-overlay {
  backdrop-filter: blur(10px);
  background-color: rgba(255, 255, 255, 0.95);
}
</style>
