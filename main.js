/* Input Focus/Blur */
const callInput = document.querySelector('.search-form__input');
const callLabel = document.querySelector('.search-form__label');

callInput.addEventListener('focus', function () {
  callLabel.classList.add('search-form__label_top');
})

callInput.addEventListener('blur', function () {
  if (callInput.value === '') {
    callLabel.classList.remove('search-form__label_top');
  }
})

/* AJAX-request */
const headlineDescriptionURL = 'https://baconipsum.com/api/?type=lucky';
const headlineContainer = document.querySelector('.headline__container');


function createDescriptionElement(text) {
  const headlineDescription = document.createElement('p');
  headlineDescription.classList.add('headline-text');
  headlineDescription.textContent = text;

  return headlineDescription;
}

async function getAndRenderDescription() {
  const responce = await fetch(headlineDescriptionURL);
  const data = await responce.json();

  const dataFormatted = data.join(' ').replace(/\s+/g, ' ').trim();

  const elementWithData = createDescriptionElement(dataFormatted);

  headlineContainer.append(elementWithData);
}

getAndRenderDescription();

/* Mobile Navigation */
const test = document.querySelector('.mobile-nav__container');
const testMenu = document.querySelector('.navbar');
const mobileNavElemFirst = document.querySelector('.mobile-nav__container span:first-child');
const mobileNavElemSecond = document.querySelector('.mobile-nav__container span:nth-child(2)');
const mobileNavElemLast = document.querySelector('.mobile-nav__container span:last-child');

test.addEventListener('click', function () {
  testMenu.classList.toggle('navbar_focused');
  mobileNavElemFirst.classList.toggle('mobile-nav__first-el_focused');
  mobileNavElemSecond.classList.toggle('mobile-nav__second-el_focused');
  mobileNavElemLast.classList.toggle('mobile-nav__last-el_focused');
});
