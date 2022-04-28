import styled from "styled-components";

export const FancyFooter = styled.footer`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 80px;
  background-color: var(--black);
  .wrapper {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 95%;
    max-width: 1366px;
    font-size: 12px;
    .copyright {
      display: none;
    }
    .developer {
      a {
        text-decoration: none;
        color: var(--orange);
      }
    }
  }
  @media screen and (min-width: 500px) {
    .wrapper {
      .copyright {
        display: block;
      }
    }
  }
  @media screen and (min-width: 768px) {
    .wrapper {
      width: 80%;
      font-size: 1rem;
    }
  }
`;
