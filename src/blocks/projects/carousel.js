import Swiper, { Lazy, Mousewheel } from 'swiper';
import 'swiper/swiper-bundle.min.css';
import { getCurrentSwiper } from '../..';

Swiper.use([Lazy, Mousewheel])

let animationVideo = null
let animationLastSlide = null
let animationLastSlide_exit = null
let intervalID = null
let timerUpAnimation = null
const sizeSlide = -1 * getComputedStyle(document.querySelector('.projects__item'))
  .getPropertyValue('--w-project')
  .replace(/[^0-9]/g, "")

export function initSwiperProjects(id) {
  const swiperElementDOM = document.getElementById(id)

  swiperElementDOM.animate([
    { opacity: '0', visibility: 'hidden', transform: 'translate3d(25%, 0,0)' },
    { opacity: '1', visibility: 'visible', transform: 'translate3d(0, 0,0)' },
  ], {
    duration: 800,
    iterations: 1,
    easing: "cubic-bezier(.455, .03, .515, .955)",
    fill: "forwards",
  })

  swiperElementDOM.style.display = 'block'

  const swiper = new Swiper('.projects__slider' + '#' + id, {
    slidesPerView: 'auto',
    spaceBetween: 7,
    mousewheel: true,
    grabCursor: true,
    centerInsufficientSlides: true,
    centeredSlides: true,
    // ПЛОХОЕ свойство
    centeredSlidesBounds: true,
    speed: 800,
    watchSlidesProgress: true,
    preloadImages: false,
    lazy: {
      enabled: true,
      checkInView: true
    },
  });

  // включаем прослушку событий у текущего свайпера
  listenCurrentSwiper(swiper)

  return swiper
}

function listenCurrentSwiper(swiperInstance) {

  swiperInstance.slides.forEach(el => {
    el.addEventListener('mouseenter', handlerEnterMouse)
    el.addEventListener('mouseleave', handlerLeaveMouse)
  })

  document.querySelector('.rr').addEventListener('mouseenter', handlerSlideNext)
  document.querySelector('.rr').addEventListener('mouseleave', (event) => {
    clearInterval(intervalID)
  })
  document.querySelector('.ll').addEventListener('mouseenter', handlerSlidePrev)
  document.querySelector('.ll').addEventListener('mouseleave', (event) => {
    clearInterval(intervalID)
  })
}

function handlerEnterMouse(event) {
  const currentItem = event.target;

  helperResizLastSlide(currentItem);

  currentItem.querySelector('.projects__text').animate([
    { opacity: '0', visibility: 'hidden' },
    { opacity: '1', visibility: 'visible' }
  ], {
    delay: 400,
    duration: 800,
    iterations: 1,
    easing: "ease-in-out",
    fill: "forwards",
  })

  currentItem.animate([
    { opacity: '0', visibility: 'hidden' },
    { opacity: '1', visibility: 'visible' }
  ], {
    pseudoElement: '::before',
    delay: 0,
    duration: 600,
    iterations: 1,
    easing: "cubic-bezier(.455, .03, .515, .955)",
    fill: "forwards",
  })

  // Если у проекта имеется видео, то воспроизведем его
  if (currentItem.querySelector('.up')) {
    
    animationVideo = setTimeout(() => {
      try {
        const video = currentItem.querySelector('.lazy-video')
        const videoSource = currentItem.querySelectorAll('.lazy-video > source')
        videoSource.forEach(el => {
          let newSrc = el.dataset.src
          el.setAttribute('src', newSrc)
        })

        video.load();
        video.play();

        video.animate([
          { opacity: '1', visibility: 'visible' }
        ], {
          duration: 1800,
          iterations: 1,
          easing: "cubic-bezier(0.9, 0, 0.78, 0)",
          fill: "forwards",
        })

        timerUpAnimation = setTimeout(e => {
          currentItem.querySelector('.up').classList.add('up-active')
        }, 300)

      } catch (error) {
        console.log('video play empty');
      }
    }, 700)
  }
}

function handlerLeaveMouse(event) {
  const currentItem = event.target;
  const video = currentItem.querySelector('.lazy-video');

  helperResizLastSlide(currentItem);

  currentItem.querySelector('.projects__text').animate({
    opacity: '0', visibility: 'hidden'
  }, {
    duration: 100,
    iterations: 1,
    fill: 'forwards',
  });

  currentItem.animate({
    opacity: '0', visibility: 'hidden'
  }, {
    pseudoElement: '::before',
    duration: 600,
    iterations: 1,
    fill: 'forwards',
  })

  clearTimeout(animationVideo)
  clearTimeout(timerUpAnimation)

  try {
    video.animate({
      opacity: '0', visibility: 'hidden'
    }, {
      duration: 800,
      iterations: 1,
      easing: "cubic-bezier(.455, .03, .515, .955)",
      fill: "forwards",
    })

    video.pause()

    currentItem.querySelector('.up').classList.remove('up-active')
  } catch (error) {
    console.log('video stop empty');
  }
}

function handlerSlideNext(event) {
  const swiperInstance = getCurrentSwiper()

  if (swiperInstance.isEnd) return false
  swiperInstance.slideNext(1000)

  intervalID = setInterval(e => {
    if (swiperInstance.isEnd) clearInterval(intervalID)
    swiperInstance.slideNext(1000)
  }, 1500)
}

function handlerSlidePrev(event) {
  const swiperInstance = getCurrentSwiper()

  if (swiperInstance.isBeginning) return false
  swiperInstance.slidePrev(1000)

  intervalID = setInterval(e => {
    if (swiperInstance.isBeginning) clearInterval(intervalID)
    swiperInstance.slidePrev(1000)
  }, 1500)
}

export function removeListenSlides(swiperInstance) {
  swiperInstance.slides.forEach(el => {
    el.removeEventListener('mouseenter', handlerEnterMouse)
    el.removeEventListener('mouseleave', handlerLeaveMouse)
  })

  document.querySelector('.rr').removeEventListener('mouseenter', handlerSlideNext)
  document.querySelector('.ll').removeEventListener('mouseenter', handlerSlidePrev)
}

function helperResizLastSlide(slide) {
  const sw = getCurrentSwiper()
  const currentTranslate = new WebKitCSSMatrix(sw.$wrapperEl[0].style.transform).e

  if (sw.slides[sw.slides.length - 1] === slide && currentTranslate < 1) {
    // currentTranslate < 1 нужен для проверки помещаются ли все слайды в контаинер
    if (animationLastSlide) {

      if (sw.$wrapperEl[0].getAnimations().length < 2 && !animationLastSlide_exit) {
        animationLastSlide_exit = sw.$wrapperEl[0].animate({
          transform: `translate3d(${currentTranslate}px, 0px, 0px)`
        }, {
          id: 'tola',
          duration: 600,
          easing: "cubic-bezier(.455, .03, .515, .955)",
          iterations: 1,
          fill: 'forwards',
        })

        animationLastSlide_exit.onfinish = () => {
          animationLastSlide.cancel()
          animationLastSlide_exit.cancel()
          animationLastSlide = null
          animationLastSlide_exit = null
        }
      }
    } else {
      animationLastSlide = sw.$wrapperEl[0].animate({
        transform: `translate3d(${currentTranslate + sizeSlide}px, 0px, 0px)`
      }, {
        id: 'maha',
        duration: 800,
        easing: "cubic-bezier(.455, .03, .515, .955)",
        iterations: 1,
        fill: 'forwards',
      })
    }
  }
}