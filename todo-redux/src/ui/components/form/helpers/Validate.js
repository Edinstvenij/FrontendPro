const composeValidators = (...validators) => value =>
    validators.reduce((error, validator) => error || validator(value), undefined)
const isRequired = (value) => value ? undefined : 'Обязательное поле!';
const isMin5Char = (value) => value.length > 5 ? undefined : 'Больше 5 символов';

export {composeValidators, isRequired, isMin5Char};