import './portfolio_style.css';
import gitImg from "./git.png";
import linkedImg from "./link.png";
import emailImg from "./email.png";
import projectImg from "./Project.png";
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import PortfolioABMELeft from '../portfolio-layouts/portfolio-abme-left';
import PortfolioEduLeft from '../portfolio-layouts/portfolio-edu-left';


import { useHistory } from "react-router-dom";

function DemoPortfolio() {

    let history = useHistory();

    return (
       
                
        <div className="App body-demo">   

        <nav class="navbar sticky-top navbar-expand-lg navbar-dark ">
            <div class="container-fluid">


            <div class="collapse navbar-collapse" id="navbarColor03">
        
                    
    
            
                
                <ul class="navbar-nav ml-auto">


                    <li class="nav-item float-right">
                    <a class="nav-link" href="#intro">About Me
                    </a>
                    </li>
                    <li class="nav-item float-right">
                    <a class="nav-link" href="#expEdu">Education</a>
                    </li>
                    <li class="nav-item float-right">
                    <a class="nav-link" href="#experience">Experience</a>
                    </li>
                    <li class="nav-item float-right">
                        <a class="nav-link" href="#projects">Projects</a>
                    </li>
                    <li class="nav-item f">
                        <a class="nav-link" href="#contact">Contact Me</a>
                    </li>

                </ul>

        </div>
    </div>
    </nav>

        <PortfolioABMELeft />
        
        <h1 class="titl yellow">Education and Experience</h1>
        <PortfolioEduLeft />

        <div className="container"> 
            <div className="row">
                <h3 id="experience">Experience</h3>
            </div>
            <div className="row">
                
                <div className="col-lg-12">
                    
                    <p className="edu">Software Development Fellow</p>
                    <span className="edu"> Jul 2021 - Present</span>
                    <p className="edu">CUNY Tech Prep</p>
                    
                    <ul class="edu">
                        <li>Selected for a technical training program, as one of 183 students out of 400+ applicants.</li>
                        <li>Learn in-demand technologies like React, Node + Express, and PostgreSQL as well as industry best practices for design, implementation, and deployment such as MVC, version control with Git/GitHub, agile & Scrum with Trello and Slack, test-driven development, and CI/CD.</li>
                    </ul>
               
                </div>
                <div class="row">
                


                    </div>

                </div>
        </div>

        <div class="projects" id="projects">
            <h1 className="titl yellow" >Projects</h1>
            <br/>
            <div className="container"> 
                <div className="row">
                    <div className="col-5 hopMath">
                        <img src={projectImg} className="img-fluid projImg" alt=""/>
                        

                    </div>
                    <div className="col-7">
                        <h3>weBuilder</h3>
                        <p class="projDes">Collaborated with in a team of 3 to build a 
                            web application that creates a portfolio website for users. Developed 
                            using React, Node.js, Express.js, and PostgreSQL to allow for customization
                            of a personal website. </p>
                        

                    </div>
                </div>
            
                
            </div>

               
        </div>
            <div className="container"> 
                <div className="row">
            
                    <div className="contact" id="contact">
                        <h1 className="titl yellow contactImg">Contact Me:</h1>
                        <a target="_blank" href="https://github.com/a-gusenkov"  ><img src={ gitImg } className="img-fluid gitImg contactI" alt=""/></a>
                        <a target="_blank" href="https://www.linkedin.com/in/anastasia-gusenkov/" ><img src={ linkedImg} className="img-fluid lnkImg contactI" alt="" /></a>
                        <a target="_blank" href="https://www.linkedin.com/in/anastasia-gusenkov/" ><img src={ emailImg } className="img-fluid lnkImg contactI" alt=""/></a>
                        
                    </div>
                    </div>
            </div>
        </div> 
            

        );
    }
    
export default DemoPortfolio;