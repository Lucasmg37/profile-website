import React from 'react';

import { Container } from './styles';

type BackgroundProps = {
  isAboutMe: boolean;
};

const Background: React.FC<BackgroundProps> = ({ isAboutMe }: BackgroundProps) => {
  return <Container isAboutMe={isAboutMe} />;
};

export default Background;
