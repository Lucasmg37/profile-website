import React from 'react';
import ButtonCircle from '../Buttons/ButtonCircle';
import { AiOutlineMenu } from 'react-icons/ai';
import { Container, LogoName } from './styles';

interface HeaderProps {
  onOpenMenu: () => void
}

const Header: React.FC<HeaderProps> = ({ onOpenMenu }: HeaderProps) => {
  return (
    <Container>
      <LogoName>
        <span>LUC</span>
        <span>AS</span>
      </LogoName>
      <ButtonCircle onClick={onOpenMenu} ><AiOutlineMenu /></ButtonCircle>
    </Container>
  );
}

export default Header;