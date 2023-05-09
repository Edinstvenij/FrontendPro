import React from "react";
import Button from "./Elements/Button";
import Checkbox from "./Elements/Checkbox";
import EmailInput from "./Elements/EmailInput";
import TextInput from "./Elements/TextInput";

export default class SubscriptionForm extends React.Component {
    render() {
        return (
            <form action={this.props.action} method='POST' className='m-4'>
                <TextInput name='name'/>
                <EmailInput name='email'/>
                <Checkbox text='I agree'/>
                <Button type='submit' className='btn btn-dark' text='Submit'/>
            </form>
        )
    }
}