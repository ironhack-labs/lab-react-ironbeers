import React, {Component} from 'react'
import { Card } from 'antd';
import '../index.css';
const axios = require('axios');
const { Meta } = Card;


class Beers extends Component{

    state={
        beers:[]
    }

    componentWillMount(){
        this.getBeers()
    }

    getBeers = () =>{
        axios.get('https://ironbeer-api.herokuapp.com/beers/all')
        .then(beers => this.setState({beers:beers.data})) //console.log(beers.data)
        .catch(e => console.log("Error" + e))
    }

    render(){
        const beers = this.state.beers
        console.log(beers)
        return(
            <div className="main">
                <img src="https://media-cdn.tripadvisor.com/media/photo-s/08/2c/a7/13/cloud-9-sky-bar-lounge.jpg" height="500px" width="100%" alt="all-beers-pic"/>
                <h1>All Beers</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipiscing elit imperdiet, 
                    ullamcorper sollicitudin mauris ad ante ut. Tincidunt cursus feugiat per sodales aliquet sollicitudin mattis tristique tellus, 
                    maecenas pretium dapibus consequat blandit nisl est congue. 
                </p>
                <div className="father">
                    {beers.map(b=>{
                    return  <Card className="beerCard"
                        hoverable
                        style={{ width: 240 }}
                        cover={<img alt="beerPic" src={b.image_url} />}> 
                    <Meta
                        title={b.name}
                        description={b.description}/>
                    </Card>
                    
                })}        
                </div> 
            </div>
        )
    }
}

export default Beers