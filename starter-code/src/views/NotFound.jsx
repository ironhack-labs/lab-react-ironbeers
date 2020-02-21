import React from 'react'
import {Link} from "react-router-dom"

export default function NoFound() {
    return (
        <div>
            <p>
                Not found
            </p>
            <Link to="/"> Back Home </Link>
        </div>
    )
}
