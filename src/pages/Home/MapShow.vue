<template>
  <!-- Mobile Layout -->
  <div class="mobile-layout d-md-none">
    <v-container class="pa-4">
      <!-- Province Selection -->
      <Autocomplete
        v-model="selectedProvince"
        placeholder="เลือกจังหวัด"
        variant="solo"
        density="comfortable"
        prepend-inner-icon="mdi-map-marker"
        :items="provinceItems"
        item-title="province_name"
        item-value="province_name"
        :return-object="true"
        clearable
        bg-color="white"
        class="mb-3"
      />
      <!-- Amphoe Selection -->
      <Autocomplete
        v-model="selectedAmphoe"
        placeholder="เลือกอำเภอ"
        variant="solo"
        density="comfortable"
        prepend-inner-icon="mdi-home-city"
        :items="amphoeItems"
        item-title="amphoe_name"
        item-value="amphoe_name"
        :return-object="true"
        :disabled="!selectedProvince"
        clearable
        bg-color="white"
      />
    </v-container>

    <div class="map-section">
      <div class="map-container position-relative">
        <mapGG
          :lat="currentLocation.lat"
          :lon="currentLocation.lon"
          :zoom="currentLocation.zoom"
          :disable-interaction="true"
          height="250px"
        />
      </div>
    </div>

    <v-container class="pa-4">
      <v-card class="province-info-card" elevation="2" rounded="lg">
        <v-card-text class="pa-4">
          <div class="d-flex align-center mb-4">
            <img :src="provinceLogo" alt="ตราสัญลักษณ์จังหวัด" class="province-logo" />
            <div class="ml-3">
              <div class="text-body-2 text-grey-600">{{ currentRegion }}</div>
              <div class="text-h6 font-weight-bold text-primary">{{ displayProvinceName }}</div>
            </div>
          </div>

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

          <div class="section-title mb-3">
            <h3 class="text-subtitle-1 font-weight-bold text-primary ma-0">
              ข้อมูลการติดต่อ
            </h3>
          </div>

          <div class="contact-info mb-4">
            <div class="contact-item mb-2">
              <div class="text-body-2 text-grey-800">ที่ว่าการอำเภอเมืองสมุทรปราการ อันการจังหวัด</div>
              <div class="text-body-2 text-grey-800">ตำบลปากคลองบางปลากด ตำบลแพรกษาใหม่</div>
              <div class="text-body-2 text-grey-800">อันการจังหวัดใหม่ 10540</div>
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

  <!-- Desktop Layout (50/50) -->
  <v-card height="80vh" class="desktop-layout d-none d-md-flex mx-auto">
    <!-- LEFT 50% -->
    <div class="desktop-left">
      <div class="left-inner">
        <div class="brand">
           <img
                :src="logo"
                alt="อำเภอดอทคอม"
                style="width: 64px; height: 64px; margin-right: 8px"
              />
          <div class="mt-3">
            <div class="text-h6 font-weight-bold">อำเภอดอทคอม</div>
            <div class="text-caption text-grey-600">กรมการปกครอง กระทรวงมหาดไทย</div>
          </div>
        </div>
        <div class="align-center">
          <!-- Province Selection -->
          <Autocomplete
            v-model="selectedProvince"
            class="mt-6 search-center"
            placeholder="เลือกจังหวัด"
            variant="solo"
            density="comfortable"
            prepend-inner-icon="mdi-map-marker"
            :items="provinceItems"
            item-title="province_name"
            item-value="province_name"
            :return-object="true"
            clearable
            bg-color="white"
          />
          <!-- Amphoe Selection -->
          <Autocomplete
            v-model="selectedAmphoe"
            class="mt-3 search-center"
            placeholder="เลือกอำเภอ"
            variant="solo"
            density="comfortable"
            prepend-inner-icon="mdi-home-city"
            :items="amphoeItems"
            item-title="amphoe_name"
            item-value="amphoe_name"
            :return-object="true"
            :disabled="!selectedProvince"
            clearable
            bg-color="white"
          />
        </div>
       
      </div>
    </div>

    <!-- RIGHT 50% -->
    <div class="desktop-right">
      <div class="right-inner">
        <!-- Top Overlay -->
        <v-card class="map-info-overlay map-top" elevation="4">
          <v-card-text class="pa-3">
            <div class="d-flex justify-center align-center">
              <img
                :src="provinceLogo"
                :alt="'ตราสัญลักษณ์' + displayProvinceName"
                style="width: 50px; height: 50px; margin-right: 8px"
              />
              <div class="pl-8">
                <h2 class="text-body-2 text-grey-600 text-center ma-0">{{ currentRegion }}</h2>
                <h3 class="text-h6 font-weight-bold text-primary text-right ma-0">
                  {{ displayProvinceName }}
                </h3>
                <h4 v-if="selectedAmphoe" class="text-body-2 text-grey-700 text-right ma-0">
                  {{ selectedAmphoe.amphoe_name }}
                </h4>
              </div>
            </div>
          </v-card-text>
        </v-card>

        <!-- MAP -->
        <mapGG
          :lat="currentLocation.lat"
          :lon="currentLocation.lon"
          :zoom="currentLocation.zoom"
          :disable-interaction="true"
          height="100%"
          width="100%"
          class="map-iframe"
        />

        <!-- Bottom Overlay -->
        <v-card class="map-info-overlay map-bottom" :class="{ 'collapsed': !isBottomExpanded }" elevation="4">
          <!-- Toggle Button -->
          <v-btn
            icon
            size="small"
            variant="text"
            class="toggle-btn"
            @click="isBottomExpanded = !isBottomExpanded"
            :aria-label="isBottomExpanded ? 'ย่อข้อมูล' : 'ขยายข้อมูล'"
          >
            <v-icon>{{ isBottomExpanded ? 'mdi-chevron-down' : 'mdi-chevron-up' }}</v-icon>
          </v-btn>

          <v-expand-transition>
            <v-card-text v-show="isBottomExpanded" class="pa-4 pt-6">
            <v-row>
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
          </v-expand-transition>

          <!-- Collapsed Summary -->
          <v-card-text v-show="!isBottomExpanded" class="pa-2 text-center collapsed-summary">
            <span class="text-body-2 text-primary font-weight-medium">{{ displayProvinceName }}</span>
            <span v-if="selectedAmphoe" class="text-body-2 text-grey-700"> - {{ selectedAmphoe.amphoe_name }}</span>
            <span class="text-caption text-grey-500 ml-2">(คลิกเพื่อดูรายละเอียด)</span>
          </v-card-text>
        </v-card>
      </div>
    </div>
  </v-card>
</template>

<script setup>
import { ref, computed, watch } from 'vue'
import provinceLogo from "../../assets/images/provinceLogo.png"
import logo from "../../assets/images/logo.png"
import mapGG from "../../components/mapGG.vue"
import Autocomplete from "../../components/Autocomplete.vue"
import latProvince from "../../constants/latProvince"
import amphoeData from "../../constants/amphoe"

// =============== State ===============
const selectedProvince = ref(null)
const selectedAmphoe = ref(null)
const isBottomExpanded = ref(true) // สถานะย่อ/ขยาย bottom overlay

// =============== Default Location (จุดกลางประเทศไทย) ===============
const defaultLocation = {
  lat: 13.7563,
  lon: 101.492,
  zoom: 6
}

// =============== Province Items ===============
const provinceItems = computed(() => {
  return latProvince.map(p => ({
    province_id: p.province_id,
    province_name: p.province_name,
    lat: p.province_lat,
    lon: p.province_lon,
    zoom: p.province_zoom
  }))
})

// =============== Amphoe Items (filtered by selected province) ===============
const amphoeItems = computed(() => {
  if (!selectedProvince.value) return []
  return amphoeData.filter(a => a.province_name === selectedProvince.value.province_name)
})

// =============== Current Location for Map ===============
const currentLocation = computed(() => {
  // ถ้าเลือกอำเภอ ใช้พิกัดอำเภอ
  if (selectedAmphoe.value) {
    return {
      lat: selectedAmphoe.value.lat,
      lon: selectedAmphoe.value.lon,
      zoom: selectedAmphoe.value.zoom
    }
  }
  // ถ้าเลือกแค่จังหวัด ใช้พิกัดจังหวัด
  if (selectedProvince.value) {
    return {
      lat: selectedProvince.value.lat,
      lon: selectedProvince.value.lon,
      zoom: selectedProvince.value.zoom
    }
  }
  // ถ้ายังไม่เลือก ใช้ค่า default (เห็นทั้งประเทศไทย)
  return defaultLocation
})

// =============== Display Province Name ===============
const displayProvinceName = computed(() => {
  if (selectedProvince.value) {
    return 'จ.' + selectedProvince.value.province_name
  }
  return 'ประเทศไทย'
})

// =============== Region Mapping ===============
const regionMapping = {
  // ภาคเหนือ
  'เชียงราย': 'ภาคเหนือ', 'เชียงใหม่': 'ภาคเหนือ', 'น่าน': 'ภาคเหนือ', 
  'พะเยา': 'ภาคเหนือ', 'แพร่': 'ภาคเหนือ', 'แม่ฮ่องสอน': 'ภาคเหนือ', 
  'ลำปาง': 'ภาคเหนือ', 'ลำพูน': 'ภาคเหนือ', 'อุตรดิตถ์': 'ภาคเหนือ',
  // ภาคตะวันออกเฉียงเหนือ
  'กาฬสินธุ์': 'ภาคตะวันออกเฉียงเหนือ', 'ขอนแก่น': 'ภาคตะวันออกเฉียงเหนือ', 
  'ชัยภูมิ': 'ภาคตะวันออกเฉียงเหนือ', 'นครพนม': 'ภาคตะวันออกเฉียงเหนือ',
  'นครราชสีมา': 'ภาคตะวันออกเฉียงเหนือ', 'บึงกาฬ': 'ภาคตะวันออกเฉียงเหนือ',
  'บุรีรัมย์': 'ภาคตะวันออกเฉียงเหนือ', 'มหาสารคาม': 'ภาคตะวันออกเฉียงเหนือ',
  'มุกดาหาร': 'ภาคตะวันออกเฉียงเหนือ', 'ยโสธร': 'ภาคตะวันออกเฉียงเหนือ',
  'ร้อยเอ็ด': 'ภาคตะวันออกเฉียงเหนือ', 'เลย': 'ภาคตะวันออกเฉียงเหนือ',
  'สกลนคร': 'ภาคตะวันออกเฉียงเหนือ', 'สุรินทร์': 'ภาคตะวันออกเฉียงเหนือ',
  'ศรีสะเกษ': 'ภาคตะวันออกเฉียงเหนือ', 'หนองคาย': 'ภาคตะวันออกเฉียงเหนือ',
  'หนองบัวลำภู': 'ภาคตะวันออกเฉียงเหนือ', 'อุดรธานี': 'ภาคตะวันออกเฉียงเหนือ',
  'อุบลราชธานี': 'ภาคตะวันออกเฉียงเหนือ', 'อำนาจเจริญ': 'ภาคตะวันออกเฉียงเหนือ',
  // ภาคกลาง
  'กรุงเทพมหานคร': 'ภาคกลาง', 'กำแพงเพชร': 'ภาคกลาง', 'ชัยนาท': 'ภาคกลาง',
  'นครนายก': 'ภาคกลาง', 'นครปฐม': 'ภาคกลาง', 'นครสวรรค์': 'ภาคกลาง',
  'นนทบุรี': 'ภาคกลาง', 'ปทุมธานี': 'ภาคกลาง', 'พระนครศรีอยุธยา': 'ภาคกลาง',
  'พิจิตร': 'ภาคกลาง', 'พิษณุโลก': 'ภาคกลาง', 'เพชรบูรณ์': 'ภาคกลาง',
  'ลพบุรี': 'ภาคกลาง', 'สมุทรปราการ': 'ภาคกลาง', 'สมุทรสงคราม': 'ภาคกลาง',
  'สมุทรสาคร': 'ภาคกลาง', 'สระบุรี': 'ภาคกลาง', 'สิงห์บุรี': 'ภาคกลาง',
  'สุโขทัย': 'ภาคกลาง', 'สุพรรณบุรี': 'ภาคกลาง', 'อ่างทอง': 'ภาคกลาง',
  'อุทัยธานี': 'ภาคกลาง',
  // ภาคตะวันออก
  'จันทบุรี': 'ภาคตะวันออก', 'ฉะเชิงเทรา': 'ภาคตะวันออก', 'ชลบุรี': 'ภาคตะวันออก',
  'ตราด': 'ภาคตะวันออก', 'ปราจีนบุรี': 'ภาคตะวันออก', 'ระยอง': 'ภาคตะวันออก',
  'สระแก้ว': 'ภาคตะวันออก',
  // ภาคตะวันตก
  'กาญจนบุรี': 'ภาคตะวันตก', 'ตาก': 'ภาคตะวันตก', 'ประจวบคีรีขันธ์': 'ภาคตะวันตก',
  'เพชรบุรี': 'ภาคตะวันตก', 'ราชบุรี': 'ภาคตะวันตก',
  // ภาคใต้
  'กระบี่': 'ภาคใต้', 'ชุมพร': 'ภาคใต้', 'ตรัง': 'ภาคใต้', 'นครศรีธรรมราช': 'ภาคใต้',
  'นราธิวาส': 'ภาคใต้', 'ปัตตานี': 'ภาคใต้', 'พังงา': 'ภาคใต้', 'พัทลุง': 'ภาคใต้',
  'ภูเก็ต': 'ภาคใต้', 'ยะลา': 'ภาคใต้', 'ระนอง': 'ภาคใต้', 'สงขลา': 'ภาคใต้',
  'สตูล': 'ภาคใต้', 'สุราษฎร์ธานี': 'ภาคใต้'
}

const currentRegion = computed(() => {
  if (selectedProvince.value) {
    return regionMapping[selectedProvince.value.province_name] || 'ประเทศไทย'
  }
  return 'ประเทศไทย'
})

// =============== Watch: Clear amphoe when province changes ===============
watch(selectedProvince, () => {
  selectedAmphoe.value = null
})
</script>

<style scoped>
/* ========== Mobile ========== */
.mobile-layout {
  background: linear-gradient(
    180deg,
    rgba(229, 235, 244, 1) 0%,
    rgba(197, 221, 255, 1) 50%
  );
  width: 100%;
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

/* ========== Desktop ========== */
.desktop-layout {
  display: flex;
  overflow: hidden;
  border-radius: 16px;
  background: linear-gradient(
    180deg,
    rgba(229, 235, 244, 1) 0%,
    rgba(197, 221, 255, 1) 50%
  );
}

.desktop-left {
  width: 30%;
  min-width: 0;
  position: relative;
  border-right: 2px solid rgba(25, 118, 210, 0.35);
}

.desktop-right {
  width: 70%;
  min-width: 0;
  position: relative;
}

.left-inner,
.right-inner {
  position: absolute;
  inset: 16px;
  border-radius: 12px;
}

/* กรอบน้ำเงินฝั่งซ้าย */
.left-inner {
  background: transparent;
  padding: 6rem;
}

.left-inner .search-center{
  align-self: center;   /* ทำให้ textfield อยู่กลางแนวนอน */
  width: 80%;
  max-width: 420px;
}

/* สำคัญ: ต้อง relative เพื่อให้ overlay absolute อ้างอิงถูก */
.right-inner {
  position: absolute;
  inset: 16px;
  border-radius: 12px;
  overflow: hidden;
  border: 1px solid rgba(0, 0, 0, 0.08);
  background: rgba(255, 255, 255, 0.4);
}

.map-iframe {
  width: 100%;
  height: 100%;
  border: 0;
}

/* Overlay shared */
.map-info-overlay {
  backdrop-filter: blur(10px);
  background-color: rgba(255, 255, 255, 0.95);
}

/* Top overlay positioning */
.map-top {
  position: absolute;
  top: 20px;
  left: 50%;
  transform: translateX(-50%);
  width: 45%;
  max-width: 300px;
  z-index: 2;
}

/* Bottom overlay positioning */
.map-bottom {
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  width: 90%;
  max-width: 600px;
  z-index: 2;
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

/* Responsive (เดิม) */
@media (min-width: 600px) {
  .map-container {
    height: 300px;
  }
  .map-container iframe {
    height: 300px !important;
  }
}

@media (min-width: 960px) {
  .mobile-layout {
    display: none !important;
  }
}

/* (ถ้าจะใช้ชุด compact เดิมของคุณต่อได้) */
@media (min-width: 960px) and (max-width: 1200px) {
  .map-top {
    width: 35% !important;
    max-width: 200px !important;
    top: 10px !important;
  }

  .map-top .v-card-text {
    padding: 8px !important;
  }

  .map-top img {
    width: 35px !important;
    height: 35px !important;
    margin-right: 6px !important;
  }

  .map-top .text-body-2 {
    font-size: 0.75rem !important;
  }

  .map-top .text-h6 {
    font-size: 0.9rem !important;
  }

  .map-top .pl-8 {
    padding-left: 4px !important;
  }

  .map-bottom {
    width: 80% !important;
    max-width: 500px !important;
    bottom: 10px !important;
  }

  .info-section {
    padding: 4px !important;
  }

  .section-header {
    font-size: 0.85rem !important;
    margin-bottom: 6px !important;
    padding-bottom: 2px !important;
  }

  .stat-item-desktop {
    padding: 1px 0 !important;
    min-height: 24px !important;
  }

  .stat-number-desktop {
    font-size: 0.8rem !important;
    line-height: 1.1 !important;
  }

  .stat-label-desktop {
    font-size: 0.7rem !important;
  }

  .contact-text .text-body-2 {
    font-size: 0.75rem !important;
    line-height: 1.1 !important;
    margin-bottom: 2px !important;
  }

  .desktop-action-btn {
    font-size: 0.8rem !important;
    padding: 6px 12px !important;
    margin-top: 8px !important;
  }

  .map-info-overlay .v-card-text {
    padding: 8px !important;
  }

  .v-row.dense {
    margin-bottom: 4px !important;
  }
}

/* Toggle Button for Bottom Overlay */
.toggle-btn {
  position: absolute;
  top: -12px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 3;
  background-color: white !important;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
  border-radius: 50%;
}

.toggle-btn:hover {
  background-color: #e3f2fd !important;
}

/* Collapsed State */
.map-bottom.collapsed {
  max-width: 400px !important;
}

.collapsed-summary {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>
