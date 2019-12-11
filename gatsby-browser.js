import React from 'react';
import GlobalContext from './src/context/GlobalContext';
import './src/styles/fonts.css';

// eslint-disable-next-line import/prefer-default-export
export const wrapRootElement = ({ element }) => (
  <GlobalContext>{element}</GlobalContext>
);
