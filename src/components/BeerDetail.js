import React, { Component } from 'react'

 class BeerDetail extends Component {
     getSingleBeer() {
        console.log(this.props)

         const { params } = this.props.match;
        console.log(params)
         return (<div>
             <img src={params.image_url} alt=""/>
                        <h2>{params.name}</h2>
                        <h3>{params.tagline}</h3>
                        <p>{params.first_brewed}</p>
                        <p>{params.attenuation_level}</p>
                        <p>{params.description}</p>
                       
                <p><span>Created by</span> {params.contributed_by}</p>

         </div>)
     }
    render() {
        return (
            <div>
                {this.getSingleBeer()}
                {/* <button onClick={this.props.history.goBack}>Go Back</button> */}
            </div>
        )
    }
}

export default BeerDetail
