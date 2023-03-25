const loc_nama = localStorage.getItem("nama");

const tampil = document.getElementById("nm");
tampil.innerHTML = loc_nama;

const tambah = document.querySelector("#tambah");
const simpan = document.querySelector("#simpan");
const hapus = document.querySelector("#hapus");
const hasil = document.querySelector("#hasil");

if(localStorage.getItem("data") == null) {
    localStorage.setItem("data", "[]");
}

simpan.onclick = () => {

    var penyimpanan = JSON.parse(localStorage.getItem("data"));
    penyimpanan.push(tambah.value);

    localStorage.setItem("data", JSON.stringify(penyimpanan));
}