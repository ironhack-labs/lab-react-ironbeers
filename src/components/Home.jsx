import React from 'react'
import { Link } from 'react-router-dom'

export default function Home() {
    return (
        <div className='container'>
            <div className='col'>
                <div className='row d-flex flex-column'>
                    <img src='../assets/beers.png' alt='beers' />
                    <Link to='/beers'>All Beers</Link>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce varius commodo massa, eget scelerisque orci venenatis et. Curabitur nisl tellus, efficitur at risus quis, elementum consequat tellus. Nullam pharetra semper elit in auctor.</p>
                </div>
                <div className='row d-flex flex-column'>
                    <img src='../assets/random-beer.png' alt='beers' />
                    <Link to='/random-beer'>Random Beer</Link>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce varius commodo massa, eget scelerisque orci venenatis et. Curabitur nisl tellus, efficitur at risus quis, elementum consequat tellus. Nullam pharetra semper elit in auctor.</p>
                </div>
                <div className='row d-flex flex-column'>
                    <img src='../assets/new-beer.png' alt='beers' />
                    <Link to='/new-beer'>Add a beer</Link>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce varius commodo massa, eget scelerisque orci venenatis et. Curabitur nisl tellus, efficitur at risus quis, elementum consequat tellus. Nullam pharetra semper elit in auctor.</p>
                </div>
            </div>
            
            
        </div>
    )
}
