import {useDispatch, useSelector} from "react-redux";
// Engine
import {handleClearTodos} from "../../engine/core/todos/thunks";
// Parts
import {Button} from "@mui/material";
import React from "react";

function Footer() {
    const amount = useSelector(state => state.todos.items.length);
    const dispatch = useDispatch();
    const handleClear = () => {
        dispatch(handleClearTodos());
    }

    return (
        <div className='container'>
            <footer className="d-flex justify-content-around  py-3">
                <span>У вас {amount} записей</span>
                <Button variant="outlined" onClick={handleClear}>Очистить</Button>
            </footer>
        </div>
    )
}

export default Footer;