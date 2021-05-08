import React from 'react'
import './Beers.css'

import {Link} from 'react-router-dom'

import NavBar from '../NavBar'

class Beers extends React.Component{
    
    showBeers(){
        const AllBeers = this.props.beers
        if(AllBeers.length > 0){
            return AllBeers.map((beer)=>{
                return (
                    <div>
                        <div className="beer">
                            <div className="beer-img"><img src={beer.image_url} alt={beer.name+'-img'} /></div>
                            <div className="beer-data">
                                <h2>{beer.name}</h2>
                                <h4>{beer.tagline}</h4>
                                <h6><strong>Created by: </strong>{beer.contributed_by}</h6>
                                <Link to={`/beers/${beer._id}`}>Beer details</Link>
                            </div>
                        </div>
                        <hr />
                    </div>
                )
            })
        } else {
            return <div><i className="material-icons loading-icon">sync</i>Loading</div>
        }
    }

    render() {
        return(
            <div className="Beers">
                <NavBar />
                {/* <Link to='/' className="link">
                    <div className="nav-bar"><i className="material-icons home-icon">home</i></div>
                </Link> */}

                <div className="body">
                    {this.showBeers()}
                </div>
            </div>
        )
    }
}

export default Beers
