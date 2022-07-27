import Swiper, { Lazy, Mousewheel } from 'swiper';
import 'swiper/swiper-bundle.min.css';
import { getCurrentSwiper } from '../..';

Swiper.use([Lazy, Mousewheel])

let animationVideo = null

// const swiperArrayItems = document.querySelectorAll('.projects__item.swiper-slide')

export const swiperPartners = new Swiper('.partners__slider', {
  grabCursor: true,
  loop: true,
  slidesPerView: 'auto',
  spaceBetween: 40,
  speed: 1500
});

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
    speed: 1000,
    watchSlidesProgress: true,
    preloadImages: false,
    
    lazy: {
      enabled: true,
      checkInView: true
    },
    // observer: true,
  });

  // включаем прослушку событий у текущего свайпера
  listenCurrentSwiper(swiper)

  return swiper
}

function listenCurrentSwiper(swiperInstance) {
  swiperInstance.slides.forEach((el, index) => {
    // const sizeSlide = -1 * getComputedStyle(document.querySelector('.projects__item'))
    //   .getPropertyValue('--w-project')
    //   .replace(/[^0-9]/g, "")

    el.addEventListener('mouseenter', handlerEnterMouse)
    el.addEventListener('mouseleave', handlerLeaveMouse)
  })

  document.querySelector('.rr').addEventListener('mouseenter', (event) => {
    if(swiperInstance.isEnd) return false
   
    swiperInstance.slideNext(1000)
  })
  document.querySelector('.ll').addEventListener('mouseenter', (event) => {
    if(swiperInstance.isBeginning) return false
  
    swiperInstance.slidePrev(1000)
  })
}

function handlerEnterMouse(event) {
  const currentItem = event.target;

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

  // скролл при наведении
  // this.slideTo(index, 1600)
  // console.log(this.activeIndex);

  animationVideo = setTimeout(() => {
    try {
      const video = currentItem.querySelector('.lazy-video')
      const videoSource = currentItem.querySelector('.lazy-video > source')
      const newSrc = videoSource.dataset.src
      videoSource.setAttribute('src', newSrc)

      video.load();

      video.animate([
        { opacity: '0', visibility: 'hidden' },
        { opacity: '1', visibility: 'visible' }
      ], {
        delay: 1000,
        duration: 1000,
        iterations: 1,
        easing: "ease-in-out",
        fill: "forwards",
      })

      video.play()
    } catch (error) {
      throw new Error('Ошибка воспроизведения видео')
    }
  }, 2000)
}

function handlerLeaveMouse(event) {
  const currentItem = event.target;
  const video = currentItem.querySelector('.lazy-video')

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
  } catch (error) {
    throw new Error('Ошибка остановки видео')
  }
}

export function removeListenSlides(swiperInstance) {
  swiperInstance.slides.forEach(el => {
    el.removeEventListener('mouseenter', handlerEnterMouse)
    el.removeEventListener('mouseleave', handlerLeaveMouse)
  })
}
// swiper.once('slideChange', function () {
//   console.log('slide changed');
// });

// const alarm = {
//   remind: function(aMessage) {
//     alert(aMessage);
//     this.timeoutID = undefined;
//   },

//   setup: function() {
//     if (typeof this.timeoutID === 'number') {
//       this.cancel();
//     }

//     this.timeoutID = setTimeout(function(msg) {
//       this.remind(msg);
//     }.bind(this), 1000, 'Wake up!');
//   },

//   cancel: function() {
//     clearTimeout(this.timeoutID);
//   }
// };
// window.addEventListener('click', () => alarm.setup() );