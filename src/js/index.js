const _form = document.querySelector('.js--form');

_form.addEventListener('submit', function (event) {
    event.preventDefault();

    const _input = _form.querySelector('#url');
    const urlParam = _input.value.trim();

    addStickers(urlParam);
    addAnswer(requestToSWAPI(urlParam));


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

async function addAnswer(promise) {
    const _answer = document.querySelector('.js--answer');

    const _newPre = document.createElement('pre');
    _newPre.textContent = JSON.stringify(await promise);
    _answer.append(_newPre);
}

async function requestToSWAPI(urlParam) {
    const url = 'https://swapi.dev/api/' + urlParam;
    return await fetch(url).then(promise => promise.json());
}