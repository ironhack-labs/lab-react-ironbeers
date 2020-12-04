import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import MenuCard from '../components/MenuCard';
import './pages.css';

export default class HomePage extends Component {
  render() {
    return (
      <div>
        <h1>IRONBEERS</h1>
        <div className='homepage'>
          <Link className='homepage_links' to='/beers'>
            <MenuCard 
              title='All Beers'
              imgUrl='https://images.pexels.com/photos/4620723/pexels-photo-4620723.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
              description='Find all delicious IronBeers here.'
            />
          </Link>
          <Link className='homepage_links' to='/random-beer'>
            <MenuCard 
              title='Random Beer'
              imgUrl='https://images.pexels.com/photos/1796698/pexels-photo-1796698.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
              description='Get one random beer recommendation here.'
            />
          </Link>
          <Link className='homepage_links' to='/new-beer'>
            <MenuCard 
              title='New Beer'
              imgUrl='https://images.pexels.com/photos/1718384/pexels-photo-1718384.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
              description='Create and add your own beer to the list.'
            />
          </Link>
        </div>
      </div>
    )
  }
}

// const { title, imgUrl, description } = props;
