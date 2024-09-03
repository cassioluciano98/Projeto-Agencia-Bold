$('.container-slider').slick({
    dots: true,
    arrows: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHouver: false,
    responsive: [
        {
            breakpoint: 980,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            }
        }
    ]
});

let menuBtn = document.querySelector('.items-menu-mobile img');
menuBtn.addEventListener('click', ()=>{
    let itemsMenu = document.querySelector('.menu-mobile');
    itemsMenu.classList.toggle('show');
})