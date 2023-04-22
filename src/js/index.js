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

function addStickers(urlParam) {
    const _stickerWrapper = document.querySelector('.js--sticker-wrapper');
    const valuesUrl = urlParam.split('/');

    _stickerWrapper.innerHTML = '';

    for (param of valuesUrl) {
        if (param === '') {
            continue;
        }
        const _newSticker = document.createElement('span');
        _newSticker.classList.add('sticker');
        _newSticker.innerText = param;
        _stickerWrapper.append(_newSticker);
    }
}

async function addAnswer(urlParam) {
    const _answer = document.querySelector('.js--answer');
    const url = 'https://swapi.dev/api/' + urlParam;
    const data = await fetch(url).then(promise => {
        if (promise.status !== 200) {
            throw error;
        }
        return promise.json();
    }).catch(() => {
        const _stickers = document.querySelectorAll('.sticker');

        _stickers.forEach(_item => {
            _item.classList.add('text-bg-danger');
        });
    });

    const _newPre = document.createElement('pre');
    _newPre.textContent = JSON.stringify(await data, null, 2);

    while (_answer.firstChild) {
        _answer.removeChild(_answer.firstChild);
    }
    _answer.append(_newPre);
    return data;
}