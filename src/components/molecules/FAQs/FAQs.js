/* eslint-disable react/no-danger */
import React from 'react';
import { Grid, Row, Col } from '@zendeskgarden/react-grid';
import { useStaticQuery, graphql } from 'gatsby';

import Heading from '../../atoms/Heading';
import Section from '../../atoms/Section';
import { Tagline } from '../../../styles/core';
import Accordion from './Accordion';
import { StyledCol, StyledRow, StyledGrid, StyledFaqInfo } from './FAQs.style';

const FAQ = () => {
  const data = useStaticQuery(graphql`
  query FAQQuerys {
    FAQ: allMarkdownRemark (
      sort: {order: ASC, fields: frontmatter___priority}
      filter: {fileAbsolutePath: {regex: "/(FAQs)/.*\\.md$/"}}) {
      edges {
        node {
          id
          frontmatter {
            title
            category
          }
          html
        }
      }
    }
  }
`);

  const {
    FAQ: {
      edges: faqs,
    },
  } = data;

  return (
    <div>
      <Section format="highlight" mode="halfscreen">
        <Grid>
          <Row>
            <Col md={6}>
              <Heading tag="1">
                <div>Frequently</div>
                <Tagline>asked questions.</Tagline>
              </Heading>
            </Col>
          </Row>
        </Grid>
      </Section>
      <Section format="light">
        <StyledGrid>
          <StyledRow>
            <StyledCol size={5}>
              <Accordion data={faqs} expandable collapsible />
            </StyledCol>
            <StyledCol>
              <StyledFaqInfo>
                <Heading tag="2" size="MD">FAQ Title</Heading>
                <div>FAQ Body</div>
              </StyledFaqInfo>
            </StyledCol>
          </StyledRow>
        </StyledGrid>
      </Section>
    </div>
  );
};

export default FAQ;
