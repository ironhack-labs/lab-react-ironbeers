import React from 'react'
import { Component } from 'react'

import { Link } from 'react-router-dom';

class Beers extends Component {
    constructor(props) {
        super(props)
        this.state = {
            beers: this.props.location.state.beers
        }
    }

    render() {
        return (
            <section className="py-6 dark:bg-coolGray-800 dark:text-coolGray-50">
	            <div className="container mx-auto grid grid-cols-2 gap-4 p-4 md:grid-cols-4"> 
                {this.state.beers.map((beer) => {
                    console.log(beer)
                    return (
                        <div className="flex p-4 space-x-4 rounded-lg md:space-x-6 shadow-lg border-2 dark:bg-coolGray-900 dark:text-coolGray-100" key={beer._id}>
                        <div className="w-full m-2 h-20 sm:h-32 sm:w-32 sm:mb-0 justify-evenly "  >
                            <img src={beer.image_url} alt="" className="object-cover h-20 rounded shadow-sm min-h-20 dark:bg-center" />
	                    </div>
                            <div className="flex flex-col space-y-1">
                                <div>
                                <Link to={{pathname:`/beers/${beer._id}`, state: {beer: beer}}}>
                                    <h2 className="capitalise dark:text-2xl font-semibold">{beer.name}</h2></Link>
                                    <span className="dark:text-sm dark:text-coolGray-100">{beer.tagline}</span>
                                </div>
                                <div className="space-y-1">
                                    <span className="flex items-center space-x-2">
                                        <span className="text-xs italic pt-3 dark:text-coolGray-100">{beer.contributed_by}</span>
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