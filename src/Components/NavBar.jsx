import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import homeLogo from './../assets/home.svg'

const NavBar = (props) => {

    let HomeLink;

    if (props.location.pathname !== "/") {
        HomeLink = <div className="home-link">< Link 
            to="/"
        >
            <img src={homeLogo} alt=""/>
        </Link></div>;
    }

    return (
        <React.Fragment>
            {HomeLink}
        </React.Fragment> 
    )
}

export default withRouter(NavBar);
