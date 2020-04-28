import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

class List extends Component {
    state = {
        beers: []
    }

    setBeers = () => {
        axios
            .get("https://ih-beers-api2.herokuapp.com/beers")
            .then((response) => {
                this.setState({
                    beers: response.data,

                });
            })


    }

    componentDidMount() {
        this.setBeers()
    }
    render() {
        const { beers } = this.state


        return (

            <div>
                {beers.map((item, index) => {
                    return (
                        <div key={index} >
                            <Link to={{
                                pathname: '/beers-id/' + item._id, state: {
                                    name: item.name,
                                    img: item.image_url,
                                    tag: item.tagline,
                                    first: item.first_brewed,
                                    level: item.attenuation_level,
                                    description: item.description,
                                    contributed_by: item.contributed_by
                                }

                            }} >
                                <div className="content-list">
                                    <img alt={index} className="imglist" src={item.image_url} />
                                    <div className="beer-list-info">
                                        <span className="name-beer">{item.name}</span>
                                        <span className="tag-beer">{item.tagline}</span>
                                        <span className="contr-beer">{item.contributed_by}</span>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    )
                })
                }
            </div >
        )
    }
}
export default List