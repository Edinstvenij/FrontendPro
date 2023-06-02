import React, {useEffect, useState} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../main.css';
// Parts
import TodoItem from "../components/TodoItem/TodoItem";
import TodoForm from "../containers/TodoForm";
//  Helpers
import {Form} from "react-final-form";

const Main = () => {
    const [items, setItems] = useState([]);


    useEffect(() => {
        setItems(JSON.parse(localStorage.getItem('items')) || []
        )
    }, []);

    function handleAdd(data) {
        const {text} = data;
        const checked = false;
        const newItems = [
            ...items,
            {id: Math.random(), text, checked}
        ];
        setItems(newItems);
        localStorage.setItem('items', JSON.stringify(newItems));
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
            <h1>ToDoList</h1>
            <Form
                onSubmit={handleAdd}
                render={TodoForm}
            />

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

export default Main;
