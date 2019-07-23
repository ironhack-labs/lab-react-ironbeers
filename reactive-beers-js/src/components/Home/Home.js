import React, {Component} from 'react'
import { Link } from 'react-router-dom'
import { Card } from 'antd'
const { Meta } = Card 
class Home extends Component {

    render(){
        return(
            <div className="home">
                <Link 
                    style={{paddingTop: '15%'}}
                    to={'/beer'}>
                    <Card
                    className="cardsHome"
                    hoverable
                    style={{ width: '50vw' }}
                    cover={<img alt="all beers" src="/img/beers.png" />}
                    >
                        <Meta title="All Beers" description="Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto." />
                    </Card>
                    
                </Link>
                <br/>
                <Link to={'/random-beer'}>
                    <Card
                        className="cardsHome"
                        hoverable
                        style={{ width: '50vw' }}
                        cover={<img alt="all beers" src="/img/random-beer.png" />}
                        >
                        <Meta title="Random Beer" description="Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto." />
                    </Card>
                </Link>
                <br/>
                <Link to={'/new-beer'}>
                    <Card
                        className="cardsHome"
                        hoverable
                        style={{ width: '50vw' }}
                        cover={<img alt="New Beer" src="/img/new-beer.png" />}
                        >
                        <Meta title="New Beer" description="Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto." />
                    </Card>
                </Link>
            </div>
        )
    }
}
export default Home