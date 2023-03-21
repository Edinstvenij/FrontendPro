function UserTable({form, content, userInfo, addButton}) {
    this.init = function () {
        this.loadUsers();
        const users = document.querySelectorAll('.js--deleteUser');
        form.addEventListener('submit', (event) => {
            event.preventDefault();
            this.addUser(
                form.elements['name'].value,
                form.elements['phone'].value,
                form.elements['age'].value
            )
        })
        addButton.addEventListener('click', function () {
            form.reset();
            form.classList.add('open');
        })
        users.forEach(user => {
            user.addEventListener('click', this.deleteUser)
        })
    }
    this.addUser = function (name, phone, age) {
        const user = {
            id: Math.floor(Math.random() * 100),
            name,
            phone,
            age,
        }
        this.userTemplate(user);
        const newUser = content.lastChild;
        newUser.addEventListener('click', this.deleteUser)

        form.reset();
        form.classList.remove('open');
        const currentUsers = JSON.parse(localStorage.getItem('users')) || [];
        currentUsers.push(user);
        localStorage.setItem('users', JSON.stringify(currentUsers))
    }
    this.loadUsers = function () {
        const users = JSON.parse(localStorage.getItem('users'));
        if (users) {
            users.forEach(user => this.userTemplate(user))
        }
    }
    this.userTemplate = function (user) {
        content.insertAdjacentHTML('beforeend', (
            `<tr>` +
            `<td>${user.id}</td>` +
            `<td>${user.name}</td>` +
            `<td>${user.phone}</td>` +
            `<td>${user.age}</td>` +
            `<td><button class="btn">View</button><button class="btn">Edit</button><button class="js--deleteUser btn">Delete</button></td>` +
            `</tr>`
        ))
    }
    this.deleteUser = function (event) {
        const user = event.target.closest('tr');
        const userId = +user.querySelector('td').textContent;
        const currentUsers = JSON.parse(localStorage.getItem('users'));

        if (currentUsers.length === 1) {
            localStorage.setItem('users', JSON.stringify([]))
        } else {
            for (let i = 0; i < currentUsers.length; i++) {
                if (currentUsers[i].id === userId) {
                    currentUsers.splice(i, i);
                    localStorage.setItem('users', JSON.stringify(currentUsers))
                }
            }
        }

        user.remove();
    }
}

(new UserTable({
    form: document.querySelector('.js--form'),
    userInfo: document.querySelector('.js--user'),
    addButton: document.querySelector('.js--add'),
    content: document.querySelector('.js--content'),
})).init();
