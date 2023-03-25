

const form = document.getElementById("form");
const email = document.getElementById("email");
const pass = document.getElementById("pass");



form.addEventListener("submit", function(e) {
    e.preventDefault();

   const loc_email =  localStorage.getItem("email");
   const loc_pass =  localStorage.getItem("password");
  
   if (email.value == loc_email && pass.value == loc_pass) {
    alert("berhasil login");
    window.location.href = "beranda.html";
   } else {
    alert("email atau password salah");
   }
});