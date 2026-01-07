import Swal from "sweetalert2";
 
const swalDefault = Swal.mixin({
  icon: "warning",
  confirmButtonText: "ยืนยัน",
  showCancelButton: true,
  cancelButtonText: "ยกเลิก",
  reverseButtons: true,
  customClass: {
    popup: "sweetalert-custom",
    // cancelButton: "cancel-button",
    // confirmButton: "confirm-button",
  },
});
 
// ฟังก์ชันช่วยเรียก SweetAlert2 โดยใช้ค่า default
export const alert = (options = {}) => {
  return swalDefault.fire(options);
};
 
export default swalDefault;