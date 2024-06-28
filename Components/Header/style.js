import styled from "styled-components";

export const FancyHeader = styled.header`
  position: fixed;
  top: 0;
  z-index: 9000;
  width: 100%;
  background-color: var(--black);
  display: flex;
  justify-content: center;
  height: 80px;
  @media screen and (min-width: 768px) {
    height: 100px;
  }
  h1 {
    cursor: pointer;
    color: var(--light);
    font-size: 24px;
    a {
      color: var(--orange);
    }
  }
  div.wrapper {
    display: flex;
    width: 80%;
    max-width: 1366px;
    justify-content: space-between;
    align-items: center;
    position: relative;
    div.search--wrapper {
      display: flex;
      align-items: flex-end;
      padding-bottom: 10px;
      padding-left: 13%;
      justify-content: flex-start;
      position: absolute;
      bottom: -25px;
      width: 100vw;
      left: 50%;
      margin-left: -50vw;
      height: 50px;
      background-color: var(--black);
      .search {
        display: flex;
        align-items: center;
        border-bottom: 1px solid var(--light);
        gap: 10px;
        button {
          background-color: transparent;
          border: 0;
        }
        .icon {
          color: var(--light);
          width: 20px;
          height: 20px;
          &:hover {
            color: var(--orange);
          }
        }
        input {
          background-color: transparent;
          border: 0;
          color: var(--lowOrange);
          height: 25px;
          font-size: 15px;
          font-family: var(--poppins);
          width: 150px;
          outline: 0;
          &::placeholder {
            color: var(--light);
            filter: brightness(0.9);
          }
        }
      }
      @media screen and (min-width: 768px) {
        position: static;
        width: fit-content;
        height: fit-content;
        margin-left: -35%;
        padding: 0;
        background-color: transparent;
        .search {
          width: 200px;
          padding-bottom: 2px;
        }
      }
      @media screen and (min-width: 1100px) {
        margin-left: -35vw;
        .search {
          width: 300px;
          padding-bottom: 5px;
          input {
            font-size: 18px;
            width: 90%;
          }
        }
      }
    }
    div.hamburguer {
      position: relative;
      width: 30px;
      height: 15px;
      cursor: pointer;
      color: var(--light);
      &::after {
        position: absolute;
        display: block;
        content: "";
        width: 30px;
        height: 2px;
        background-color: var(--light);
        bottom: ${(props) => (props.menu ? "6.5px" : "0")};
        transform: ${(props) =>
          props.menu ? "rotate(45deg)" : "rotate(0deg)"};
        transition: transform 0.3s;
      }
      &::before {
        position: absolute;
        display: block;
        content: "";
        width: 30px;
        height: 2px;
        background-color: var(--light);
        top: ${(props) => (props.menu ? "6.5px" : "0")};
        transform: ${(props) =>
          props.menu ? "rotate(-45deg)" : "rotate(0deg)"};
        transition: transform 0.3s;
      }
    }
  }
`;
