// Parts
import Button from "../form/Button";
import Checkbox from "../form/Checkbox";
import classNames from "classnames";
// Helpers
import "./style.css";

function TodoItem(props) {
    const {id, text, isChecked, handleRemove, handleUpdate, handleDone} = props;
    const className = classNames('todo-item', {'todo-item__done': isChecked})
    return (
        <div className={className}>
            <Checkbox
                isChecked={isChecked}
                onChange={() => {
                    handleDone(id)
                }}/>
            <div className="todo-item__description">{text}</div>
            <Button
                text="🖊️"
                onClick={() => {
                    handleUpdate(id);
                }}
                customClass="todo-item__update"
            />
            <Button
                text="Удалить"
                onClick={() => {
                    handleRemove(id);
                }}
                customClass="todo-item__delete"
            />
        </div>
    )
}

export default TodoItem