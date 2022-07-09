import { swiperPartners, initSwiperProjects } from "./components/carousel/carousel.js";
import { toggelMenuMobile, closeMenu } from "./components/carousel/burger.js";

const radiosFilter = document.querySelectorAll('input[type=radio][name="filter"]');
let currentSwiperProjects = null
let currentProjectID = null

document.addEventListener("DOMContentLoaded", startedCheck);
window.addEventListener('resize', () => { fixVH() });

/*
* Проверка выбранного пункта меню
* при первоначальной загрузке.
*
*/
function startedCheck() {
  replaceImgForLazy()
  toggelMenuMobile()
  checkedNav()
  fixVH()
}

function replaceImgForLazy() {
  const lazyloadImages = document.querySelectorAll(".projects__item img[data-src]");
  lazyloadImages.forEach(function (img) {
    const reg = img.nextSibling.textContent.split(/"([^"]*)"/g);
    img.dataset.src = reg[1];
  });
}
function checkedNav() {
  // запустить спинер пока не отрисуется swiper
  radiosFilter.forEach(e => {
    if (e.checked) {
      currentProjectID = e.value
      currentSwiperProjects = initSwiperProjects(e.value)
      // завершить спинер
    }
  })
}
function fixVH() {
  // Решение проблемы с высотой моб браузеров
  // with: height = calc(var(--vh, 1vh) * 100);
  let vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', `${vh}px`);
}

/*
* Проверка изменения выбранного пункта меню.
* Input: id нового выбранного пункта
*/
function changeHandlerFilter() {
  if (this.value) {
    // 1 удаляем swiper экземпляр
    if (currentSwiperProjects) {
      currentSwiperProjects.destroy()
      document.getElementById(currentProjectID).style.display = 'none'
      // закрываем меню, если на мобильном
      closeMenu()
    } else {
      console.log('Ошибка удаления слайдера');
      return false
    }

    // 2 запускаем спинер пока не отрисуется swiper

    // 3 меняем текущий swiper 
    currentSwiperProjects = initSwiperProjects(this.value)
    currentProjectID = this.value
  }
}
Array.prototype.forEach.call(radiosFilter, function (radio) {
  radio.addEventListener('change', changeHandlerFilter);
});