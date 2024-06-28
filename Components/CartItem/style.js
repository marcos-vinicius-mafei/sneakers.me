import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  padding: 5px;
  width: 300px;
  height: 200px;
  border: 2px solid var(--orange);
  border-radius: 10px;
  a {
    color: var(--light);
    &:hover {
      color: var(--lowOrange);
    }
  }
  .img--url {
    width: 50%;
    height: 85%;
    position: relative;
    figure {
      width: 100%;
      height: 100%;
      background-color: var(--white);
      border-radius: 10px;
    }
  }
  .product--infos {
    width: 40%;
    height: 85%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    h3.product--name {
      font-size: 15px;
      max-height: 80px;
      overflow: hidden;
    }
    h4.product--quantity {
      font-size: 13px;
      color: var(--orange);
    }
    .infos--container {
      display: flex;
      align-items: center;
      justify-content: space-between;
      .quantity--controller {
        display: flex;
        align-items: center;
        gap: 8px;
        button {
          display: flex;
          align-items: center;
          justify-content: center;
          background: transparent;
          border: 0;
          .icons {
            width: 15px;
            height: 15px;
            color: var(--orange);
            &:hover {
              color: var(--light);
            }
          }
        }
      }
      h3.product--price {
        font-size: 17px;
        a {
          color: var(--orange);
        }
      }
    }
  }
  @media screen and (min-width: 1000px) {
    width: 400px;
    height: 220px;
    .product--infos {
      h3.product--name {
        font-size: 18px;
      }
      h4.product--quantity {
        font-size: 15px;
      }
      .infos--container {
        .quantity--controller {
          gap: 15px;
          button {
            .icons {
              width: 18px;
              height: 18px;
            }
          }
        }
        h3.product--price {
          font-size: 20px;
        }
      }
    }
  }
`;
