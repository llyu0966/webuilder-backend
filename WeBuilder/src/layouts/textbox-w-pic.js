import React, { useState } from "react";
import Row from 'react-bootstrap/Row';
import { FormControl, Form } from 'react-bootstrap';
import Cloudinary from './cloudinary';


class TextBoxWPic extends React.Component {
    constructor(props) {
        super(props);
        this.state = { name: [], description: [] /*imageUrl: null, imageAlt: null,*/ };
        this.handleSubmit = this.handleSubmit.bind(this);
    }


    createUI() {

        return this.state.name.map((el, i) =>
            <div key={i}>
                <Cloudinary type="Projects" />
                <input type="text" name={el || ''} className="name-input" placeholder="Header Name" onChange={this.handleChangeName.bind(this, i)} />
                <textarea description={el || ''} className="description-input" placeholder="Description" onChange={this.handleChangeDescription.bind(this, i)} rows={5} />
            </div>
        )
    }

    handleChangeName(i, event) {
        let name = [...this.state.name];
        name[i] = event.target.value;
        this.setState({ name });
    }

    handleChangeDescription(i, event) {
        let description = [...this.state.description];
        description[i] = event.target.value;
        this.setState({ description });
    }




    addClick() {

        /*TextBox.setState(prevState => ({ values: [...prevState.values, '']}))*/
        this.setState(prevState => ({ name: [...prevState.name, ''] }))
        this.setState(prevState => ({ description: [...prevState.description, ''] }))

    }

    removeClick(i) {
        let name = [...this.state.name];
        name.splice(i, 1);
        this.setState({ name });

        let description = [...this.state.description];
        description.splice(i, 1);
        this.setState({ description });
    }

    handleSubmit(event) {
        alert('A name was submitted: ' + this.state.values.join(', '));
        event.preventDefault();
    }

    render() {
        if (this.props.category) {

            return (


                <Form onSubmit={this.handleSubmit}>
                    <Form.Label className="h2 enter-head">Project</Form.Label>

                    {this.createUI()}
                    <br />
                    {/*this.createDescription()*/}

                    <input type='button' value='remove' onClick={this.removeClick.bind(this)} />
                    <input type='button' value='add' onClick={this.addClick.bind(this)} />
                    <input type="submit" value="Save" />
                </Form>

            );
        } else {
            return (null);
        }
    }
}


export default TextBoxWPic;