import React,{Component} from 'react'
import {Card} from 'antd'
import {NavLink} from 'react-router-dom'

const { Meta } = Card

class Home extends Component{
    render(){ 
        return(
            <div>
                <h1>Home</h1>
                <NavLink to="/beers">
                    <Card
                        hoverable
                        style={{ width: 800 }}
                        cover={<img alt="All Chelas" src="http://barradeideas.com/wp-content/uploads/2017/08/machismo-restaurantes-710.jpg" />}
                    >
                        <Meta
                        title="All Beers"
                        description="gsdjdhj cjhgdshjc hbckjdsbcjk ckjcghhjksdbc cjhdsgchjdsbc jhcvhjsdc sdghcvghjsdc ghsfcg"
                        />
                    </Card>
                </NavLink>
                <NavLink to="/randombeers">
                    <Card
                        hoverable
                        style={{ width: 800 }}
                        cover={<img alt="Random Chelas" src="http://plus.cusica.com/wp-content/uploads/2018/08/cerveza-barra.jpg" />}
                    >
                        <Meta
                        title="Random Beers"
                        description="gsdjdhj cjhgdshjc hbckjdsbcjk ckjcghhjksdbc cjhdsgchjdsbc jhcvhjsdc sdghcvghjsdc ghsfcg"
                        />
                    </Card>
                </NavLink>
                <NavLink to="/newbeer">
                    <Card
                        hoverable
                        style={{ width: 800 }}
                        cover={<img alt="Agrega Chela" src="http://k01.kn3.net/712F3B740.jpg" />}
                    >
                        <Meta
                        title="New Beer"
                        description="gsdjdhj cjhgdshjc hbckjdsbcjk ckjcghhjksdbc cjhdsgchjdsbc jhcvhjsdc sdghcvghjsdc ghsfcg"
                        />
                    </Card>
                </NavLink>
            </div>          
        )
    }
}

export default Home