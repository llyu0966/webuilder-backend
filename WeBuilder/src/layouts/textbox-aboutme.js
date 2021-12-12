import React, { useState } from "react";
import Cloudinary from './cloudinary';



class TextBoxAboutMe extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            error: false,
            success: false,
            content: '',
        }
    }

    contentChanged = (event) => {
        this.setState({
            content: event.target.value
        });
    }

    savePost = (event) => {
        fetch("/api/about/", {
            method: 'POST',
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ content: this.state.content }),
        })
            .then(res => {
                if (res.ok) {
                    return res.json()
                }

                throw new Error('Content validation');
            })
            .then(aboutMe => {
                this.setState({
                    success: true,
                });
            })
            .catch(err => {
                this.setState({
                    error: true,
                });
            });
    }

    render() {
        let errorMessage = null;
        if (this.state.error) {
            errorMessage = (
                <div className="alert alert-danger">
                    "There was an error saving this text."
                </div>
            );
        }

        if (this.props.category) {
            return (
                <div>
                    <p className="h2 enter-head">Input About Me Picture</p>
                    <Cloudinary type="aboutMe" />
                    {errorMessage}
                    <p className="h2 enter-head"> Enter Your About Me Text Here: </p>
                    <label className="label-width">
                        <textarea
                            className="description-input"
                            value={this.state.content}
                            onChange={this.contentChanged}
                            rows={5}> </textarea>
                    </label>
                    <button onClick={this.savePost}>Save</button>

                </div>
            );
        } else {
            return (null);
        }

    }

}

export default TextBoxAboutMe;