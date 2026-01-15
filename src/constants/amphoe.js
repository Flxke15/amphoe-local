// ข้อมูลอำเภอทั้งหมดพร้อมพิกัด lat/lon สำหรับ zoom
// ในที่นี้เป็นตัวอย่างบางอำเภอ - สามารถเพิ่มเติมได้
const amphoeData = [
  // กรุงเทพมหานคร
  { province_name: "กรุงเทพมหานคร", amphoe_name: "พระนคร", lat: 13.7525, lon: 100.4925, zoom: 15 },
  { province_name: "กรุงเทพมหานคร", amphoe_name: "ดุสิต", lat: 13.7738, lon: 100.5167, zoom: 15 },
  { province_name: "กรุงเทพมหานคร", amphoe_name: "หนองจอก", lat: 13.8524, lon: 100.8619, zoom: 14 },
  { province_name: "กรุงเทพมหานคร", amphoe_name: "บางรัก", lat: 13.7276, lon: 100.5246, zoom: 15 },
  { province_name: "กรุงเทพมหานคร", amphoe_name: "บางเขน", lat: 13.8742, lon: 100.5917, zoom: 14 },
  { province_name: "กรุงเทพมหานคร", amphoe_name: "บางกะปิ", lat: 13.7675, lon: 100.6472, zoom: 14 },
  { province_name: "กรุงเทพมหานคร", amphoe_name: "ปทุมวัน", lat: 13.7456, lon: 100.5331, zoom: 15 },
  { province_name: "กรุงเทพมหานคร", amphoe_name: "ป้อมปราบศัตรูพ่าย", lat: 13.7558, lon: 100.5092, zoom: 15 },
  { province_name: "กรุงเทพมหานคร", amphoe_name: "พระโขนง", lat: 13.7014, lon: 100.6014, zoom: 15 },
  { province_name: "กรุงเทพมหานคร", amphoe_name: "มีนบุรี", lat: 13.8117, lon: 100.7292, zoom: 14 },
  
  // สมุทรปราการ
  { province_name: "สมุทรปราการ", amphoe_name: "เมืองสมุทรปราการ", lat: 13.5990, lon: 100.5998, zoom: 14 },
  { province_name: "สมุทรปราการ", amphoe_name: "บางบ่อ", lat: 13.5889, lon: 100.8286, zoom: 14 },
  { province_name: "สมุทรปราการ", amphoe_name: "บางพลี", lat: 13.6333, lon: 100.7347, zoom: 14 },
  { province_name: "สมุทรปราการ", amphoe_name: "พระประแดง", lat: 13.6572, lon: 100.5344, zoom: 14 },
  { province_name: "สมุทรปราการ", amphoe_name: "พระสมุทรเจดีย์", lat: 13.5917, lon: 100.5528, zoom: 14 },
  { province_name: "สมุทรปราการ", amphoe_name: "บางเสาธง", lat: 13.6000, lon: 100.7833, zoom: 14 },

  // เชียงใหม่
  { province_name: "เชียงใหม่", amphoe_name: "เมืองเชียงใหม่", lat: 18.7883, lon: 98.9853, zoom: 13 },
  { province_name: "เชียงใหม่", amphoe_name: "จอมทอง", lat: 18.4167, lon: 98.6833, zoom: 13 },
  { province_name: "เชียงใหม่", amphoe_name: "แม่แจ่ม", lat: 18.5000, lon: 98.3667, zoom: 13 },
  { province_name: "เชียงใหม่", amphoe_name: "เชียงดาว", lat: 19.3667, lon: 98.9667, zoom: 13 },
  { province_name: "เชียงใหม่", amphoe_name: "ดอยสะเก็ด", lat: 18.8833, lon: 99.1667, zoom: 13 },
  { province_name: "เชียงใหม่", amphoe_name: "แม่แตง", lat: 19.1167, lon: 98.9333, zoom: 13 },
  { province_name: "เชียงใหม่", amphoe_name: "แม่ริม", lat: 18.9167, lon: 98.9500, zoom: 13 },
  { province_name: "เชียงใหม่", amphoe_name: "สะเมิง", lat: 18.8667, lon: 98.6667, zoom: 13 },
  { province_name: "เชียงใหม่", amphoe_name: "ฝาง", lat: 19.9167, lon: 99.2167, zoom: 13 },
  { province_name: "เชียงใหม่", amphoe_name: "แม่อาย", lat: 20.0333, lon: 99.2833, zoom: 13 },

  // ภูเก็ต
  { province_name: "ภูเก็ต", amphoe_name: "เมืองภูเก็ต", lat: 7.8917, lon: 98.3917, zoom: 14 },
  { province_name: "ภูเก็ต", amphoe_name: "กะทู้", lat: 7.9167, lon: 98.3333, zoom: 14 },
  { province_name: "ภูเก็ต", amphoe_name: "ถลาง", lat: 8.0333, lon: 98.3167, zoom: 14 },

  // ชลบุรี
  { province_name: "ชลบุรี", amphoe_name: "เมืองชลบุรี", lat: 13.3622, lon: 100.9847, zoom: 13 },
  { province_name: "ชลบุรี", amphoe_name: "บ้านบึง", lat: 13.3000, lon: 101.1167, zoom: 13 },
  { province_name: "ชลบุรี", amphoe_name: "หนองใหญ่", lat: 13.1500, lon: 101.3667, zoom: 13 },
  { province_name: "ชลบุรี", amphoe_name: "บางละมุง", lat: 12.9333, lon: 100.9333, zoom: 13 },
  { province_name: "ชลบุรี", amphoe_name: "พานทอง", lat: 13.4500, lon: 101.0833, zoom: 13 },
  { province_name: "ชลบุรี", amphoe_name: "พนัสนิคม", lat: 13.4500, lon: 101.1833, zoom: 13 },
  { province_name: "ชลบุรี", amphoe_name: "ศรีราชา", lat: 13.1833, lon: 100.9333, zoom: 13 },
  { province_name: "ชลบุรี", amphoe_name: "เกาะสีชัง", lat: 13.1500, lon: 100.8000, zoom: 14 },
  { province_name: "ชลบุรี", amphoe_name: "สัตหีบ", lat: 12.6667, lon: 100.9000, zoom: 13 },
  { province_name: "ชลบุรี", amphoe_name: "บ่อทอง", lat: 13.2667, lon: 101.2833, zoom: 13 },
  { province_name: "ชลบุรี", amphoe_name: "เกาะจันทร์", lat: 13.3833, lon: 101.2000, zoom: 13 },

  // นครราชสีมา
  { province_name: "นครราชสีมา", amphoe_name: "เมืองนครราชสีมา", lat: 14.9799, lon: 102.0978, zoom: 13 },
  { province_name: "นครราชสีมา", amphoe_name: "ครบุรี", lat: 14.5000, lon: 102.2167, zoom: 13 },
  { province_name: "นครราชสีมา", amphoe_name: "เสิงสาง", lat: 14.4167, lon: 102.4333, zoom: 13 },
  { province_name: "นครราชสีมา", amphoe_name: "คง", lat: 15.4333, lon: 102.3167, zoom: 13 },
  { province_name: "นครราชสีมา", amphoe_name: "บ้านเหลื่อม", lat: 15.6167, lon: 102.4167, zoom: 13 },
  { province_name: "นครราชสีมา", amphoe_name: "จักราช", lat: 14.9833, lon: 102.4333, zoom: 13 },
  { province_name: "นครราชสีมา", amphoe_name: "โชคชัย", lat: 14.7167, lon: 102.1667, zoom: 13 },
  { province_name: "นครราชสีมา", amphoe_name: "ด่านขุนทด", lat: 15.2167, lon: 101.7333, zoom: 13 },
  { province_name: "นครราชสีมา", amphoe_name: "โนนไทย", lat: 15.2167, lon: 102.0833, zoom: 13 },
  { province_name: "นครราชสีมา", amphoe_name: "โนนสูง", lat: 15.1500, lon: 102.2500, zoom: 13 },

  // ขอนแก่น
  { province_name: "ขอนแก่น", amphoe_name: "เมืองขอนแก่น", lat: 16.4419, lon: 102.8360, zoom: 13 },
  { province_name: "ขอนแก่น", amphoe_name: "บ้านฝาง", lat: 16.5000, lon: 102.6833, zoom: 13 },
  { province_name: "ขอนแก่น", amphoe_name: "พระยืน", lat: 16.4167, lon: 102.6167, zoom: 13 },
  { province_name: "ขอนแก่น", amphoe_name: "หนองเรือ", lat: 16.5167, lon: 102.3500, zoom: 13 },
  { province_name: "ขอนแก่น", amphoe_name: "ชุมแพ", lat: 16.5333, lon: 102.1000, zoom: 13 },

  // เชียงราย
  { province_name: "เชียงราย", amphoe_name: "เมืองเชียงราย", lat: 19.9072, lon: 99.8310, zoom: 13 },
  { province_name: "เชียงราย", amphoe_name: "เวียงชัย", lat: 19.8333, lon: 99.9167, zoom: 13 },
  { province_name: "เชียงราย", amphoe_name: "เชียงของ", lat: 20.2667, lon: 100.4167, zoom: 13 },
  { province_name: "เชียงราย", amphoe_name: "เทิง", lat: 19.6833, lon: 100.2167, zoom: 13 },
  { province_name: "เชียงราย", amphoe_name: "พาน", lat: 19.5500, lon: 99.7500, zoom: 13 },
  { province_name: "เชียงราย", amphoe_name: "ป่าแดด", lat: 19.5000, lon: 99.9667, zoom: 13 },
  { province_name: "เชียงราย", amphoe_name: "แม่จัน", lat: 20.1333, lon: 99.8667, zoom: 13 },
  { province_name: "เชียงราย", amphoe_name: "เชียงแสน", lat: 20.2833, lon: 100.0833, zoom: 13 },
  { province_name: "เชียงราย", amphoe_name: "แม่สาย", lat: 20.4333, lon: 99.8833, zoom: 13 },
  { province_name: "เชียงราย", amphoe_name: "แม่สรวย", lat: 19.6500, lon: 99.5500, zoom: 13 },

  // สงขลา
  { province_name: "สงขลา", amphoe_name: "เมืองสงขลา", lat: 7.2000, lon: 100.5833, zoom: 13 },
  { province_name: "สงขลา", amphoe_name: "สทิงพระ", lat: 7.4667, lon: 100.4333, zoom: 13 },
  { province_name: "สงขลา", amphoe_name: "จะนะ", lat: 6.9000, lon: 100.6833, zoom: 13 },
  { province_name: "สงขลา", amphoe_name: "นาทวี", lat: 6.7000, lon: 100.7000, zoom: 13 },
  { province_name: "สงขลา", amphoe_name: "เทพา", lat: 6.8167, lon: 100.9500, zoom: 13 },
  { province_name: "สงขลา", amphoe_name: "สะบ้าย้อย", lat: 6.5500, lon: 100.9333, zoom: 13 },
  { province_name: "สงขลา", amphoe_name: "ระโนด", lat: 7.7833, lon: 100.3167, zoom: 13 },
  { province_name: "สงขลา", amphoe_name: "กระแสสินธุ์", lat: 7.6167, lon: 100.2667, zoom: 13 },
  { province_name: "สงขลา", amphoe_name: "รัตภูมิ", lat: 7.1500, lon: 100.2667, zoom: 13 },
  { province_name: "สงขลา", amphoe_name: "สะเดา", lat: 6.6333, lon: 100.4333, zoom: 13 },
  { province_name: "สงขลา", amphoe_name: "หาดใหญ่", lat: 7.0167, lon: 100.4667, zoom: 13 },
  { province_name: "สงขลา", amphoe_name: "นาหม่อม", lat: 6.9833, lon: 100.4167, zoom: 13 },
  { province_name: "สงขลา", amphoe_name: "ควนเนียง", lat: 7.1500, lon: 100.3500, zoom: 13 },
  { province_name: "สงขลา", amphoe_name: "บางกล่ำ", lat: 7.1000, lon: 100.4667, zoom: 13 },
  { province_name: "สงขลา", amphoe_name: "สิงหนคร", lat: 7.3500, lon: 100.5000, zoom: 13 },
  { province_name: "สงขลา", amphoe_name: "คลองหอยโข่ง", lat: 6.9167, lon: 100.3500, zoom: 13 },

  // นครศรีธรรมราช
  { province_name: "นครศรีธรรมราช", amphoe_name: "เมืองนครศรีธรรมราช", lat: 8.4167, lon: 99.9667, zoom: 13 },
  { province_name: "นครศรีธรรมราช", amphoe_name: "พรหมคีรี", lat: 8.5667, lon: 99.8500, zoom: 13 },
  { province_name: "นครศรีธรรมราช", amphoe_name: "ลานสกา", lat: 8.4000, lon: 99.7833, zoom: 13 },
  { province_name: "นครศรีธรรมราช", amphoe_name: "ฉวาง", lat: 8.4333, lon: 99.5167, zoom: 13 },
  { province_name: "นครศรีธรรมราช", amphoe_name: "พิปูน", lat: 8.6167, lon: 99.6000, zoom: 13 },
  { province_name: "นครศรีธรรมราช", amphoe_name: "เชียรใหญ่", lat: 8.1833, lon: 100.2333, zoom: 13 },
  { province_name: "นครศรีธรรมราช", amphoe_name: "ชะอวด", lat: 8.0500, lon: 100.0500, zoom: 13 },
  { province_name: "นครศรีธรรมราช", amphoe_name: "ท่าศาลา", lat: 8.6333, lon: 99.9500, zoom: 13 },
  { province_name: "นครศรีธรรมราช", amphoe_name: "ทุ่งสง", lat: 8.1667, lon: 99.6833, zoom: 13 },
  { province_name: "นครศรีธรรมราช", amphoe_name: "นาบอน", lat: 8.2167, lon: 99.8333, zoom: 13 },

  // อุดรธานี
  { province_name: "อุดรธานี", amphoe_name: "เมืองอุดรธานี", lat: 17.4138, lon: 102.7872, zoom: 13 },
  { province_name: "อุดรธานี", amphoe_name: "กุดจับ", lat: 17.3500, lon: 102.5333, zoom: 13 },
  { province_name: "อุดรธานี", amphoe_name: "หนองวัวซอ", lat: 17.3167, lon: 102.5667, zoom: 13 },
  { province_name: "อุดรธานี", amphoe_name: "กุมภวาปี", lat: 17.1333, lon: 103.0000, zoom: 13 },
  { province_name: "อุดรธานี", amphoe_name: "โนนสะอาด", lat: 17.1500, lon: 103.1000, zoom: 13 },
  { province_name: "อุดรธานี", amphoe_name: "หนองหาน", lat: 17.3833, lon: 103.1167, zoom: 13 },
  { province_name: "อุดรธานี", amphoe_name: "ทุ่งฝน", lat: 17.5500, lon: 103.0167, zoom: 13 },
  { province_name: "อุดรธานี", amphoe_name: "ไชยวาน", lat: 17.5167, lon: 103.1167, zoom: 13 },
  { province_name: "อุดรธานี", amphoe_name: "ศรีธาตุ", lat: 17.0333, lon: 103.2667, zoom: 13 },
  { province_name: "อุดรธานี", amphoe_name: "วังสามหมอ", lat: 16.9333, lon: 103.4667, zoom: 13 },

  // พิษณุโลก
  { province_name: "พิษณุโลก", amphoe_name: "เมืองพิษณุโลก", lat: 16.8298, lon: 100.2615, zoom: 13 },
  { province_name: "พิษณุโลก", amphoe_name: "นครไทย", lat: 17.1000, lon: 100.8333, zoom: 13 },
  { province_name: "พิษณุโลก", amphoe_name: "ชาติตระการ", lat: 17.3000, lon: 100.5667, zoom: 13 },
  { province_name: "พิษณุโลก", amphoe_name: "บางระกำ", lat: 16.7000, lon: 100.1167, zoom: 13 },
  { province_name: "พิษณุโลก", amphoe_name: "บางกระทุ่ม", lat: 16.7500, lon: 100.3000, zoom: 13 },
  { province_name: "พิษณุโลก", amphoe_name: "พรหมพิราม", lat: 16.9667, lon: 100.1833, zoom: 13 },
  { province_name: "พิษณุโลก", amphoe_name: "วัดโบสถ์", lat: 17.0333, lon: 100.3000, zoom: 13 },
  { province_name: "พิษณุโลก", amphoe_name: "วังทอง", lat: 16.8167, lon: 100.4167, zoom: 13 },
  { province_name: "พิษณุโลก", amphoe_name: "เนินมะปราง", lat: 16.6333, lon: 100.6000, zoom: 13 },
];

// ค้นหาอำเภอตามชื่อ
export const searchAmphoe = (query) => {
  const q = query.toLowerCase();
  return amphoeData.filter(
    a => a.amphoe_name.includes(q) || a.province_name.includes(q)
  );
};

// รวมข้อมูลจังหวัดและอำเภอสำหรับ autocomplete
export const getSearchData = () => {
  return amphoeData.map(a => ({
    ...a,
    display: `อ.${a.amphoe_name} จ.${a.province_name}`,
    type: 'amphoe'
  }));
};

export default amphoeData;
