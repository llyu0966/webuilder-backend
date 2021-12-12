import React, { useState } from "react";



class TextBoxContactMe extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            error: false,
            success: false,
            github: '',
            linkedIn: '',
            email: '',
        };

    }

    githubChanged = (event) => {
        this.setState({
            github: event.target.value
        });
    }

    linkedInChanged = (event) => {
        this.setState({
            linkedIn: event.target.value
        });
    }

    emailChanged = (event) => {
        this.setState({
            email: event.target.value
        });
    }

    saveContact = (event) => {
        fetch("/api/contact/", {
            method: 'POST',
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ github: this.state.github, linkedIn: this.state.linkedIn, email: this.state.email }),
        })
            .then(res => {
                if (res.ok) {
                    return res.json()
                }

                throw new Error('Contact validation');
            })
            .then(contact => {
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
                    <p className="h2 enter-head">Enter Your Contact Info:</p>
                    <br />
                    {errorMessage}
                    <input
                        type="text"
                        name={''}
                        className="github-input link-input"
                        placeholder="GitHub Link"
                        value={this.state.github}
                        onChange={this.githubChanged}
                    />
                    <input
                        type="text"
                        name={''}
                        className="linkedin-input link-input"
                        placeholder="LinkedIn Link"
                        value={this.state.linkedIn}
                        onChange={this.linkedInChanged}
                    />
                    <input
                        type="text"
                        name={''}
                        className="email-input link-input"
                        placeholder="Email Link"
                        value={this.state.email}
                        onChange={this.emailChanged}
                    />
                    <button onClick={this.saveContact}>Save</button>
                </div>
            );
        } else {
            return (null);
        }

    }
}

export default TextBoxContactMe;