import {FormElement} from './FormElement.js'

export class ButtonElement extends FormElement {

    constructor({name, type, value}) {
        super(name, type, value);
    }

    getElement() {
        const _newElement = document.createElement('button');
        _newElement.name = this.name;
        _newElement.type = this.type;
        _newElement.innerHTML = this.value;

        _newElement.classList.add('btn', 'btn-primary')

        return _newElement;
    }
}