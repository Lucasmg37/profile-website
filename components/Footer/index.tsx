import React from 'react';
import ButtonCircle from '../Buttons/ButtonCircle';
import { HiOutlineArrowNarrowDown, HiOutlineArrowNarrowUp } from 'react-icons/hi';
import { Container } from './styles';
import { AnimatePresence, motion } from 'framer-motion';
import { getAnimationFooter } from '../../utils/animations';
import { AiFillGithub, AiFillLinkedin, AiFillMediumCircle } from 'react-icons/ai';

type FooterProps = {
  onDown: () => void;
  onUp: () => void;
  showUp?: boolean;
  showDown?: boolean;
  isLast?: boolean;
}

const Footer = ({ onDown, showUp, showDown, onUp, isLast }: FooterProps) => {
  return (
    <Container>
      <AnimatePresence>
        {isLast && (
          <motion.div
            variants={getAnimationFooter()}
            initial="hidden"
            animate="show"
            exit="exit"
            className="copyright"
          >
            <p>2021 - Lucas Jr Dias</p>
            <p>Todos os direitos reservados</p>
          </motion.div>
        )}
      </AnimatePresence>

      {!isLast && (
        <motion.div
          variants={getAnimationFooter()}
          initial="hidden"
          animate="show"
          exit="exit"
          className="content"
        >

          <img src="https://avatars.githubusercontent.com/u/25160385?v=4" alt="Avatar" />

          <ul>
            <li><a href="#teste"><AiFillGithub /> GitHub</a></li>
            <li><a href="#teste"><AiFillLinkedin /> Linkedin</a></li>
            <li><a href="#teste"><AiFillMediumCircle />Medium</a></li>
          </ul>

          {showUp && showDown && (
            <ButtonCircle className="upButton" onClick={() => onUp()} >
              <HiOutlineArrowNarrowUp />
            </ButtonCircle>
          )}

          {showDown && (
            <ButtonCircle onClick={() => onDown()} >
              <HiOutlineArrowNarrowDown />
            </ButtonCircle>
          )}
        </motion.div>
      )}
    </Container>
  );
}

export default Footer;