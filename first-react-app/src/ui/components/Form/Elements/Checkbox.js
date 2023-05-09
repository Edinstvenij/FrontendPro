import React from "react";

export default class Checkbox extends React.Component {
    render() {
        return (
            <div className="form-check">
                <label className="form-check-label">{this.props.text}
                    <input type="checkbox" className="form-check-input"/>
                </label>
            </div>
        )
    }
}