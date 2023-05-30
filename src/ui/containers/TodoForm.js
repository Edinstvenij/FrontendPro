import React from "react";
import '../../main.css';
// Parts
import Input from "../components/form/Input";
import Button from "../components/form/Button";

function TodoForm(props) {
    const {handleAdd, inputState} = props;

    return (
        <form
            className="form"
            onSubmit={handleAdd}
        >
            <Input inputState={inputState}/>
            <Button text="Отправить"/>
        </form>
    );
}

export default TodoForm;
