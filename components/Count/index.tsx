import React from 'react';

import { Container } from './styles';

interface PaginatorProps {
  page: number;
  totalPage: number;
}


const Count: React.FC<PaginatorProps> = ({ page, totalPage }: PaginatorProps) => {
  return (
    <Container height={page / totalPage * 100} >
      <div>
        <span>0{page}</span>
        <span>/</span>
        <span>0{totalPage}</span>
      </div>
      <span />
    </Container>
  );
}

export default Count;