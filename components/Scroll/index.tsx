import React from 'react';
import { useRef } from 'react';
import { useEffect } from 'react';

import { Container } from './styles';
import { ScrollPropsResponse } from './types';

type ScrollProps = {
  breaksToEmit: number[];
  onScroll: (data: ScrollPropsResponse) => void;
  forcePosition: number;
};

const Scroll: React.FC<ScrollProps> = ({ breaksToEmit, onScroll, forcePosition }: ScrollProps) => {
  const scrollContainerRef = useRef<null | HTMLDivElement>(null);

  const handleScroll = (event: React.UIEvent<HTMLElement>): void => {
    const childrenClientHeight = event.currentTarget.getElementsByTagName('div')[0].clientHeight;
    const { clientHeight } = event.currentTarget;
    const { scrollTop } = event.currentTarget;
    const percentual = (scrollTop * 100) / (childrenClientHeight - clientHeight);

    const emit = breaksToEmit.filter((item) => percentual >= item);

    onScroll({ emit, atual: percentual });
  };

  useEffect(() => {
    if (forcePosition) {
      if (scrollContainerRef.current) {
        const {clientHeight} = scrollContainerRef.current;
        const positionToGo = (forcePosition * (4000 - clientHeight)) / 100;
        console.log(clientHeight);
        console.log(positionToGo);
        scrollContainerRef.current.scrollTo({ top: positionToGo + 1 });
      }
    }
  }, [forcePosition]);

  return (
    <Container ref={scrollContainerRef} onScroll={handleScroll}>
      <div />
    </Container>
  );
};

export default Scroll;
