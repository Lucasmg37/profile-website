import styled from 'styled-components';

export const Container = styled.div`
  text-align: center;

  > p {
    opacity: .5;
    font-weight: bold;
    letter-spacing: 3px;
    font-size: 14px;
    line-height:28px;
    margin-top: 24px;
  }

  > div {
    display: flex;
    flex-direction: column;
    align-items: center;

    p {
      font-size: 80px;
      font-weight: 900;
      opacity: .1;
      letter-spacing: 8px;
      text-transform: uppercase;
    }

    h1 {
      font-weight: 900;
      font-size: 56px;
      margin-top: -72px;
      color: #fff;

      span {
        background-image: linear-gradient(to right, rgb(0, 241, 255), rgb(0, 173, 255));
        background-clip: text;
        -webkit-background-clip: text;
        color: transparent;
    }

    }

    > div {
      display: flex;
      gap: 12px;
      margin-top: -28px;
      opacity: .5;
    }
  }

`;
