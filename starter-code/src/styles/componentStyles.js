import styled from "styled-components";

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

export const StyledCardHome = styled.div `

.card{
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
    transition: 0.3s; 
    margin:85px;
}
  .container {
    padding: 2px 16px;
  }
  img{
    width:1110px;
  }
`;

export const StyledCardBeers = styled.div `

.card{
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
    transition: 0.3s; 
    margin:85px;
    display: flex;
  
    img{
        width:100px;
        padding:30px;
      }
}
  .container {
    margin:50px;  
    padding: 30px;
    align-text: center;  
    color: black;
    text-decoration: none; 
  }
  
`;

export const Images = styled.div `
img{
    width:100px;
  }
  `;

  export const StyledCardDetail = styled.div `

  .card{
      box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
      transition: 0.3s; 
      margin:85px;
      img{ 
        display:block;
        margin:auto;
        width:100px;
      }
  }
.container {
      display: flex;
      flex-direction: column;
      padding: 3% 23%;	
      align-items: center;
      justify-content: center;
      width: 600px;
      text-align: center;
      span{
        color: gray;
      }
    }
  `;

  export const FormNew = styled.div `
.container{
    padding:100px;
    display: flex;
    justify-content:center;
    
    

    .col{
      input{
        display: block;
        width: 260px;
        height: 30px;
        margin: 7px;
        font-size: 17px;
        border-radius: 20px;
        background: rgba(0,0,0,0.05);
        border: none;
        transition: background 0.5s;
        
        
        
      }
      
      label{
        padding-left: 8px;
        font-size: 15px;
        color: #444;
      }
      .buy{
        width: 260px;
        height: 50px;
        position: relative;
        display: block;
        margin: 20px auto;
        border-radius: 10px;
        border: none;
        background: #42C2DF;
        color: white;
        font-size: 20px;
        transition: background 0.4s;
        cursor: pointer; 
      }
      
    }
}  

`;

