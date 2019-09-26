import React from 'react'
import ContentLoader from 'react-content-loader'

const CardLoader = () => {
  return (
    <div className='col-12 col-md-4 my-3'>
      <div className='card'>
        <ContentLoader height={510} width={400} speed={1} primaryColor='#f3f3f3' secondaryColor='#ecebeb'>
          <rect x='60' y='30' rx='5' ry='5' width='280' height='280' />
          <rect x='100' y='340' rx='5' ry='5' width='200' height='40' />
          <rect x='60' y='395' rx='5' ry='5' width='280' height='25' />
          <rect x='150' y='435' rx='5' ry='5' width='100' height='45' />
        </ContentLoader>
      </div>
    </div>
  )
}

export default CardLoader
