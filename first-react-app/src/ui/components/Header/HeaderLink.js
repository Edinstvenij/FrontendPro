import React from "react";
import ClassNames from "classnames";

export default class HeaderLink extends React.Component {
    render() {
        const isActive = !!this.props.isActive;
        const linkClass = ClassNames('nav-link',
            'px-2',
            {
                'text-secondary': isActive,
                'text-white': !isActive
            }
        );

        return (
            <li>
                <a href={this.props.href} className={linkClass}>{this.props.text}</a>
            </li>

        )
    }
}