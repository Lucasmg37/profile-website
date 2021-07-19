import React from 'react';
import { useState } from 'react';
import { Variants } from '../../../Models/variants';
import { getAnimationPage } from '../../../utils/animations';
import Dots from '../../Dots';
import HeaderPage from '../components/HeaderPage';

import { Container, Content } from './styles';

interface AbouteMeProps {
  variants: any;
}

const AboutMe: React.FC<AbouteMeProps> = ({ variants }: AbouteMeProps) => {

  const [activeMenu, setActiveMenu] = useState(0)

  const handleChangeMenu = (index: number) => {
    setActiveMenu(index)
  }

  const generateMenuItem = (items: string[]) => {
    return items.map((item, index) => (
      <li>
        <button onClick={() => handleChangeMenu(index)} className={index === activeMenu ? 'active' : ''} type="button">
          <span>
            /0{index + 1}
          </span>
          <span>
            {item}
          </span>
          <span>
            <Dots qtdLines={4} qtdDots={10} />
          </span>
        </button>
      </li>
    ));
  }

  return (
    <Container
      variants={variants}
      initial="hidden"
      animate="show"
      exit="exit"
      transition={{ duration: 1 }}
    >
      <HeaderPage title="Sobre Mim" description="Conheça mais sobre mim" />

      <Content>
        <aside>
          <ul>
            {generateMenuItem(['Sobre Mim', 'Experências', 'Habiliades'])}
          </ul>
        </aside>

        <div>
          <h1>Lucas Junior Dias De Paula</h1>
          <h2>Desenvolvedor Front End / Graduado em Gestão de TI</h2>

          <p>
            It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem.
            <br />
            <br />
            Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors
          </p>

        </div>

      </Content>
    </Container>
  );
}

export default AboutMe;