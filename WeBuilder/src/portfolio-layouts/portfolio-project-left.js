import React, { Component } from 'react'
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../portfolio/portfolio_style.css';


class PortfolioProjLeft extends Component {
        constructor(props) {
        super(props);
        this.state = {
            image: {
                image: ""
            },
            project: {
                header: "",
                description: "",
            },
            error: false,
            success: false,
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

        fetch("/api/project/1", {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            },
            })
            .then(res => res.json())
            .then(project => this.setState({ project: project }))
            .catch(err => {
                this.setState({
                    notFound: true,
                });
            });
    }

    render() {
        return (
            <div>
                        <div class="projects" id="projects">
            <h1 className="titl yellow" >Projects</h1>
            <br/>
            <div className="container"> 
                <div className="row">
                    
                    <div className="col-7">
                        <h3>{this.state.project.header}</h3>
                        <p class="projDes">{this.state.project.description}</p>
                        

                    </div>
                    <div className="col-5 hopMath">
                        <img src={this.state.image.image} class="img-fluid" alt="My Photo" />
                        

                    </div>
                </div>
            
                
            </div>

               
            </div>
            </div>
        );
    }
}


export default PortfolioProjLeft;