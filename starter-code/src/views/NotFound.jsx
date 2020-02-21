import React from "react";
import {Link} from "react-router-dom";

export default function NotFound() {
    return(
        <div className="page">
            <h1>NOT FOUND, DUH.</h1>
            <Link to="/">Go back to homepage</Link>
        </div>
    )
}