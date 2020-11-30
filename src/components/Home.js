import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css'

 function Home () {
    return (
        <div>
            <ul>
                <li>
                    <img src="https://static.vinepair.com/wp-content/uploads/2020/02/TopTenBeer_HeaderSize.jpg" alt="beers" width="100%"/>
                    <br/><Link to='/beers'> <h1 className="link-title">Beers</h1></Link>
                </li>
                <hr/>
                <li className="link-title">
                    <img src="https://wisebartender.co.uk/ekmps/shops/bb537e/images/Ultimate-British-Beers-39-Bottle-Wise-Pack-inc-FREE-DELIVERY-Save-5--543-p.png" alt="beers" width="100%"/>
                    <br/><Link to='/random-beer'><h1 className="link-title">Random Beer</h1></Link>
                </li>
                <hr/>
                <li >
                    <img src="https://www.gmvsales.com/hubfs/How%20Do%20You%20Know%20if%20Your%20Beer%20Glass%20Is%20Clean%3F.jpg" alt="new-beer-glass" width="100%" />
                    <br/><Link to='/new-beer'><h1 className="link-title">New Beer</h1></Link>
                </li>
            </ul>
        </div>
    )
}

export default Home;
