import { useEffect, useState } from "react"


import { Link } from "react-router-dom"


const ListBeers = () => {

    const [beers, setBeers] = useState([])
    useEffect(() => {
        fetch('https://ih-beers-api2.herokuapp.com/beers')
            .then(res => res.json(res))
            .then(beersData => setBeers(beersData))
    }, [])

    return (

        beers.map(elm => {
            return (

                <div className="HomePage">
                    {elm.name}
                    <Link to="/beers">
                        <img src={elm.image} alt='beers' />
                    </Link>

                </div>
            )
        })
    )
}

export default ListBeers