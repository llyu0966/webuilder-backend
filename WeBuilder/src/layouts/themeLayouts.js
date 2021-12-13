import React, { Component } from 'react';
import { Card } from 'react-bootstrap';
import '../App.css';


class ThemeLayouts extends Component {

    constructor(props) {
        super(props);
        this.state = {
            bgColor_One: "",
            bgColor_Two: "",
            error: false,
            success: false,
            name: "theme",
            layout: 0,
            checker: false
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
        fetch("/api/layouts/theme", {
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
                <div className="row">
                    <div className="col-lg-6 col-md-6 col-12">
                        <div className="themeLayouts" style={{ backgroundColor: this.state.bgColor_One }}
                            onClick={this.boxClick_One}>
                            <Card
                                bg={'light'}
                                key={0}
                                text={'dark'}
                                style={{ width: '16rem', height: '16rem' }}
                                className="mb-2"
                            >
                                <Card.Body>
                                    <Card.Title style={{ textAlign: 'center', paddingTop: '50%' }}>{"Light"}</Card.Title>
                                </Card.Body>
                            </Card>
                        </div>
                    </div>

                    <div class="col-lg-6 col-md-6 col-12">
                        <div className="themeLayouts" style={{ backgroundColor: this.state.bgColor_Two }}
                            onClick={this.boxClick_Two}>
                            <Card
                                bg={'dark'}
                                key={0}
                                text={'white'}
                                style={{ width: '16rem', height: '16rem' }}
                                className="mb-2"
                            >
                                <Card.Body>
                                    <Card.Title style={{ textAlign: 'center', paddingTop: '50%' }}>{"Dark"}</Card.Title>
                                </Card.Body>
                            </Card>
                        </div>
                    </div>

                </div>
            </div>
        );
    }
}

export default ThemeLayouts;