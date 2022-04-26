import styled from "styled-components";

export const Card = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  background-color: #fff;
  padding-left: 30px;
  width: 300px;
  height: 250px;
  margin-bottom: 20px;
  border-top-left-radius: 99.6px;
  border-top-right-radius: 5px;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  figure {
    border-top-left-radius: 99.6px;
    border-top-right-radius: 5px;
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;
    overflow: hidden;
  }
  .infos {
    display: flex;
    width: 280px;
    justify-content: space-between;
    flex-direction: row;
    position: absolute;
    top: 215px;
    left: 10px;
    h3 {
      font-size: 28px;
      font-family: "Audiowide", cursive;
      max-width: 270px;
      text-transform: uppercase;
    }
    .price{
        display: flex;
        flex-direction: row;
        height: fit-content;
        align-items: center;
        p{
            font-family: 'Poppins', sans-serif;
        }
    }
  }
`;
