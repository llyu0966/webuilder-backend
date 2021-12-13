import React, { Component } from 'react'
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../portfolio/portfolio_style.css';
import avatar from './blankAvatar.png';

class PortfolioABMELeft extends Component {
    constructor(props) {
        super(props);
        this.state = 
        { 
          content:[], 
          error: false,
          success: false,
        };
    }

    componentDidMount() {
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

                            <div class="textAbout col-lg">
                                <h2 class="yellow">About Me</h2>
                            
                                <p class="lead " >
                                { this.state.content }
                                </p>
                    

                            </div>

                        <div class="imageAbout col-lg">
                        <img src={avatar} class="img-fluid" alt="My Photo" />
                        </div>

                        </div>
                
                    </div>
                </div>
            </div>
        );
    }
}


export default PortfolioABMELeft;