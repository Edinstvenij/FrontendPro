import React, {useEffect, useState} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../main.css';
// Parts
import Header from "../components/Header";
import TodoItem from "../components/TodoItem/TodoItem";
import TodoForm from "../containers/TodoForm";

function ClassMain() {
    const [items, setItems] = useState([]);


    useEffect(() => {
        setItems(JSON.parse(localStorage.getItem('items')) || []
        )
    }, []);


    function handleAdd(event) {


        event.preventDefault();
        const input = event.target.getElementsByClassName('form__input')[0];
        const text = input.value;
        const checked = false;
        const newItems = [
            ...items,
            {id: Math.random(), text, checked}
        ];
        setItems(newItems);
        localStorage.setItem('items', JSON.stringify(newItems));
        input.value = '';
    }

    function handleRemove(id) {
        const newItems = items.filter(item => item.id !== id);

        localStorage.setItem('items', JSON.stringify(newItems));
        setItems(newItems);
    }

    function handleUpdate(id) {
        const newItems = items.map(item => {
            if (item.id === id) {
                item.text = prompt('Введите изменения', item.text) ?? item.text;
                return item;
            }
            return item;
        });

        localStorage.setItem('items', JSON.stringify(newItems));
        setItems(newItems)
    }

    function handleDone(id) {
        const newItems = items.map(item => {
            if (item.id === id) {
                item.checked = !item.checked;
                return item;
            }
            return item;
        });

        localStorage.setItem('items', JSON.stringify(newItems));
        setItems(newItems)
    }

    return (
        <div className="container">
            <Header/>
            <TodoForm handleAdd={handleAdd}/>
            <div>
                {items.map((item) => (
                    <TodoItem
                        id={item.id}
                        key={item.id}
                        text={item.text}
                        isChecked={item.checked}
                        handleRemove={handleRemove}
                        handleUpdate={handleUpdate}
                        handleDone={handleDone}
                    />
                ))}
            </div>
        </div>
    )
}

export default ClassMain;
