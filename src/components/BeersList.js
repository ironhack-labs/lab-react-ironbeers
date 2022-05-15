import { NavLink } from "react-router-dom";


function BeersList(props) {

 
    return (
        
    <>
        <header>
        <NavLink to="/">Home</NavLink> <br/>
        </header>
        <br/>
        <br/>
       <div>
       {props.beersList.map( (element) => {
       
                return (
                    
                    <div className="beers-list">
                        <h1>{element.name}</h1>

                        <img src={element.image_url} alt={element.title} /><br />
                        <h3>Tagline : {element.tagline}</h3>

                        <p>Created by: {element.contributed_by} </p>

                        <button>
                        <NavLink to={`/beers/${element._id}`}>More Details</NavLink>
                        
                        </button>
                        <br />
                        <br />
                        <br />
                        <br />
                    </div>

                    
                )
                
            }) }
            </div> 




    </>
            
        
    );

    
}

export default BeersList;