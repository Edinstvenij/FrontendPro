import {FormElement} from './FormElement.js'

export class TextElement extends FormElement {

    constructor({name, type, value = '', placeholder}) {
        super(name, type, value);

        this.placeholder = placeholder
    }

    getElement() {
        const _newElement = document.createElement('input');
        _newElement.placeholder = this.placeholder;
        _newElement.classList.add('form-control')

        _newElement.name = this.name;
        _newElement.type = this.type;
        _newElement.value = this.value;

        return (_newElement);
    }
}