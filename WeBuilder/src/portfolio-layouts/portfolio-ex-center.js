import React, { Component } from 'react'
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './portfolio_style.css';


class PortfolioExCenter extends Component {
        constructor(props) {
        super(props);
        this.state = 
        { 
            experience: {
                header: "",
                description: "",
            },
          error: false,
          success: false,
        };
    }

    componentDidMount() {
        var id = this.props.id;
        fetch("/api/experience/" + id, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json'
          },
        })
          .then(res => res.json())
          .then(experience => this.setState({ experience: experience }))
          .catch(err => {
            this.setState({
              notFound: true,
            });
          });
      }
      
    render() {
        return (
            <div>
            <div className="container floatC"> 
            <div className="row">
                <h3 id="experience">Experience</h3>
            </div>
            <div className="row">
                
                <div className="col-lg-12">
                    
                    <p className="schoolT">{this.state.experience.header}</p>
                    <p className="edu">{this.state.experience.description}</p>
                    
                    
               
                </div>
                <div class="row">
                


                    </div>

                </div>
        </div>
            </div>
        );
    }
}


export default PortfolioExCenter;