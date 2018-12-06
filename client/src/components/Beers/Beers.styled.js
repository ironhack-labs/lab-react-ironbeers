import styled from 'styled-components';
import { keyframes } from 'styled-components';


const LdsDualRingAnimation = keyframes`
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
`;

export const LdsDualRing = styled.div`
    display: inline-block;
    width: 64px;
    height: 64px;

    &:after {
    content: " ";
    display: block;
    width: 46px;
    height: 46px;
    margin: 1px;
    border-radius: 50%;
    border: 5px solid #fff;
    border-color: #fff black #fff black;
    animation: ${LdsDualRingAnimation} 1.2s linear infinite;
    }
`;

export const BeerWrapper = styled.div`
    display: flex;
    margin: 1rem;
    padding: 1rem;
    border-bottom: 1px solid rgba(0, 0, 0, 0.6);
`;

export const StyledImg = styled.img`
    width: 100px;
    height: 200px;
`;