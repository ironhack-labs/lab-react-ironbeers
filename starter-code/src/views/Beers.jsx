import React from 'react'
import NavMain from "./../components/NavMain";
import BeerRow from "./../components/BeerRow";


export default function Beers({beers}) {
    return (
        <div className="page">
            <NavMain />
            <h1 className="title">All beers</h1>
            <table>
                <thead>
                    <tr>
                        <th>Image</th>
                        <th>Name</th>
                        <th>Tagline</th>
                        <th>Contributed by</th>
                        <th>details</th>
                    </tr>
                </thead>
                <tbody>
                    {beers.map((beer, i) =>
                        <tr key={i}>
                            <BeerRow
                                url={beer.image_url}
                                name={beer.name}
                                tagline={beer.tagline}
                                contributed_by={beer.contributed_by}
                                id={beer._id}
                            />
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    )
}
