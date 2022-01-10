import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1}
`;

export const Container = styled.footer`
    display: flex;
    position: relative;
    z-index: 10;
    width: 100%;

    img {
        height: 48px;
        border-radius: 50%;
        bottom: 32px;
        left: 48px;
        position: absolute;
    }

    .copyright {
        height: 48px;
        color: rgba(255, 255, 255, 0.4);
        font-weight: 400;
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        font-size: 14px;
        padding: 0 48px 32px;
        position: absolute;
        bottom: 0;
    }

    .content {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        font-size: 14px;
    }

    .upButton {
        position: absolute;
        right: 48px;
        bottom: 88px;
        animation: ${fadeIn} 0.4s forwards;
    }

    .downButton {
        position: absolute;
        right: 48px;
        bottom: 32px;
    }

    ul {
        display: flex;
        gap: 1rem;
        font-size: 16px;
        margin-right: auto;
        margin-left: 32px;
        bottom: 32px;
        position: absolute;
        left: 80px;

        li {
            a {
                color: rgba(255, 255, 255, 0.5);
                padding: 8px;
                transition: all ease 0.2s;
                display: flex;
                align-items: center;

                svg {
                    margin-right: 8px;
                }

                &:hover {
                    color: rgba(255, 255, 255, 1);
                }
            }
        }
    }
`;
