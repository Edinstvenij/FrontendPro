export async function addAnswer(urlParam) {
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
