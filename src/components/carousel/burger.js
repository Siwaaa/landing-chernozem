const triggerBurger = document.querySelector('.filter-trigger')
const menuMobile = document.querySelector('.filter-menu')

export function toggelMenuMobile() {
  triggerBurger.addEventListener('click', (e) => {
    menuMobile.classList.toggle('animation-menu')
    triggerBurger.classList.toggle('activeted-burger')
  })
}

export function closeMenu() {
  menuMobile.classList.remove('animation-menu')
  triggerBurger.classList.remove('activeted-burger')
}