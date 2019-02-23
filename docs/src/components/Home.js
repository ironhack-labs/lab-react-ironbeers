import React, { Component } from 'react';
import HomeCard from './HomeCard';

class Home extends Component {

    render() {
        return (
            <div className="Home">
               <HomeCard image="https://prods3.imgix.net/images/articles/2016_05/Feature-Mexican-Beer-Tecate-Modelo-Dos-Equis-Vitoria-Ambar.jpg" title="All Beers" description="Some quick example text to build on the card title and make up the bulk of the card's content." link="/beers"/>
               <HomeCard image="https://static.standard.co.uk/s3fs-public/thumbnails/image/2017/06/05/10/the-agenda-10-87.jpg?w968" title="Random Beer" description="Some quick example text to build on the card title and make up the bulk of the card's content." link="/random-beer"/>
               <HomeCard image="https://static1.squarespace.com/static/5670222e57eb8dee50c74e19/567036650e4c117c7c6a80b5/5670368a2399a3b449ffc52c/1450194573058/beer.jpg?format=2500w" title="Create New Beer" description="Some quick example text to build on the card title and make up the bulk of the card's content." link="/new-beer"/>
            </div>
            )
    }
}

export default Home;