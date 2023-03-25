const tombol = document.getElementById("daftar");
tombol.onclick = daftar;

function daftar(e) {
e.preventDefault();    
const nama = document.getElementById("nama");
const email = document.getElementById("email");
const pass = document.getElementById("pass");

localStorage.setItem("nama",nama.value);
localStorage.setItem("email",email.value);
localStorage.setItem("password",pass.value);

alert("berhasil daftar");

}

