import React, { Component } from 'react';
import OneBeer from './OneBeer'
import Nav from './Nav'
import Service from '../service/Service'

class Beers extends Component {

  _isMounted = false;
    constructor() {
        super();
        this.state = {
            beers: []
        }
        this.service = new Service();
    }

    componentDidMount() {
      this._isMounted = true;
  
        this.service.getAllBeers()
        .then(info =>  {
          if (this._isMounted) {
          //console.log(info)
          this.setState({beers: info})
          }
        });

    }

    componentWillUnmount() {
      this._isMounted = false;
    }

    render() {

      this.componentDidMount() 
    
      return (
        <section className="beer-page">
            <Nav />
                <div className="container">
                    <h2>All Beers</h2>

                    <div className="row">
                      { this.state.beers.map((oneBeer, index) => <OneBeer key={index} {...oneBeer} />) }
                    </div>  
                </div>
        </section>
        
      )
    }
}

export default Beers