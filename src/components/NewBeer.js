import React from 'react'
import {Link} from 'react-router-dom'

class NewBeers extends React.Component {

    render() {
        return (
            <div>
                <p>NewBeers</p>
                <Link to={`/`}>Home</Link> 
            </div>
        );
    }
}

export default NewBeers;