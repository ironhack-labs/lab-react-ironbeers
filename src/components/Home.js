import React from 'react';
import Card from './Card';

function Home(){
    return(
        <div>
            <Card image='../images/beers.png' title='All Beers' link='/beers' />
            <Card image='../images/random-beer.png' title='Random Beer' link='/random-beer' />
            <Card image='../images/new-beer.png' title='New Beer' link='/new-beer' />
        </div>
    )
}

export default Home;