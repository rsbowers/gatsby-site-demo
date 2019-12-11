import React from 'react';
import { Grid, Row, Col } from '@zendeskgarden/react-grid';
import { withTheme } from 'styled-components';

import { Tagline } from '../styles/core';
import Heading from '../components/atoms/Heading';
import Section from '../components/atoms/Section';
import SEO from '../components/atoms/SEO';

const NotFoundPage = () => (
  <>
    <SEO title="404: Not Found" />
    <Section format="accent2" mode="fullscreen">
      <Grid>
        <Row>
          <Col md={6}>
            <Heading tag="1">
              <div>Uh Oh.</div>
              <Tagline>This page wasn't found.</Tagline>
            </Heading>
          </Col>
        </Row>
      </Grid>
    </Section>
  </>
);

export default withTheme(NotFoundPage);
