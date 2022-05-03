import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
  h2 {
    text-transform: uppercase;
    font-size: 30px;
    .icon{
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
  @media screen and (min-width: 1000px) {
    h2{
      font-size: 35px;
    }
  }
`;
