import React, { Component } from 'react';
import { Link } from "react-router-dom";

class HomeButton extends Component {

    render() {
        return(
            <Link to="/" className="fixed pt-1_5 pb-1_5 background-primary br-6 text-center no-decoration w-100 shadow-xl">
                ← Back to home
            </Link>
        )
    }

}

export default HomeButton