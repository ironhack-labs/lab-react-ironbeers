import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'


class BeerList extends Component {

    constructor(props) {
        console.log(props)
        super(props);

        this.state = {

            beerList: []

        }
    }


    getAllBeers = () => {
        axios.get(`https://ih-beers-api2.herokuapp.com/beers`).then(responseFromApi => {
           // console.log(responseFromApi)
            this.setState({ beerList: responseFromApi.data })
        })

    }

    componentDidMount() {
        console.log('The component did mount in axios.get')
        this.getAllBeers();
    }

    deleteBeer = async () => {
       // console.log(this.state.beerList.map(aBeer => aBeer._id))
       
        const newArr= this.state.beerList.find(aBeer => aBeer._id)
        console.log(newArr._id)
        try {
            await axios.delete(`https://ih-beers-api2.herokuapp.com/beers/${newArr._id}`)   


        } catch (err) {
            console.log(err)
        }
    }



    render() {

        return (
            <div>
                <Link to='/'> <img src='https://user-images.githubusercontent.com/23629340/40707029-cb2fce12-63ef-11e8-939c-f673ff3b965d.png' alt='' /> <header>Home</header></Link>
                <div>
                    {this.state.beerList.map(eachBeer => {

                        return (
                            <div key={eachBeer._id}>
                                <img style={{ height: '150px' }} src={eachBeer.image_url} alt='' />
                                <Link to={`/beers/${eachBeer._id}`} ><h3> {eachBeer.name}</h3></Link>
                                <span> {eachBeer.tagline}</span>
                                <span>{eachBeer.contributed_by}</span>
                                <button onClick={() => this.deleteBeer()}>Delete beer</button>
                            </div>
                        )
                    })}
                </div>
            </div>
        )
    }
}


export default BeerList