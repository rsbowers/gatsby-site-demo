import styled from 'styled-components';
import { Grid, Col, Row } from '@zendeskgarden/react-grid';
import { ChevronButton } from '@zendeskgarden/react-buttons';

// eslint-disable-next-line import/prefer-default-export
export const AccordionButton = styled.button`
  border-style: none;
  background: none;
  text-align: left;
  margin: .5vh;
  width: 100%;
  &&:focus {
  color: ${({ theme }) => theme.colors.accent2};
  }
`;

export const StyledButton = styled.button`
  border-style: none;
  background: none;
  text-align: left;
  margin: .5vh;
  width: 100%;
`;

export const AccordionWrapper = styled.div`
  margin-bottom: 1vh;
  margin-top: 2vh;
  border-bottom: ${({ theme }) => theme.colors.tertiary} solid;
`;

export const StyledCol = styled(Col)`
  max-width:50%;
  align-self: auto;
  padding: 4vw;
  @media (max-width: ${({ theme }) => theme.screen.MD}) {
    max-width: 100%;
    align-items: center;
  }
`;

export const StyledRow = styled(Row)`
  @media (max-width: ${({ theme }) => theme.screen.MD}) {
    display: block;
  }
`;

export const StyledFaqInfo = styled.div`
  margin-top: 3vh;
`;

export const StyledGrid = styled(Grid)`
  width: 120%;
`;

export const Cheveron = styled(ChevronButton)`
  border-style: none;
  background: none;
  box-shadow: none!important;
  background-color: transparent!important;
`;
