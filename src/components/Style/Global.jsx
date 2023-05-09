import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  :root{
    --red: #E52E4D;
    --blue: #5429CC;
    --green: #33CC95;
    --blue-light: #6933FF;

    --text-title: #363F5F;
    --text-body: #969CB3;

    --background: #f8f2f5;
    --shape: #FFFFFF;
    
  }
  
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  // font-size: 16px (Desktop) é a padrão para Desktop
  html{
    @media (max-width: 1080px) {
      font-size: 93.75%; // 15px
    }
    
    @media (max-width: 720px) {
      font-size: 87.5%; // 14px
    }
  

  body{
    background: var(--background);
    -webkit-font-smoothing: antialiased;
   
  }


  body, input, textarea, button {
    font-family: 'Poppins', sans-serif;
    font-weight: 100;
    font-size: 20px;
    margin:1rem;
    
  }

  input {
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
    font-size: 1rem
  }

p{
  opacity: 0.6; 
  color: white; text-shadow: #00000060 0.1em 0.1em 0.2em;
  filter: saturate(30%) invert(50%); 
  text-align: justify
}

    
  h1, h6, strong {
    font-weight: 600;
    color: var(--text-title);
    background: var(--background);
    text-align: center
  }

  h2, strong {
    font-weight: 600;
    color: var(--text-title);
    background: var(--background);
    padding: 1.5rem;
  }

  h3,  strong {
    font-weight: 600;
    color: var(--text-title);
    text-align: justify;
    padding: 0.5rem;
    
  }

  h4,  strong {
    font-weight: 600;
    color: red;
    text-align: justify;
    padding: 0.5rem;
    font-size: 5rem;

  }

  h5,  strong {
    font-weight: 600;
    color: red;
    text-align: justify;
    padding: 0.5rem;
    font-size: 2rem;

  }

  button {
    font-size: 1rem;
    color: #fff;
    background: var(--blue-light);
    border: 0;
    margin: 1rem;
    padding: 0 4rem;
    border-radius: 0.65rem;
    height: 3rem;

    transition: filter 0.2s;

    &:hover {
      filter: brightness(0.9);
    }
  }


   /* Estilos do Modal */
   .react-modal-overlay {
     background: rgba(0,0,0,0.5);

     position: fixed;
     top: 0;
     bottom: 0;
     right: 0;
     left: 0;

     display: flex;
     align-items: center;
     justify-content: center;
   }

   .react-modal-content {
     width: 100%;
     max-width: 576px;
     background: var(--background);
     padding: 3rem;
     position: relative;
     border-radius: 0.24rem;
   }
   
   .react-modal-close {
     position: absolute;
     right: 1.5rem;
     top: 1.5rem;
     border: 0;
     background: transparent;

    transition: filter 0.2s;

    &:hover {
      filter: brightness(0.9);
    }

   }


   .divStyle  {
  font-weight: 100;
    color: var(--text-title);
    background: var(--background);
    text-align: justify
  
  }

  div {
  
    margin-top: -1rem;
    padding: 1rem;
    color: var(--text-title);
    font-weight: 200px;
    
  


    header {
      display: b;
      align-items: center;
      justify-content: space-between;
      
    }

    strong {
        display: block; 
        margin-top: 1rem;
        font-size: 2rem;
        font-weight: 500;
        line-height: 3rem;
    }
&.highlight-background{
    background: var(--green);
    color: #fff;
}

  }


  #Formulary
{  text-align: justify;
    font-weight: 500px;
    font-size: 1.5rem;
    box-sizing: border-box;
    display: block;
  
    
  }



.navBar {
  background-color: rgb(31, 129, 194);
  

.homeIcon {
  width: 4vw;
}

////
////
////
body, h1, h2, ul, li, p, dd, dt, dl {
  margin: 0px;
  padding: 0px;
}


  img {
    display: block;
    max-width: 10%;
   
             maxHeight: '10vh',
             overflowX: 'none',
             overflowY: 'scroll',
          


ul {
  list-style: none;
}

/* body {
  background: #faf6ed;
  color: #222;
  -webkit-font-smoothing: antialiased;
  max-width:20%;
	height:auto;
} */

.grid-container {
  display: grid;
  grid-template-columns: 1fr 120px minmax(300px, 800px) 1fr;
}

.menu {
  grid-column: 3 / 5;
  margin-top: 2rem;
  margin-bottom: 2rem;
  background: #FB5;
}

.menu ul {
  display: flex;
  flex-wrap: wrap;
  padding: 10px;
}

.menu li a {
  display: block;
  padding: 10px;
  margin-right: 10px;
  color: #222;
  text-decoration: none;
  font-family: 'IBM Plex Mono', monospace;
  font-weight: bold;
  text-transform: uppercase;
  font-size: 0.875rem;
  letter-spacing: .1em;
}

.grid-section {
  grid-column: 2 / 4;
  width: 100%;
  box-sizing: border-box;
  padding: 10px;
  display: grid;
  grid-template-columns: 90px 300px 1fr;
  grid-gap: 20px;
  margin-bottom: 4rem;
  
}

.titulo {
  font-family: 'Playfair Display SC', georgia;
  font-size: 6rem;
  line-height: 1;
  font-weight: 400;
  margin-bottom: 1rem;
  grid-column: 1 / 4;
}


.dados {
  grid-column: 3;
}

.dados li {
  margin-bottom: 1rem;
  font-family: Helvetica, Arial;
}

.dados li::before {
  content: '';
  display: inline-block;
  width: 20px;
  height: 10px;
  margin-right: 10px;
  background: #FB5;
}

.copy {
  grid-column: 3/5;
  margin-bottom: 2rem;
  background: #FB5;
}

.copy p {
  padding: 20px;
  font-family: 'IBM Plex Mono', monospace;
  font-weight: bold;
}

.js [data-tab="content"] section {
  display: none;
  
}

[data-tab="content"] section.ativo {
  display: block !important;
  
}

[data-tab="content"] section.ativo.show-right {
  animation: show-right .5s forwards;
  
}

[data-tab="content"] section.ativo.show-down {
  animation: show-down .5s forwards;
}



.js [data-anime="accordion"] dd {
  display: none;
}

[data-anime="accordion"] dt::after {
  content: '⬎';
  margin-left: 10px;
}

[data-anime="accordion"] dt.ativo::after {
  content: '⬏';
}

[data-anime="accordion"] dd.ativo {
  display: block;
  animation: slideDown .5s forwards;
}


.js [data-anime="scroll"] {
  opacity: 0;
  transform: translate3d(-30px, 0, 0);
  transition: .3s;
}

.js [data-anime="scroll"].ativo {
  opacity: 1;
  transform: translate3d(0, 0, 0);
}

[data-semana]::after {
  display: inline-block;
  content: '';
  width: 6px;
  height: 6px;
  background: #E54;
  border-radius: 50%;
  margin-left: 4px;
  border: 2px solid #000;
}

[data-semana].aberto::after {
  background: #3F4;
}

.btc-preco {
  background: #3F4;
  padding: .2rem .5rem;
  font-weight: bold;
  border-radius: 2px;  
}

}

.custom-controls {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  grid-column: 1 / -1;
}

.custom-controls li {
  opacity: .8;
  transform: scale(.8);
  width: 40px;
  height: 40px;
  border-radius: 50%;
  overflow: hidden;
  margin: 2px;
  box-shadow: 0 2px 2px rgba(0,0,0,.5);
  transition: .3s;
}

.custom-controls li.active {
  opacity: 1;
  transform: scale(1);
}


`;
