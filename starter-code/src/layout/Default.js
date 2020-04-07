import React from 'react';
// import Navbar from "../components/Navbar";

const Default = (props) => {
    return (
        <div className="container">
            {/* <Navbar /> */}
            {props.children}
        </div>
    );
}

export default Default;