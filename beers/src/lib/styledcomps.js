import styled from "@emotion/styled";
const Div = styled.div`
  img {
    height: 200px;
    width: 300px;
  }
  a {
    text-decoration: none;
    color: red;
  }
  margin: 25px;
`;

const Beersdiv = styled.div`
  height: 80vh;
  width: 50%;
  margin: 0 auto;
  overflow: scroll;
  img{height:100%;
  width:30px;}
`;
export { Div, Beersdiv };
