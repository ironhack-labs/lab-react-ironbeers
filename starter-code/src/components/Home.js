import React, { Component } from 'react'
import {Link} from "react-router-dom"
import HomeCard from '../styles/HomeCard'


export default class Home extends Component {
    state = {
        cardInfo : [
            {
                title: "All Beers",
                img: "/images/beers.png",
                route: "/beers"
            },
            {
                title: "Random Beer",
                img: "/images/random-beer.png",
                route: "/random-beer"
            },
            {
                title: "New Beer",
                img: "/images/new-beer.png",
                route: "new-beer"
            }
        ]
    }
    render() {
        return (
            <>
                {this.state.cardInfo.map((element, index) => (
                    <Link to={`${element.route}`} style={{textDecoration: "none", color: "inherit"}} key={index}>
                        <HomeCard>
                            <img src={element.img} alt="Section images"/>
                            <h1>{element.title}</h1>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ac ante ac dolor accumsan scelerisque. Donec quam nibh, venenatis ac ante vel, dapibus pharetra libero. Nam nec feugiat dui. In id purus venenatis, ultricies ante ut, feugiat mi. In et mi eget diam sagittis pellentesque eget eget magna. Etiam rhoncus nisi ornare tellus lobortis viverra. Aenean vehicula orci nec pretium tincidunt. Maecenas molestie elit non scelerisque interdum. Ut vulputate at nulla sed sollicitudin. In blandit vehicula odio, vel tempus augue auctor vitae.</p>      
                        </HomeCard>
                    </Link>
                ))}
            </>
        )
    }
}
