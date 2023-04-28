import {FormElement} from './FormElement.js'

export class TextElement extends FormElement {

    constructor({name, type, value, placeholder}) {
        super(name, type, value);

        this.placeholder = placeholder
    }

    showName() {
        console.log(`Name: ${this.name}`);
    }

    getValue() {
        return this.value;
    }

    getElement() {
        const _newElement = document.createElement('input');
        _newElement.placeholder = this.placeholder;
        _newElement.classList.add('form-control')


        return this.fieldFilling(_newElement);
    }
}