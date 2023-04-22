export function addStickers(urlParam) {
    const _stickerWrapper = document.querySelector('.js--sticker-wrapper');
    const valuesUrl = urlParam.split('/');

    _stickerWrapper.innerHTML = '';

    for (const param of valuesUrl) {
        if (param === '') {
            continue;
        }
        const _newSticker = document.createElement('span');
        _newSticker.classList.add('sticker');
        _newSticker.innerText = param;
        _stickerWrapper.append(_newSticker);
    }
}
