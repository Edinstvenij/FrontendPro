import React from "react";

export default class TextInput extends React.Component {
    render() {
        return (
            <div className="form-group">
                <label>Your name
                    <input type="text" className="form-control" name={this.props.name}
                           placeholder="Enter name"/>
                </label>
            </div>
        )
    }
}