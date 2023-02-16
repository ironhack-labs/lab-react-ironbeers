
import './DetailCardBeer.css'

const DetailCardBeer = (props) => {
    return(
        <div className="container-detailBeer">
            <div className="img-container">
                <img src={props.image_url} alt="img-detail" />
            </div>
            <div className="div-detail ">
                <div className="detail">
                    <h1>{props.name}</h1>
                    <h2><strong>{props.attenuation_level}</strong></h2>
                </div>
                <div className="detail">
                    <h2>{props.tagline}</h2>
                    <h4>{props.first_brewed}</h4>
                </div>
            </div>
            <div className='description-beer'>
                <div className="div-description">
                    <p><strong>{props.description}</strong></p>
                    <p className='contributed'>{props.contributed_by}</p>
                </div>
            </div>
        </div>
    );
};


export default DetailCardBeer;