// Parts
import classNames from "classnames";
// Helpers
import "./style.css";

function TodoItem(props) {
    const {text, isChecked} = props;
    const className = classNames('todo-item', {'todo-item__done': isChecked})
    return (
        <div className={className}>
            <div className="todo-item__description">{text}</div>
        </div>
    )
}

export default TodoItem