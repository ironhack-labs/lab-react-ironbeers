import React from 'react';

const DetailCard = ({data}) => {
    return (
        <div className='DetailCard'>
            <div className="row px-5 py-5 d-flex  flex-column flex-wrap  align-items-center beer__wrapper" >
                    <div className="col">
                        <img src={data.image_url} alt='beer' height='200'/>
                    </div>
                    <div className="col d-flex justify-content-between my-2">
                        <h3>{data.name}</h3>
                        <h4 className="grey__text">{data.attenuation}</h4>
                    </div>
                    <div className="col d-flex justify-content-between">    
                        <h6 className="grey__text">{data.tagline}</h6>
                        <b>{data.first_brewed}</b>
                    </div>
                    <div className=" left__align col d-flex flex-column align-items-start">
                        <p>{data.description}</p>
                        <p className="grey__text">{data.contributed_by}</p>
                    </div>
                </div>
        </div>
    );
};

export default DetailCard;