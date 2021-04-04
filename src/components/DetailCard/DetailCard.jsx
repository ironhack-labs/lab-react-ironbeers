import React from 'react';

const DetailCard = ({image,name,attenuation,tagline,first_brewed,description,contributed_by}) => {
    return (
        <div className='DetailCard'>
            <div className="row px-5 py-5 d-flex  flex-column flex-wrap  align-items-center beer__wrapper" >
                    <div className="col">
                        <img src={image} alt='beer' height='200'/>
                    </div>
                    <div className="col d-flex justify-content-between my-2">
                        <h3>{name}</h3>
                        <h4 className="grey__text">{attenuation}</h4>
                    </div>
                    <div className="col d-flex justify-content-between">    
                        <h6 className="grey__text">{tagline}</h6>
                        <b>{first_brewed}</b>
                    </div>
                    <div className=" left__align col d-flex flex-column align-items-start">
                        <p>{description}</p>
                        <p className="grey__text">{contributed_by}</p>
                    </div>
                </div>
        </div>
    );
};

export default DetailCard;