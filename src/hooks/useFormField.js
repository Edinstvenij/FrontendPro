import {useState} from "react";

const useFormField = (initialState) => {
    const [value, setValue] = useState(initialState)

    const onChange = event => {
        console.log(event.target.value)
        setValue(event.target.value);
    }

    return [value, onChange, setValue];
}

export default useFormField;