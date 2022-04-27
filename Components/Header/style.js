import styled from "styled-components";

export const FancyHeader = styled.header`
  position: fixed;
  top: 0;
  z-index: 99999;
  width: 100%;
  background-color: var(--black);
  display: flex;
  justify-content: center;
  height: 80px;
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
