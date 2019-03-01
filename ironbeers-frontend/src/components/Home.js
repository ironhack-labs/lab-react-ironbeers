import React, {Component} from 'react'
import { withRouter } from 'react-router-dom'
import { Link } from "react-router-dom"

class Home extends Component {

    render(){
       
        const{ beers } = this.props
        if(beers.length === 0) return <div>Loading...</div>
        return(
            <div>
                <h1>Beers</h1>
                <div className="beer-container">

            {beers.map(beer=>{
                return(
                    <div key={beer._id} className="beer-card">
                    <img src={beer.image_url} alt="" height="80"/>
                    
                    <Link to={`/beer/${beer._id}`}>
                <p>{beer.name}</p>
              </Link>
                    <p>{beer.tagline}</p>
                    <p>{beer.contributed_by}</p>

                    </div>
                )
            })}
                </div>
            </div>

        )
    }
}
export default withRouter(Home)

