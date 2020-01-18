import React from 'react';

export default function Beer(props){
    return (
        <div>
            <div>
                {props.image} 
            </div>
            <div>
                {props.name} {props.attenuation_level} 
                {/* className="number" */}
            </div> 
            <div>
                {props.tagline} {props.first_brewed}
            </div> 
            <div>
                {props.description} 
                {props.contributed_by}
            </div>
        </div>
    );
}

