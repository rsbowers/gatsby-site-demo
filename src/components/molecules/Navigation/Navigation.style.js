import React, { cloneElement } from 'react';
import styled from 'styled-components';

// All Navigation Bars
// eslint-disable-next-line import/prefer-default-export
export const NavigationWrapper = styled(
  ({ component = <section />, ...props }) => cloneElement(component, props),
)`
  padding: 1.5em 3em;
  @media (max-width: ${({ theme }) => theme.screen.calc(theme.screen.MD, 'max')}) {
    padding: 0;
  }
  ${({ header }) => (header && `
    position: absolute;
    left: 0;
    right: 0;
    transition: all 0.4s ease;
    z-index: 2;
  `)}
  ${({ sticky, theme }) => (sticky && `
    position: fixed;
    background-color: ${theme.colors.primary};
    z-index: 2;
  `)}
`;

export const NavigationContentWrapper = styled.div`
  max-width: ${({ theme }) => theme.screen.XL};
  margin: 0px auto;
`;
