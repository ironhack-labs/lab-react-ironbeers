import React from 'react'
import {Layout} from 'antd'
import {Link} from 'react-router-dom'

const {Content} = Layout

const Home = () =>(
    <Content style={{ padding: '0 50px' }}>
        <div className="beerhome">
        <div styles={{marginTop: '20px'}}>
            <Link exact to="/beers"><img src="/images/beers.png" alt="labeer"/> </Link></div>
           <h2>TODAS las beers</h2>
        </div>
        <div className="beerhome"v>
        <div>
           <Link exact to="/beers/random"> <img src="/images/random-beer.png" alt="labeer"/> </Link></div>
            <h2>Una RANDOM</h2>
        </div>
        <div className="beerhome">
        <div>
           <Link exact to="/new-beer"> <img src="/images/new-beer.png" alt="alsadhj" /> </Link> </div>
            <h2>Nueva Beer</h2>
        </div>
    </Content>
)

export default Home