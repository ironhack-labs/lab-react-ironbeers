import React from 'react'
import './Home.css'
import {Link} from 'react-router-dom'


class Home extends React.Component {
    constructor() {
        super()


        this.state= {

        }
    }

    render() {
        return(
            <>  
                <div className="home-container">
                    <div className="animation-all-btn">
                        <Link className="button color-cycle" to={'/beer-list'}>Check All Beers</Link>
                        <Link className="button animation-lateral" to={'/beer/random'}>Get a Random Beer</Link>
                        <Link className="button animation-lateral-right " to={'/beer/new-beer'}>Create a New Beer</Link>
                    </div>
                </div>
            </>
        )
    }
}


export default Home