import {Card, Col,Row} from 'antd';
import {Link} from 'react-router-dom';
//import BeerList from './pages/BeerList'
//import RandomBeer from './pages/RandomBeer'
//import NewBeer from './pages/NewBeer'


const Home = () =>{
    const { Meta } = Card;
    return <Col>
        <Col span={24}>
        <Card
                hoverable
                style={{ width: 500}}
                cover={<img alt="example" src="../images/beers.jpg" />}
                >
                <Link to="/beers">All Beers</Link>
                <Meta description="Lorem ipsum" />
            </Card>
        </Col>
        <Col span={24}>
        <Card
                hoverable
                style={{ width: 500}}
                cover={<img alt="example" src="../images/randombeer.jpg" />}
                >
                <Link to="/beer/:id">Get a Random Beer</Link>
                <Meta description="Lorem ipsum" />
            </Card>
        </Col>
        <Col span={24}>
        <Card
                hoverable
                style={{ width: 500}}
                cover={<img alt="example" src="../images/newbeer.jpg" />}
                >
                <Link to="/new-beer">Add a Beer</Link>
                <Meta description="Lorem ipsum" />
            </Card>
        </Col>
    </Col>

 
        
        
    
}
export default Home