import React from 'react';
import Dots from '../../Dots';
import { AnimationProps } from 'framer-motion/types';

import { Container } from './styles';
import { getAnimationPage } from '../../../utils/animations';
import { Variants } from '../../../Models/variants';
import { HiOutlineArrowNarrowUp } from 'react-icons/hi';
import { RiHomeLine } from 'react-icons/ri';
import ButtonCircle from '../../Buttons/ButtonCircle';

interface ContactProps {
  variants: any;
  goToHome: () => void;
  goToPrevious: () => void;
}

const Contact: React.FC<ContactProps> = ({ variants, goToHome, goToPrevious }: ContactProps) => {
  return (
    <Container
      variants={variants}
      initial="hidden"
      animate="show"
      exit="exit"
    >
      <h1>Entre em contato</h1>
      <h3>Quer saber mais? Vamos conversar.</h3>
      <h2>contato@lucasjunior.com.br</h2>

      <div>
        <span> Me acompanhe nas redes sociais</span>
        <ul>
          <li>
            <a href="#teste">LinkedIn</a>
          </li>
          <li>
            <a href="#teste">Medium</a>
          </li>
          <li>
            <a href="#teste">GitHub</a>
          </li>
          <li>
            <a href="#teste">StackOverflow</a>
          </li>
        </ul>
      </div>

      <div>
        <ButtonCircle onClick={() => goToHome()} type="button">
          <RiHomeLine />
        </ButtonCircle>
        <ButtonCircle onClick={() => goToPrevious()} type="button">
          <HiOutlineArrowNarrowUp />
        </ButtonCircle>
      </div>

    </Container>
  );
}

export default Contact;