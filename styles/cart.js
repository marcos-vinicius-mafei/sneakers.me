import styled from "styled-components";

export const Container = styled.div`
  margin-top:100px;
  min-height: calc(100vh - 180px);
  .cartPage--container{
    padding-top:30px;
    padding-bottom:30px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    @media screen and (min-width:768px){
      flex-direction: row;
      align-items: flex-start;
      justify-content: space-around;
    }
  }
`;

