import {useDispatch, useSelector} from "react-redux";
import '../../main.css';
// Parts
import TodoItem from "../components/TodoItem/TodoItem";
import TodoForm from "../containers/TodoForm";
//  Helpers
import {Form} from "react-final-form";
//  Engine
import {handleAdd} from "../../engine/core/todoSlice";

const Main = () => {
    const items = useSelector((state) => state.todo.items);
    const amount = useSelector((state) => state.todo.amount);
    const dispatch = useDispatch();
    const onSubmit = (item) => {
        dispatch(handleAdd(item));
    }

    return (
        <div className="container">
            <h1>ToDoList</h1>
            <Form
                onSubmit={onSubmit}
                render={TodoForm}
            />

            <div>
                {items.map((item) => (
                    <TodoItem
                        id={item.id}
                        key={item.id}
                        text={item.text}
                    />
                ))}
            </div>

            <span>Amount:{amount}</span>
        </div>
    )
}

export default Main;
