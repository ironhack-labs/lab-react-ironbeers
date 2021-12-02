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
                <Link to={'/beer-list'}>Check All Beers</Link>
                <Link to={'/beer/random'}>Get a Random Beer</Link>
                <Link to={'/beer/new-beer'}>Create a New Beer</Link>
            </>
        )
    }
}


export default Home