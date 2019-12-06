import styled from "styled-components";

//Navbar
export const StyledNavbar = styled.nav`
  width: 100vw;
  height: 80px;
  background-color: #3dc4fc;
  color: #FFF;
  position: fixed;
  display: flex;
  justify-content: space-between;
  padding: 0 1rem;
  align-items: center;
  top: 0;
 
`;

export const StyledMenuCard = styled.div`
  width: 40%;
 margin: 5% auto;
 box-sizing: border-box;
 border-radius: 10px;
 -webkit-box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.25);
 -moz-box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.25);
 box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.25);
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
    text-decoration: none;
     color: black;
   }
 }
 a {
    color: red;
    text-decoration: none;
  }
  a:visited {
    color: red;
  }
`;

export const StyledCards = styled.div`
  width: 40%;
 margin: 5% auto;
 box-sizing: border-box;
 border-radius: 10px;
 -webkit-box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.25);
 -moz-box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.25);
 box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.25);
 & img {
   width:100%;
   border-radius: 10px 10px 0px 0px;
 };
 a {
    color: red;
    text-decoration: none;
  }
  a:visited {
    color: red;
  }
`;

export const FormAdd = styled.form`
  input {
    border: 1px solid gray;
    border-radius: 12px;
    width: 30%;
  }
  button {
    width: 30%;
  }
  display: flex;
  flex-direction: column;
  margin-top: 5vh;
  align-content: center;

`;