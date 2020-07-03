import React from 'react'
import './Home.css'
import { Link, Switch, Route } from 'react-router-dom'

const HomeScreen = () => {
    return (
        <div>
            <div>
                <img src='https://i.dailymail.co.uk/1s/2019/09/16/14/18535700-0-image-a-50_1568639482087.jpg' alt="Brew" />
                <strong><Link to='/all-beers'>All Beers</Link></strong>
                <p>Lorem ipsum................. etc.</p>
            </div>
            <div>
                <img src='https://ichef.bbci.co.uk/news/1024/cpsprodpb/61BE/production/_111222052_beerglasses.jpg' alt="Brew" />
                <strong><Link to='/random-beer'>Random Beer</Link></strong>
                <p>Lorem ipsum................. etc.</p>
            </div>
            <div>
                <img src='https://www.iamexpat.nl/sites/default/files/styles/article--full/public/oldimages/61a5bc5c144dbfcb481874823cbbf9071438338557.jpg?itok=7RqnOkOt' alt="Brew" />
                <strong><Link to='/new-beer'>New Beer</Link></strong>
                <p>Lorem ipsum................. etc.</p>
            </div>
        </div>
    )
}
export default HomeScreen