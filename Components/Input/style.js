import styled from "styled-components";

export const Container = styled.div`
  width: 260px;
  display: flex;
  flex-direction: column;
  label {
    color: var(--light);
    margin-bottom: 12px;
    margin-top: 15px;
  }
  input {
    width: 100%;
    height: 40px;
    background-color: var(--cleanBlack);
    border: 2px solid transparent;
    padding-left: 10px;
    outline: none;
    border-radius: 8px;
    color: var(--light);
    &::placeholder {
      color: var(--light);
      filter: brightness(0.6);
    }
    &:focus {
      background-color: var(--cleanBlack);
      color: var(--lowOrange);
      border: 2px solid var(--light);
      outline: none;
    }
    &:-webkit-autofill,
    &:-webkit-autofill:hover,
    &:-webkit-autofill:focus,
    &:-webkit-autofill:active {
      transition: background-color 5000s ease-in-out 0s;
    }

    &:-webkit-autofill {
      -webkit-text-fill-color: var(--light);
    }

    &:-webkit-autofill:focus {
      -webkit-text-fill-color: var(--orange);
    }
  }
  .error {
    height: 5px;
    font-size: 0.5rem;
    color: var(--orange);
    margin-top: 6px;
    margin-left: 3px;
  }

  @media screen and (min-width: 650px) {
    width: 350px;
    label {
      font-size: 1.4rem;
    }
    input {
      font-size: 1rem;
      height: 45px;
    }
    .error {
      font-size: 0.8rem;
    }
  }
`;
