import React from 'react'
import {Link} from 'react-router-dom'

function HomePage() {
    return (
        <div className="MainHomePage">
            <img src="./images/beers.png" alt=""/>
            <h1><Link to={`/beers`}>All Beers</Link></h1>
            <p>Hac ex causa conlaticia stipe Valerius humatur ille Publicola et subsidiis amicorum mariti inops cum liberis uxor alitur Reguli et dotatur ex aerario filia Scipionis, cum nobilitas florem adultae virginis diuturnum absentia pauperis erubesceret patris.</p>

            <img src="./images/random-beer.png" alt=""/>
            <h1><Link to={`/beers/random`}>Random Beer</Link></h1>
            <p>Hac ex causa conlaticia stipe Valerius humatur ille Publicola et subsidiis amicorum mariti inops cum liberis uxor alitur Reguli et dotatur ex aerario filia Scipionis, cum nobilitas florem adultae virginis diuturnum absentia pauperis erubesceret patris.</p>

            <img src="./images/new-beer.png" alt=""/>
            <h1><Link className = "link" to={`/beers/new`}>New Beer</Link></h1>
            <p>Hac ex causa conlaticia stipe Valerius humatur ille Publicola et subsidiis amicorum mariti inops cum liberis uxor alitur Reguli et dotatur ex aerario filia Scipionis, cum nobilitas florem adultae virginis diuturnum absentia pauperis erubesceret patris.</p>
        </div>
    )
}

export default HomePage
