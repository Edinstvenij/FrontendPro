import {Field} from 'react-final-form';
import {Button} from "@mui/material";
import InputAdapter from "../form/InputAdapter";

function Form(props) {

    const {handleSubmit} = props;
    return (
        <form onSubmit={handleSubmit}>
            <div className="mb-3">
                <div className="input-group">
                    <label className="form-label input-group-text">https://swapi.dev/api/ </label>
                    <Field name='url' component={InputAdapter} defaultValue='people/1'/>
                    <Button type='submit' variant="outlined">Get info</Button>
                </div>
            </div>
        </form>
    );
}

export default Form;