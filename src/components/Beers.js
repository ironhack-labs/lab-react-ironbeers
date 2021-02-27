import React from 'react'
import { Component } from 'react'
import axios from 'axios'

class Beers extends Component {
    constructor() {
        super()
        this.state = {
            beers: []
        }
    }

    componentDidMount = () => {
        axios.get('https://ih-beers-api2.herokuapp.com/beers')
            .then((response) => {
                this.setState({ beers: response.data })
            })
            .catch((err) => console.log(err))
    }

    render() {
        return (
            <section className="py-6 dark:bg-coolGray-800 dark:text-coolGray-50">
	            <div className="container flex items-stretch mx-auto lg:flex-row lg:flex-wrap lg:justify-evenly lg:px-10"> 
                {this.state.beers.map((beer) => {
                    console.log(beer)
                    return (
                        <div className="flex flex-row self-stretch w-full max-w-lg p-4 shadow-lg border-2 dark:bg-coolGray-400 dark:text-coolGray-800 rounded-lg border-purple-500 hover:border-gray-500 m-3">
                        <div className="w-full m-2 h-20 sm:h-32 sm:w-32 sm:mb-0 justify-evenly " key={beer._id} >
                            <img src={beer.image_url} alt="" className="object-cover w-full h-20 rounded shadow-sm min-h-20 dark:bg-center" />
	                    </div>
                            <div className="flex flex-col space-y-1">
                                <div>
                                    <h2 className="dark:text-2xl font-semibold">{beer.name}</h2>
                                    <span className="dark:text-sm dark:text-coolGray-800">{beer.tagline}</span>
                                </div>
                                <div className="space-y-1">
                                    <span className="flex items-center space-x-2">
                                        <span className="dark:text-coolGray-800">{beer.contributed_by}</span>
                                    </span>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
            </section>
        )
    }
}
export default Beers