const home = document.querySelector('#Home');
const whatzapp = document.querySelector('#WhatZapp');
const zpotify = document.querySelector('#Zpotify');
const titulo = document.querySelector('#Titulo');


home.addEventListener('click', fHome);

function fHome() {
    document.getElementById("iFrame").src = "../Home/index.html";
    titulo.innerHTML = "Zafary<br>La mejor forma<br>de ver los sitios web.";
}

whatzapp.addEventListener('click', fWZ);

function fWZ() {
    document.getElementById("iFrame").src = "../WhatZapp/index.html";
    titulo.innerHTML = "WhatzApp";
}

zpotify.addEventListener('click', Zpot);

function Zpot() {
    document.getElementById("iFrame").src = "../zpotify/index.html";
    titulo.innerHTML = "Zpotify";
}
