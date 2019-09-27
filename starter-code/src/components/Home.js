import React from 'react'
import {Layout} from 'antd'
import {Link} from 'react-router-dom'
const {Content} = Layout

 function Home() {
    return (
        <Content style={{padding: '0 50px', marginLeft: '380px'}}>
            <div>
               <Link exact to="/beers"><img src = "/images/beers.png" alt="AllBeers"/></Link>
                <p>
                    All beers
                </p>
            </div>
            <div>
               <Link exact to="/beers/random"> <img src= "/images/random-beer.png" alt="RandomBeer"/></Link>
                <p>
                    Random Beer
                </p>
            </div>
            <div>
               <Link exact to ="/new-beer"> <img src= "/images/new-beer.png" alt="RandomBeer"/></Link>
                <p>
                    Add Beer
                </p>
            </div>
        </Content>
    )
}

export default Home