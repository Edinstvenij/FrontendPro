import React from 'react';
import HeaderLink from "../components/Header/HeaderLink";
import Button from "../components/Form/Elements/Button";

export default class Header extends React.Component {

    render() {
        return (
            <header className="p-3 bg-dark text-white">
                <div className="container">
                    <div
                        className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">

                        <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
                            <HeaderLink href='#' text='Home' isActive='true'/>
                            <HeaderLink href='#' text='Features'/>
                            <HeaderLink href='#' text='Pricing'/>
                            <HeaderLink href='#' text='FAQs'/>
                            <HeaderLink href='#' text='About'/>
                        </ul>

                        <div className="text-end">
                            <Button className='btn btn-outline-light me-2' text='Login'/>
                            <Button className='btn btn-warning' text='Sign-up'/>
                        </div>
                    </div>
                </div>
            </header>
        );
    }
}