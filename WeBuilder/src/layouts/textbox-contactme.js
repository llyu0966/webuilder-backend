import React from "react";
import { Form } from 'react-bootstrap';

class TextBoxContactMe extends React.Component {
    constructor(props) {
        super(props);
        this.state = { name: [], description: [] };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
        alert('A name was submitted: ' + this.state.values.join(', '));
        event.preventDefault();
    }

    render() {
        return (
            <Form onSubmit={this.handleSubmit}>
            <Form.Label className="h2 enter-head">Enter Your Contact Info:</Form.Label>
            <br/>
            <input type="text" name={''} className="github-input link-input" placeholder="GitHub Link" />
            <input type="text" name={''} className="linkedin-input link-input" placeholder="LinkedIn Link" />
            <input type="text" name={''} className="email-input link-input" placeholder="Email Link" />

            <input type="submit" value="Save" />
        </Form>
        );
    }
}


export default TextBoxContactMe;