import { Container, Card, Button } from 'react-bootstrap'
import AllBeersImg from '../assets/beers.png'
import newBeerImg from '../assets/new-beer.png'
import CreateBeerImg from '../assets/random-beer.png'

const Home = () => {

    return (
        <Container>
            <Card className="text-center">
                <Card.Header>IronBeers</Card.Header>
                <Card.Body>
                    <Card.Text>
                        <img src={AllBeersImg} alt="AllBeers" />
                        <p>Las mejores cervezas del mundo de 2021 según los World Beer Awards.
                            Brindando por las mejores cervezas del año 2021.Presentamos la lista
                            de las mejores cervezas del mundo del año 2021 según los jueces de los
                            World Beer Awards. En ella encontramos diez ganadoras absolutas, además
                            de decenas de galardonadas en diferentes subestilos. Cervezas de todo
                            tipo y condición y para todos los paladares.</p>
                    </Card.Text>
                    <Button a href="/beers" variant="dark">Todas las Cervezas</Button>
                </Card.Body>
            </Card>
            <Card className="text-center">
                <Card.Body>
                    <Card.Text>
                        <img src={newBeerImg} alt="RandonBeer" />
                        <p>Las mejores cervezas del mundo de 2021 según los World Beer Awards.
                            Brindando por las mejores cervezas del año 2021.Presentamos la lista
                            de las mejores cervezas del mundo del año 2021 según los jueces de los
                            World Beer Awards. En ella encontramos diez ganadoras absolutas, además
                            de decenas de galardonadas en diferentes subestilos. Cervezas de todo
                            tipo y condición y para todos los paladares.</p>
                    </Card.Text>
                    <Button a href="/random-beer" variant="dark">Mostrar cerveza aleatoria</Button>
                </Card.Body>

            </Card>
            <Card className="text-center">
                <Card.Body>

                    <Card.Text>
                        <img src={CreateBeerImg} alt="NewBeer" />
                        <p>Las mejores cervezas del mundo de 2021 según los World Beer Awards.
                            Brindando por las mejores cervezas del año 2021.Presentamos la lista
                            de las mejores cervezas del mundo del año 2021 según los jueces de los
                            World Beer Awards. En ella encontramos diez ganadoras absolutas, además
                            de decenas de galardonadas en diferentes subestilos. Cervezas de todo
                            tipo y condición y para todos los paladares.</p>
                    </Card.Text>
                    <Button a href="/new-beer" variant="dark">Registrar nueva cerveza</Button>
                </Card.Body>

            </Card>
        </Container>
    )

}

export default Home