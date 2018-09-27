import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';

const header = (props) => (
    <div className="header bg-primary">
        <nav>
            <Link to="/"><i className="fa fa-home home-icon"></i></Link>
        </nav>
    </div>
);

export default header;