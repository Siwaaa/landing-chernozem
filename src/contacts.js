import { toggelMenuMobile, closeMenu } from "./blocks/header/burger.js"; 
import IMask from 'imask'

document.addEventListener("DOMContentLoaded", startedCheck);
window.addEventListener('resize', () => { fixVH() });

const radiosFilter = document.querySelectorAll('input[type=radio][name="filter"]');

function startedCheck() {
  toggelMenuMobile()
  fixVH()
  handlerLang()
}

function fixVH() {
  // Решение проблемы с высотой моб браузеров
  // with css: height = calc(var(--vh, 1vh) * 100);
  let vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', `${vh}px`);
}

function handlerLang() {
  const langBtns = [
    document.getElementById('lang-ru'), 
    document.getElementById('lang-en')
  ]

  langBtns.forEach(el => {
    el.addEventListener('click', e => {
      if(e.target.id == 'lang-ru') {
        location.href = '/'
      } else {
        location.href = '/en/'
      }
    })
  })
}

function changeHandlerFilter() {
  if (this.value) {
    const currentLang = location.href.includes('en') ? '/en/' : '/'
    location.href = currentLang + "?filter=" + this.value
  }
}
Array.prototype.forEach.call(radiosFilter, function (radio) {
  radio.addEventListener('click', changeHandlerFilter);
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

    const handlerReqMessage = {
      ru: {
        good: "<h2> Ваша заявка успешно отправлена! </h2>",
        error: "Пожалуйста, проверьте правильность заполненных полей"
      },
      en: {
        good: "<h2> Your application has been successfully submitted! </h2>",
        error: "Please, check if all fields are filled correctly."
      }
    }
    const currentLang = location.href.includes('en') ? 'en' : 'ru'

    if (name && email && (phone.length > 15)) {
      sendForm(el)
        .then((data) => el.innerHTML = handlerReqMessage[currentLang].good)
        .catch(er => console.log('Ошибка отправки данных\n' + er))
    } else {
      alert(handlerReqMessage[currentLang].error)
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