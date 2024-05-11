import {sendData} from '../../api';

const form = document.querySelector('.footer__form');

const setUserFormSubmit = (onSuccess, onFail) => {
  form.addEventListener('submit', (evt) => {
    evt.preventDefault();
    sendData(
        () => {
          onSuccess();
        },
        () => {
          onFail();
        },
        new FormData(evt.target)
    );
  });
};

export {setUserFormSubmit};
