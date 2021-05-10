import styled from 'styled-components';

const SCNewBeerForm = styled.form`
input, textarea {
    width: 30%;
    padding: 8px;
    border-radius: 5px;
}

.form-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 15px;
}

label {
    font-size: 1.15rem;
    padding-bottom: 5px;
}

button {
    background-color: rgb(108, 212, 252);
    padding: 10px;
    margin-top: 10px;
    width: 30%;
    border-radius: 5px;
    font-size: 1.5rem;
}
`

export default SCNewBeerForm;