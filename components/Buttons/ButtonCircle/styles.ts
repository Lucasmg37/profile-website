import styled from 'styled-components';

export const Container = styled.button`
  height: 48px;
  width: 48px;
  border-radius: 50%;
  background: rgba(100,100,100,.7);
  color: #ddd;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  transition: all ease .2s;

  &:hover {
    background: rgba(100,100,100,1);
  }

`;
