import React from 'react';

import { Container } from './styles';

interface PaginatorProps {
  page: number;
}

const Paginator: React.FC<PaginatorProps> = ({ page }: PaginatorProps) => {
  return (
    <Container>
      <span />
      <div> 0{page} </div>
      <span />
    </ Container>
  );
}

export default Paginator;