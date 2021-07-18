import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1}
`;

export const Container = styled.footer`
  padding: 32px 48px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: auto;
  position: relative;

  div {
    height: 48px;
    color: rgba(255,255,255,.4);
    font-weight: 400;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    font-size: 14px;
    padding: 0 32px;
  }

  .upButton {
    position: absolute;
    right: 48px;
    bottom: 88px;
    animation: ${fadeIn} .4s forwards;
  }

  ul {
    display: flex;
    gap: 1rem;
    font-size: 16px;

    li {
      a {
        color: rgba(255,255,255,.5);
        padding: 8px;
        transition: all ease .2s;
        height: 48px;
        display: inline-block;

        &:hover {
          color: rgba(255,255,255,1);
        }
      }
    }

  }

`;
