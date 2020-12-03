import React, {Component} from 'react'
//import BeersService from './../../public/service/Beers.service'
import Header from "./Header"
import BeersCard from './BeersCard'

class Beers extends Component {

    constructor(){
        super()
        this.state = {
            beers: []
            
        }
    }


    render() {

        return (
          <section>
            <Header />
        
                {this.state.beers.map(elm => <BeersCard key={elm._id} {...elm} />)}
                
        </section>
        )
    }
}

export default Beers


















