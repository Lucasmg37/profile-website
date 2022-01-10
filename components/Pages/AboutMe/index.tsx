import Image from 'next/image';
import React from 'react';
import { useState } from 'react';
import Dots from '../../Dots';
import HeaderPage from '../components/HeaderPage';

import js from '../../../assets/javascript.svg';
import ts from '../../../assets/typescript.svg';
import vue from '../../../assets/vue.svg';
import webpack from '../../../assets/webpack.svg';
import react from '../../../assets/react.svg';
import prettier from '../../../assets/prettier.svg';
import nodejs from '../../../assets/nodejs.svg';
import nextjs from '../../../assets/nextjs.svg';
import jest from '../../../assets/jest.svg';
import git from '../../../assets/git.svg';
import eslint from '../../../assets/eslint.svg';
import babel from '../../../assets/babel.svg';
import php from '../../../assets/php.svg';
import bootstrap from '../../../assets/bootstrap.svg';
import sass from '../../../assets/sass.svg';

import { Container, Content, Skills, Work, Info } from './styles';

interface AbouteMeProps {
  variants: any;
}

const AboutMe: React.FC<AbouteMeProps> = ({ variants }: AbouteMeProps) => {
  const [activeMenu, setActiveMenu] = useState(0);

  const handleChangeMenu = (index: number) => {
    setActiveMenu(index);
  };

  const generateMenuItem = (items: string[]) => {
    return items.map((item, index) => (
      <li key={index}>
        <button onClick={() => handleChangeMenu(index)} className={index === activeMenu ? 'active' : ''} type="button">
          <span>/0{index + 1}</span>
          <span>{item}</span>
          <span>
            <Dots qtdLines={4} qtdDots={10} />
          </span>
        </button>
      </li>
    ));
  };

  return (
    <Container variants={variants} initial="hidden" animate="show" exit="exit" transition={{ duration: 1 }}>
      <HeaderPage title="Sobre Mim" description="Conheça mais sobre mim" />

      <Content>
        <aside>
          <ul>{generateMenuItem(['Sobre Mim', 'Experências', 'Habiliades'])}</ul>
        </aside>

        {activeMenu === 0 && (
          <Info>
            <h1>Lucas Junior Dias De Paula</h1>
            <h2>Desenvolvedor Front End / Graduado em Gestão de TI</h2>

            <p>
              Desenvolvedor web full stack a mais de 4 anos, encontrei no front-end a minha paixão. Busco entregar em
              todos os meus projetos: Fidelidade, Usabilidade e Experiência.
              <br />
              <br />
              Atualmente, atuo como desenvolvedor FrontEnd Pleno na Samba Digital, braço focado em transformação digital
              da Sambatech. Atuando em projetos para empresas como C&A, AmBev, ETC Filmes e Porto Seguro. Além de
              participar do desenvolvimento de Produtos internos da organização.
            </p>
          </Info>
        )}

        {activeMenu === 1 && (
          <Work>
            <h1>Experiências Profissionais</h1>

            <div>
              <span>Sambatech</span>
              <div>
                <p>Desenvolvedor FrontEnd Pleno</p>
                <p>Desenvolvimento de SPAs ReactJS (JS/TS)</p>
                <p>
                  Sistemas baseados em vídeo como LMS(Learning Management System) e OTT(Over The Top). Se destaca
                  aplicação desenvolvida para ETC Filmes (Ping Play), OTT focado em acessibilidade, onde atuei como
                  squad lead e dev frontend.
                </p>
              </div>
            </div>

            <div>
              <span>Faculdade Unyleya</span>
              <div>
                <p>Desenvolvedor FullStack Júnior</p>
                <p>Desenvolvimento de aplicação de Gestão Interna</p>
                <p>Trabalhando com tecnologias como PHP, Zend, AngularJS, jQuery e React Native.</p>
              </div>
            </div>
          </Work>
        )}

        {activeMenu === 2 && (
          <Skills>
            <h1>Habilidades</h1>

            <h2>Linguagens</h2>
            <div>
              <Image height="32" width="32" src={js} />
              <Image height="32" width="32" src={ts} />
              <Image height="32" width="32" src={php} />
              <Image height="32" width="32" src={nodejs} />
            </div>

            <h2>FrontEnd</h2>
            <div>
              <Image height="32" width="32" src={react} />
              <Image height="32" width="32" src={vue} />
              <Image height="32" width="32" src={nextjs} />
              <Image height="32" width="32" src={sass} />
              <Image height="32" width="32" src={bootstrap} />
            </div>

            <h2>Outros</h2>
            <div>
              <Image height="32" width="32" src={webpack} />
              <Image height="32" width="32" src={babel} />
              <Image height="32" width="32" src={git} />
              <Image height="32" width="32" src={jest} />
              <Image height="32" width="32" src={eslint} />
              <Image height="32" width="32" src={prettier} />
            </div>
          </Skills>
        )}
      </Content>
    </Container>
  );
};

export default AboutMe;
