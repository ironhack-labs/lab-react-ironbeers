import styled from "styled-components";

export const ModuleSectionCol = styled.section`
  display: block;
  width: 100%;
  margin: 20px 0 50px;
  a {
    display: block;
    color: #3e3e3e;
    text-decoration: none;
    opacity: 1;
    transition: all 1s ease;
  }
  &:hover a {
    transition: all 1s ease;
    opacity: 0.6;
  }
  .box-img,
  img {
    width: 100%;
    display: block;
    max-width: 100%;
  }
  h2 {
    font-size: 30px;
    text-align: left;
    margin: 20px 0 10px;
  }
  p {
    font-size: 16px;
    line-height: 22px;
    text-align: justify;
  }
`;
