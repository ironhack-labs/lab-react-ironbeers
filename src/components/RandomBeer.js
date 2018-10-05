import React, {Component} from 'react'
//import { Card } from 'antd';
import '../index.css';
const axios = require('axios');
//const { Meta } = Card;


class Beers extends Component{

    state={
        beers:[],
        randomBeer:[]
    }

    componentWillMount(){
       this.getBeers()
    }

    getBeers=()=>{
        axios.get('https://ironbeer-api.herokuapp.com/beers/all')
        .then(beers => {
            this.setState({beers:beers.data})
            this.getRandomBeer(beers.data)
        })
        .catch(e => console.log("Error" + e))
    }

    getRandomBeer = (beers) =>{
        let random = Math.floor(Math.random() * beers.length)
        let rb = this.state.beers[random]
        this.setState({randomBeer:rb.data})
        console.log(this.state.randomBeer)
    }

    render(){ 
        const b = this.state.randomBeer
        return(
            <div className="main">
                <img src="https://www.pbrrockbar.com/storage/app/media/bar-image.png" height="500px" width="100%" alt="beers-pic"/>
                <h1>Random Beer</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipiscing elit imperdiet, 
                    ullamcorper sollicitudin mauris ad ante ut. Tincidunt cursus feugiat per sodales aliquet sollicitudin mattis tristique tellus, 
                    maecenas pretium dapibus consequat blandit nisl est congue. 
                </p>
                <div>{b}</div>
            </div>     
        )
    }
}

export default Beers

/*
                <Card className="beerCard"
                        hoverable
                        style={{ width: 240 }}
                        cover={<img alt="beerPic" src={b.image_url} />}> 
                    <Meta
                        title={b.name}
                        description={b.description}/>
                    </Card>*/