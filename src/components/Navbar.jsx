import React from 'react'

import { Link } from 'react-router-dom'

class Navbar extends React.Component {

    render() {
        
        const NavOpts = [
            {
                name: 'Beers',
                url: 'beers'
            },
            {
                name: 'Random Beers',
                url: 'beers-random'
            },
            {
                name: 'New Beer',
                url: 'new-beer'
            }
        ]
        
        return (
            <div>
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <Link className="navbar-brand" to="/">Navbar</Link>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto">
                            {NavOpts.map (nav => <li className="nav-item active"><Link to={nav['url']}>{nav['name']}</Link></li>)}                        </ul>
                    </div>
                </nav>
            </div>
        )
    }


}

export default Navbar
