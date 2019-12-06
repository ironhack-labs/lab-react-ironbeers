import React,{Component} from 'react'
import Service from '../service/Beer.service'
import BeerCard from './BeerCard'

class AllBeers extends Component {
    constructor(){
        super()
        this._service= new Service()
        this.state={
            beers:[]
        }
    }

    componentDidMount= () => this.updateBeers()

    updateBeers = ()=>{
        this._service.getAllBeers()
        .then(allBeers => this.setState({beers:allBeers.data}))
        .catch(err => console.log("error al recuperar cervezas en la cervezas",err))
    }

    render(){
        // console.log(this.state.beers)
        return(
            <div className="container">
                <div className="row">
                   
                {this.state.beers.map(beer =><BeerCard key={beer._id}{...beer}/>)}

                </div>
            </div>


        )
    }
}

export default AllBeers