import React from "react";

export default class EmailInput extends React.Component {
    render() {
        return (
            <div className="form-group">
                <label>Email
                <input type="email" className="form-control"
                       name={this.props.name}
                       placeholder="Email"/>
                </label>
            </div>
        )
    }
}