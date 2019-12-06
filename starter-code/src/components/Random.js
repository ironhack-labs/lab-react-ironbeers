import React,{Component} from 'react'
import Service from '../service/Beer.service'

class Random extends Component {
    constructor() {
        super()
        this.state={beer:{}}
        this._service= new Service ()
    }

componentDidMount = ()=>{
    this._service.getRandom()
    .then(theBeer => {
        // console.log(theBeer)
        this.setState({beer:theBeer.data})})
    .catch(err => console.log("error al recuperar 1 cerveza",err))
}

    render(){
        // console.log()
        // console.log(this.state.beer)
        return(
            // <h1>hola</h1>
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

export default Random