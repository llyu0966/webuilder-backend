import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import { Helmet } from 'react-helmet';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ReactDOM from 'react-dom';
import TextBox from '../layouts/textbox';
import TextBoxExp from '../layouts/textbox-experience';
import TextBoxWPic from '../layouts/textbox-w-pic';
import { FormControl, Form } from 'react-bootstrap';
import { UserContext } from '../pages/userContext';
import TextBoxAboutMe from "../layouts/textbox-aboutme";
import TextBoxContactMe from "../layouts/textbox-contactme";
//import PortfolioABMELeft from "../portfolio-layouts/portfolio-abme-left";
import { ArrowLeftSquare } from "react-bootstrap-icons";
import { ArrowRightSquare } from "react-bootstrap-icons";


/*      
    handleAdd() {
    const values = [...fields];
    values.push({ value: null });
    setFields(values);
    }
    handleRemove(i) {
    const values = [...fields];
    values.splice(i, 1);
    setFields(values);
    }
*/
function Information() {
    let history = useHistory();
    const msg = useContext(UserContext);

    if (msg.AboutMe === false && msg.Education === false
        && msg.Experience === false && msg.Projects === false
        && msg.ContactMe === false) {

        return (
            <div>
                <Helmet>
                    <style>{'body { background: #6D44C5; }'}</style>
                </Helmet>

                <h1 className="enter-info">You did not choose any of the categories. Press back. </h1>
                <button onClick={() => {
                    history.push('/categories')
                }} id="back">Back</button>
            </div>



        );
    } else {
        return (
            <body>
                <Helmet>
                    <style>{'body { background: #6D44C5; }'}</style>
                </Helmet>
                <span>
                    <button onClick={() => {
                        history.push('/contactMe')
                    }} href={'/contactMe'} id="back"><ArrowLeftSquare /></button>
                    <h1 className="enter-info">Enter Your Information</h1>
                    <p className="enter-info-text">For each category you picked enter the text you would like to be shown!</p>
                </span>

                <Container className="info-page">
                    <div>
                        <Row >
                            <TextBoxAboutMe category={msg.AboutMe} />
                        </Row>
                    </div>



                    <div>
                        {/*<Row><h3 className="enter-head">Education </h3></Row>*/}

                        <Row> <Col> <TextBox category={msg.Education} name="Education" /> </Col> </Row>
                    </div>

                    <div>
                        {/* <h3 className="enter-head">Experience </h3> */}

                        <Row> <Col> <TextBoxExp category={msg.Experience} name="Experience" /> </Col> </Row>
                    </div>
                    <div>
                        {/*<h3 className="enter-head">Projects </h3> */}

                        <Row> <Col> <TextBoxWPic category={msg.Projects} name="Projects" /> </Col> </Row>
                    </div>
                    <div>
                        {/*<Row><h3 className="enter-head">Contact Me </h3></Row>*/}

                        <Row> <Col> <TextBoxContactMe category={msg.ContactMe} name="Contact Me" /> </Col> </Row>
                    </div>
                    <div>
                        {/*<PortfolioABMELeft id={"1"} />*/}
                    </div>


                </Container>
                {/*
                <a href="demo-portfolio.html" id="next">Submit</a>
                <button onClick={() => {
                    history.push('/categories')
                }} id="back">Back</button>
            */}
                <button onClick={() => {
                    history.push('/demoPortfolio')
                }} href={'/demoPortfolio'} id="next" className="next-demo"><ArrowRightSquare /></button>
            </body >

        )

    }


}
export default Information;