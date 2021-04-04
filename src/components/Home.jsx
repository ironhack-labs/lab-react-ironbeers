import React from 'react';
import SectionHome from './SectionHome';




const Home = () => {

    return (
        <div className="Home">
            <SectionHome title='All Beers' img='/assets/beers.png' url='/beers'/>
            <SectionHome title='All Beers' img='/assets/random-beer.png' url='/random-beer'/>
            <SectionHome title='All Beers' img='/assets/new-beer.png' url='/new-beer'/>

        </div>
    )


}


export default Home;