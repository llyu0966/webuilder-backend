import './portfolio_style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import PortfolioABMELeft from '../portfolio-layouts/portfolio-abme-left';
import PortfolioEduLeft from '../portfolio-layouts/portfolio-edu-left';
import PortfolioProjRight from "../portfolio-layouts/portfolio-project-right";
import PortfolioExLeft from '../portfolio-layouts/portfolio-ex-left';
import PortfolioContactMidl from '../portfolio-layouts/portfolio-contact-midl';
import PortfolioNavBar from '../portfolio-layouts/portfolio-navBar';


function DemoPortfolio() {


    return (
        <div className="App body-demo">
            <div>
                <PortfolioNavBar />
            </div>
            <div>
                <PortfolioABMELeft id={"1"} />
            </div>
            <h1 class="titl yellow">Education and Experience</h1>
                <PortfolioEduLeft />
                <PortfolioExLeft />

            <div>
                <PortfolioProjRight id={"2"} />
            </div>
            <div>
                <PortfolioContactMidl />
            </div>
        </div>


    );
}

export default DemoPortfolio;