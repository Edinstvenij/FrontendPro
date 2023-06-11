import React from "react";
import styles from './todoForm.module.css';
// Parts
import {Field} from 'react-final-form';
import Input from "../components/form/Input";
import Button from "../components/form/Button";

const TodoForm = props => {
    const {handleSubmit} = props;
    return (
        <form
            className={styles.form}
            onSubmit={handleSubmit}
        >
            <Field name={'text'} component={Input}/>
            <Button text="Отправить"/>
        </form>
    );
}

export default TodoForm;
