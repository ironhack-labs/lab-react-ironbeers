import React from 'react';
import {Link} from 'react-router-dom'

function Home () {
    return (
        <div>
        <Link to={`/beers`}> all beers </Link>
        <p> Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. </p>
        <Link to={`/random-beer`}> random Beer </Link>
        <p> At vero eos et accusam et justo duo dolores et ea rebum. </p>
        <Link to={`/new-beer`}> new beer </Link>
        <p> Takimata sanctus est Lorem ipsum dolor sit amet. </p>
        </div>
    )
}

export default Home;
