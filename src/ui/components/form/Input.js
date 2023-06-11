import {TextField} from "@mui/material";

function Input(props) {
    const {input} = props;
    const {name, onChange, value} = input;

    return <TextField
        id="standard-basic"
        label="ToDo"
        variant="standard"
        name={name}
        value={value}
        onChange={onChange}
        fullWidth
        required
    />
}

export default Input;