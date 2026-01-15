<template>
  <!-- Mobile Layout -->
  <div class="mobile-layout d-md-none">
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

  <!-- Desktop Layout -->
  <v-card height="80vh" class="desktop-layout d-none d-md-flex mx-auto">
    <!-- Left Section - Navigation/Controls -->
    <v-card-text class="left-section pa-1" >
      <div class="left-section">
  <div class="left-inner">
    <div class="brand">
      <v-icon size="34" color="primary">mdi-waves</v-icon>
      <div class="mt-3">
        <div class="text-h6 font-weight-bold">อำเภอดอกคำ</div>
        <div class="text-caption text-grey-600">กรมการปกครอง กระทรวงมหาดไทย</div>
      </div>
    </div>

    <v-text-field
      class="mt-6"
      placeholder="ค้นหาจังหวัด / อำเภอ"
      variant="solo"
      rounded="xl"
      density="comfortable"
      prepend-inner-icon="mdi-magnify"
      hide-details
    />

    
  </div>
</div>
      
    </v-card-text>

    <!-- Right Section - Map Display -->
    <div class="right-section flex-grow-1 d-flex flex-column">
      <div class="map-container-desktop flex-grow-1 position-relative">
        <!-- Top Overlay (Region / Province) -->
        <v-card
          class="map-info-overlay"
          style="
            position: absolute;
            top: 20px;
            left: 50%;
            transform: translateX(-50%);
            width: 45%;
            max-width: 300px;
          "
          elevation="4"
        >
          <v-card-text class="pa-3">
            <div class="d-flex justify-center align-center">
              <img
                :src="provinceLogo"
                alt="ตราสัญลักษณ์จังหวัดสมุทรปราการ"
                style="width: 50px; height: 50px; margin-right: 8px"
              >
              <div class="pl-8">
                <h2 class="text-body-2 text-grey-600 text-center ma-0">ภาคกลาง</h2>
                <h3 class="text-h6 font-weight-bold text-primary text-right ma-0">
                  จ.สมุทรปราการ
                </h3>
              </div>
            </div>
          </v-card-text>
        </v-card>

        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3876.254672662409!2d100.5408753758003!3d13.703019586683734!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30e29f45aca9c46f%3A0x7ebfe95171835559!2z4Lit4Liy4LiE4Liy4Lij4LiL4Li14LiU4Li14LiI4Li1IOC5gOC4ruC4suC4quC5jCAtIENERyBIb3VzZQ!5e0!3m2!1sth!2sth!4v1768448690000!5m2!1sth!2sth"
          width="100%"
          height="100%"
          style="border: 0"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
          title="Interactive map"
        ></iframe>

        <!-- Bottom Overlay (Stats / Contact) -->
        <v-card
          class="map-info-overlay"
          style="
            position: absolute;
            bottom: 20px;
            left: 50%;
            transform: translateX(-50%);
            width: 90%;
            max-width: 600px;
          "
          elevation="4"
        >
          <v-card-text class="pa-4">
            <v-row>
              <!-- ข้อมูลจำนวนประชากร Section -->
              <v-col cols="6">
                <div class="info-section">
                  <h3 class="section-header mb-3">ข้อมูลจำนวนประชากร</h3>
                  
                  <v-row dense class="mb-2">
                    <v-col cols="6">
                      <div class="stat-item-desktop d-flex align-center">
                        <v-icon class="mr-2 text-primary" size="18">mdi-account-group</v-icon>
                        <div>
                          <div class="stat-number-desktop">66,090,475</div>
                          <div class="stat-label-desktop">คน</div>
                        </div>
                      </div>
                    </v-col>
                    <v-col cols="6">
                      <div class="stat-item-desktop d-flex align-center">
                        <v-icon class="mr-2 text-primary" size="18">mdi-account</v-icon>
                        <div>
                          <div class="stat-number-desktop">32,270,615</div>
                          <div class="stat-label-desktop">ชาย</div>
                        </div>
                      </div>
                    </v-col>
                  </v-row>
                  
                  <v-row dense>
                    <v-col cols="6">
                      <div class="stat-item-desktop d-flex align-center">
                        <v-icon class="mr-2 text-primary" size="18">mdi-map-marker</v-icon>
                        <div>
                          <div class="stat-number-desktop">32,270,615</div>
                          <div class="stat-label-desktop">หลัง</div>
                        </div>
                      </div>
                    </v-col>
                    <v-col cols="6">
                      <div class="stat-item-desktop d-flex align-center">
                        <v-icon class="mr-2 text-primary" size="18">mdi-home</v-icon>
                        <div>
                          <div class="stat-number-desktop">26,713,936</div>
                          <div class="stat-label-desktop">ครอบครัว</div>
                        </div>
                      </div>
                    </v-col>
                  </v-row>
                </div>
              </v-col>

              <!-- ข้อมูลการติดต่อ Section -->
              <v-col cols="6">
                <div class="info-section">
                  <h3 class="section-header mb-3">ข้อมูลการติดต่อ</h3>
                  
                  <div class="contact-text mb-2">
                    <div class="text-body-2 text-grey-800 mb-1">
                      ที่ว่าการอำเภอเมืองสมุทรปราการ อันการจังหวัด
                    </div>
                    <div class="text-body-2 text-grey-800 mb-1">
                      ตำบลปากคลองบางปลากด ตำบลแพรกษาใหม่
                    </div>
                    <div class="text-body-2 text-grey-800 mb-2">
                      อันการจังหวัดใหม่ 10540
                    </div>
                    
                    <div class="text-body-2 mb-1">
                      <span class="font-weight-medium">โทรศัพท์:</span> 0-3539-3005,0538-3451
                    </div>
                    <div class="text-body-2">
                      <span class="font-weight-medium">Fax:</span> 0-3539-3005,0538-3461
                    </div>
                  </div>
                </div>
              </v-col>
            </v-row>

            <v-btn
              color="primary"
              block
              class="mt-3 desktop-action-btn"
              prepend-icon="mdi-open-in-new"
              aria-label="ไปสู่หน้าแรก"
            >
              ไปสู่หน้าแรก
            </v-btn>
          </v-card-text>
        </v-card>
      </div>
    </div>
  </v-card>
</template>

<script setup>
import provinceLogo from "../assets/images/provinceLogo.png";
</script>

<style scoped>
.mobile-layout {
  min-height: 100vh;
  background: linear-gradient(
    180deg,
    rgba(229, 235, 244, 1) 0%,
    rgba(197, 221, 255, 1) 50%
  );
  width: 100%;
}

.search-container {
  background: white;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: none;
}

.search-field {
  background: #f5f5f5;
}

.search-field :deep(.v-field__outline) {
  color: transparent !important;
}

.search-field :deep(.v-field--focused .v-field__outline) {
  color: var(--v-primary-base) !important;
}

.map-section {
  padding: 0 16px;
  margin-bottom: 16px;
}

.map-container {
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
}

.province-info-card {
  background: white;
  border-radius: 16px !important;
}

.province-logo {
  width: 48px;
  height: 48px;
  border-radius: 50%;
  object-fit: cover;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.section-title {
  border-bottom: 2px solid #e3f2fd;
  padding-bottom: 8px;
}

.stat-item {
  padding: 8px 0;
}

.stat-number {
  font-size: 1.1rem;
  font-weight: 600;
  color: #1976d2;
  line-height: 1.2;
}

.stat-label {
  font-size: 0.875rem;
  color: #666;
  line-height: 1;
}

.contact-info {
  background: #f8f9fa;
  border-radius: 8px;
  padding: 16px;
}

.contact-item {
  line-height: 1.4;
}

.action-btn {
  border-radius: 12px !important;
  text-transform: none;
  font-weight: 600;
  letter-spacing: 0.5px;
}

/* Desktop Layout Styles */
.desktop-layout {
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

/* Desktop Info Section Styles */
.info-section {
  padding: 8px;
}

.section-header {
  font-size: 1rem !important;
  font-weight: 600;
  color: #1976d2;
  text-align: left;
  border-bottom: 1px solid #e3f2fd;
  padding-bottom: 4px;
}

.stat-item-desktop {
  padding: 4px 0;
  min-height: 32px;
}

.stat-number-desktop {
  font-size: 0.95rem;
  font-weight: 600;
  color: #1976d2;
  line-height: 1.2;
}

.stat-label-desktop {
  font-size: 0.8rem;
  color: #666;
  line-height: 1;
}

.contact-text {
  line-height: 1.3;
}

.contact-text .text-body-2 {
  font-size: 0.85rem;
}

.desktop-action-btn {
  font-size: 0.9rem;
  text-transform: none;
  font-weight: 600;
}

/* Mobile-first responsive design */
@media (min-width: 600px) {
  .mobile-layout {
    max-width: 600px;
    margin: 0 auto;
  }
  
  .map-container {
    height: 300px;
  }
  
  .map-container iframe {
    height: 300px !important;
  }
}

@media (min-width: 960px) {
  /* Desktop uses its own layout, so hide mobile responsive rules */
  .mobile-layout {
    display: none !important;
  }
}


</style>
