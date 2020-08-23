import React from 'react'
import axios from 'axios';
import {API_URL} from '../config';
import Header from './Header';

class RandomBeer extends React.Component {
    state={
        beers:''
    }

    componentDidMount(){
        axios.get(`${API_URL}/random`)
        .then((res)=>{
          this.setState({
            beers: res.data
          })
        })
    }

    render() {
        const{image_url,name,tagline,first_brewed,attenuation_level,description,contributed_by} = this.state.beers
        return(
            
            <div>
                <Header/>
                <div>
                    <img src={image_url} alt='beerImg'/>
                    </div>

                <div>

                    <div >
                        <h2>{name}</h2>
                        <p>{tagline}</p> 
                    </div>

                    <div>
                        <p>{attenuation_level}</p>  
                        <p> <strong>{first_brewed}</strong></p>
                    </div>

                </div>
                
                <div>
                    <p><strong>{description}</strong></p>
                    <p>{contributed_by}</p>
                </div>
              
            </div>
        )
    }
 }



export default RandomBeer