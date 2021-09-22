import React from "react"
import Header from "../Header/Header"
import Loader from "react-loader-spinner"
import axios from "axios"
export default class AllBeers extends React.Component{
    state = {
        beers: undefined
    }
    getBeer() {
        //HACEMOS LA PETICION A LA API
        axios
            .get("https://ih-beers-api2.herokuapp.com/beers")
            .then((res) => {
                //En axios el body de la peticion esta en el campo data
                //Hacemos console.log para sacar el boy por la console del navegador
                console.log(res.data)
                this.setState({ beers: res.data })
            })
            .catch(() => {
                console.log("Error")
            })
    }

    componentDidMount() {
        this.getBeer();
    }
    render() {
      
            {/* //Si el state sigue siendo null será falsy, por lo tanto no será truthy y mostrará el Loading.. */}
        if (!this.state.beers) {

            return [
                "Loading...",
                < Loader
                    type="Puff"
                    color="#00BFFF"
                    height={100}
                    width={100}
                    timeout={3000} //3 secs
                />
            ]
        }
        return (
            <div className="AllBeers">
                    <Header />
                    <h1>Hello from All Beers</h1>


                {
                    this.state.beers.map(beer =>
                        <div class="card mb-3" >
                            <div class="row g-0">
                                <div class="col-md-4">
                                    <img src={beer.image_url} class="img-fluid rounded-start" alt="beer bottle" />
                                </div>
                                <div class="col-md-8">
                                    <div class="card-body">
                                        <h5 class="card-title">{beer.name}</h5>
                                        <p class="card-text">{beer.tagline}</p>
                                        <p class="card-text"><small class="text-muted">Created by: {beer.name}</small></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}

            </div>
        
        )
           
    }

        
    
}




