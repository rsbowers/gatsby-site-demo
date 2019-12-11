import React from 'react';
import { graphql } from 'gatsby';
import { withTheme } from 'styled-components';

import SEO from '../components/atoms/SEO';
import FAQs from '../components/molecules/FAQs';

export const query = graphql`
  query faqsPageQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`;

const faqsPage = (props) => {
  const { data } = props;
  const { site } = (data || {});

  return (
    <>
      <SEO
        title="Omni-Channel Zendesk Commerce"
        description={site.description}
        keywords={site.keywords}
      />
      <FAQs />
    </>
  );
};

export default withTheme(faqsPage);
