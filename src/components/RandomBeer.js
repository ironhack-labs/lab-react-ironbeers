import React from 'react'
import {Link} from 'react-router-dom'

class RandomBeers extends React.Component {

    render() {
        return (
            <div>
                <p>RandomBeers</p>
                <Link to={`/`}>Home</Link> 
                {/* {console.log('this the Random beers props:', this.props.beers)} */}
            </div>
        );
    }
}

export default RandomBeers;