import React from 'react';
import { Link } from 'react-router-dom';

export default class Navbar extends React.Component{
    render(){
        return(
                <ul className={"nav justify-content-center"}>
                    <li className={"nav-item"}>
                    <Link className={"nav-link"} to={`/beers`}>
                        Beers
                    </Link>
                    </li>
                    <li className={"nav-item"}>
                    <Link className={"nav-link"} to={`/random-beer`}>
                        Random Beer
                    </Link>
                    </li>
                    <li className={"nav-item"}>
                    <Link
                        className={"nav-link"}
                        to={`/new-beer`}
                    >
                        New Beer
                    </Link>
                    </li>
                </ul>
        )
    }
}