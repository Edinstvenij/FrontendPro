import React from 'react';
import Link from "../components/Link";
import UserMenu from "../components/UserMenu";

export default class Sidebar extends React.Component {

    render() {
        return (
            <aside className="d-flex flex-column flex-shrink-0 p-3 text-white bg-dark h-100"
                   style={{width: 200 + 'px'}}>
                <a href="/"
                   className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none">
                    <span className="fs-4">Sidebar</span>
                </a>
                <hr/>
                <ul className="nav nav-pills flex-column mb-auto">
                    <Link href='#' className='nav-link active' text='Balance'/>
                    <Link href='#' className='nav-link text-white' text='Dashboard'/>
                    <Link href='#' className='nav-link text-white' text='Orders'/>
                    <Link href='#' className='nav-link text-white' text='Products'/>
                    <Link href='#' className='nav-link text-white' text='Customers'/>
                </ul>
                <hr/>
                <UserMenu/>
            </aside>
        );
    }
}