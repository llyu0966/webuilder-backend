import React, { Component } from 'react';
import { Card } from 'react-bootstrap';
import logo from './../pics/logo.png';

class EducationLayouts extends Component {

    constructor(props) {
        super(props);
        this.state = {
            bgColor_One: "",
            bgColor_Two: "",
            error: false,
            success: false,
            layout: 1,
        }
    }

    boxClick_One = (event) => {
        this.setState({
            bgColor_One: "rgba(30, 139, 195, 1)",
            bgColor_Two: "rgba(153, 42, 42, 0.01)",
            layout: 2
        });
        return this.saveLayout(event);
    }

    boxClick_Two = (event) => {
        this.setState({
            bgColor_One: "rgba(153, 42, 42, 0.01)",
            bgColor_Two: "rgba(30, 139, 195, 1)",
            layout: 1
        });
        return this.saveLayout(event);
    }

    saveLayout = (event) => {
        fetch("/api/layouts/3", {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({layout: this.state.layout}),
        })
          .then(res => {
            if(res.ok) {
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
        fetch("/api/layouts")
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
                    <Card style={{ padding: '20px', height: '14rem', borderRadius: '25px'  }}>
                        <div className="row no-gutters">
                            <div className="col-2">
                                <img src={logo} className="img-fluid" alt="logo" style={{ justifyContent: 'center', padding: '20px', marginTop: '20px' }} width="100%" height="100%"></img>
                            </div>
                            <div className="col">
                                <div className="card-block px-2">
                                    <Card.Title style={{ paddingTop: "20px" }}>Brooklyn College</Card.Title>
                                    <Card.Subtitle style={{ paddingBottom: "10px" }}>Bachelor of Science, Computer Science, GPA:3.7</Card.Subtitle>
                                    <Card.Text>Relevant Coursework:</Card.Text>
                                    <Card.Text>JAVA Programming, Multimedia Computing, Discrete Structures, Data Structures, Computer Architecture, Introduction to Digital Art, Analysis of Algorithms, Operating Systems, Programming Paradigms in C++</Card.Text>
                                </div>
                            </div>
                        </div>
                    </Card>
                </div>
                <div className="aboutMe" style={{ backgroundColor: this.state.bgColor_Two }}
                    onClick={this.boxClick_Two}>
                    <Card style={{ padding: '20px', height: '14rem', borderRadius: '25px'   }}>
                        <div className="row no-gutters">
                            <div className="col">
                                <div className="card-block px-2">
                                    <img src={logo} className="img-fluid" alt="logo" style={{ justifyContent: 'center', padding: '10px' }} width="14%"></img>
                                    <Card.Title>Brooklyn College</Card.Title>
                                    <Card.Subtitle style={{ paddingBottom: "10px" }}>Bachelor of Science, Computer Science, GPA:3.7</Card.Subtitle>
                                    <Card.Text>Relevant Coursework:</Card.Text>
                                    <Card.Text>JAVA Programming, Multimedia Computing, Discrete Structures, Data Structures, Computer Architecture, Introduction to Digital Art, Analysis of Algorithms, Operating Systems, Programming Paradigms in C++</Card.Text>                    </div>
                            </div>
                        </div>
                    </Card>
                </div>
            </div>
        );
    }
}

export default EducationLayouts;