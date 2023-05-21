import React from "react";

function Checkbox(props) {
    const {onChange, isChecked} = props;
    return (
        <div className="form-check">
            <input className="form-check-input" type="checkbox" value="" checked={isChecked} onChange={onChange}/>
        </div>
    )
}

export default Checkbox;