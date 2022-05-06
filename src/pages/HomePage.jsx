import { Link } from 'react-router-dom'
import Section from '../components/Section/Section'


function HomePage({ unshowNavbar }) {

    unshowNavbar()

    return (
        <>
            <Link to='/beers'><Section sectionName='All Beers' imgUrl='./../../assets/beers.png' /></Link>
            <Link to='/random-beer'><Section sectionName='Random Beer' imgUrl='./../../assets/new-beer.png' /></Link>
            <Link to='/new-beer'><Section sectionName='New Beer' imgUrl='./../../assets/random-beer.png' /></Link>
        </>
    )
}

export default HomePage