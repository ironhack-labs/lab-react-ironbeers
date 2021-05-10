import styled from 'styled-components';

const SCHome = styled.section`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;

a: visited {
    color: black;
}

article {
    width: 60vw;
    padding-top: 15px;
    padding-bottom: 15px;
    text-align: justify;
}

img {
    width: 60vw;
    height: 40vh;
    object-fit: cover;

}

h2 {
    font-size: 2.5rem;
    padding-top: 10px;
}

p {
    font-size: 1.25rem;
    padding-top: 10px;
}
`

export default SCHome;