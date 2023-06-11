import React, {useEffect} from "react";
import {useDispatch, useSelector} from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../main.css';
// Parts
import {Form} from "react-final-form";
import TodoItem from "../components/TodoItem/TodoItem";
import TodoForm from "../containers/TodoForm";
//  Engine
import {updateItems} from '../../engine/core/todos/todosSlice';
import {handleAddTodo, handleRemoveTodo} from "../../engine/core/todos/thunks";

const App = () => {
    const dispatch = useDispatch();
    const items = useSelector((state) => state.todos.items);

    useEffect(() => {
        dispatch(updateItems(JSON.parse(localStorage.getItem('items'))))
    }, []);

    const handleAdd = (data) => {
        dispatch(handleAddTodo(data))
    }
    const handleRemove = (id) => {
        dispatch(handleRemoveTodo(id))
    }

    return (
        <div className="container">
            <h1>ToDoList</h1>
            <Form
                onSubmit={handleAdd}
                render={TodoForm}
            />

            <div>
                {items.map((item) => (<TodoItem
                    id={item.id}
                    key={item.id}
                    text={item.text}
                    handleRemove={handleRemove}
                />))}
            </div>
        </div>
    )
}

export default App;
