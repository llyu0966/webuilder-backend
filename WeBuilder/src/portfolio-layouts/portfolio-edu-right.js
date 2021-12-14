import React, { Component } from 'react'
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../portfolio/portfolio_style.css';


class PortfolioEduRight extends Component {
        constructor(props) {
        super(props);
        this.state = 
        { 
            education: {
                header: "",
                description: "",
            },
          error: false,
          success: false,
        };
    }

    componentDidMount() {
        var id = this.props.id;
        fetch("/api/education/" + id, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json'
          },
        })
          .then(res => res.json())
          .then(education => this.setState({ education: education }))
          .catch(err => {
            this.setState({
              notFound: true,
            });
          });
      }
    render() {
        return (
            <div>
                        <div className="container floatR"> 
            <div className="row">
                <h3 id="expEdu ">Education</h3>
            </div>
            <div className="row">
                
                <div className="col-lg-12 ">
                    
                    <p className="schoolT">{this.state.education.header}</p>
                    <p className="edu ">{this.state.education.description} </p>
                    
                    
                </div>
            </div>
        </div>
            </div>
        );
    }
}


export default PortfolioEduRight;