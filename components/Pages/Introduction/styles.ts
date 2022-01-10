import styled, { keyframes } from 'styled-components';
import { motion } from 'framer-motion';

const animation = keyframes`
  0% {
    opacity: 0;
    transform: translateX(-10px);
  }
  50% {
    opacity: .5;
     transform: translateX(0px);
  }
  100% {
    opacity: 0;
     transform: translateX(-10px);
  }
`;

interface ContainerProps {
    scale: number;
}

export const Container = styled(motion.div)<ContainerProps>`
    flex: 1;
    padding: 32px;
    display: flex;
    flex-direction: column;
    gap: 24px;
    position: relative;
    justify-content: center;

    > div {
        > div {
            animation: ${animation} ease-in-out 5s infinite;
        }

        h3 {
            font-weight: 300;
            font-size: 16px;
            margin-top: -16px;
        }
    }

    h1 {
        font-weight: 900;
        font-size: 48px;
        transition: linear .5s all;
        /* transform: perspective(33) translateZ(${({ scale }) => scale}px); */
        transform: scale(${({ scale }) => scale });
    }

    p {
        max-width: 400px;
        opacity: 0.5;
        font-weight: bold;
        letter-spacing: 3px;
        font-size: 14px;
        line-height: 28px;
    }
`;
