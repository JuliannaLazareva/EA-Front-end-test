const openAccordionButton = document.querySelector('.footer__button');
const accordionBlock = document.querySelector('.footer__events');

export function openAccordion() {
  openAccordionButton.addEventListener('click', () => {
    accordionBlock.classList.add('is-active');
  });
}
