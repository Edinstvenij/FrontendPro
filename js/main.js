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

const task = new Tasks('.js--form__input', '.js--todos-wrapper',);
document.querySelector('.js--form').addEventListener('submit', task.addItem);


const images = ['0.png', '1.png', '2.png', '3.png', '4.png', '5.png',];


function Slider(images) {
    let indexImages = 0;
    this.addSlider = event => {
        const _target = event.target;
        const _slider = _target.closest('.slider');
        const _btnPrev = _slider.querySelector('.slider__prev');
        const _btnNext = _slider.querySelector('.slider__next');
        switch (_target) {
            case _btnNext:
                indexImages = (indexImages + 1) % images.length;
                this.updateImage(_slider);
                break;

            case _btnPrev:
                indexImages = (indexImages - 1 + images.length) % images.length;
                this.updateImage(_slider);
                break;
        }

        if (indexImages === 0) {
            _btnPrev.classList.add('hidden');
        } else {
            _btnPrev.classList.remove('hidden');
        }


        if (indexImages === images.length - 1) {
            _btnNext.classList.add('hidden');
        } else {
            _btnNext.classList.remove('hidden');
        }
    }

    this.updateImage = function (_slider) {
        _slider.querySelector('.slider__slide img').setAttribute('src', `img/${images[indexImages]}`);
    }
}

const slider = new Slider(images);

document.querySelector('.js--slider').addEventListener('click', slider.addSlider);
