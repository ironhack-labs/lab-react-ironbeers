import React from 'react'
import styled from 'styled-components'

const StyledRow = styled.span`

  font-size: .5rem;
  width: auto;
  height: auto;
  color: black;
  padding: 5px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
   img {
    width: 20vh;
    height: 35vh
  }
  
`

function Row(props) {
  return (
    <StyledRow>
      <h2>{props.label}</h2>
      {props.children}
    </StyledRow>
  )
}

export default Row
