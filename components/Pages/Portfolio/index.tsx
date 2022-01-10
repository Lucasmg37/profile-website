import Image from 'next/image';
import React from 'react';
import { useState } from 'react';
import { HiOutlineArrowNarrowRight } from 'react-icons/hi';
import { Variants } from '../../../Models/variants';
import { getAnimationPage } from '../../../utils/animations';
import Dots from '../../Dots';
import HeaderPage from '../components/HeaderPage';

import { Container, Content } from './styles';

interface AbouteMeProps {
  variants: any;
}

const Portfolio: React.FC<AbouteMeProps> = ({ variants }: AbouteMeProps) => {
  const mockup = [
    {
      name: 'Resultrack',
      stack: ['React', 'Bootstrap', 'Sass'],
      type: 'Confidencial',
      image: '/static/images/portifolio/resultrack.jpg',
    },
    {
      name: 'Encontro Gamer de Pará de Minas',
      stack: ['Vue', 'Sass'],
      type: 'Acadêmico',
      image: '/static/images/portifolio/egpm.jpg',
    },
    // {
    //   name: 'CMS - Encontro Gamer de Pará de Minas',
    //   stack: ['Vue', 'Sass', 'Bootstrap'],
    //   type: 'Acadêmico',
    //   image: '/static/images/portifolio/egpmadmin.jpg',
    // },
    {
      name: 'NarutoDex',
      stack: ['NextJs', 'React'],
      type: 'Pessoal',
      image: '/static/images/portifolio/narutodex.jpg',
    },
  ];

  const generateItems = (items: { name: string; type: string; image: string; stack: string[] }[]) => {
    return items.map((item, index) => (
      <li key={index}>
        <button type="button">
          <div>
            <Dots qtdLines={5} qtdDots={8} inverter />
          </div>
          <div>0{index + 1}</div>
          <div>
            <p>{item.name} </p>
            <p>
              {item.type} - {item.stack[0]}
            </p>
          </div>
          <div>
            <img src={item.image} />
          </div>
        </button>
      </li>
    ));
  };

  return (
    <Container variants={variants} initial="hidden" animate="show" exit="exit" transition={{ duration: 1 }}>
      <HeaderPage title="Portifólio" description="Conheça alguns de meus projetos" />

      <Content>{generateItems(mockup)}</Content>

      <a href="#teste">
        VEJA OUTROS PROJETOS <HiOutlineArrowNarrowRight />{' '}
      </a>
    </Container>
  );
};

export default Portfolio;
