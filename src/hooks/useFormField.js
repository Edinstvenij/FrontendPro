import {useState} from "react";

const useFormField = (initialState) => {
    const [value, setValue] = useState(initialState)

    const onChange = event => {
        setValue(event.target.value);
    }

    return [value, onChange, setValue];
}

export default useFormField;