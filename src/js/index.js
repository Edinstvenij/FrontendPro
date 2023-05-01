import {TextElement} from './modules/TextElement.js';
import {CheckboxElement} from './modules/CheckboxElement.js';
import {ButtonElement} from './modules/ButtonElement.js';

const _fieldName = new TextElement({
    placeholder: 'Your Name',
    name: 'name',
    type: 'text',
});

const _fieldEmail = new TextElement({
    placeholder: 'Your Email',
    name: 'email',
    type: 'email',
});

const _fieldPass = new TextElement({
    placeholder: 'Password',
    name: 'password',
    type: 'password',
});

const _fieldPassRepeat = new TextElement({
    placeholder: 'Repeat your password',
    name: 'password',
    type: 'password',
});

const _fieldCheckbox = new CheckboxElement({
    checked: true,
    name: 'isAgree',
    type: 'checkbox',
    message: 'I agree'
});

const _fieldBtn = new ButtonElement({
    name: 'btn',
    type: 'submit',
    value: 'REGISTER'
});


const _form = document.querySelector('.js--form');

_form.append(wrapElementWrapper(_fieldName.getElement()));
_form.append(wrapElementWrapper(_fieldEmail.getElement()));
_form.append(wrapElementWrapper(_fieldPass.getElement()));
_form.append(wrapElementWrapper(_fieldPassRepeat.getElement()));
_form.append(wrapElementWrapper(_fieldCheckbox.getElement()));
_form.append(wrapElementWrapper(_fieldBtn.getElement()));


function wrapElementWrapper(_formElement) {
    const _wrapper = document.createElement('div');
    _wrapper.classList.add('form-group', 'row', 'my-2');
    _wrapper.append(_formElement);
    return _wrapper;
}

_form.addEventListener('submit', e => {
    e.preventDefault();

    const elements = document.querySelectorAll('input')

    elements.forEach(_item => {
        if (_item.type === 'checkbox') {
            console.log(_item.checked)
        } else {
            console.log(_item.value)
        }
    })
})