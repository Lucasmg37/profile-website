import styled from 'styled-components';
import { motion } from 'framer-motion';

export const Container = styled(motion.div)`
  position: absolute;
  height: 100%;
  width: 100%;
  background: rgba(0,0,0,0.5);
  z-index: 1;
  display: flex;
  overflow: hidden;

  > button {
    margin: auto 24px auto auto;
  }

  nav {
    background: #222;
    display: flex;
    padding: 32px 48px;
    align-items: center;
    gap: 24px;
    position: relative;

    ul {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      gap: 32px;

      li {
        display: flex;
        flex-direction: column;
        width: 100%;

        > div {
          opacity: 0;
          margin-bottom: -24px;
          margin-left: auto;
          transition: ease-in .5s all;
        }

         &.active {
          opacity: 1;

          button {
            opacity: 1;
          }

          > div {
            opacity: .5;
            transform: translateX(10px);
          }
        }
      }
      
      button {
        color: #fff;
        font-size: 24px;
        font-weight: 500;
        z-index: 1;
        text-align: left;
        opacity: .5;
        transition: ease-in .2s all;

        &:hover {
          opacity: 1;
        }

        span {
          width: 60px;
          font-weight: 600;
          display: inline-block;
          text-align: left;
        }
      }
    }
  }
`;

interface LineProps {
  height: number;
  percent: number;
}

export const Line = styled.div<LineProps>`
  height: ${({ height }) => height}px;
  width: 2px;
  border-radius: 8px;
  background: rgba(255,255,255,0.5);
  margin-left: 40px;
  position: relative;

  &:before {
    content: '';
    display: block;
    position: absolute;
    background: #fff;
    width: 100%;
    height: ${({ percent }) => percent}%;
    transition: ease-in all .5s;
  }
  
`;
