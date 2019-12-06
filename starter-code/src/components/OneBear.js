import React, {Component} from 'react'
import Service from '../service/Beer.service'

class OneBear extends Component{
    constructor(props){
        super(props)
        this.state={beer:{}}
        this._service = new Service()
    }

componentDidMount = ()=>{
    const beerId = this.props.match.params.id
    this._service.getOneBear(beerId)
    .then(theBeer => this.setState({beer:theBeer.data}))
    .catch(err => console.log("error al recuperar 1 cerveza",err))
}


    render(){
        // console.log(this.state.beer)
        return(
            <div className="container">
                <div className="row">
                    <div className="col-12 justone ">
                        <img src={this.state.beer.image_url} alt="imagen"/>
                        <h2>{this.state.beer.name}</h2>
                        <h3>{this.state.beer.tagline}</h3>
                        <p>{this.state.beer.description}</p>
                    </div>
                </div>
            </div>
        )
    }
}


export default OneBear