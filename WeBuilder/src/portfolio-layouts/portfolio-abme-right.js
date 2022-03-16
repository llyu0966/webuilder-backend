import React, { Component } from 'react'
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './portfolio_style.css';


class PortfolioABMERight extends Component {
        constructor(props) {
        super(props);
        this.state = 
        { 
          content:[], 
          error: false,
          success: false,
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

        fetch("/api/about", {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json'
          },
        })
          .then(res => res.json())
          .then(res => this.setState({ content: res.content }))
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
                <br/>
                <div class="container about"> 
                <div class="row">

                    

                    <div class="imageAbout col-lg">
                    <img src={this.state.image.image} class="img-fluid" alt="My Photo" />
                    </div>
                    <div class="textAbout col-lg">

                        <h2 class="yellow">About Me</h2>

                        
                        
                        <p class="lead " >
                        { this.state.content }
                        </p>
                

                    </div>

                    
                </div>
             
                </div>
                </div>
            </div>
        );
    }
}


export default PortfolioABMERight;