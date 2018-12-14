import React from 'react'
import HomeCard from './HomeCard';
const data = {
    all: {
        title: 'All Beers',
        path: '/all',
        imageURL: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0hSyTTUK4xAZd1fAMDp3kZofDD9b9XBQ0uHzmJ3xXe7taAYVJ'
    },
    random: {
        title: 'Random Beer',
        path: '/random',
        imageURL: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0hSyTTUK4xAZd1fAMDp3kZofDD9b9XBQ0uHzmJ3xXe7taAYVJ'
    },
    new: {
        title: 'New Beer',
        path: '/new',
        imageURL: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0hSyTTUK4xAZd1fAMDp3kZofDD9b9XBQ0uHzmJ3xXe7taAYVJ'
    }
}

const Home = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-4"><HomeCard {...data.all} /></div>
                <div className="col-md-4"><HomeCard {...data.random} /></div>
                <div className="col-md-4"><HomeCard {...data.new} /></div>
            </div>
        </div>
    )
}

export default Home
