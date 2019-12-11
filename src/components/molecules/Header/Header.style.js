import styled from 'styled-components';

export const StyledHeader = styled.div`
  @media (max-width: ${({ theme }) => theme.screen.calc(theme.screen.MD, 'max')}) {
    display: none;
  }
`;

// Top Navigation Bar
export const HeaderWrapper = styled.div`
  display: grid;
  flex-wrap: nowrap;
  @media (min-width: ${({ theme }) => theme.screen.XL}) {
    padding: 2em 0;
  }
  text-align: right;
  button {
    margin-left: 1em;
  }
`;

export const LogoImage = styled.div`
  text-align: left;
  padding-bottom: 10px;
  img {
    width: auto;
    height: 30px;
  }
`;
