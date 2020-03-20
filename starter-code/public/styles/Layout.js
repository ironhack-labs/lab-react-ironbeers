import styled from "styled-components";

export const ContainerSection = styled.section`
  display: block;
  margin: 0 auto;
  max-width: 768px;
  padding: 0 10px;
  width: 100%;
  h1 {
    color: #3c3c3c;
    font-size: 32px;
    text-align: center;
  }
  @media (max-width: 480px) {
    padding: 0 20px;
  }
`;

export const FooterSection = styled.header`
  align-content: center;
  background: #3e3e3e;
  display: flex;
  justify-content: center;
  padding: 12px 5px;
  width: 100%;
  p {
    margin: 0;
    padding: 0;
    color: #fff;
    font-size: 16px;
  }
`;

export const HeaderSection = styled.header`
  align-content: center;
  background: #3cc4fc;
  display: flex;
  justify-content: center;
  padding: 20px;
  width: 100%;
  i {
    color: #fff;
    font-size: 40px;
  }
`;
