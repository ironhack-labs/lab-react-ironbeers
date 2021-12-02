import React from 'react'
import './HomeButton.css'
import { Link } from 'react-router-dom'


class HomeButton extends React.Component {
    constructor() {
        super()


        this.state= {

        }
    }

    render() {
        return(
            <>
                <Link to={'/'}>
                    <h1 className="home-btn">Go home</h1>
                </Link>
            </>
        )
    }
}


export default HomeButton