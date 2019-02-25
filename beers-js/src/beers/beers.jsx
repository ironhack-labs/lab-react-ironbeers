import React, {Component} from 'react';
import Header from '../header/header';
import BeerService from '../beerService/beerService';

export default class Beers extends Component{

    constructor(props){
        super(props)
        this.beerService = new BeerService();
        this.state={
            beers:[]
          }
        this.getBeers();
    }

    getBeers = () =>{
        this.beerService.getBeer()
        .then(beers=>{
            console.log(beers)
            //let stateCopy={...this.state};
            //stateCopy.butterfly=butterflies
            //this.setState(stateCopy)

            this.setState({...this.state,beers:beers})
        })
        .catch(err=>console.log(err))
    }
    render(){
        return(
            <div className="beers">
                <Header/>
                <img/>
                <h2>Cervezas</h2>
                {this.state.beers.map((beer,index)=>{
                return(
                    <div key={index}>
                    <div>{beer.name}</div>
                    </div>
                )
                })}
            </div>
        )
    }
}