import styled from 'styled-components';

export const Container = styled.header`
    position: relative;
    width: 100%;
    z-index: 10;

    button {
        position: absolute;
        top: 32px;
        right: 48px;
    }
`;

export const LogoName = styled.div`
    display: flex;
    flex-direction: column;
    font-size: 24px;
    font-weight: bold;
    color: #fff;
    position: absolute;
    top: 32px;
    left: 48px;

    span {
        background-image: linear-gradient(to right, rgb(0, 241, 255), rgb(0, 173, 255));
        background-clip: text;
        -webkit-background-clip: text;
        color: transparent;
    }
`;
