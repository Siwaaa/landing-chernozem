const triggerBurger = document.querySelector('.filter-trigger')
const menuMobile = document.querySelector('.filter-menu')

export function toggelMenuMobile() {
  triggerBurger.addEventListener('click', (e) => {
    // Фикс бага с анимацией, когда резко щелкаешь на кнопку меню
    // (до этого она не успевала завершиться)
    if (menuMobile.classList.contains('animation-menu')) {
      menuMobile.querySelectorAll('li').forEach(e => {
        e.style.transition = 'all 0.6s ease-in-out 0s'
      })
    } else {
      menuMobile.querySelectorAll('li').forEach(e => {
        e.style.transition = ''
      })
    }
    
    menuMobile.classList.toggle('animation-menu')
    triggerBurger.classList.toggle('activeted-burger')
  })
}

export function closeMenu() {
  menuMobile.classList.remove('animation-menu')
  triggerBurger.classList.remove('activeted-burger')
}