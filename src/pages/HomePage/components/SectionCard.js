import React from 'react';
import './SectionCard.css'

function SectionCard(props) {
        return (
                <div className='section-card'>
                        <img src={props.img} />
                        <div>
                                <h1>{props.heading}</h1>
                                <p>{props.description}</p>
                        </div>

                </div>
        )
}

export default SectionCard
