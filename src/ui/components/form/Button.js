import styles from './todoFormItem.module.css';
import cx from "classnames";

function Button(props) {
    const {text, customClass, onClick, disabled} = props;
    const className = cx(styles.form__btn,
        {
            [customClass]: customClass,
        }
    )

    return <button className={className} onClick={onClick} disabled={disabled}>{text}</button>
}

export default Button;