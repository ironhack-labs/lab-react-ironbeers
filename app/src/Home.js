import React, {Component} from 'react';



class Home extends Component {



    render(){
    return (
<div>
    <div className='uk-card uk-card-default'>
    <div className='uk-card-media-top'>
    <img src ='./beers.png' alt ='alv'/>
    </div>
    <div className ='uk-card-body'>
    <h3><a href='/beers'>All Beers</a></h3>
    <p> bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla</p>
    </div>
    </div>
    <div className='uk-card uk-card-default'>
    <div className='uk-card-media-top'>
    <img src ='./new-beer.png' alt ='alv'/>
    </div>
    <div className ='uk-card-body'>
    <h3> <a href='/new-beer'>New Beer</a> </h3>
    <p> bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla</p>
    </div>
    </div>
    <div className='uk-card uk-card-default'>
    <div className='uk-card-media-top'>
    <img src ='./random-beer.png' alt ='alv'/>
    </div>
    <div className ='uk-card-body'>
    <h3><a href='/random'>Random Beer</a></h3>
    <p> bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla</p>
    </div>
    </div>
</div>
    )
}};

export default Home;