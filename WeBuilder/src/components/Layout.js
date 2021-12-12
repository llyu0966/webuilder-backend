import React from 'react';
import { Link } from 'react-router-dom';

function Layout({ name, layout, id }) {
    return (
        <div className="col-10 col-md-8 col-lg-7">
            <div className="card mb-4 shadow">
                <div className="card-body card-text">
                    <Link to={"/layouts/" + id}>{name}</Link>
                </div>
                <div className="card-footer small text-muted text-right">
                    {layout}
                </div>
            </div>
        </div>
    );
}

export default Layout;