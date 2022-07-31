import axios from 'axios';
import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';

function Beers() {

    const [beers, setBeers] = useState(null);

    useEffect(() => {
        fetchBeers();
    }, []);

    const fetchBeers = () => {
        axios
            .get(process.env.REACT_APP_API_BASE_URL + '/beers')
            .then((response) => {
                setBeers(response.data);
            })
            .catch((e) => {
                console.log(e);
            });
    }


    const renderBeers = () => {
        const result = beers.map(e => {
            return (
                <li className='beer'>
                    {/* <img src={e.image_url} alt={`no image of...${e.name}`}></img> */}
                    {/* image commented while dev */}
                    <h3>{e.name}</h3>
                    <h4>{e.tagline}</h4>
                    <p>{e.description}</p>
                    <NavLink to={`/beers/${e._id}`}>More Details</NavLink>
                </li>
            );
        });

        return result;
    }


    return (
        <>
            <header>
                <NavLink to="/">Home</NavLink>
            </header>
            <p>This is Beers List</p>
            {beers === null
                ? <p>loading...</p>
                : <ul>{renderBeers()}</ul>
            }
        </>
    )

}

export default Beers;