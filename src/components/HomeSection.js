import { Link } from 'react-router-dom'

function HomeSection ({img, heading, btnText}) {
    return(
        <div className="all-beers">
            <img src={img} alt='all-beers-banner'></img>
            <h2>{heading}</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam suscipit lorem nec diam ultrices, non consectetur erat eleifend. Vestibulum finibus finibus tortor ut tempor. Nam ut maximus augue. Duis varius nibh a convallis ultrices. </p>
            <div className="all-beers-btn">
                <Link to={`/beer`}><button>{btnText}</button></Link>
            </div>
        </div>
    );
};

export default HomeSection;