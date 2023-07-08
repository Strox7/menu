const Navtoglle = document.querySelector(".nav-toggle")
const links = document.querySelector(".links")

Navtoglle.addEventListener('click', function () {
    links.classList.toggle("show-links")
})


const Forwade = document.querySelector(".forwade-btn")
const MegaMenu = document.querySelector(".mega-menu")
const Removetoggle = document.querySelector(".remove-btn")
const ActiveL = document.querySelector(".active-l")

// MegaMenu.classList.add('trans')



Forwade.addEventListener('click', function () {
    MegaMenu.classList.toggle('show-mega')


})


Removetoggle.addEventListener('click', function () {
    MegaMenu.classList.remove('show-mega')
})
