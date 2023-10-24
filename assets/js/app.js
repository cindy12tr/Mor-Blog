const navMenu = document.getElementById('navMenu')
const navClose = document.getElementById('navClose')
const navToggle = document.getElementById('navToggle')

if(navToggle){
    navToggle.addEventListener('click', ()=>{
        navMenu.classList.add('show-menu')
    })
}
if(navClose){
    navClose.addEventListener('click', ()=>{
        navMenu.classList.remove('show-menu')
    })
}

/*HEADER*/
window.addEventListener('scroll', ()=>{
    const header = document.getElementById('header')
    this.scrollY >= 50 ? header.classList.add('change-header') : header.classList.remove('change-header')
})
/*=============== SHOW SCROLL UP ===============*/ 
const scrollUp = document.getElementById('scrollUp')
window.addEventListener('scroll', ()=>{
    this.scrollY >= 350 ? scrollUp.classList.add('show-scrollup') : scrollUp.classList.remove('show-scrollup')
})

const themeBtn = document.getElementById('themeBtn')
const lightTheme = 'light-theme'
const iconTheme = 'ri-sun-line'

themeBtn.addEventListener('click', ()=>{
    document.body.classList.toggle(lightTheme)
    themeBtn.classList.toggle(iconTheme)
})

// Swiper
const swiper = new Swiper(".swiper", {
    // How many slides to show
    slidesPerView: 1,
    // How much space between slides
    spaceBetween: 20,
    // Make the next and previous buttons work
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    // Make the pagination indicators work
    pagination: {
        el: '.swiper-pagination'
    },
    //Responsive breakpoints for how many slides to show at that view
    breakpoints: {
        // 700px and up shoes 2 slides
        700: {
        slidesPerView: 2
        },
        // 1200px and up shoes 3 slides
        1200: {
            slidesPerView: 3
        }
    }   
});
