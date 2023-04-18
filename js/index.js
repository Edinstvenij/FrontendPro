const _inputIdPost = document.querySelector('.js--post-input-id');
const _postsWrapper = document.querySelector('.js--posts');

_inputIdPost.addEventListener('input', event => {
    const postId = event.target.value > 0 && event.target.value <= 100 ? event.target.value : false

    if (postId) {
        console.log(postId)
        const url = 'https://jsonplaceholder.typicode.com/posts/' + postId;

        fetch(url)
            .then(response => response.json())
            .then(json => {
                console.log(json);
                const _newPost = document.createElement('div');
                const _title = document.createElement('span');
                const _body = document.createElement('div');
                const _btnComment = document.createElement('btn');

                _newPost.classList.add('my-4');

                _title.classList.add('h6');
                _title.innerText = json.title;

                _body.innerText = json.body;

                _btnComment.innerText = 'Show comments';
                _btnComment.classList.add('btn', 'btn-info', 'my-1');

                _newPost.append(_title, _body, _btnComment);

                _btnComment.addEventListener('click', () => showComments(url, _newPost));

                while (_postsWrapper.children.length) {
                    _postsWrapper.removeChild(_postsWrapper.firstChild)
                }
                _postsWrapper.appendChild(_newPost);
            });
    }
});

function showComments(url, _wrapper) {
    const newCommentsPromise = getComments(url);

    newCommentsPromise.then(_newComments => _wrapper.append(_newComments));
}

function getComments(url) {
    const urlComment = url + '/comments';

    return fetch(urlComment)
        .then(response => response.json())
        .then(json => {
            const _newComments = document.createElement('div');
            _newComments.innerText = 'Comments'

            for (const comment of json) {
                const _newComment = document.createElement('div');
                const _name = document.createElement('div');
                const _email = document.createElement('div');
                const _body = document.createElement('div');

                _newComment.classList.add('mb-4');
                _name.innerText = comment.name;
                _email.innerText = comment.email;
                _body.innerText = comment.body;

                _newComment.append(_name, _email, _body);
                _newComments.append(_newComment);
            }

            return _newComments;
        });
}