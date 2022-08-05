import Swiper, {Autoplay} from 'swiper';

Swiper.use(Autoplay)

export const swiperPartners = new Swiper('.partners__slider', {
  grabCursor: true,
  loop: true,
  slidesPerView: 'auto',
  spaceBetween: 40,
  speed: 2600,
  autoplay: {
    delay: 0,
    disableOnInteraction: false,
    pauseOnMouseEnter: true,
  },
});