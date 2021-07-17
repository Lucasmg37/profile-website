import styled from 'styled-components';

export const Container = styled.div`
  height: 100%;
  width: 100%;
  overflow: hidden;
  color: #fff;

  > main {
    background: #111;
    display: flex;
    flex-direction: column;
    height: 100%;

    > div {
      height: 100%;
      display: flex;
      align-items: center;
      padding: 0px 68px;
      justify-content: space-between;
      gap: 32px;
        overflow: hidden;
      mask-image: linear-gradient(to bottom, transparent 0%, black 10%, black 90%, transparent 100%);
    }

  }

`;
