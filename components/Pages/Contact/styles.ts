import styled, { keyframes } from 'styled-components';
import { motion } from 'framer-motion';


export const Container = styled(motion.div)`
  flex: 1;
  padding: 32px;
  display: flex;
  flex-direction: column;
  position: relative;
  width: 800px;

  h1 {
    font-size: 54px;
    font-weight: 500;
  }

  h3 {
    font-size: 18px;
    font-weight: 400;
    color: rgba(255,255,255, .7);
  }

  h2 {
    margin: 80px 0;
    font-size: 40px;
    font-weight: 500;
  }

  div {
     > span {
        font-weight: 600;
        color: rgba(255,255,255, .7);
        font-size: 16px;
     }

     ul {
       margin-top: 8px;
       display: flex;
       gap: 24px;
        font-weight: 600;
     }
  }

  div + div {
    display: flex;
    gap: 24px;
    justify-content: center;
    margin-top: 48px;
  }

`;
