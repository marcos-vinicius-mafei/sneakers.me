import styled from "styled-components";

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  width: 250px;
  height: 400px;
  border-radius: 10px;
  background-color: var(--cleanBlack);
  position: relative;
  figure {
    border: 2px solid transparent;
    width: fit-content;
    height: 230px;
    border-radius: 10px;
    overflow: hidden;
    img {
      pointer-events: none;
    }
  }
  &:hover{
    figure{
      border: 2px solid var(--orange);
    }
  }
  .redirect {
    text-decoration: none;
    color: var(--lowOrange);
    position: absolute;
    z-index: 9000;
    top: 10px;
    right: 10px;
    &:hover{
      color: var(--orange);
    }
    .icons {
      color: var(--lowOrange);
    }
  }
  .infos {
    padding: 10px;
    .name {
      font-size: 20px;
      font-weight: 500;
      font-family: var(--audioWide);
      color: var(--light);
      border-left: 2px solid var(--orange);
      padding-left: 5px;
    }
    .container {
      width: 220px;
      position: absolute;
      left: 50%;
      margin-left: -110px;
      bottom: 10px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      .price {
        color: var(--lowOrange);
      }
      .release {
        background-color: var(--lowOrange);
        padding: 5px;
        border-radius: 10px;
        color: var(--black);
        font-size: 16px;
        font-weight: bold;
        font-family: var(--poppins);
      }
    }
  }
`;
