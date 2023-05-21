import React from "react";
import cx from "classnames";

function Button(props) {
    const {text, customClass, onClick} = props;
    const className = cx(
        'form__btn',
        {
            [customClass]: customClass,
        }
    )
    return (
        <button className={className} onClick={onClick}>{text}</button>
    )
}

export default Button;