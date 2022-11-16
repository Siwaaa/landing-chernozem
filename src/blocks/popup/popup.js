const slides = document.querySelectorAll('.up')
const popup = document.querySelector('.popup')
const popupVideo = popup.querySelector('video')
const popupVideoSource = popup.querySelectorAll('video > source')
const closePopup = document.querySelector('.popup-close')
let timerVideo = null
const partnersItems = document.querySelectorAll('.partners__item')

slides.forEach(el => {
  el.addEventListener('click', (e) => openPopup(e.currentTarget.dataset.videofullsrc, e.currentTarget.dataset.videofullsrcEn))
})
partnersItems.forEach(el => {
  el.addEventListener('click', (e) => {
    if (e.currentTarget.tagName == 'A') return false
    openPopup(e.currentTarget.dataset.openclip)
  })
})

function openPopup(videofullsrc, videofullsrcEn) {
  popup.animate([
    { opacity: '0', visibility: 'hidden', transform: 'translate3d(0, -100%, 0)' },
    { opacity: '1', visibility: 'visible', transform: 'translate3d(0, 0, 0)' }
  ], {
    duration: 1400,
    iterations: 1,
    easing: "cubic-bezier(0.33, 1, 0.68, 1)",
    fill: "forwards",
  })
  popup.querySelector('.popup__body').style.display = 'flex'

  popupVideoSource.forEach(el => {
    let type = el.type.includes('mp4') ? 'mp4' : 'webm'
    const langPrefix = location.href.includes('en') && videofullsrcEn ? '_en' : ''
    el.setAttribute('src', videofullsrc + langPrefix + '.' + type);
  })
  popupVideo.load();
  popupVideo.play();
}

closePopup.addEventListener('click', e => {
  popup.animate([
    { opacity: '1', visibility: 'visible', transform: 'scale3d(1, 1, 1)' },
    { opacity: '0', visibility: 'hidden', transform: 'scale3d(0, 0, 0)' }
  ], {
    duration: 400,
    iterations: 1,
    easing: "ease-in-out",
    fill: "forwards",
  })
  popup.querySelector('.popup__body').style.display = 'none'
  popupVideo.pause();
})