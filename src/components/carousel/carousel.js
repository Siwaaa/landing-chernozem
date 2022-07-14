import Swiper, {Lazy} from 'swiper';
import 'swiper/swiper-bundle.min.css';

Swiper.use(Lazy)

const a = document.querySelectorAll('.projects__item.swiper-slide')

export const swiperPartners = new Swiper('.partners__slider', {
  grabCursor: true,
  loop: true,
  slidesPerView: 'auto',
  spaceBetween: 40,
  speed: 1500,
  // autoplay: {
  //   delay: 0,
  //   disableOnInteraction: false,
  //   pauseOnMouseEnter: true,
  // },
});

export function initSwiperProjects(id) {
  
  const animateID = document.getElementById(id).animate([
    { opacity: '0', visibility: 'hidden', transform: 'translate3d(15%, 0,0)' },
    { opacity: '1', visibility: 'visible', transform: 'translate3d(0, 0,0)'},
  ], {
    duration: 1200,
    iterations: 1,
    easing: "cubic-bezier(.455, .03, .515, .955)",
    fill: "forwards",
  })

  // animateID.onfinish = event => {
    document.getElementById(id).style.display = 'block'
  // };

  return new Swiper('.projects__slider' + '#' + id, {
    slidesPerView: 'auto',
    spaceBetween: 7,
    // CSSWidthAndHeight: true,
    centerInsufficientSlides: true,
    centeredSlides: true,
    // ХУЕВОЕ свойство
    centeredSlidesBounds: true, 
    speed: 1000,
    watchSlidesProgress: true,
    preloadImages: false,
    lazy: {
      enabled: true,
      checkInView: true
    },
    
  });
}

// swiper.once('slideChange', function () {
//   console.log('slide changed');
// });

// swiper.on('transitionEnd', (sw) => {
//   console.log(sw);
// })


a.forEach((el, index) => {
    el.addEventListener('mouseenter', e => {
    const currentItem = e.target;

    currentItem.querySelector('.projects__text').animate([
      { opacity: '0', visibility: 'hidden' },
      { opacity: '1', visibility: 'visible' }
    ], {
      delay: 800,
      duration: 1000,
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
      duration: 1000,
      iterations: 1,
      easing: "cubic-bezier(.455, .03, .515, .955)",
      fill: "forwards",
    })

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
          delay: 3000,
          duration: 1000,
          iterations: 1,
          easing: "ease-in-out",
          fill: "forwards",
        })
  
        video.play()
      } catch (error) {
        document.getElementById('vimeo').animate([
          { opacity: '0', visibility: 'hidden' },
          { opacity: '1', visibility: 'visible' }
        ], {
          delay: 3000,
          duration: 800,
          iterations: 1,
          easing: "ease-in-out",
          fill: "forwards",
        })
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
      video.animate({
        opacity: '0', visibility: 'hidden'
      }, {
        duration: 800,
        iterations: 1,
        easing: "cubic-bezier(.455, .03, .515, .955)",
        fill: "forwards",
      })

      video.pause()
    }, 1500)
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