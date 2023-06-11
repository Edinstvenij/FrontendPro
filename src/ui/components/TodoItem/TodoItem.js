// Parts
import Button from "../form/Button";
import classNames from "classnames";
// Helpers
import "./style.css";

function TodoItem(props) {
    const {id, text, isChecked, handleRemove} = props;
    const className = classNames('todo-item', {'todo-item__done': isChecked})
    return (
        <div className={className}>
            <div className="todo-item__description">{text}</div>

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