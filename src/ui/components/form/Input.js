function Input(props) {
    const [value, onChange] = props.inputState
    return <input className="form__input" type="text" name="value" value={value} onChange={onChange} required/>
}

export default Input;