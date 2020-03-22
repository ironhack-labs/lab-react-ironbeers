import React, { useState, useEffect } from 'react';

// Service
import { getAllBeers, searchBeer } from "../service";

// Components
import { BeerCard } from '../components/Beer';
import { Loading } from '../components/helpers/Loading';
import { FormMessage } from '../components/FormMessage';

export const Beers = () => {
    const [beers, setBeers] = useState();
    const [filter, setFilter] = useState('');

    useEffect(() => {
        getAllBeers().then(res => { setBeers(res) })
    }, []);

    const handleFilter = (e) => {
        setFilter(e.target.value);
        searchBeer(e.target.value).then(res => { setBeers(res) })
    }

    return (
        <>
            <div className="form-group mt-4">
                <input type="text" className="form-control" placeholder="Search by beer name..." value={filter} onChange={e => handleFilter(e)} required />
            </div>

            {beers ?
                beers.length ?
                    beers.map((beer, i) => {
                        return (
                            <BeerCard
                                key={i}
                                id={beer._id}
                                image={beer.image_url}
                                name={beer.name}
                                tagline={beer.tagline}
                                contributed={beer.contributed_by}
                            />
                        )
                    }) :
                    <FormMessage
                        message={`No results for "${filter}". Please try again.`}
                        type="danger"
                    />
                :
                <Loading />}
        </>
    );
};