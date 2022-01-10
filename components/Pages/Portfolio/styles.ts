import styled from 'styled-components';
import { motion } from 'framer-motion';

export const Container = styled(motion.div)`
  flex: 1;
  padding: 120px 32px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: auto;

  > a {
    margin-top: 24px;
    color: rgba(255, 255, 255, 0.5);
    font-weight: 700;
    transition: ease 0.2s all;
    display: flex;
    align-items: center;

    svg {
      margin-left: 8px;
      font-size: 24px;
    }

    &:hover {
      color: rgba(255, 255, 255, 1);
    }
  }
`;

export const Content = styled.ul`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-top: 80px;
  overflow: auto;

  button {
    display: flex;
    color: #fff;
    height: 100px;
    background: #222;
    border-radius: 4px;
    overflow: hidden;
    border: 1px solid rgba(255, 255, 255, 0.2);
    width: 100%;
    align-items: center;
    opacity: 0.5;
    transition: ease-in-out 0.2s all;
    max-width: 1000px;

    /* Dots */
    > div:nth-child(1) {
      display: flex;
      align-items: center;
      justify-content: center;
      height: 100%;
      position: relative;
      opacity: 0.3;
      transition: ease-in-out 0.3s all;

      > div {
        transition: ease-in-out 0.5s all;
        transform: translateX(-5px);
      }

      &:before {
        display: block;
        content: '';
        width: 60%;
        position: absolute;
        height: 2px;
        background: #fff;
        border-radius: 2px;
        left: 20%;
      }
    }

    /* Number */
    > div:nth-child(2) {
      font-size: 16px;
      font-weight: 600;
      width: 50px;
      text-align: left;
    }

    /* Info */
    > div:nth-child(3) {
      text-align: left;

      p:first-child {
        font-size: 16px;
        font-weight: 800;
      }

      p:last-child {
        font-size: 14px;
        font-weight: 300;
        color: rgba(255, 255, 255, 0.6);
        margin-top: 4px;
      }
    }

    /* Image */
    > div:nth-child(4) {
      width: 50%;
      margin-left: auto;
      position: relative;

      &:before {
        display: block;
        content: '';
        width: 100%;
        position: absolute;
        height: 100%;
        background: linear-gradient(90deg, #222 15%, rgba(0, 0, 0, 0) 56%);
      }

      img {
        width: 100%;
        height: 100%;
        object-fit: cover/center;
      }
    }

    &:hover {
      opacity: 0.9;
      > div:nth-child(1) {
        opacity: 0.8;

        > div {
          transform: translateX(5px);
        }
      }
    }
  }
`;
