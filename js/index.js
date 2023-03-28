document.addEventListener('DOMContentLoaded', function () {

    const _form = document.querySelector('.js--form');
    _form.addEventListener('submit', checkPassword);

    const _password = _form.querySelector('input[type="password"]');

    function checkPassword(event) {
        event.preventDefault();

        checkHasNumber('Нет цифры');
        checkHasBigLetter('Нет большой буквы');
        checkHasSymbol('Нет спецсимвола')
        checkMaxLengthString(8, 'Короткий пароль. Минимум N символов');
    }

    function checkHasBigLetter(errorText) {
        const hasBigLetter = !!_password.value.match(/[A-Z]/);

        if (hasBigLetter) {
            _password.classList.remove('error');
            removeError(_password, errorText);
        } else {
            _password.classList.add('error');
            showError(_password, errorText)
        }
    }

    function checkHasNumber(errorText) {
        const hasNumber = !!_password.value.match(/[0-9]/);

        if (hasNumber) {
            _password.classList.remove('error');
            removeError(_password, errorText);
        } else {
            _password.classList.add('error');
            showError(_password, errorText)
        }
    }


    function checkHasSymbol(errorText) {
        const hasSymbol = !!_password.value.match(/[!"#$%&'()*+,-.\/:;<=>?@[\]^_`{|}~]/);

        if (hasSymbol) {
            removeError(_password, errorText);
            if (!_password.nextElementSibling.classList.contains('js--error-wrapper')) {
                _password.classList.remove('error');
            }
        } else {
            _password.classList.add('error');
            showError(_password, errorText)
        }
    }

    function checkMaxLengthString(maxSymbol, errorText) {
        const hasMaxSymbol = !!_password.value.match(/^\S{8,}$/);
        errorText = errorText.replace('N', maxSymbol);

        if (hasMaxSymbol) {
            _password.classList.remove('error');
            removeError(_password, errorText);
        } else {
            _password.classList.add('error');
            showError(_password, errorText)
        }
    }

    function showError(_item, message) {
        const _errorWrapper = _item.nextElementSibling;

        if (!_errorWrapper.classList.contains('js--error-wrapper')) {
            const _errorWrapper = document.createElement('div');
            _errorWrapper.classList.add('js--error-wrapper');
            _errorWrapper.classList.add('error-wrapper');

            const _error = document.createElement('div');
            _errorWrapper.append(_error);
            _error.innerHTML = message;

            _password.insertAdjacentElement('afterend', _errorWrapper);
        } else {
            const errorsText = Array.from(_errorWrapper.children).map(_error => {
                return _error.textContent
            });

            if (errorsText.includes(message) === false) {
                const _error = document.createElement('div');
                _errorWrapper.append(_error);
                _error.innerHTML = message;
            }
        }
    }

    function removeError(_item, message) {
        const _errorWrapper = _item.nextElementSibling;

        if (_errorWrapper.children.length === 1) {
            for (let i = 0, count = _errorWrapper.children.length; i < count; i++) {
                if (_errorWrapper.children[i].textContent === message) {
                    _errorWrapper.remove();
                    return;
                }
            }
        } else {
            for (let i = 0, count = _errorWrapper.children.length; i < count; i++) {
                if (_errorWrapper.children[i].textContent === message) {
                    _errorWrapper.children[i].remove();
                    return;
                }
            }
        }
    }
});