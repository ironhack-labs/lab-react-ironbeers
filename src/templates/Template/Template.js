import React from 'react';
import { Link } from 'react-router-dom';

const Template = ({ children }) => {
    return (
        <div>
            <div><Link to={'/'}>Home</Link></div>
            <div>
                {children}
            </div>
        </div>
    );
}

export default Template;