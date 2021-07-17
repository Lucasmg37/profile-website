import React from 'react';

import { Container, Dot } from './styles';

type DotsProps = {
  qtdDots: number;
  qtdLines: number;
  inverter?: boolean;
}

function Dots({ qtdDots, qtdLines, inverter = false }: DotsProps) {

  const generateDots = (qtd: number) => {
    const dots = [];
    for (let index = 0; index < qtd; index++) {
      dots.push(<Dot opacity={!inverter ? index / qtd : (qtd - index) / qtd} />)
    }
    return dots;
  }

  const generateLines = (qtd: number) => {
    const dots = [];
    for (let index = 0; index < qtd; index++) {
      dots.push(<div>{generateDots(qtdDots)}</div>)
    }
    return dots;
  }

  return (
    <Container>
      {generateLines(qtdLines)}
    </Container>
  );
}

export default Dots;