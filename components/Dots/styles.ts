import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;

  div {
    display: flex;
    gap: 12px;
  }

`;

interface DotProps {
  opacity?: number;
}

export const Dot = styled.span<DotProps>`
  display: block;
  background: rgba(225,255,255, .7);
  height: 2px;
  width: 2px;
  opacity: ${({opacity}) => opacity};
`;
