import styled from 'styled-components';

export const Container = styled.div`
  display: inline-flex;
  flex-direction: column;
  gap: 32px;
  align-items: center;
  height: 100%;
  max-height: 400px;
  margin: auto 0;

  div {
    font-size: 20px;
    height: 48px;
    width: 48px;
    border: 1px solid rgba(255,255,255,.5);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;
    font-weight: 400;
  }

  span {
    flex: 1;
    width: 2px;
    background: rgba(255,255,255,.5);
    display: flex;
    border-radius: 8px;
  }

`;
