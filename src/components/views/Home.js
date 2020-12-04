import PageCard from './FirstPage'

import { Container } from 'react-bootstrap'

const Home = () => {
    return (
        <Container>
            <PageCard path='/beers' title='All Beers'
                image='https://p4.wallpaperbetter.com/wallpaper/720/537/253/beer-budweiser-heineken-corona-wallpaper-preview.jpg'
                description='Just beer. Take it or leave it.'
            />
            <PageCard path='/random-beer' title='Random Beer'
                image='https://p4.wallpaperbetter.com/wallpaper/971/510/380/draft-beer-wallpaper-preview.jpg'
                description='Just beer. Take it or leave it.'
            />
            <PageCard path='/new-beer' title='New Beer'
                image='https://p4.wallpaperbetter.com/wallpaper/903/861/209/beer-drink-alcohol-wallpaper-preview.jpg'
                description='Just beer. Take it or leave it.'
            />
        </Container>
    )
}

export default Home 