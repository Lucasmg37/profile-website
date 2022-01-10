import styled, { css } from 'styled-components';
interface IContainer {
  isAboutMe: boolean;
}

export const Container = styled.div<IContainer>`
  background: linear-gradient(49deg, rgba(0, 0, 0, 0.97) 0%, rgba(0, 0, 0, 0.99) 100%),
    url('https://images.pexels.com/photos/3648850/pexels-photo-3648850.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260')
      center/cover;
  position: absolute;

  ${({ isAboutMe }) =>
    isAboutMe &&
    css`
      background: linear-gradient(49deg, rgba(0, 0, 0, 0.9) 0%, rgba(0, 0, 0, 0.99) 100%),
        url('https://images.pexels.com/photos/3648850/pexels-photo-3648850.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260')
          center/cover;
      /* background: linear-gradient(49deg, rgba(0, 0, 0, 0.8) 0%, rgba(0, 0, 0, 0.99) 100%),
        url('/static/images/aboutMeBg.jpg') center/cover; */
    `}

  height: 100%;
  width: 100%;
  z-index: -1;
  transition: ease 0.2s all;

  &:before {
    content: '';
    background: linear-gradient(49deg, rgba(0, 0, 0, 1) 15%, rgba(10, 110, 98, 0.8) 80%, rgba(0, 216, 255, 0.6) 100%);
    position: absolute;
    height: 100%;
    width: 100%;
    opacity: 0.3;
  }
`;
