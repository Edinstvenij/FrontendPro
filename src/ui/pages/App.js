import React, {useEffect} from "react";
import {useDispatch, useSelector} from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../main.css';
// Parts
import {Form} from "react-final-form";
import TodoItem from "../components/TodoItem/TodoItem";
import TodoForm from "../containers/TodoForm";
//  Engine
import {handleAddTodo} from "../../engine/core/todos/thunks";
import asyncActions from "../../engine/core/todos/saga/asyncActions";

const App = () => {
    const dispatch = useDispatch();
    const items = useSelector((state) => state.todos.items);

    useEffect(() => {
        dispatch(asyncActions.getTodosAsync());
    }, []);

    const handleAdd = (data) => {
        dispatch(asyncActions.addTodoAsync({items, data}))
    }
    const handleRemove = (id) => {
        dispatch(asyncActions.deleteTodoAsync({id, items}))
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
