import React from 'react'
import {Link} from 'react-router-dom'

export default class All extends React.Component {


    displayAll = () =>{
        console.log(this.props)
        return this.props.beers.map(each =>{
            return(
            <Link to ={"/beer/" + each._id} className="reset-a">
                <div className="beer-container">
                    <div className="beer-img-container">
                        <img src={each.image_url} className="beer-img" alt="all"/>
                    </div>
                    <div className="beer-container-info">
                        <h1 className="beer-header">
                            {each.name}
                        </h1>
                        <p className="beer-info">
                            {each.tagline}
                        </p>
                        <p className="beer-owner">
                            <span className="theSpan">Created by:</span> {each.contributed_by}
                        </p>
                    </div>
                </div>
             </Link>
                
            )
        })
    }


    render() {
        return (
            <div>
                {this.displayAll()}
            </div>
        )
    }
}
