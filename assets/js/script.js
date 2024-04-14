//toggle class active
const navbarNav = document.querySelector(".navbar-nav");
//ketika diketik
document.querySelector("#hamburger-menu").onclick = () => {
  navbarNav.classList.toggle("active");
};

//ketik luar untk off
const hamburger = document.querySelector("#hamburger-menu");

document.addEventListener("click", function (e) {
  if (!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});

/*
This is the javascript function to validate contact form
This script checks all the values in fields of contact form and validate whether
the form has empty values or not. if any empty values found it throws alert with specific reason and alert sound 
it also check the format of email and length of message 
if all conditions match it will throw small alert sying successfull and sweet sound
*/
$(document).ready(function () {
  $("#formvalidasi").validate({
    rules: {
      nama: {
        minlength: 2,
      },
      email: {
        email: true,
        required: true,
      },
      number: {
        number: true,
        required: true,
        minlength: 9,
        maxlength: 15,
      },
      message: {
        required: true,
      },
    },
    messages: {
      nama: {
        required: "Masukkan Nama Anda !!!",
        minlength: "Nama harus lebih dari 2 huruf",
      },
      email: {
        email: "Masukan email dengan bena",
        required: "Masukkan email",
      },
      number: {
        number: "Isi nomor dengan benar",
        required: "Isi nomor handphone",
        minlength: "Nomor handphone minimal 8 angka",
        maxlength: "Nomor handphone maksimal 15 angka",
      },
      message: {
        required: "Masukan Pesan",
      },
    },
    submitHandler: function (form) {
      form.submit();
    },
  });
});
