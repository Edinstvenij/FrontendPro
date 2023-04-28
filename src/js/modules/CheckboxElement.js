import {FormElement} from './FormElement.js'

export class CheckboxElement extends FormElement {

    constructor({name, type, value, checked, message}) {
        super(name, type, value);

        this.checked = checked;
        this.message = message;
    }

    getElement() {

        const _wrapper = document.createElement('div');
        _wrapper.classList.add('form-check');

        const _newElement = document.createElement('input');
        _newElement.type = this.type;
        _newElement.name = this.name;
        _newElement.value = this.value;
        _newElement.checked = this.checked;
        _newElement.classList.add('form-check-input');

        if (this.message) {
            const _label = document.createElement('label');
            _label.classList.add('form-check-label');
            _label.innerHTML = this.message;
            _label.append(_newElement);
            _wrapper.append(_label);
        } else {
            _wrapper.append(_newElement);
        }
        return _wrapper;
    }
}