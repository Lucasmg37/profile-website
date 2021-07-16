import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    text-rendering: optimizeLegibility;
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
  }

  body {
    font-size: 8px;
    font-family: 'Inter', sans-serif;
  }

  button {
    border: none;
    background: none;
    cursor: pointer;
  }

  ul{
    list-style: none;
  }

  a {
    color: inherit;
    text-decoration: none;
  }
`;

const BasicLayout = ({ children }: { children: any }) => {
  return (
    <>
      <GlobalStyle />
      {children}
    </>
  );
};

export default BasicLayout;