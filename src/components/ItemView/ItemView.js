import React from 'react';

//name,tagline,first_brewed,attenuation_level,description,contributed_by
const Itemview = ({item}) => {

        const {image_url,name,tagline,first_brewed,attenuation_level,description,contributed_by} = item
    
    return (
        
        <div id='itemView'>
            <div className='divImg'>
                <img src={image_url} alt="" />
            </div>
            <div className='divDescription'>
                <div className='line0'>
                    <h1>{name}</h1>
                    <h2 className='grey'>{attenuation_level}</h2>
                </div>

                <div className='line0'>
                    <b className='grey'>{tagline}</b>
                    <b>{first_brewed}</b>
                </div>

                <div>
                    <p className='textDescripcion'>{description}</p>
                    <b className='grey'>{contributed_by}</b>
                </div>

            </div>
        </div>
    );
}

export default Itemview;


