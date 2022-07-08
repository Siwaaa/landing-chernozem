import { swiper, swiperPartners } from "./components/carousel/carousel.js";
import { toggelMenuMobile } from "./components/carousel/burger.js";

const radiosFilter = document.querySelectorAll('input[type=radio][name="filter"]');

document.addEventListener("DOMContentLoaded", startedCheck);

// Проверка выбранного пункта меню 
// при первоначальной загрузке 
// и инициализация моб меню
function startedCheck() {
  toggelMenuMobile()
  checkedNav()
}

function checkedNav() {
  // запустить спинер пока не отрисуется swiper
  radiosFilter.forEach(e => {
    if(e.checked) {
      initSwiper(e.value)
    }
  })
}

// Проверка изменения меню
function changeHandlerFilter(event) {
  if (this.value) {
    // 1 удаляем swiper
    // 2 запускаем спинер пока не отрисуется swiper
    console.log(this.value);
    // 3 меняем swiper 
  }
}
Array.prototype.forEach.call(radiosFilter, function (radio) {
  radio.addEventListener('change', changeHandlerFilter);
});