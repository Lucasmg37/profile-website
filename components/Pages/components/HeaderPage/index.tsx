import React from 'react';
import Dots from '../../../Dots';

import { Container } from './styles';

type HeaderPageProps = {
  title: string,
  description: string,
}

const HeaderPage = ({ title, description }: HeaderPageProps) => {
  return (
    <Container >
      <div>
        <p>
          {title}
        </p>
        <h1>{title}</h1>
        <div>
          <Dots qtdDots={10} qtdLines={4} />
          <Dots qtdDots={10} qtdLines={4} inverter />
        </div>
      </div>
      <p>{description}</p>
    </Container>
  );
}

export default HeaderPage;