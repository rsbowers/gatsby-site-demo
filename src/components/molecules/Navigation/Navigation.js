/* eslint-disable no-undef */

import React, { useEffect } from 'react';
import { window } from 'browser-monads';

import Header from '../Header';

import { NavigationWrapper, NavigationContentWrapper } from './Navigation.style';

const navigationItems = [
  {
    text: 'FAQs',
    link: '/faqs',
  },
];

const Navigation = ({ children }) => {
  useEffect(() => {
    if (window) {
      const scrollCallBack = window.addEventListener('scroll', () => {
        setSticky(window.pageYOffset > 500);
      });
      return () => {
        window.removeEventListener('scroll', scrollCallBack);
      };
    }
    return null;
  }, []);

  return (
    <>
      <NavigationWrapper component={<header />}>
        <NavigationContentWrapper>
          <Header items={navigationItems} />
        </NavigationContentWrapper>
      </NavigationWrapper>
      {children}
    </>
  );
};

export default Navigation;
