import styled from 'styled-components';

export const Container = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  /* background: #333; */
  opacity: .6;
  overflow-y: scroll;
  z-index: 3;

  div {
    height: 4000px;
  }
`;
