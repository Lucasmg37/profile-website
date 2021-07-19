import React, { useState, useLayoutEffect, useRef } from 'react';
import ButtonCircle from '../Buttons/ButtonCircle';
import Dots from '../Dots';
import { FiX } from 'react-icons/fi';
import { Container, Line } from './styles';
import { getAnimationMenu, getAnimationMenuNav } from '../../utils/animations';
import { motion } from 'framer-motion';

interface MenuProps {
  active: number;
  onChangePage: (page: number) => void
  onClose: () => void
}

const Menu: React.FC<MenuProps> = ({ active, onChangePage, onClose }: MenuProps) => {

  const handleChangePage = (page: number) => {
    onChangePage(page);
    onClose();
  }

  const [heightLine, setHeightLine] = useState(0);
  const [activeState, setActiveState] = useState(active);

  const ulRef = useRef<null | HTMLUListElement>();

  const generateItems = (items: string[]) => {
    return items.map((item, index) => (
      <li className={active === index + 1 ? 'active' : ''} >
        <Dots qtdDots={10} qtdLines={4} />
        <button
          type="button"
          onClick={() => handleChangePage(index + 1)}
          onMouseEnter={() => setActiveState(index + 1)}
          onMouseLeave={() => setActiveState(active)}
        >
          <span>/0{index + 1}</span> {item}
        </button>
      </li>
    ))
  }

  useLayoutEffect(() => {
    if (ulRef.current) {
      setTimeout(() => {
        if (ulRef.current) {
          setHeightLine(ulRef.current.clientHeight)
        }
      }, 100)
    }
  }, [ulRef.current, ulRef.current ? ulRef.current.clientHeight : 0])

  return (
    <Container
      variants={getAnimationMenu()}
      initial="hidden"
      animate="show"
      exit="exit"
    >
      <ButtonCircle onClick={onClose} >
        <FiX />
      </ButtonCircle>

      <motion.nav
        variants={getAnimationMenuNav()}
        initial="hidden"
        animate="show"
        exit="exit"
      >
        <ul
          ref={ulRef}
        >
          {generateItems([
            'Introdução',
            'Sobre Mim',
            'Portifólio',
            'Contato',
          ])}
        </ul>

        <Line height={heightLine} percent={activeState / 4 * 100} />
      </motion.nav>
    </Container>
  );
}

export default Menu;