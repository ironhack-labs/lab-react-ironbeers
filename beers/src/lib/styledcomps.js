import styled from "@emotion/styled";
const Div = styled.div`
 
  width: 30%;
  margin: 30px auto;
  a {
    text-decoration: none;
    color: red;
  }
  p {
    text-align: center;
    font-size: 30px;
    color:red;
    
    
  }

  .box {
    background-image: url(${({ img }) => img});
    background-size: 100% 100%;
    padding: 7vh;
    
  }
`;

const Beersdiv = styled.div`
  height: 80vh;
  width: 50%;
  margin: 0 auto;
  overflow: scroll;
  img {
    height: 100%;
    width: 30px;
  }
`;
export { Div, Beersdiv };
