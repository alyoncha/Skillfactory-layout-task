import '@/app/index.scss'
// core version + navigation, pagination modules:
import Swiper from 'swiper/bundle';

// import styles bundle
import 'swiper/css/bundle';

// init Swiper:
const swiper = new Swiper('.swiper',{
    centeredSlides:true,
    initialSlide: 1,
    slideToClickedSlide: true,
    spaceBetween: 20,
    breakpoints: {
        1280: {
            slidesPerView: 4.5,
            
        },
        1000: {
            slidesPerView: 3.7,
            centeredSlides:false,
        },
        750: {
            slidesPerView: 2.8,
        },
        500: {
            slidesPerView: 1.8,
        },
        320: {
            slidesPerView: 1.2,
        },
    }
    // loop: true,
});

document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("menu-panel").addEventListener("click", function() {
        document.querySelector("header").classList.toggle("open")
    })
})
document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("menu-panel-close").addEventListener("click", function() {
        document.querySelector("header").classList.toggle("open")
    })
})