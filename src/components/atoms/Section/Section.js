import React from 'react';

import { Container, ContentWrapper } from '../../../styles/core';

const Section = ({ children, ...renderProps }) => (
  <Container {...renderProps}>
    <ContentWrapper>
      {children}
    </ContentWrapper>
  </Container>
);

export default Section;
