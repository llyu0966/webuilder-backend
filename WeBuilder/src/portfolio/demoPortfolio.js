import './portfolio_style.css';
import gitImg from "./git.png";
import linkedImg from "./link.png";
import emailImg from "./email.png";
import projectImg from "./Project.png";
import avatar from "./Blank-Avatar.png"
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import PortfolioABMELeft from "../portfolio-layouts/portfolio-abme-left";
import PortfolioProjRight from "../portfolio-layouts/portfolio-project-right";


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
            <div>
                <PortfolioABMELeft id={"1"} />
            </div>
            <h1 class="titl yellow">Education and Experience</h1>
            <div className="container">
                <div className="row">
                    <h3 id="expEdu">Education</h3>
                </div>
                <div className="row">

                    <div className="col-lg-12">

                        <p className="schoolT">The City College of New York</p>
                        <span className="edu"> May 2022</span>
                        <p className="edu">Bachelor of Science, Computer Science and Multimedia Computing, GPA:3.7</p>

                        <p className="edu">Relevant Coursework:</p>
                        <p className="edu">JAVA Programming, Multimedia Computing, Modern Programming Techniques, Discrete Structures, Data Structures, Computer Architecture, Introduction to Digital Art, Analysis of Algorithms, Operating Systems, Design & Implementation of Large-Scale Applications, Programming Paradigms in C++</p>


                    </div>
                </div>
            </div>
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

            <div>
                <PortfolioProjRight id={"2"} />


            </div>
            <div className="container">
                <div className="row">

                    <div className="contact" id="contact">
                        <h1 className="titl yellow contactImg">Contact Me:</h1>
                        <a target="_blank" href="https://github.com/a-gusenkov"  ><img src={gitImg} className="img-fluid gitImg contactI" alt="" /></a>
                        <a target="_blank" href="https://www.linkedin.com/in/anastasia-gusenkov/" ><img src={linkedImg} className="img-fluid lnkImg contactI" alt="" /></a>
                        <a target="_blank" href="https://www.linkedin.com/in/anastasia-gusenkov/" ><img src={emailImg} className="img-fluid lnkImg contactI" alt="" /></a>

                    </div>
                </div>
            </div>
        </div>


    );
}

export default DemoPortfolio;