import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
  h2 {
    text-transform: uppercase;
    font-size: 30px;
    .icon {
      color: var(--orange);
      margin-bottom: -3px;
    }
  }
  ul {
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: 25px;
  }
  .empty--cart {
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 10px;
    border: 2px solid var(--orange);
    width: 250px;
    height: 250px;
    background-color: var(--cleanBlack);
    div {
      display: flex;
      flex-direction: column;
      gap: 20px;
      align-items: center;
      text-align: center;
      .shoe--icon {
        width: 50px;
        height: 50px;
        color: var(--orange);
      }
      button {
        border: 0;
        border-radius: 5px;
        background-color: var(--orange);
        color: var(--light);
        height: 30px;
        width: 100px;
        font-family: var(--poppins);
        font-size: 15px;
      }
    }
    @media screen and (min-width: 700px) {
      width: 350px;
      height: 350px;
      padding-left: 40px;
      padding-right: 40px;
      div{
        gap: 35px;
        .shoe--icon {
          width: 60px;
          height: 60px;
        }
        button{
          height: 40px;
          width: 150px;
          font-size: 20px;
        }
      }
    }
  }
  @media screen and (min-width: 1000px) {
    h2 {
      font-size: 35px;
    }
  }
`;
