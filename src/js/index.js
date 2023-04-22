import {addStickers} from './modules/addStickers.js';
import {addAnswer} from "./modules/addAnswer.js";

const _form = document.querySelector('.js--form');

_form.addEventListener('submit', function (event) {
    event.preventDefault();
    const _spinnerTemplate = '<div class="spinner-border text-primary" role="status">\n' + '  <span class="visually-hidden">Loading...</span>\n' + '</div>';
    const _button = event.submitter;
    const buttonHtml = _button.innerHTML;
    _button.innerHTML = _spinnerTemplate;
    _button.disabled = true;


    const _input = _form.querySelector('#url');
    const urlParam = _input.value.trim();

    addStickers(urlParam);
    addAnswer(urlParam).finally(() => {
        _button.innerHTML = buttonHtml;
        _button.disabled = false;
    });
});


