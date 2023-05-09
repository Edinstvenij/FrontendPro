import React from 'react';
import logo from "../../logo.svg";
import SubscriptionForm from "../components/Form/SubscriptionForm";

export default class Main extends React.Component {

    render() {
        return (
            <main className="App-header">
                <img src={logo} className="App-logo" alt="logo"/>
                <p>
                    Edit <code>src/Main.js</code> and save to reload.
                </p>

                <SubscriptionForm action='#'/>
            </main>
        )
    }
}