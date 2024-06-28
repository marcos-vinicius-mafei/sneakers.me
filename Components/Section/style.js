import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  .brand--infos {
    padding: 5px;
    margin-left: 20px;
    border-radius: 10px;
    display: flex;
    align-items: center;
    gap: 30px;
    width: fit-content;
    h1 {
      font-size: 40px;
      font-weight: 500;
      font-family: var(--audioWide);
    }
    img {
      max-height: 100px;
      width: 100px;
    }
    @media screen and (min-width: 768px) {
      margin-left: 50px;
      h1 {
        font-size: 40px;
      }
    }
    @media screen and (min-width: 1000px) {
      margin-left: 100px;
      h1 {
        font-size: 45px;
      }
    }
  }
`;
