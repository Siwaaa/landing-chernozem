import Swiper, {Autoplay} from 'swiper';
import 'swiper/swiper-bundle.min.css';

Swiper.use([Autoplay]);

export const swiper = new Swiper('.projects__slider', {
  slidesPerView: 3,
  spaceBetween: 30,
  centeredSlides: true,
  speed: 500,
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