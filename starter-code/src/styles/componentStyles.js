import styled from "styled-components";

//Navbar
export const StyledNavbar = styled.nav `
  width: 100vw;
  height: 80px;
  background-color: #32C3FF;
  color: #f2f2f2;
  position: fixed;
  display: flex;
  justify-content: center;
  padding: 0 1rem;
  align-items: center;
  top: 0;
`;

export const StyledCard = styled.div `
	width: 400px;
	height: 300px;
	border-radius: 10px;
	height: 300;
	border: solid black 1px;
  display: flex;
  justify-content: center;
  align-items: center;
  h2{
    color: black;
    align-text: center;
  }
`;

export const CardContainer = styled.div `
	display: flex;
	padding: 9% 10%;	
	justify-content: space-between;
`;
export const BeersContainer = styled.div `
	display: flex;
	padding: 2% 10%;	
  img{
    width:100px;
    padding: 0 10px;
  }
`;

export const TextBeerContainer = styled.div `
	a{
    color: #000;
    text-decoration: none;
  }
  a:visited {
    color: #000;
  }
  h2, h4, p{
    color: #000;
  }
`;

export const IndividualBeer = styled.div `
	display: flex;
  flex-direction: column;
	padding: 6% 10%;	
  align-items: center;
  justify-content: center;
  width: 600px;
  text-align: center;
  img{
    width:100px;
    padding: 0 10px;
  }
  span{
    color: gray;
  }
`;

export const FormContainer = styled.div `
	display: flex;
	padding: 9% 20%;	
  flex-direction: column;
	justify-content: space-between;
  input{
    padding: 8px;
    border-shadow: none;
    border: 1px solig white;
    border-radius: 10px;
    font-size: 1.2rem;
  }
  
  button{
    padding: 14px;
    background-color: salmon;
    color: white;
    font-size: 2rem;
    border-radius: 20px;
  }
  label{
    color: gray;
  }
`;

