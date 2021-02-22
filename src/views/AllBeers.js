import React from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom'

function AllBeers() {
    const style = {width: '80px', alignSelf: "center", marginTop: '20px' }
    const [beers, setBeers] = React.useState([])

    //axios siempre devuelve un objeto {data} con la información
    React.useEffect(()=> {
        axios.get("https://ih-beers-api2.herokuapp.com/beers").then((res)=>setBeers(res.data))
    }, [])
    console.log("beers", beers)

    const handleChange = (e) => {
        const query = e.target.value;
        axios.get(`https://ih-beers-api2.herokuapp.com/beers/search?q=${query}`).then((res)=>setBeers(res.data))
        console.log("beers query", beers)
    }

    return (
        <div>
            <h1>All beers</h1>
            <input type="text" name="query" onChange={handleChange} placeholder="Search a beer" />
            {
                beers.map((item)=>{
                    return (
                        <div className="card" key={item._id}>
                                <Link to={item._id}><img className="card-img-top" src={item.image_url} alt={item.name} style={style} /></Link>
                                <div className="card-body">
                                    <h5 className="card-title">{item.name}</h5>
                                    <p className="card-text">{item.tagline}</p>
                                    <p>{item.first_brewed}</p>
                                    <Link to={item._id}><button className="btn btn-primary">See details</button></Link>
                                </div>
                        </div>
                    )
                })
            }
        </div>
    )
}
export default AllBeers;


