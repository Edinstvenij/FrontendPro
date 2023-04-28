export class FormElement {
    constructor(name, type, value) {
        this.name = name;
        this.type = type;
        this.value = value ?? '';
    }

    fieldFilling(_formElement) {
        _formElement.name = this.name;
        _formElement.type = this.type;
        _formElement.value = this.value;

        return _formElement;
    }
}