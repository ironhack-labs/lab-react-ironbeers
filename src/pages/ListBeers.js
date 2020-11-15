import React, { Component } from 'react';
import Header from './Header';
import axios from 'axios';
class ListBeers extends Component {
    constructor() {
        super();
        this.state = { listOfBeers: [] };
    }
    getAllBeers = () => {
      axios.get(`https://api.punkapi.com/v2/beers`)
      .then(responseFromApi => {
        this.setState({
            listOfBeers: responseFromApi.data
        });
      });  
    };
    componentDidMount() {
        this.getAllBeers();
        console.log(this.getAllBeers)
    }
    render() {
        return (
            <div>
                <div>
                    <Header/>
                </div>
                <div>
                {this.state.listOfBeers.map(datos => {
                    return (
                        <div>
                            <img src={datos.image_url} alt=""/>
                            <h3>{datos.name}</h3>
                            <p>{datos.tagline}</p>
                            <p>{datos.contributed_by}</p>
                        </div>    
                    )
                })}
                </div>
            </div>
        )
    }
}
export default ListBeers