import React from "react";
// Parts
import Button from "../form/Button";
// Helpers
import "./style.css";

export default class TodoItem extends React.Component {
    render() {
        const { text, handleRemove, handleUpdate, id } = this.props;
        const onClickRemove = () => {
            handleRemove(id);
        }
        const onClickUpdate = () => {
            handleUpdate(id);
        }
        return (
            <div className="todo-item">
                <div className="todo-item__description">{text}</div>
                <Button
                    text="🖊️"
                    onClick={onClickUpdate}
                    customClass="todo-item__update"
                />
                <Button
                    text="Удалить"
                    onClick={onClickRemove}
                    customClass="todo-item__delete"
                />
            </div>
        )
    }
}
