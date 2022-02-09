import React from 'react';
import Dots from '../../Dots';

import { Container } from './styles';

interface IntroductionProps {
  variants: any;
  scale: number;
}

const Introduction: React.FC<IntroductionProps> = ({ variants, scale }: IntroductionProps) => {
  return (
    <Container
      variants={variants}
      initial="hidden"
      animate="show"
      exit="exit"
      transition={{ duration: 1 }}
      scale={1}
    >
      <div>
        <Dots qtdDots={15} qtdLines={5} />
        <h3>Introdução</h3>
      </div>

      <h1>desenvolvedor front-end</h1>

      <p>Olá, Eu sou Lucas Junior. Apaixonado por desenvolvimento para web focado no front end.</p>
    </Container>
  );
};

export default Introduction;
