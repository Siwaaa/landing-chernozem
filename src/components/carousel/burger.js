const triggerBurger = document.querySelector('.filter-trigger')
const menuMobile = document.querySelector('.filter-menu')

export function toggelMenuMobile() {
  triggerBurger.addEventListener('click', (e) => {
    bugFixMenu()
    menuMobile.classList.toggle('animation-menu')
    triggerBurger.classList.toggle('activeted-burger')
  })
}

export function closeMenu() {
  bugFixMenu()
  menuMobile.classList.remove('animation-menu')
  triggerBurger.classList.remove('activeted-burger')
}

// Фикс бага с анимацией, когда резко щелкаешь на кнопку меню
// (до этого она не успевала завершиться)
function bugFixMenu() {
  if (menuMobile.classList.contains('animation-menu')) {
    menuMobile.querySelectorAll('li').forEach(e => {
      e.style.transition = 'all 0.5s ease-in-out 0s'
    })
  } else {
    menuMobile.querySelectorAll('li').forEach(e => {
      e.style.transition = ''
    })
  }
}