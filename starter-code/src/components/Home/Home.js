import React from 'react'
import { Link } from 'react-router-dom'
import cardsInfo from './Card/HomeLinks.json'
import Card from './Card/Card'
import './home.css'

const Home = () => {
    return (
        <div className='home'>
            { cardsInfo.map((elm, idx) => <Link to={ elm.url } key={ idx }  ><Card { ...elm } /></Link>) }
        </div>
    )
}
export default Home