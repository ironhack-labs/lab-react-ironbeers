import './CardBeer.css'



const CardBeer = (props) => {
    console.log(props)
    return(
        <div className='container'>
            <div className='content-cardBeer'>
                <div className='img-cardBeer'>
                    <img src={props.image_url} alt="imgBeer" />
                </div>
                <div className='info-cardBeer'>
                    <h1>{props.name}</h1>
                    <h2>{props.tagline}</h2>
                    <h3><strong>Created by: </strong>{props.contributed_by}</h3>
                </div>
            </div>
        </div>
    );
};


export default CardBeer;