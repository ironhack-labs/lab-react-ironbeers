import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Navbar from './Navbar'
import ApiBeers from '../components/services/ApiBeers'

export default class Beers extends Component {

    constructor() {
        super()
    
        this.state = {
          image: "",
          name: "",
          tagline: "",
          contributed_by: "",
        }
        this.service = new ApiBeers()
    }
    
    //   getAllBeers() {
    //     const id = this.props.match.params.id
    
    //     this.service.getOneBeer(id)
    //       .then(response => {
    //         const { image, name, tagline, contributed_by } = response.data
    
    //         this.setState({ image, name, tagline, contributed_by })
    //       })
    //       .catch(err => console.log(err))
    //   }

     getData(){
         console.log("hola")
        ApiBeers.getAllBeers()
                .then(response => console.log(response))
    }


    render() {
        return (
            <>
            {this.getData()}
        <h1>Detalles</h1>
            <article>
              <img scr={this.state.image} alt={this.state.title}/>
              <div>
                <p>{this.state.name}</p>
                <hr />
                <br />
                <p>Tagline: {this.state.tagline}</p>
                <p>{this.state.contributed_by}</p>
              </div>
            </article>

            

            

            <div>
            <h1>All beers</h1>
            <Link to="./HomePage">
                <Navbar />
            </Link>
            </div>
        </>
        )
    }
}
