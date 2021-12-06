import React, { useContext } from 'react';
import { useHistory } from "react-router-dom";
import { Helmet } from 'react-helmet';
import NavBar from './navBar';
import { Redirect } from 'react-router-dom';
import { UserContext } from './userContext';
import {ArrowRightSquare} from 'react-bootstrap-icons';
import ProjectLayouts from '../layouts/projectLayouts';
function Projects() {

    let history = useHistory();
    const msg = useContext(UserContext);

    if (msg.Projects) {
        return (
            <div>
                <Helmet>
                    <style>{'body { background: #6D44C5; }'}</style>
                </Helmet>
                <div class="offset container mt-3 mb-5">
                    <div class="row">
                        <h3 id="headerH3">Projects</h3>
                        <h5 id="headerH5">Choose the layout of your projects section.</h5>
                    </div>
                    <div class="row">
                        <div id="navBar" class="col-lg-2 col-md-2 col-12">
                            <NavBar />

                        </div>

                        <div id="content" class="col-lg-8 col-md-8 col-12">

                            <ProjectLayouts />
                        </div>
                        <div id="nextButton" class="col-lg-2 col-md-2 col-12">
                                <button onClick={() => {
                                history.push('/contactMe')
                                }} href={'/contactMe'} id="next"><ArrowRightSquare/></button>
                        </div>
                    </div>

                </div>

            </div>
        );
    } else {
        return <Redirect to="/contactMe" />
    }
}
export default Projects;