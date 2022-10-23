import { useParams } from "react-router-dom";

function BeerDetails({beers}){

    const {id} = useParams();

    const beerDetail = beers.find((beer)=>{
        return beer._id == id;
    })

    return(

        <div>
        <header>
            <a href="/beers">Back</a>
        </header>
    
            <div className="" style={{maxWidth:"540px"}}>
                <div className="">
                    <div className="">
                        <img style={{maxHeight:"250px"}} src={beerDetail.image_url} className="" alt="..."/>
                    </div>

                    <div className="">
                        <div className="card-body">
                            <h5 className="card-title">{beerDetail.name}</h5>
                            <p className="card-text">{beerDetail.tagline}</p>
                            <p className="card-text">{beerDetail.first_brewed}</p>
                            <p className="card-text">{beerDetail.attenuation_level}</p>
                            <p className="card-text">{beerDetail.description}</p>
                            <p className="card-text"><small className="text-muted">{beerDetail.contributed_by}</small></p> 
                        </div>
                    </div>

                </div>
                            
                </div>  
               
        </div>    

    )
    }

export default BeerDetails;