import styled from 'styled-components';

export const Container = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  height: 100%;
  flex-direction: column;
  margin: auto;
  overflow: auto;

  &::-webkit-scrollbar {
    width: 0px;
  }
  &::-webkit-scrollbar-track {
    background:rgba(255,255,255, .2);
    border-radius: 16px;
  }
  &::-webkit-scrollbar-thumb {
    background: rgba(255,255,255, .2);
    outline: 0px;
    border-radius: 16px;
  }

`;
