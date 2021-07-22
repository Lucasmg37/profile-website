import styled from 'styled-components';

export const Container = styled.header`
  padding: 32px 48px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const LogoName = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 24px;
  font-weight: bold;
  color: #fff;

  span {
    /* background-image: linear-gradient(to right, rgb(0, 241, 255), rgb(0, 173, 255));
    background-clip: text;
    -webkit-background-clip: text;
    color: transparent; */
  }
`;
