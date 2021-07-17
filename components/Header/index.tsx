import React from 'react';
import ButtonCircle from '../Buttons/ButtonCircle';
import { AiOutlineMenu } from 'react-icons/ai';
import { Container, LogoName } from './styles';

const Header: React.FC = () => {
  return (
    <Container>
      <LogoName>
        <span>LUC</span>
        <span>AS</span>
      </LogoName>
      <ButtonCircle><AiOutlineMenu /></ButtonCircle>
    </Container>
  );
}

export default Header;