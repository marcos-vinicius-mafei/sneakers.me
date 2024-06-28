import styled from "styled-components";

export const SneakerPage = styled.div`
  min-height: calc(100vh - 180px);
  margin-top: 100px;
  margin-bottom: 50px;
  @media screen and (min-width: 900px) {
    margin-bottom: 0;
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: calc(100vh -180px);
  justify-content: center;
  gap: 30px;
  .image--container {
    background-color: var(--white);
    display: flex;
    align-items: center;
    justify-content: center;
    height: 300px;
    width: 100%;
    overflow: hidden;
  }
  .product--infos {
    display: flex;
    flex-direction: column;
    gap: 20px;
    padding: 20px;
    .description--container {
      display: flex;
      flex-direction: column;
      gap: 10px;
    }
    h1 {
      font-weight: 500;
      font-family: var(--audioWide);
      font-size: 30px;
    }
    h1.description {
      color: var(--lowOrange);
    }
    p {
      color: var(--lowGrey);
    }
    a {
      color: var(--orange);
    }
    .cart {
      display: flex;
      align-items: center;
      gap: 10px;
      button {
        display: flex;
        align-items: center;
        justify-content: center;
        color: var(--light);
        font-family: var(--poppins);
        font-size: 15px;
        border: 0;
        background-color: var(--orange);
        width: 120px;
        height: 40px;
      }
    }
  }
  @media screen and (min-width: 900px) {
    flex-direction: row-reverse;
    justify-content: space-between;
    align-items: center;
    gap: 0px;
    .product--infos {
      width: 50%;
      height: calc(100vh - 180px);
      overflow-y: scroll;
    }
    .image--container {
      width: 50%;
      height: calc(100vh - 180px);
    }
  }
  @media screen and (min-width: 1200px) {
    .product--infos {
      padding: 100px 30px;
      justify-content: space-evenly;
      h1 {
        font-size: 40px;
      }
      .cart {
        font-size: 24px;
        button {
          font-size: 20px;
          width: 150px;
          height: 50px;
        }
      }
    }
  }
  @media screen and (min-width: 1300px) {
    .product--infos {
      h1:not(.description) {
        font-size: 45px;
      }
    }
  }
`;
