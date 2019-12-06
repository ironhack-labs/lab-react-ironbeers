import styled from "styled-components";

//Navbar
export const StyledNavbar = styled.nav`
  width: 100vw;
  height: 80px;
  background-color: #3dc4fc;
  color: white;
  position: fixed;
  display: flex;
  justify-content: space-between;
  padding: 0 1rem;
  align-items: center;
  top: 0;
  h1 {
    margin: 0;
  }
`;

//MenuCards
export const MenuCards = styled.div`
 width: 90%;
 margin: 5% auto;
 box-sizing: border-box;
 border-radius: 10px;
 -webkit-box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.25);
 -moz-box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.25);
 box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.25);
 a {
    color: #f2f2f2;
    text-decoration: none;
  }
  a:visited {
    color: #f2f2f2;
  }
 & img {
   width:100%;
   border-radius: 10px 10px 0px 0px;
 };
 & article {
   padding: 2% 4%;
   box-sizing: border-box;
   h3 {
     color: black;
   };
   p {
     color: grey;
   }
 };
 a {
    text-decoration: none;
  }
`;

//BeerCards
export const BeerCards = styled.div`
  width: 100%;
  padding: 2% 4%;
  box-sizing: border-box; 
`;

//BeerDetails
export const BeerDetail = styled.div`
  width: 100%;
`;

//StyledForm
export const StyledForm = styled.form`
  width: 100%;
`;