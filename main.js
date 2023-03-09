function Tasks(_formInput, _todosWrapper) {
    this.todosWrapper = document.querySelector(_todosWrapper);
    this.addItem = (event) => {
        event.preventDefault();
        this.input = event.target.querySelector(_formInput);
        this.todosWrapper.insertAdjacentHTML('beforeend', this.createTemplate(this.input.value));
        this.input.value = '';

        document.querySelectorAll('.js--delete').forEach(item => {
            item.addEventListener('click', this.delete);
        })

        document.querySelectorAll('.js--check').forEach(item => {
            item.addEventListener('click', this.check)
        })
    }
    this.delete = function (event) {
        event.target.closest('.js--todo-item').remove();
    }
    this.createTemplate = function (description) {
        return `
            <div class="todo-item js--todo-item">
                    <input class="js--check" type="checkbox" name="checkbox">
                    <div class="todo-item__description">${description}</div>
                    <button class="todo-item__delete js--delete">Удалить</button>
            </div> 
        `
    }

    this.check = function (event) {
        const _check = event.target;
        const _description = _check.closest('.js--todo-item').querySelector('.todo-item__description');

        if (_check.checked) {
            _description.classList.add('todo-item--checked');
        } else {
            _description.classList.remove('todo-item--checked');
        }

    }
}

const task = new Tasks(
    '.js--form__input',
    '.js--todos-wrapper',
);
document.querySelector('.js--form').addEventListener('submit', task.addItem);
