function Beer ({beerIMG, name, description, creator}) {

    return(
        <div>
            <div className='beer-container'>
                <div className="beer-img">
                    <img src={beerIMG} alt='beer'></img>
                </div>
                <div className="beer-description">
                    <h2>{name}</h2>
                    <p>{description}</p>
                    <p className="beer-creator">Created by: {creator}</p>
                </div>    
            </div>
            <hr></hr>
        </div>
    );
};

export default Beer;