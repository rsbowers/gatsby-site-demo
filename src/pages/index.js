import React from 'react';
import { graphql } from 'gatsby';
import { withTheme } from 'styled-components';

import SEO from '../components/atoms/SEO';

export const query = graphql`
  query homePageQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`;

const IndexPage = (props) => {
  const { data } = props;
  const { site } = (data || {});

  return (
    <>
      <SEO
        title="Commerce"
        description={site.description}
        keywords={site.keywords}
      />
    </>
  );
};

export default withTheme(IndexPage);
