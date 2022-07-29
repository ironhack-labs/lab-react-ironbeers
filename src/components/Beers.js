import {useState, useEffect} from "react"
import {NavLink} from "react-router-dom"
import axios from "axios"

export function Beers(props){
    const {beers, setBeers} = props
    const [searchTerm, setSearchTerm] = useState("")
    const [filteredBeers, setFilteredBeers] = useState(props.beers)

    const handleSearchTermChange = ({target}) => {
        setSearchTerm(target.value)
    }

    useEffect(() => {
        axios.get(`${process.env.REACT_APP_URL}/search?q=${searchTerm}`)
            .then(res => {
                setFilteredBeers(res.data)
            })
            .catch(err => {
                console.log("An error occurred while querying beers:", err);
            }, [searchTerm])
    })

    useEffect(() => {
        axios.get(process.env.REACT_APP_URL)
            .then(res => {
                setBeers(res.data)
                setFilteredBeers(res.data)
            })
            .catch(err => {
                console.log("An error has occurred while loading all beers:", err);
            })
    }, [])

    const renderBeers = () => {
        if (filteredBeers === null){
            return <p>Loading beers...</p>
        } else if (filteredBeers.length === 0){
            return <p>No beers matching your search term.</p>
        } else {
            return filteredBeers.map(beer => {
                return (<div key={beer._id}>
                    <h3>{beer.name}</h3>
                    <NavLink to={`/${beer._id}`}>
                        <img src={beer.image_url} />
                    </NavLink>
                    <p>Tag line: {beer.tagline}</p>
                    <p>Contributed by: {beer.contributed_by}</p>
                    <hr />
                </div>)
            })
        }
    }

    return (
        <div>
            <header>
                <NavLink to="/" className="link">Home</NavLink>
                <h2>Beers</h2>
                <label>Search: <input type="text" value={searchTerm} onChange={handleSearchTermChange} /></label>
                <div>
                    {renderBeers()}
                </div>
            </header>
        </div>
    )
}