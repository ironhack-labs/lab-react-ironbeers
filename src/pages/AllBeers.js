import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getAllBeers, getFilteredBeers } from "../api";
import FilterBeers from "../components/FilterBeers";
import NavHome from "../components/NavHome";

function AllBeers() {

    const [allBeers, setAllBeers] = useState([])
    // const [filteredBeers, setFilteredBeers] = useState([])

    useEffect(() => {
        async function getAllBeersHandler() {
            const response = await getAllBeers()
            setAllBeers(response.data)
        }
        getAllBeersHandler()
    }, [])



    // FILTER BEEARS --> LIFT UP THE STATE : THIS ONLY RUNS WHEN WE WRITTE SOMETHING IN THE INPUT FILTER COMPONET
    async function handleFilteredBeers(keyWord) {

        const response = await getFilteredBeers(keyWord)
        setAllBeers(response.data)
    }

    return (
        <>
            <NavHome />
            <FilterBeers handleFilteredBeers={handleFilteredBeers} />
            {allBeers ? (
                <div>
                    {allBeers.map((beer) => {
                        return (
                            <Link style={{ textDecoration: 'none', color: 'grey' }} key={beer._id} to={`/beers/${beer._id}`}>
                                <section  style={{ marginLeft: '20px', width: '600px', display: 'flex', alignItems: 'center', borderBottom: 'solid' }}>
                                    <figure>
                                        <img style={{ height: '270px', width: '100px', margin: '30px' }} src={beer.image_url} alt='beer' />
                                    </figure>
                                    <div style={{ width: '400px', textAlign: 'left' }}>
                                        <h1 style={{color:'black'}}>{beer.name}</h1>
                                        <h3>{beer.tagline}</h3>
                                        <p style={{color:'black'}}><strong>Created by: </strong>{beer.contributed_by}</p>
                                    </div>
                                </section>
                            </Link>
                        )
                    }
                    )
                    }
                </div>
            ) : (
                <p>Loading ...</p>
            )
            }

        </>
    )
}

export default AllBeers;