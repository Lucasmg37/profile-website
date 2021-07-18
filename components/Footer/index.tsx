import React from 'react';
import ButtonCircle from '../Buttons/ButtonCircle';
import { HiOutlineArrowNarrowDown, HiOutlineArrowNarrowUp } from 'react-icons/hi';
import { Container } from './styles';

type FooterProps = {
  onDown: () => void;
  onUp: () => void;
  showUp?: boolean;
  showDown?: boolean;
  isLast?: boolean;
}

const Footer = ({ onDown, showUp, showDown, onUp, isLast }: FooterProps) => {
  return (
    <Container>

      {isLast ? (<div>
        <p>2021 - Lucas Jr Dias</p>
        <p>Todos os direitos reservados</p>
      </div>) : (
        <>
          <ul>
            <li><a href="#teste">GitHub</a></li>
            <li><a href="#teste">Linkedin</a></li>
            <li><a href="#teste">Medium</a></li>
          </ul>

          {showUp && showDown && (
            <ButtonCircle className="upButton" onClick={() => onUp()} >
              <HiOutlineArrowNarrowUp />
            </ButtonCircle>
          )}

          {showDown && (
            <ButtonCircle onClick={() => onDown()} >
              <HiOutlineArrowNarrowDown />
            </ButtonCircle>
          )}
        </>
      )}
    </Container>
  );
}

export default Footer;