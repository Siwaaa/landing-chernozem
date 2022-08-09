import { toggelMenuMobile, closeMenu } from "./blocks/header/burger.js"; 
import IMask from 'imask'

document.addEventListener("DOMContentLoaded", startedCheck);
window.addEventListener('resize', () => { fixVH() });

const radiosFilter = document.querySelectorAll('input[type=radio][name="filter"]');

function startedCheck() {
  toggelMenuMobile()
  fixVH()
}

function fixVH() {
  // Решение проблемы с высотой моб браузеров
  // with css: height = calc(var(--vh, 1vh) * 100);
  let vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', `${vh}px`);
}

function changeHandlerFilter() {
  if (this.value) {
    location.href = "/"
  }
}
Array.prototype.forEach.call(radiosFilter, function (radio) {
  radio.addEventListener('change', changeHandlerFilter);
});

/*
* Обработка ввода номера в поля формы
*/
const maskOptions = {
  mask: '+{7}(000)000-00-00'
};

const elements = document.querySelectorAll('input[type="tel"]');
elements.forEach(e => {
  IMask(e, maskOptions);
})

const link = 'https://hook.eu1.make.com/gf1ocj7mqa8lmhadn95p6dcag9a1n1bj'

const forms = document.querySelectorAll('form')
forms.forEach(el => {
  el.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const textarea = e.target.elements[0].value;
    const name = e.target.elements[1].value;
    const email = e.target.elements[2].value;
    const phone = e.target.elements[3].value;

    if (name && email && (phone.length > 15)) {
      sendForm(el)
        .then((data) => el.innerHTML = "<h2> Ваша заявка успешно отправлена! </h2>")
        .catch(er => console.log('Ошибка отправки данных\n' + er))
    } else {
      alert("Пожалуйста, проверьте правильность заполненных полей")
    }
  })
})

async function sendForm(data) {
  const res = await fetch(link, {
    mode: 'no-cors',
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: new FormData(data)
  })
  return await res
}