import React from "react"
import Header from "../Header/Header"
import Loader from "react-loader-spinner"
import axios from "axios"
import BeerCard from "../BeerdCard/BeerCard"
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
                        (<BeerCard key={beer.name} {...beer}/>)
                       
                    )}

            </div>
        
        )
           
    }

        
    
}




