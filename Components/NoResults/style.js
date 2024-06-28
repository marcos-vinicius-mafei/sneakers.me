import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  align-items: center;
  justify-content: center;
  min-height: calc(100vh - 180px);
  padding: 0px 15px 0px 15px;
  h2 {
    font-family: var(--audioWide);
    text-transform: uppercase;
    a {
      color: var(--orange);
    }
  }
  figure {
    width: 300px;
    height: 300px;
    position: relative;
  }
  @media screen and (min-width: 768px) {
    h2 {
      font-size: 30px;
    }
    p {
      font-size: 20px;
    }
    figure {
      width: 350px;
      height: 350px;
    }
  }
  @media screen and (min-width: 1000px) {
    gap: 80px;
    h2 {
      font-size: 35px;
    }
    p {
      font-size: 24px;
    }
    figure {
      width: 400px;
      height: 400px;
    }
  }
`;
