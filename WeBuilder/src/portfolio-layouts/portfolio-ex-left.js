import React, { Component } from 'react'
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../portfolio/portfolio_style.css';


class PortfolioExLeft extends Component {
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
                <div className="container">
                    <div className="row">
                        <h3 id="experience">Experience</h3>
                    </div>
                    <div className="row">

                        <div className="col-lg-12">

                            <p className="schoolT">{this.state.experience.header}</p>
                            <p className="edu">{this.state.experience.description}</p>
                            {/**<p className="edu">Software Development Fellow</p>
                            <span className="edu"> Jul 2021 - Present</span>
                            <p className="edu">CUNY Tech Prep</p>

                            <ul class="edu">
                                <li>Selected for a technical training program, as one of 183 students out of 400+ applicants.</li>
                                <li>Learn in-demand technologies like React, Node + Express, and PostgreSQL as well as industry best practices for design, implementation, and deployment such as MVC, version control with Git/GitHub, agile & Scrum with Trello and Slack, test-driven development, and CI/CD.</li>
        </ul>*/}
    

                        </div>
                        <div class="row">

                        </div>

                    </div>
                </div>
            </div>
        );
    }
}


export default PortfolioExLeft;