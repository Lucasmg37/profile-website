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
      font-weight: 700;
      opacity: .1;
      letter-spacing: 8px;
      text-transform: uppercase;
    }

    h1 {
      font-weight: normal;
      font-size: 56px;
      margin-top: -72px;
    }

    > div {
      display: flex;
      gap: 12px;
      margin-top: -28px;
      opacity: .5;
    }
  }

`;
