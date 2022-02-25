import { useState, useEffect } from 'react'
import { ListGroup, ListGroupItem } from 'react-bootstrap'
import { ThemeConsumer } from 'react-bootstrap/esm/ThemeProvider'
import Header from '../../components/header/Header'
import beersService from '../../services/beers.services'
import { Link } from 'react-router-dom'
import './AllBeersPage.css'


const AllBeersPage = () => {

    const [beers, setbeers] = useState([])

    useEffect(() => {
        loadBeers()
    }, [])

    const loadBeers = () => {
        beersService
            .getAllBeers()
            .then(({ data }) => setbeers(data))
            .catch(err => console.log(err))

    }


    return (

        <div>

            <Header></Header>
            <ListGroup>
                {beers.map(elm =>{
                    return (<ListGroupItem key={elm._id}>
                        <div  className='beerCard'>
                            <Link to={`/beers/${elm._id}`}><img src={elm.image_url} alt="beer" /></Link>
                            <article>
                                <h3>{elm.name}</h3>
                                <p className='tag'>{elm.tagline}</p>
                                <h5><strong>Created by: </strong>{elm.contributed_by}</h5>
                            </article>
                        </div>
                    </ListGroupItem>)} 
                )
                }               
            </ListGroup>
       </div>)
}
export default AllBeersPage

