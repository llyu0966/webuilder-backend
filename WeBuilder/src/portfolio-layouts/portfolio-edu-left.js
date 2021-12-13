import React, { Component } from 'react'
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../portfolio/portfolio_style.css';


class PortfolioEduLeft extends Component {
    constructor(props) {
        super(props);
        this.state = 
        { 
          header:[],
          description:[], 
          error: false,
          success: false,
        };
    }

    componentDidMount() {
        fetch("/api/education", {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json'
          },
        })
          .then(res => res.json())
          .then(res => this.setState({ header: [...this.state.header, res.header], description: [...this.state.description, res.description] }))
          .catch(err => {
            this.setState({
              notFound: true,
            });
          });
      }

    render() {
        return (
            <div>
                <div className="container"> 
                    <div className="row">
                    <h3 id="expEdu">Education</h3>
                    </div>
                    <div className="row">
                
                        <div className="col-lg-12">
                            
                            <p className="schoolT">{this.state.header[1]}</p>
                            <span className="edu"> May 2022</span>
                            <p className="edu">Bachelor of Science, Computer Science and Multimedia Computing, GPA:3.7</p>
                            
                            <p className="edu">Relevant Coursework:</p>
                            <p className="edu">{this.state.description[1]}</p>
                            
                            
                    </div>
                    </div>
                </div>
            </div>
        );
    }
}


export default PortfolioEduLeft;