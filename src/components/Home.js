import React from 'react'
import {Link} from 'react-router-dom'

export default class Home extends React.Component {
    render() {
        return (
            <div>
              <Link to="/beers"><h2>Show me All Beers!</h2></Link>  
              <Link to="/random-beer"><h2>I'm undecided, recommend me a beer</h2></Link>  
              <Link to="/new-beer"><h2>Know what? I will create my own</h2></Link>                 
            </div>
        )
    }
}
