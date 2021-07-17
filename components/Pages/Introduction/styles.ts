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

export const Container = styled(motion.div)`
  flex: 1;
  padding: 32px;
  display: flex;
  flex-direction: column;
  gap: 24px;
  margin-right: auto;
  position: relative;

  > div {
    > div {
      /* opacity: .5; */
      animation: ${animation} ease-in-out 5s infinite;
    }

    h3 {
      font-weight: 300;
      font-size: 16px;
      margin-top: -16px;
    }
  }

  h1 {
    font-weight: normal;
    font-size: 48px;
  }

  p {
    max-width: 400px;
    opacity: .5;
    font-weight: bold;
    letter-spacing: 3px;
    font-size: 14px;
    line-height:28px;
  }

`;
