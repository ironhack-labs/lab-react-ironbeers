
import {Link} from "react-router-dom"

function Beers({beers, callbackToSearch}){

    

    return(
        <div>
        <header>  
            <a href="/">Home</a>
        </header>



        <label>Search
            <input name="search" placeholder="Search beer"
          type="text"
          onChange={(e) => {
            callbackToSearch(e.target.value);
          }} />
        </label>

        {beers.map((beer, index)=>{
            return(
                <div key={index}>
                 <Link to={`/beers/${beer._id}`} style={{color: "black", textDecoration: "none"}}>
                    <div  className="card mb-3" style={{maxWidth:"540px"}}>
                        <div className="row g-0">
                            <div className="col-md-4">
                                <img style={{maxHeight:"150px"}} src={beer.image_url} className="img-fluid rounded-start" alt="..."/>
                            </div>

                            <div className="col-md-8">
                                <div className="card-body">
                                    <h5 className="card-title">{beer.name}</h5>
                                    <p className="card-text">{beer.tagline}</p>
                                    <p className="card-text"><small className="text-muted">Created by: {beer.name}</small></p> 
                                </div>
                            </div>

                        </div>
                                    
                     </div>  
                 </Link> 
                 </div>       
                )
             })}
        </div>    
      )
    }

export default Beers;