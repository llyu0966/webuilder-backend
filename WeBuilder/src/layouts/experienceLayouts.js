import React, { Component } from 'react';
import { Card } from 'react-bootstrap';
import '../App.css';
import logo from './../pics/weBuilder.png';

class ExperienceLayouts extends Component {

    constructor(props) {
        super(props);
        this.state = {
            bgColor_One: "",
            bgColor_Two: "",
            error: false,
            success: false,
            name: "experience",
            layout: 0,
        }
    }

    boxClick_One = (event) => {
        this.setState({
            bgColor_One: "rgba(30, 139, 195, 1)",
            bgColor_Two: "rgba(153, 42, 42, 0.01)",
            layout: 1
        });
        return this.saveLayout(1);
    }

    boxClick_Two = (event) => {
        this.setState({
            bgColor_One: "rgba(153, 42, 42, 0.01)",
            bgColor_Two: "rgba(30, 139, 195, 1)",
            layout: 2
        });
        return this.saveLayout(2);
    }

    saveLayout = (layout) => {
        fetch("/api/layouts/experience", {
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
                    <Card style={{ backgroundColor: '#C2A5FF', padding: '20px', height: '14rem', borderRadius: '25px' }}>
                        <div className="row no-gutters">
                            <div className="col">
                                <img src={logo} className="img-fluid" alt="avatar" width="80%"></img>
                            </div>
                            <div className="col-7">
                                <div className="card-block px-2">
                                    <Card.Title style={{ paddingTop: "20px" }}>Job Title</Card.Title>
                                    <Card.Subtitle style={{ paddingBottom: "10px" }}>Company Name</Card.Subtitle>
                                    <Card.Text>MM/YY - MM/YY</Card.Text>
                                    <Card.Text>blablabalaalaaalalalalallala</Card.Text>
                                </div>
                            </div>
                        </div>
                    </Card>
                </div>
                <div className="aboutMe" style={{ backgroundColor: this.state.bgColor_Two }}
                    onClick={this.boxClick_Two}>
                    <Card style={{ backgroundColor: '#C2A5FF', padding: '20px', height: '14rem', borderRadius: '25px' }}>
                        <div className="row no-gutters">
                            <div className="col-7">
                                <div className="card-block px-2">
                                    <Card.Title style={{ paddingTop: "20px" }}>Job Title</Card.Title>
                                    <Card.Subtitle style={{ paddingBottom: "10px" }}>Company Name</Card.Subtitle>
                                    <Card.Text>MM/YY - MM/YY</Card.Text>
                                    <Card.Text>blablabalaalaaalalalalallala</Card.Text>
                                </div>
                            </div>
                            <div className="col">
                                <img src={logo} className="img-fluid" alt="avatar" width="80%"></img>
                            </div>
                        </div>
                    </Card>
                </div>
                {/*
                <div className="aboutMe" style={{ backgroundColor: this.state.bgColor_Three }}
                    onClick={this.boxClick_Three}>
                    <Card style={{ backgroundColor: '#C2A5FF', padding: '20px', height: '14rem', borderRadius: '25px'    }}>
                        <div className="row no-gutters">
                            <div className="col">
                                <div className="card-block px-2">
                                    <img src={logo} className="img-fluid" alt="logo" width="20%"></img>
                                    <Card.Title style={{ paddingTop: "20px" }}>Job Title</Card.Title>
                                    <Card.Subtitle style={{ paddingBottom: "10px" }}>Company Name</Card.Subtitle>
                                    <Card.Text>MM/YY - MM/YY</Card.Text>
                                    <Card.Text>blablabalaalaaalalalalallala</Card.Text>                    
                                </div>
                            </div>
                        </div>
                    </Card>
                </div>
                */}
            </div>
        );
    }
}

export default ExperienceLayouts;