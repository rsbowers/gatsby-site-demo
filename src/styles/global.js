import { createGlobalStyle } from 'styled-components';

import theme from '../theme';

export default createGlobalStyle`
  html {
    background-color: ${theme.config.body.background};
    color: ${theme.config.body.color};
  }
  body {
    margin: 0;
    padding: 0;
    line-height: 1.35;
    font-family: ${theme.config.typography.body.default};
    font-size: ${theme.config.typography.sizes.default};
    overflow-x: hidden;
  }
  h1 {
    margin-bottom: .5em;
    font-weight: 300;
  }
  h2 {
    text-transform: uppercase;
    font-weight: 800;
  }
  h4 {
    font-weight: 800;
    text-transform: uppercase;
  }
  h1, h2 {
    line-height: 1;
  }
  h1, h3 {
    font-weight: 300;
  }
  h2, h3, h4, h5, h6 {
    line-height: 1.1;
    margin-bottom: .8em;
  }
  pre {
    background: #f8f8f8;
    border: 1px solid #ddd;
    border-radius: 3px;
    padding: 10px 15px;
    overflow: auto;
    white-space: pre;
  }
  .XL {
    font-size: ${theme.config.typography.sizes.XL};
  }
  .LG {
    font-size: ${theme.config.typography.sizes.LG};
  }
  .MD {
    font-size: ${theme.config.typography.sizes.MD};
  }
  .SM {
    font-size: ${theme.config.typography.sizes.SM};
  }
  .XS {
    font-size: ${theme.config.typography.sizes.XS};
  }
  .hide-sm {
    @media (max-width: ${theme.config.screen.SM}) {
      display: none;
    }
  }
`;
