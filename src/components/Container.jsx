import React from 'react';
import styled from '@emotion/styled';

const StyledContainer = styled.div`
  height: calc(100% - 3em);
  margin-top: 3em;
`;

const Container = (props) => {
  const {className, children} = props;
  return (
    <StyledContainer className={className}>
      {children}
    </StyledContainer>
  );
}

export default Container;
