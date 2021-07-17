import React from 'react';
import Dots from '../../../Dots';

import { Container } from './styles';

const HeaderPage = () => {
  return (
    <Container >
      <div>
        <p>
          SOBRE MIM
        </p>
        <h1>Sobre Mim</h1>
        <div>
          <Dots qtdDots={10} qtdLines={4} />
          <Dots qtdDots={10} qtdLines={4} inverter />
        </div>
      </div>
      <p>Conheça mais sobre mim</p>
    </Container>
  );
}

export default HeaderPage;