import React, { Component } from 'react';
import axios from 'axios';
import {API_URL} from '../config';
import Header from './Header';

export default class RandomBeer extends Component {

    state={
        beers:''
    }

    componentDidMount(){
        //the id from ..params.id comes from the path at Route name on App.js, since it is call path="/todo/:id"
        axios.get(`${API_URL}/random`)
        .then((res)=>{
          this.setState({
            beers: res.data
          })
        })
    }

    render() {

        //since render runs before the componentDidMount, we render an empty value for name and description at first, to avoid issues we use the if statement.
        if (!this.state.beers){
            return <p>Loading...</p>
        }

        const{image_url,name,tagline,first_brewed,attenuation_level,description,contributed_by} = this.state.beers

        let image={
            width:'100px',
        }

        let imgcontainer={
            display:'flex',
            justifyContent:'center',
            marginTop:'75px'
        }
        let infoContainer={
            display:'flex',
            justifyContent:'space-between',
            marginRight:'20px',
            marginLeft:'20px',
            marginTop:'20px'
        }
        let descriptionContainer={
            marginRight:'20px',
            marginLeft:'20px'
        }
        let colorFont={
            color:'grey'
        }
        return(
            
            <div>
                <Header/>
                <div style={imgcontainer}><img src={image_url} alt='beerImg' style={image}/></div>

                <div style={infoContainer}>

                    <div >
                        <h2>{name}</h2>
                        <p style={colorFont}>{tagline}</p> 
                    </div>

                    <div>
                        <p>{attenuation_level}</p>  
                        <p> <strong>{first_brewed}</strong></p>
                    </div>

                </div>
                
                <div style={descriptionContainer}>
                    <p><strong>{description}</strong></p>
                    <p style={colorFont}>{contributed_by}</p>
                </div>
              
            </div>
        )
    }
 }
