import { initSwiperProjects, removeListenSlides } from "./blocks/projects/carousel.js";
import { swiperPartners } from "./blocks/partners/partners.js";
import { toggelMenuMobile, closeMenu } from "./blocks/header/burger.js";

const radiosFilter = document.querySelectorAll('input[type=radio][name="filter"]');

let currentSwiperProjects = null
let currentProjectID = null

export function getCurrentSwiper() {
  return currentSwiperProjects
}

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
  checkedFilter()
  fixVH()
  initLang()
}

function replaceImgForLazy() {
  const lazyloadImages = document.querySelectorAll(".projects__item img[data-src]");
  lazyloadImages.forEach(function (img) {
    const reg = img.nextSibling.textContent.split(/"([^"]*)"/g);
    img.dataset.src = reg[1];
  });
}
function checkedFilter() {
  // запустить спинер пока не отрисуется swiper
  const paramsURL = new URLSearchParams(window.location.search)
  if (paramsURL.has('filter')) {
    const radioName = paramsURL.get('filter')
    try {
      currentProjectID = radioName
      currentSwiperProjects = initSwiperProjects(radioName)
      for (let e of radiosFilter) {
        if (e.value == radioName) {
          e.checked = true;
          break;
        }
      }
    } catch (error) {
      radiosFilter.forEach(e => {
        if (e.checked) {
          currentProjectID = e.value
          currentSwiperProjects = initSwiperProjects(e.value)
        }
      })
    }
  } else {
    radiosFilter.forEach(e => {
      if (e.checked) {
        currentProjectID = e.value
        currentSwiperProjects = initSwiperProjects(e.value)
      }
    })
  }
  // завершить спинер
}
function fixVH() {
  // Решение проблемы с высотой моб браузеров
  // with css: height = calc(var(--vh, 1vh) * 100);
  let vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', `${vh}px`);
}

function initLang() {
  // модуль проверки ip 
  const langBrowser = window.navigator.language 
    || window.navigator.systemLanguage 
    || window.navigator.userLanguage

  const langIsRu = langBrowser.toLowerCase().includes('ru')
  // langIsRu ? location.href = '/' : location.href = '/en/'

  // прослушиватель кликов 
  const langBtns = [
    document.getElementById('lang-ru'), 
    document.getElementById('lang-en')
  ]

  langBtns.forEach(el => {
    el.addEventListener('click', e => {
      if(e.target.id == 'lang-ru') {
        location.href = '/'
      } else {
        location.href = '/en/'
      }
    })
  })
}

/*
* Проверка изменения выбранного пункта меню.
* Input: id нового выбранного пункта
*/
function changeHandlerFilter() {
  if (this.value) {
    if (currentSwiperProjects) {
      const elementSliderActive = document.getElementById(currentProjectID)

      const animateID = elementSliderActive.animate([
        { opacity: '1', visibility: 'visible', transform: 'translate3d(0, 0,0)' },
        { opacity: '0', visibility: 'hidden', transform: 'translate3d(-25%, 0,0)' },
      ], {
        duration: 600,
        iterations: 1,
        easing: "cubic-bezier(.455, .03, .515, .955)",
        fill: "forwards",
      })

      animateID.onfinish = event => {
        // 1 удаляем swiper экземпляр
        removeListenSlides(currentSwiperProjects)
        currentSwiperProjects.detachEvents()
        currentSwiperProjects.destroy(true, false)
        elementSliderActive.style.display = 'none'

        // 2 запускаем спинер пока не отрисуется swiper

        // 3 меняем текущий swiper 
        currentSwiperProjects = initSwiperProjects(this.value)
        currentProjectID = this.value
      };

      // закрываем меню, если на мобильном
      closeMenu()
    } else {
      console.log('Ошибка удаления слайдера');
      return false
    }
  }
}
Array.prototype.forEach.call(radiosFilter, function (radio) {
  radio.addEventListener('change', changeHandlerFilter);
});