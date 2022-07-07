import Swiper from 'swiper';
import 'swiper/swiper-bundle.min.css';

// Swiper.use([Autoplay]);

export const swiper = new Swiper('.projects__slider', {
  slidesPerView: 'auto',
  spaceBetween: 7,
  centerInsufficientSlides: true,
  centeredSlides: true,
  centeredSlidesBounds: true,
  speed: 1000,
});

export const swiperPartners = new Swiper('.partners__slider', {
  grabCursor: true,
  loop: true,
  slidesPerView: 'auto',
  spaceBetween: 40,
  speed: 2000,
  // autoplay: {
  //   delay: 0,
  //   disableOnInteraction: false,
  //   pauseOnMouseEnter: true,
  // },
});

swiper.once('slideChange', function () {
  console.log('slide changed');
});

// swiper.on('transitionEnd', (sw) => {
//   console.log(sw);
// })

const a = document.querySelectorAll('.projects__item.swiper-slide')

a.forEach((el, index) => {
  el.addEventListener('mouseleave', e => {
    const currentItem = e.target;
    const video = currentItem.querySelector('.lazy-video')

    currentItem.querySelector('.projects__text').animate({ 
      opacity: '0', visibility: 'hidden' 
    }, {
      duration: 400,
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

    setTimeout(()=> {
      video.animate({ 
        opacity: '0', visibility: 'hidden' 
      }, {
        duration: 800,
        iterations: 1,
        easing: "cubic-bezier(.455, .03, .515, .955)",
        fill: "forwards",
      })

      video.pause()
    }, 2500)
  })

  el.addEventListener('mouseenter', e => {
    const currentItem = e.target;

    currentItem.querySelector('.projects__text').animate([
      { opacity: '0', visibility: 'hidden' },
      { opacity: '1', visibility: 'visible' }
    ], {
      delay: 1400,
      duration: 2400,
      iterations: 1,
      easing: "ease-in-out",
      fill: "forwards",
    })

    currentItem.animate([
      { opacity: '0', visibility: 'hidden' },
      { opacity: '1', visibility: 'visible' }
    ], {
      pseudoElement: '::before',
      delay: 800,
      duration: 1800,
      iterations: 1,
      easing: "cubic-bezier(.455, .03, .515, .955)",
      fill: "forwards",
    })

    setTimeout(()=> {
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
        duration: 800,
        iterations: 1,
        easing: "ease-in-out",
        fill: "forwards",
      })

      video.play()
      
    }, 2000)
  })
})