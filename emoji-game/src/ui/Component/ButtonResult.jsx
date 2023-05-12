import React from "react";

export default class ButtonResult extends React.Component {
    render() {
        return (
            <button className={'btn btn-outline-success mt-2'} onClick={this.props.showWin}>Show result</button>
        )
    }

}