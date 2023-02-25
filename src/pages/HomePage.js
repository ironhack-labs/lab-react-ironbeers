import { Divider } from 'antd'
import React from 'react'
import { Link } from 'react-router-dom'

function HomePage() {
  return (
    <div className='beersMenu'>
        <section>
        <Divider orientation="center">All beers</Divider>
            <Link className='linkHomePage' to={'/beers'}>
            <div className=''>
                <img className='homeBeers' src='https://images.unsplash.com/photo-1580397581145-cdb6a35b7d3f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fGJlZXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=400&q=60' alt='AllBeers'/>
                <div className='textHbeers'>
                    <p>Get the list of beers</p>
                </div>
            </div>

            </Link>
        <Divider orientation="center">Random beer</Divider>
            <Link className='linkHomePage' to={'/random'}>
                <div>
                    <img className='homeBeers' src='https://images.unsplash.com/photo-1612528443702-f6741f70a049?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fGJlZXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=400&q=60' alt='RandomBeer'/>
                    <div className='textHbeers'>
                        <p>Get a random beer</p>
                    </div>
                </div>
            </Link>
        
        <Divider orientation="center">New beer</Divider>
            <Link className='linkHomePage' to={'/newbeer'}>
                <div>
                    <img className='homeBeers' src='https://images.unsplash.com/photo-1615332579037-3c44b3660b53?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fGJlZXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=400&q=60' alt='NewBeer'/>
                    <div className='textHbeers'>
                        <p>Create a new beer</p>
                    </div>
                </div>
            </Link>
        </section>
    </div>
  )
}

export default HomePage