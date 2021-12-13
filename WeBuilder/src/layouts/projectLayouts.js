import React, { Component } from 'react';
import { Card } from 'react-bootstrap';
import '../App.css';
import logo from './../pics/WeBuilderLogo.png';
import './../pages/navBar.css';

class ProjectLayouts extends Component {

    constructor(props) {
        super(props);
        this.state = {
            bgColor_One: "",
            bgColor_Two: "",
            error: false,
            success: false,
            name: "project",
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
        fetch("/api/layouts/project", {
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
                            <div className="col" style={{ margin: "auto" }}>
                                <img src={logo} className="img-fluid" alt="avatar" width="80%"></img>
                            </div>
                            <div className="col-7">
                                <div className="card-block px-2">
                                    <Card.Title style={{ paddingTop: "20px" }}>Project 1</Card.Title>
                                    <Card.Subtitle style={{ paddingBottom: "10px" }}>A Portfolio Builder</Card.Subtitle>
                                    <Card.Text>blblablabllablalabalbla</Card.Text>
                                    <span class="skill">HTML</span><span class="skill">CSS</span><span class="skill">JavaScript</span>
                                </div>
                            </div>
                        </div>
                    </Card>
                </div>
                <div className="aboutMe" style={{ backgroundColor: this.state.bgColor_Two }}
                    onClick={this.boxClick_Two}>
                    <Card className="color-nav" style={{ padding: '20px', height: '14rem', borderRadius: '25px' }}>
                        <div className="row no-gutters">
                            <div className="col-7">
                                <div className="card-block px-2">
                                    <Card.Title style={{ paddingTop: "20px" }}>Project 1</Card.Title>
                                    <Card.Subtitle style={{ paddingBottom: "10px" }}>A Protfolio Builder</Card.Subtitle>
                                    <Card.Text>blblablabllablalabalbla</Card.Text>
                                    <span class="skill">HTML</span><span class="skill">CSS</span><span class="skill">JavaScript</span>
                                </div>
                            </div>
                            <div className="col" style={{ margin: "auto" }}>
                                <img src={logo} className="img-fluid" alt="avatar" width="80%"></img>
                            </div>
                        </div>
                    </Card>
                </div>
            </div>
        );
    }
}

export default ProjectLayouts;