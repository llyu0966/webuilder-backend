import React, { Component } from 'react';
import { Card } from 'react-bootstrap';
import '../App.css';
import './../pages/navBar.css';

class ContactMeLayouts extends Component {

    constructor(props) {
        super(props);
        this.state = {
            bgColor_One: "",
            bgColor_Two: "",
            error: false,
            success: false,
            name: "contact_me",
            layout: 0,
        }
    }

    boxClick_One = (event) => {
        this.setState({
            bgColor_One: "rgba(30, 139, 195, 1)",
            bgColor_Two: "rgba(153, 42, 42, 0.01)",
            layout: 1
        });
        this.saveLayout(1);
    }

    boxClick_Two = (event) => {
        this.setState({
            bgColor_One: "rgba(153, 42, 42, 0.01)",
            bgColor_Two: "rgba(30, 139, 195, 1)",
            layout: 2
        });
        this.saveLayout(2);
    }

    saveLayout = (layout) => {
        fetch("/api/layouts/contact_me", {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ layout: layout }),
        })
            .then(res => {
                if (res.ok) {
                    return res.json()
                }

                throw new Error('Content validation');
            })
            .then(layout => {
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

    componentDidMount() {
        fetch("/api/layouts", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ name: this.state.name, layout: this.state.layout }),
        })
            .then(res => res.json())
            .catch(err => {
                this.setState({
                    notFound: true,
                });
            });
    }

    render() {
        return (
            <div>
                <div className="aboutMe" style={{ backgroundColor: this.state.bgColor_One }}
                    onClick={this.boxClick_One}>
                    <Card className="color-nav" style={{ padding: '20px', height: '14rem', borderRadius: '25px' }}>
                        <div className="row no-gutters">
                            <div className="card-block px-2">
                                <Card.Title>Contact Me</Card.Title>

                                <a href={() => false} className="fa fa-github"></a>
                                <a href={() => false} className="fa fa-linkedin"></a>
                                <a href={() => false} className="fa fa-envelope"></a>

                            </div>

                        </div>
                    </Card>
                </div>
                <div className="aboutMe" style={{ backgroundColor: this.state.bgColor_Two }}
                    onClick={this.boxClick_Two}>
                    <Card className="color-nav" style={{ padding: '20px', height: '14rem', borderRadius: '25px' }}>
                        <div className="row no-gutters">
                            <div className="card-block px-2">
                                <Card.Title>Contact Me</Card.Title>

                                <a href={() => false} style={{ marginRight: "8%" }} className="fa fa-github"></a>
                                <a href={() => false} style={{ marginRight: "8%" }} className="fa fa-linkedin"></a>
                                <a href={() => false} style={{ marginRight: "8%" }} className="fa fa-envelope"></a>

                            </div>
                        </div>
                    </Card>
                </div>
            </div>
        );
    }
}

export default ContactMeLayouts;