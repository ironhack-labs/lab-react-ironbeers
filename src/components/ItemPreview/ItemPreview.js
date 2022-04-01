import React from 'react'

export default function ItemPreview({image_url,name,tagline,contributed_by}) {
  return (
    <div id='ItemPreview'>
        <div className='imgDiv'>
            <img src={image_url} alt={name} />
        </div>
        <div className='description'>
            <h3>{name}</h3>
            <h4 className='grey'>{tagline}</h4>
            <p><b>Created By :</b>{contributed_by}</p>
        </div>
    </div>
  )
}
