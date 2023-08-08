import { createGlobalStyle } from 'styled-components';
import styled from 'styled-components';

export const GlobalStyled = createGlobalStyle`
  body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
      monospace;
  }

p,
h2,
ul {
  margin: 0;
  padding: 0;
  list-style: none;
}
`;


export const MainTitle = styled.h1`
  font-size: 30px;
  margin-bottom: 40px;
  margin-left: 40px;
  max-width: 100%;
  text-align: center;
`;

