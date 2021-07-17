import styled from 'styled-components';
import { motion } from 'framer-motion';

export const Container = styled(motion.div)`
  flex: 1;
  padding: 32px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: auto;
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
        margin-top: 40px;

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

  >div {
    flex: 1;

    h1 {
      font-weight: 600;
      font-size: 24px;
      margin-bottom: 8px;
    }

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

  }


`;
