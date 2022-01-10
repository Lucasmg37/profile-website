import styled, { keyframes } from 'styled-components';
import { motion } from 'framer-motion';

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

export const Container = styled(motion.div)`
  flex: 1;
  padding: 120px 32px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: auto;
  justify-content: center;
`;

export const Content = styled.div`
  flex: 1;
  display: flex;
  gap: 80px;
  margin-top: 80px;

  aside {
    min-width: 250px;

    ul {
      li {
        margin-top: 50px;

        button {
          color: #fff;
          font-size: 18px;
          border-bottom: 1px solid transparent;
          position: relative;
          transition: ease .2s all;
          opacity: .5;
          white-space: nowrap;

          span:first-child{
            font-weight: bold;
            display: inline-block;
            min-width: 70px;
            text-align: left;
          }

          > span:last-child{
            position: absolute;
            bottom: 0;
            left: 0;
            opacity: 0;
            transition: ease .5s all;
            transform: translateX(-20px);
          }

          &:hover {
            border-bottom: 1px solid #fff;
             opacity: 1;
         
            > span:last-child{
              opacity: .3;
              transform: translateX(0px);
            }
          }

         &.active {
            border-bottom: 1px solid #fff;
             opacity: 1;
         
            > span:last-child{
              opacity: 1;
              transform: translateX(0px);
            }
          }
        }
      }
    }
  }

  > div {
    flex: 1;
    min-width: 500px;
    max-width: 500px;
    animation: ${fadeIn} .5s ease forwards;

      h1 {
      font-weight: 600;
      font-size: 24px;
      margin-bottom: 8px;
    }
  }

`;



export const Skills = styled.div`
  div {
    display:flex;
    gap: 4px;
    margin-top: 16px;
    align-items: center;

    img {
      filter: grayscale(100%);
      transition: all ease .2s;

      &:hover{
         filter: grayscale(0%);
      }
    }
  }

  h2 {
    font-weight: 400;
    display: flex;
    align-items: center;
    font-size: 16px;
    opacity: .9;
    margin-top: 32px;

    &::before {
      content: '';
      display: block;
      height: 1px;
      width: 50px;
      border-radius: 4px;
      background: #fff;
      margin-right: 8px;
    }
  }
`;

export const Work = styled.div`
  span {
    font-weight: 500;
    display: flex;
    margin-top: 24px;
    margin-bottom: 4px;
    align-items: center;

    &::before {
      content: '';
      display: block;
      height: 1px;
      width: 50px;
      border-radius: 4px;
      background: #fff;
      margin-right: 8px;
    }
  }

  p {
    opacity: .8;
    max-width: 500px;
    font-size: 16px;
  }

`;
export const Info = styled.div`
  h2 {
    font-size: 14px;
    opacity: .8;
    font-weight: 400;
    margin-bottom: 32px;
  }

  p {
    opacity: .8;
    max-width: 500px;
    font-size: 16px;
  }
`;