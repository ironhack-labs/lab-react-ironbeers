import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Head from "./Head";

const DisplayASingleBeer = ({beers}) => {
    console.log("estou no single", beers)
    const [beer, setBeer] = useState({});
    const { id } = useParams();
    console.log(id);

    useEffect(() => {
        let getBeer = beers.find(eachBeer => eachBeer._id === id);
        setBeer(getBeer);
        
    },[beers, id])

    if (!beer){
        return ''}

console.log("estou no beer", beer)

    return(
        <div>
             <div>
            <Head/>
            </div>
            <div className="display">
            
                <figure className="display-fig">
                <img src={beer.image_url} className="display-img" alt=""/>
                </figure>
              
              <div className="display">
                  <div className="disp-name">
                  <p className="display-name">{beer.name}</p>
                    <p className="display-attenuation">{beer.attenuation_level}</p>
                   
                  </div>
                <div className="disp-tag">
                <p className="display-tagline">{beer.tagline}</p>
                <p className="display-brewed">{beer.first_brewed}</p>
                  </div>
                  <div className="disp-descr">
                  <p className="display-description">{beer.description}</p>
                  <p className="display-created">{beer.contributed_by}</p>
                
                  </div>
                </div>
            </div>
        </div>
    
    )

}
export default DisplayASingleBeer;