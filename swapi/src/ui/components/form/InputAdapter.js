import {TextField} from "@mui/material";

function InputAdapter(props) {
    const {name, value, onChange} = props.input;
    return <TextField name={name} label="info" value={value} onChange={onChange} variant="outlined"/>;
}

export default InputAdapter;