import React, {Component} from 'react'
import BeersService from './../../public/service/Beers.service'
import Header from "./Header"


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
        
                {this.state.beers.map(elm => console.log(Beers))}
                
        </section>
        )
    }
}

export default Beers


















