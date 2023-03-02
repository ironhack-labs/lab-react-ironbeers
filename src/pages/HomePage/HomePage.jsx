import { Container } from "react-bootstrap"
import HomeCard from "../../components/HomeCard/HomeCard"
import img1 from '../../assets/beers.png'
import img2 from '../../assets/new-beer.png'
import img3 from '../../assets/random-beer.png'



const HomePage = () => {

    return (

        <Container>
            <HomeCard name={'All Beers'} img={img1} link={'beers'} />
            <HomeCard name={'Random Beers'} img={img2} link={'beers/random'} />
            <HomeCard name={'New Beer'} img={img3} link={'beers/create'} />

        </Container>
    )
}

export default HomePage