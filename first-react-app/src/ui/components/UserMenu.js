import React from "react";
import Link from "./Link";

export default class UserMenu extends React.Component {
    render() {
        return (
            <div className="dropdown">
                <a href="#"
                   className="d-flex align-items-center text-white text-decoration-none dropdown-toggle"
                   id="dropdownUser1" data-bs-toggle="dropdown" aria-expanded="false">
                    <img src="https://github.com/mdo.png" alt="" width="32" height="32"
                         className="rounded-circle me-2"/>
                </a>
                <ul className="dropdown-menu dropdown-menu-dark text-small shadow"
                    aria-labelledby="dropdownUser1">
                    <Link href='#' className='dropdown-item' text='New project...'/>
                    <Link href='#' className='dropdown-item' text='Settings'/>
                    <Link href='#' className='dropdown-item' text='Profile'/>
                    <li>
                        <hr className="dropdown-divider"/>
                    </li>
                    <Link href='#' className='dropdown-item' text='Sign out'/>
                </ul>
            </div>
        )
    }
}