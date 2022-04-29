import styled from "styled-components";

export const FancyForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  .btn--form {
    margin-top: 20px;
    @media screen and (min-width: 650px) {
      font-size: 20px;
      height: 45px;
      width: 350px;
    }
  }
  .google{
    display: flex;
    gap: 30px;
    align-items: center;
  }
  @media screen and (min-width: 650px) {
    justify-content: center;
    gap: 5px;
  }
`;
