import React from 'react';
import { useAccordion } from '@zendeskgarden/container-accordion';
import Heading from '../../atoms/Heading';
import { AccordionButton, AccordionWrapper, StyledButton } from './FAQs.style';

const Accordion = ({ data }, { expandable = false, collapsible = true } = {}) => {
  const {
    getHeaderProps,
    getTriggerProps,
    getPanelProps,
  } = useAccordion({
    expandedSections: [0],
    expandable,
    collapsible,
  });

  console.log(data);
  console.log(getHeaderProps);
  console.log(getTriggerProps);
  console.log(getPanelProps);

  return (
    <AccordionWrapper>
      <StyledButton>
        <Heading tag="2" size="MD">
          FAQs
        </Heading>
      </StyledButton>
      <section>
        {data.map(({ node }) => {
          const { id, frontmatter } = node;
          const { title } = frontmatter;
          return (
            <Heading tag="3" size="MD" key={`faq-heading-${id}-${title}`}>
              <AccordionButton type="button">
                {title}
              </AccordionButton>
            </Heading>
          );
        })}
      </section>
    </AccordionWrapper>
  );
};

export default Accordion;
