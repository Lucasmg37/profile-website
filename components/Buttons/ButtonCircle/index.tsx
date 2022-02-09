import React from 'react';
import { Container } from './styles';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> { }

const ButtonCircle: React.FC<ButtonProps> = ({ children, ...rest }: ButtonProps) => {
  return <Container {...rest} >{children}</Container>;
}

export default ButtonCircle;