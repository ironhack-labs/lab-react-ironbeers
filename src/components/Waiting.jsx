import React from 'react';
import styled from '@emotion/styled';

const StyledWaiting = styled.div`
  height: 90%;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  p {
    font-size: 2.5em;
    font-weight: bold;
    padding: 0 1em;
    margin: 0;
  }
  `;

const Waiting = (props) => {
  return (
    <StyledWaiting>
      <img src="/favicon.ico" alt=""/>
      <p>{props.message}</p>
    </StyledWaiting>
  )
}

export default Waiting;
