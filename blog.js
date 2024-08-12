const link = document.querySelector('.about-us');
const main_menu = document.querySelector(".main-menu")
const content_menu = document.querySelector(".content")
const about_us = document.querySelector(".content-about_us");
const container = document.querySelector(".container");
const grid = document.querySelector(".grid");
const second_main = document.querySelector(".second-main");
const videos = document.querySelector(".videos");
const book_info = document.querySelector(".book-info");
const footer_head = document.querySelector(".footer-head");
const footer_picture = document.querySelector(".footer-picture");


link.addEventListener('click',()=>{
    about_us.style.display = "flex";
    content_menu.style.display = "flex"
    container.style.display = "none";
    grid.style.display = "none";
    second_main.style.display = "none";
    videos.style.display = "none";
    book_info.style.display = "none";
    footer_head.style.display = "none";
    footer_picture.style.display = "none"
})

main_menu.addEventListener("click",()=>{
    location.reload()
})