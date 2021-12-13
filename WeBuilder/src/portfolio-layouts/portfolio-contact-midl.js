import React, { Component } from 'react'
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../portfolio/portfolio_style.css';
import gitImg from "./git.png";
import linkedImg from "./link.png";
import emailImg from "./email.png";


class PortfolioContactMidl extends Component {
    constructor(props) {
        super(props);
        this.state = 
        { 
            contact: {
                github: "",
                linkedIn: "",
                email: "",
            },
          error: false,
          success: false,
        };
    }

    componentDidMount() {
        var id = this.props.id;
        fetch("/api/contact/" + id, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json'
          },
        })
          .then(res => res.json())
          .then(contact => this.setState({ contact: contact }))
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

                        <div className="contact" id="contact">
                            <h1 className="titl yellow contactImg">Contact Me:</h1>
                            <a target="_blank" href={this.state.contact.github}  ><img src={gitImg} className="img-fluid gitImg contactI" alt="" /></a>
                            <a target="_blank" href={this.state.contact.linkedIn} ><img src={linkedImg} className="img-fluid lnkImg contactI" alt="" /></a>
                            <a target="_blank" href={"mailto:"+this.state.contact.email} ><img src={emailImg} className="img-fluid lnkImg contactI" alt="" /></a>

                        </div>
                    </div>
                </div>
            </div>
        );
    }
}


export default PortfolioContactMidl;