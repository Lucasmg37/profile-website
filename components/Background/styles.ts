import styled from 'styled-components';

export const Container = styled.div`
  background:linear-gradient(49deg, rgba(0,0,0,.97) 0%, rgba(0,0,0, .99) 100%),  url('https://images.pexels.com/photos/3648850/pexels-photo-3648850.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260') center/cover;
  position: absolute;
  height: 100%;
  width: 100%;
  z-index: -1;

  &:before {
    content: "";
    background: linear-gradient(49deg, rgba(0,0,0,1) 15%, rgba(10,110,98,.8) 80%, rgba(0,216,255,.6) 100%);
    position: absolute;
    height: 100%;
    width: 100%;
    opacity: .3;
  }

`;
