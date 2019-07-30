import React from 'react';
import axios from 'axios';
import { Link, Switch, Route } from 'react-router-dom'
import Header from './Header'


class Beers extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            beers: [],
            ready: false,
        };
    }

    componentDidMount() {

        this.getAllBeers();
    }

    getAllBeers = () => {
        axios.get('https://sample-api-ih.herokuapp.com/')
            .then(res => {
                this.setState({
                    beers: res.data,
                    ready: true
                })
            })
            .catch(err => {
                console.log(err)
            })
    }


    renderBeers = () => {
        return this.state.beers.map((eachBeer, index) => {
            console.log("beer" + eachBeer.image_url)
            return (
                <div key={index} className="col s12 m4">
                    {
                        !this.state.ready ?
                            <p>Loading...</p>
                            :
                            <div className="card horizontal">
                                <div className="card-image">
                                    <img src={eachBeer.image_url} alt="beer-img" />
                                </div>
                                <div className="card-stacked">
                                    <div className="card-content">
                                        <Link to={{ pathname:`/singlebeer/${eachBeer._id}`, state: { beer: eachBeer}}}><p>{eachBeer.name}</p></Link>
                                    </div>

                                </div>
                            </div>
                    }
                </div>
            )
        })
    }



    render() {
        return (
            <div>
                  <Header />
            <div className="container">
                <div className="row">
                    {this.renderBeers()}
                </div>
                {/* <Switch> 
                  <Route exact path = "/singlebeer/:theID" render ={(props)=> <SingleBeer
           {...props} 
           allTheProjects ={this.state.listOfProjects}
           getData = {this.getAllProjects}
           ready = {this.state.ready}
           />} />
            </Switch> */}
            </div>
            </div>
        )
    }
}
export default Beers;