import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  background-image: url("/assets/images/background.png");
  background-repeat: repeat;
  background-size: fill;
  padding-top: 10px;
  height: 450px;
  border-bottom: 2px solid var(--black);
  .circle {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 250px;
    height: 250px;
    background-color: var(--softBlack);
    border-radius: 50%;
    .sneaker {
      width: 180px;
      transform: rotate(25deg);
    }
  }
  .promote {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    gap: 15px;
    width: 250px;
    bottom: -120px;
    left: 0;
    font-family: var(--audioWide);
    h1 {
      font-size: 24px;
      font-weight: 500;
      text-transform: uppercase;
      a{
          color: var(--black);
      }
    }
    div {
      cursor: pointer;
      display: flex;
      align-items: center;
      padding-left: 30px;
      gap: 20px;
      color: var(--orange);
      background-color: var(--black);
      border-radius: 5px;
      position: relative;
      height: 40px;
      width: 180px;
      &:hover {
        .icon {
          right: 10px;
          transition: right 0.6s;
        }
      }
      .icon {
        transition: right 0.6s;
        position: absolute;
        width: 20px;
        height: 20px;
        color: var(--light);
        right: 25px;
      }
    }
  }
  @media screen and (min-width: 768px) {
    padding-top:0;
    flex-direction: row;
    justify-content: space-around;
    align-items:center;
    .circle {
      width: 300px;
      height: 300px;
      .sneaker {
        width: 250px;
      }
    }
    .promote{
        width: 290px;
        h1{
            font-size: 28px;
        }
    }
  }
  @media screen and (min-width: 900px) {
    height: 500px;
    .circle {
      width: 400px;
      height: 400px;
      .sneaker {
        width: 350px;
      }
    }
    .promote{
        width: 360px;
        gap: 50px;
        h1{
            font-size: 60px;
        }
        div{
            font-size: 18px;
            height: 45px;
            width: 200px;
            .icon{
                width: 30px;
                height: 30px;
            }
        }
    }
  }
  @media screen and (min-width: 1200px) {
    .promote{
        width: 460px;
        h1{
            font-size: 70px;
            line-height: 80px;
        }
        div{
            font-size: 23px;
            height: 50px;
            width: 220px;
            .icon{
                width: 30px;
                height: 30px;
            }
        }
    }
  }
`;
