import React from "react";
import { Link } from "react-router-dom";

export default class NewBeer extends React.Component {
    render() {

        return (

            <div>
                <nav className="navbar">
                    <Link to={"/"}> <button>🍻</button></Link>
                </nav>


                <h1>New Beer</h1>
            </div>

        )
    }



}