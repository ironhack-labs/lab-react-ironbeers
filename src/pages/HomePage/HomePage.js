import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import SectionCard from './components/SectionCard'

export default class HomePage extends Component {
        render() {
                return (
                        <div>
                                <Link to='/beers'>
                                        <SectionCard img='https://raw.githubusercontent.com/ironhack-labs/lab-react-ironbeers/302f215349ab6ee080b8a0253d06f0b9a5a8ed27/img/beers.png'
                                                heading='All Beers'
                                                description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, earum sunt vel animi ad aperiam ipsa a illo laboriosam hic delectus atque aliquid similique recusandae! Facilis atque distinctio iste soluta?'
                                        />
                                </Link>

                                <Link to='/random-beer'>
                                        <SectionCard img='https://raw.githubusercontent.com/ironhack-labs/lab-react-ironbeers/302f215349ab6ee080b8a0253d06f0b9a5a8ed27/img/random-beer.png'
                                                heading='Random Beer'
                                                description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, earum sunt vel animi ad aperiam ipsa a illo laboriosam hic delectus atque aliquid similique recusandae! Facilis atque distinctio iste soluta?'
                                        />

                                </Link>

                                <Link to='/new-beer'>
                                        <SectionCard img='https://raw.githubusercontent.com/ironhack-labs/lab-react-ironbeers/302f215349ab6ee080b8a0253d06f0b9a5a8ed27/img/new-beer.png'
                                                heading='New Beer'
                                                description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, earum sunt vel animi ad aperiam ipsa a illo laboriosam hic delectus atque aliquid similique recusandae! Facilis atque distinctio iste soluta?'
                                        />
                                </Link>




                        </div>
                )
        }
}
