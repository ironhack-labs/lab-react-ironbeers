import styled from 'styled-components';

export const HeaderWrapper = styled.div`
    width: 100vw;
    height: 50px;
    margin: 0 0 0.5rem 0;
    padding: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.3);
    background: rgb(150, 220, 255);
    transition: ease-in 0.25s;
    
    &:active {
        background: rgb(130, 200, 235);
        transition: ease-out 0.25s;
    }
`;

export const StyledImg = styled.img`
    width: 40px;
    filter: invert(100%)
`;