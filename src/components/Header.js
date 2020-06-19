import React from 'react';
import {Link} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.css' 

export default function AllBeers() {

    return (
        <div>
            <nav class="navbar navbar-light bg-light">
                <Link class="navbar-brand" to="/">
                    <img src="/docs/4.1/assets/brand/bootstrap-solid.svg" width="30" height="30" class="d-inline-block align-top" alt=""></img>
                    HOME
                </Link>
            </nav>
            

        </div>
    )
}