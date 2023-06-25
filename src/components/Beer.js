import './Beer.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const Beer = ({random}) => {

    const baseUrl = "https://ih-beers-api2.herokuapp.com/beers";
    const [beer, setBeer] = useState({});
    const {beerId} = useParams();

    // no more <React.StrictMode> with the random route, because the page can be refresh, and user will the the component rendered twice
    // https://stackoverflow.com/questions/72489140/react-18-strict-mode-causing-component-to-render-twice/72489175#72489175
    // https://legacy.reactjs.org/docs/strict-mode.html#ensuring-reusable-state
    // React StrictMode calls all Effects twice to make sure their cleanup/unmount handlers work as intended
    // https://stackoverflow.com/questions/61254372/my-react-component-is-rendering-twice-because-of-strict-mode/61897567#61897567
    // (on dev but not production)
    // https://stackoverflow.com/questions/61254372/my-react-component-is-rendering-twice-because-of-strict-mode/61254432#61254432
    // Strict mode can't automatically detect side effects for you, but it can help you spot them by making them a little more deterministic. This is done by intentionally double-invoking the following functions: Class component constructor , render , and shouldComponentUpdate methods.
    // https://legacy.reactjs.org/docs/strict-mode.html#detecting-unexpected-side-effects

    useEffect(() => {
        axios
            .get(!random 
                ? `${baseUrl}/${beerId}`
                : `${baseUrl}/random`
                )
            .then(response => {
                setBeer(response.data);
            })
            .catch(e => console.log(e))
    }, [])

    return <div className="Beer">
        <img src={beer.image_url} alt={beer.name} style={{height: "300px"}}></img>
        <h2>{beer.name}</h2>
        <h3>{beer.tagline}</h3>
        <h4>{beer.attenuation_level}</h4>
        <h5>{beer.first_brewed}</h5>
        <p>{beer.description}</p>
        <p>{beer.contributed_by}</p>

    </div>
}

export default Beer;