import React, { Component } from 'react'


import { Link } from 'react-router-dom';


export class Home extends Component {
    render() {
        return (
            <div className='home-container'>
                <img src="/images/beers.png" alt="Beers" />
                <h4><Link to='/Beer'>All Beers</Link></h4>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quod perferendis, quasi animi aperiam quo autem veritatis consequuntur aut, consequatur sequi corrupti. Illo nisi tenetur obcaecati quibusdam ipsam, iure incidunt ratione!</p>
                <img src="/images/random-beer.png" alt="RandomBeers" />
                <h4><Link to='/RandomBeer'>Random Beer</Link></h4>
                <p>Lorem,ipsum dolor sit amet consectetur adipisicing elit. Quod perferendis, quasi animi aperiam quo autem veritatis consequuntur aut, consequatur sequi corrupti. Illo nisi tenetur obcaecati quibusdam ipsam, iure incidunt ratione!</p>
                <img src="/images/new-beer.png" alt="NewBeers" />
                <h4><Link to='/NewBeer'>New Beer</Link></h4>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quod perferendis, quasi animi aperiam quo autem veritatis consequuntur aut, consequatur sequi corrupti. Illo nisi tenetur obcaecati quibusdam ipsam, iure incidunt ratione!</p>
            </div>
        )
    }
}

export default Home
