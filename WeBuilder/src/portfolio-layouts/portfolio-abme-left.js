import React, { Component } from 'react'





class PortfolioABMELeft extends Component {


    constructor(props) {
        super(props);
        this.state = {
            image: {
                image: ""
            }
        };

    }


    componentDidMount() {
        var id = this.props.id;
        fetch("/api/image/" + id)
            .then(res => res.json())
            .then(image => {
                this.setState({
                    image: image

                });
            })
            .catch(err => {
                this.setState({
                    notFound: true,
                });
            });
    }


    render() {
        return (
            <div>
                <div class="intro" id="intro">
                    <br />
                    <div class="container about">
                        <div class="row">

                            <div class="textAbout col-lg">
                                <h2 class="yellow">About Me</h2>

                                <p class="lead " >
                                    I’m Farukh and I’m a junior at the City Univesity of New York majoring in Computer Science.
                                    Currently I'm a full-stack web development fellow at CUNY Tech Prep, a selective JavaScript program for CUNY students, where I’m working on a portfolio building tool called WeBuilder.
                                    My goal for this project is to allow people to feel confident in their skills as they start their journey in the tech industry.
                                    A little more about myself...
                                </p>


                            </div>

                            <div class="imageAbout col-lg">
                                <img src={this.state.image.image} class="img-fluid" alt="My Photo" />
                                {/*console.log(this.state.image.image)*/}

                            </div>

                        </div>

                    </div>
                </div>
            </div>
        );
    }
}


export default PortfolioABMELeft;