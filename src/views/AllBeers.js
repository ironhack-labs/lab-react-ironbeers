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
    
    return (
        <div>
            <h1>All beers</h1>
            {
                beers.map((item)=>{
                    return (
                        <div className="card" key={item._id}>
                            
                                <img className="card-img-top" src={item.image_url} alt={item.name} style={style} />
                                <div className="card-body">
                                    <h5 className="card-title">{item.name}</h5>
                                    <p className="card-text">{item.tagline}</p>
                                    <p>{item.first_brewed}</p>
                                    <Link to={item._id}><button class="btn btn-primary">See details</button></Link>
                                </div>
                            
                        </div>
                    )
                })
            }
        </div>
    )
}
export default AllBeers;


{/* <div class="card" style="width: 18rem;">
  <img class="card-img-top" src=".../100px180/" alt="Card image cap">
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div> */}