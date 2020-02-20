import React from 'react'
import {Link} from 'react-router-dom'

const Home = () => {
    return (
        <div>
            <Link to="/beers">
            <div>
                <img src='/images/beers.png' alt="all chelas"/>
                <h1>All beers</h1>
                <p>AKSDFÑASNÑVBADOADSJFIBUADVNSCL BHJVSYAFHIUJSDCKM XBNHJGRSUIEJDOSKLMC ,.VBNHJGERUIADJWSK</p>
            </div>
            </Link>
            <Link to="/random">
            <div>
                <img src='/images/random-beer.png' alt="all chelas"/>
                <h1>Random beers</h1>
                <p>akjsdhflkasdhflhasdlfhlaksdhflhasdhfjlashjdfjlasdf,.VBNHJGERUIADJWSK</p>
            </div>
            </Link>
            <Link to="/lol">
            <div>
                <img src='/images/new-beer.png' alt="all chelas"/>
                <h1>Create Beer</h1>
                <p>ñajdfhklasdnhbadfhbguyasdhfiadsfñasC ,.VBNHJGERUIADJWSK</p>
            </div>
            </Link>
        </div>
    )
}

export default Home
