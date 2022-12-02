import { useParams }  from "react-router-dom";

function SingleBeerPage({ beers, setShowNav }) {
    setShowNav(true);
    const { beerId } = useParams();
    const foundBeer = beers.find((singleBeer) => {
        //console.log("Single beer: ", singleBeer._id)
        return singleBeer._id === beerId
    });
    
     return (
        foundBeer &&  
        <div className="card">
            <img 
                className="card-img-top" 
                src={ foundBeer.image_url } 
                alt={ foundBeer.name }
            />
            <div className="card-body">
                <h5 className="card-title">{ foundBeer.name }</h5>
                <h6 className="card-subtitle mb-2 text-muted">{ foundBeer.tagline }</h6>
                <h6 className="card-subtitle mb-2 text-muted">{ foundBeer.first_brewed }</h6>
                <h6 className="card-subtitle mb-2 text-muted">{ foundBeer.attenuation_level }</h6>
                <p className="card-text">{ foundBeer.description }</p>
                <footer className="blockquote-footer">{ foundBeer.contributed_by }</footer>
            </div>
        </div>
    ) 
;}

export default SingleBeerPage;