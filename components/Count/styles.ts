import styled from 'styled-components';

interface ContainerProps {
  height: number;
}

export const Container = styled.div<ContainerProps>`
  display: inline-flex;
  height: 100%;
  max-height: 400px;
  align-items: center;
  gap: 24px;
  margin: auto 0;

  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: 18px;
    font-weight: lighter;
  }

  > span {
    display: flex;
    height: 100%;
    width: 2px;
    background: rgba(255,255,255,.5);
    border-radius: 8px;

    :before {
      content: "";
      height: ${({ height }) => height}%;
      display: block;
      width: 100%;
      background: #fff;
      transition: ease-in 1.5s all;
    }

  }

`;
