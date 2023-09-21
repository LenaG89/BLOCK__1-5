let servicesContentBtn = document.querySelector('.services-content__btn');
let servicesContentBtnImg = document.querySelector('.services-content__btn-img');
let servicesContentBrandWrapperHeight = document.querySelector('.services-content-slider__wrapper');

servicesContentBtn.addEventListener('click', function() {
    

    if (servicesContentBtn.textContent !== 'Показать все') {
        servicesContentBtn.textContent = 'Показать все';
        servicesContentBtnImg.style.transform = 'rotate(0deg)';

        if (window.innerWidth >= 768) {
            servicesContentBrandWrapperHeight.style.height = '160px';
        } 
        else {
            servicesContentBrandWrapperHeight.style.height = '100%';
    }
        
         
    }
    else { 
        servicesContentBrandWrapperHeight.style.height = '100%';
        servicesContentBtn.textContent = 'Скрыть';
        servicesContentBtnImg.style.transform = 'rotate(180deg)';
         
    }  
})


var init = false;
var swiper;
function swiperCard() {
  if (window.innerWidth <= 768) {
    if (!init) {
      init = true;
      swiper = new Swiper(".swiper-container", {
        direction: "horizontal",
        slidesPerView:'auto',
        spaceBetween: 16,
        loop: true,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
      });
    }
  } else if (init) {
    swiper.destroy();
    init = false;
  }
}
swiperCard();
window.addEventListener("resize", swiperCard);
          