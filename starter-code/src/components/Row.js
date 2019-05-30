import React from 'react'

const Row = (props) => {
  // console.log(props)
  return (
  <div className='p-clearfix'>
    <img
      alt={props.name}
      src={props.image_url}
      style={{ display: 'inline-block', margin: '5px 0 0 5px', width: 48 }}
    />
    <span
      style={{ fontSize: '1em', float: 'right', margin: '1em .5em 0 0' }}
    >
      {props.name}
    </span>
  </div>
)}

export default Row