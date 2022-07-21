import Swiper, { Lazy } from 'swiper';
import 'swiper/swiper-bundle.min.css';
import { getCurrentSwiper } from '../..';

Swiper.use(Lazy)

const swiperArrayItems = document.querySelectorAll('.projects__item.swiper-slide')

export const swiperPartners = new Swiper('.partners__slider', {
  grabCursor: true,
  loop: true,
  slidesPerView: 'auto',
  spaceBetween: 40,
  speed: 1500
});

export function initSwiperProjects(id) {
 
  const animateID = document.getElementById(id).animate([
    { opacity: '0', visibility: 'hidden', transform: 'translate3d(25%, 0,0)' },
    { opacity: '1', visibility: 'visible', transform: 'translate3d(0, 0,0)' },
  ], {
    duration: 800,
    iterations: 1,
    easing: "cubic-bezier(.455, .03, .515, .955)",
    fill: "forwards",
  })

  document.getElementById(id).style.display = 'block'

  return new Swiper('.projects__slider' + '#' + id, {
    slidesPerView: 'auto',
    spaceBetween: 7,
    // CSSWidthAndHeight: true,
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
    observer: true,  
    observeParents: true,

  });
}

// swiper.once('slideChange', function () {
//   console.log('slide changed');
// });

// swiper.on('transitionEnd', (sw) => {
//   console.log(sw);
// })


swiperArrayItems.forEach((el, index) => {
  el.addEventListener('mouseenter', e => {
    const currentItem = e.target;

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

    const sw = getCurrentSwiper()
    sw.slideTo(sw.activeIndex, 1000)
    console.log(sw.activeIndex);

    setTimeout(() => {
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
          delay: 2000,
          duration: 1000,
          iterations: 1,
          easing: "ease-in-out",
          fill: "forwards",
        })
  
        video.play()
      } catch (error) {
        
      }


    }, 1000)
  })

  el.addEventListener('mouseleave', e => {
    const currentItem = e.target;
    const video = currentItem.querySelector('.lazy-video')

    currentItem.querySelector('.projects__text').animate({
      opacity: '0', visibility: 'hidden'
    }, {
      duration: 200,
      iterations: 1,
      fill: 'forwards',
    });

    currentItem.animate({
      opacity: '0', visibility: 'hidden'
    }, {
      pseudoElement: '::before',
      duration: 400,
      iterations: 1,
      fill: 'forwards',
    })

    

    setTimeout(() => {
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
        
      }
      
    }, 1300)
  })
})


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