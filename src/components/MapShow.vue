<template>
  <v-card height="80vh" class="map-section mx-auto d-flex">
    <!-- Left Section - Navigation/Controls -->
    
    <v-card-text class="left-section pa-1" style="width: 100px"> 
      
    </v-card-text>

    <!-- Right Section - Map Display -->
    <div class="right-section flex-grow-1 d-flex flex-column">
      <div class="map-container flex-grow-1 position-relative">
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
                <!-- Avoid h1/h2 jump inside a component; use h2/h3 for section headings -->
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
            max-width: 500px;
          "
          elevation="4"
        >
          <v-card-title class="text-center">
            <!-- v-card-title is a div; provide an actual heading inside -->
            <h3 class=" ma-0">ข้อมูลจำนวนประชากร | ข้อมูลการติดต่อ</h3>
          </v-card-title>

          <v-card-text>
            <v-row>
              <v-col cols="6">
                <div class="d-flex align-center mb-2">
                  <v-icon class="mr-2" aria-hidden="true">mdi-account-group</v-icon>
                  <div>
                    <h4 class="font-weight-bold">66,090,475</h4>
                    <h6 class="text-caption">คน</h6>
                  </div>
                </div>

                <div class="d-flex align-center">
                  <v-icon class="mr-2" aria-hidden="true">mdi-map-marker</v-icon>
                  <div>
                    <h4 class="font-weight-bold">32,270,615</h4>
                    <h6 class="text-caption">หลัง</h6>
                  </div>
                </div>
              </v-col>

              <v-col cols="6">
                <div class="d-flex align-center mb-2">
                  <v-icon class="mr-2" aria-hidden="true">mdi-chart-line</v-icon>
                  <div>
                    <h4 class="font-weight-bold">32,270,615</h4>
                    <h6 class="text-caption">ชาย</h6>
                  </div>
                </div>

                <div class="d-flex align-center">
                  <v-icon class="mr-2" aria-hidden="true">mdi-home</v-icon>
                  <div>
                    <h4 class="font-weight-bold">26,713,936</h4>
                    <h6 class="text-caption">ครอบครัว</h6>
                  </div>
                </div>
              </v-col>
            </v-row>

            <v-btn
              color="primary"
              block
              class="mt-3"
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
