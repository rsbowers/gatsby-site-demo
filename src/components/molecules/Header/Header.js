import React, { useContext } from 'react';
import { Grid, Row, Col } from '@zendeskgarden/react-grid';

import { GlobalState } from '../../../context/GlobalContext';
import { NavigationLink } from '../../../styles/core';
import { StyledHeader, HeaderWrapper } from './Header.style';

const Header = ({ items }) => {
  const state = useContext(GlobalState);
  const { activeFormat } = state;

  return (
    <StyledHeader>
      <HeaderWrapper>
        <Grid>
          <Row>
            <Col md={3}>&nbsp;</Col>
            <Col md={9} nowrap>
              {items.map(({ text, link, CTA }, index) => (
                CTA
                  ? (<CTA key={`header-${index}`} format={activeFormat} />)
                  : (
                    <NavigationLink key={`header-${index}`} href={link}>{text}</NavigationLink>
                  )
              ))}
            </Col>
          </Row>
        </Grid>
      </HeaderWrapper>
    </StyledHeader>
  );
};

export default Header;
