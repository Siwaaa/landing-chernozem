import { swiperPartners, initSwiperProjects } from "./components/carousel/carousel.js";
import { toggelMenuMobile, closeMenu } from "./components/carousel/burger.js";

const radiosFilter = document.querySelectorAll('input[type=radio][name="filter"]');
let currentSwiperProjects = null
let currentProjectID = null

document.addEventListener("DOMContentLoaded", startedCheck);

/*
* Проверка выбранного пункта меню
* при первоначальной загрузке.
*
* И инициализация моб меню
*/ 
function startedCheck() {
  toggelMenuMobile()
  checkedNav()
}

function checkedNav() {
  // запустить спинер пока не отрисуется swiper
  radiosFilter.forEach(e => {
    if(e.checked) {
      currentProjectID = e.value
      currentSwiperProjects = initSwiperProjects(e.value)
      // завершить спинер
    }
  })
}

/*
* Проверка изменения выбранного пункта меню.
*
* На входе id нового выбранного пункта
*/ 
function changeHandlerFilter(event) {
  if (this.value) {
    // 1 удаляем swiper экземпляр
    if(currentSwiperProjects) {
      currentSwiperProjects.destroy()
      document.getElementById(currentProjectID).style.display = 'none'
      // и закрываем меню, если на мобильном
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