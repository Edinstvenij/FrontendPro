import {TextField} from "@mui/material";

function Input(props) {
    const {input, meta} = props;
    const {name, onChange, value} = input;
    const error = meta.error && meta.touched;

    return <TextField
        id="standard-basic"
        label="ToDo"
        variant="standard"
        name={name}
        value={value}
        onChange={onChange}
        helperText={error ? meta.error : undefined}
    />
}

export default Input;