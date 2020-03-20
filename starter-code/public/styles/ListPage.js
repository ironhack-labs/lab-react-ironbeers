import styled from "styled-components";

export const BeersListItem = styled.li`
  display: block;
  border-bottom: 2px solid #979797;
  padding-bottom: 25px;
  margin-bottom: 25px;
  width: 100%;
  a {
    align-items: center;
    color: #3e3e3e;
    display: flex;
    justify-content: space-evenly;
    opacity: 1;
    text-decoration: none;
    transition: all 1s ease;
    .box-img {
      width: 25%;
      img {
        display: block;
        margin: 0 auto;
        max-height: 260px;
        max-width: 65%;
      }
    }
    .box-contain {
      padding-left: 10px;
      width: 75%;
      h2 {
        color: #000;
        font-family: Arial, Helvetica, sans-serif;
        font-weight: 100;
        font-size: 36px;
      }
      p {
        color: #979797;
        font-size: 22px;
        &.special-p {
          font-size: 16px;
          color: #000;
          font-weight: 700;
          span {
            color: #979797;
            font-weight: 400;
          }
        }
      }
    }
  }
  &:hover a {
    transition: all 1s ease;
    opacity: 0.5;
  }

  @media (max-width: 480px) {
    a {
      flex-flow: column;
      .box-img img {
        max-width: 100%;
      }
      .box-contain {
        padding-left: 10px;
      }
    }
  }
`;
