import React from 'react'

export default function HomeBox({children, image, title}) {
    return (
        <div className="card">
            <img className='card-image'src={image} alt=""/>
            <h1 className='card-header-title'>{title}</h1>
            <p className='card-content'>{children}</p>
        </div>
    )
}
