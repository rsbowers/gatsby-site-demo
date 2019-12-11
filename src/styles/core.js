import React, { cloneElement } from 'react';
import styled from 'styled-components';

const headingFont = ({
  theme, tag, size, weight, transform, type = 'default',
}) => `
${weight ? `font-weight: ${weight};` : ''}
${transform ? `text-transform: ${transform};` : ''}
${theme.typography.heading[type] ? `font-family: ${theme.typography.heading[type]};` : ''}
font-size: ${
  size
    ? theme.typography.sizes[size]
    : theme.typography.sizes[theme.typography.sizes.headings[tag]]
};
`;

const handleMode = ({ mode, theme, format = 'default' }) => {
  switch (mode) {
    case 'halfscreen':
      return `
        height: 50vh;
        max-height: 1280px;
        box-sizing: border-box;
        padding: 5em 1em;
        display: flex;
        align-items: center;
      `;
    case 'fullscreen':
      return `
        height: 100vh;
        max-height: 1280px;
        box-sizing: border-box;
        padding: 5em 1em;
        display: flex;
        align-items: center;
      `;
    case 'overlay':
      return `
        position: absolute;
        transform: translateY(-2em);
        left: 0;
        right: 0;
        margin-left: 10vw;
        margin-right: 10vw;
        border-radius: 15px;
        box-shadow: 0 15px 50px ${theme.formats[format].color};
        padding: 2em 1em;

        div {
          width: 100%;
        }
      `;
    case 'parent':
      return 'padding: 0';
    default:
      return 'padding: 5em 1em;';
  }
};

export const NoWrap = styled.span`
  white-space: nowrap;
`;

export const Container = styled(
  ({ component = <section />, ...props }) => cloneElement(component, props),
)`
${(props) => handleMode(props)};
${({ offset }) => offset && `
  padding-top: ${offset};
`};
${({ theme, format }) => format && `
  background-color: ${theme.formats[format].background};
  color: ${theme.formats[format].color};
`};
`;

export const ContentWrapper = styled.div`
  width: 80%;
  max-width: ${({ theme }) => theme.screen.XL};
  margin: 0px auto;
`;

export const SectionTitle = styled.h2`
  display: flex;
  justify-content center;
  align-items: center;
`;

export const Tagline = styled.div`
${({ theme, format = 'default' }) => (`
    color: ${theme.formats[theme.formats[format].compliment].accent}!important;
`)};
`;

export const ImageWrapper = styled.div`
${({ width, height, center }) => `
  ${center ? 'text-align: center;' : ''}
  width: ${width || '80%'};
  height: ${height || 'auto'};
  margin: 0 auto;
  img {
    width: ${width || '80%'};
    height: ${height || 'auto'};
  }
`}
`;

export const NavigationLink = styled.a`
  display: inline-flex;
  margin: 0 0.75em;
  text-transform: uppercase;
  font-family: ${({ theme }) => theme.typography.heading.default};
  letter-spacing: 0.08em;
  text-decoration: none;
  opacity: 0.9;
  vertical-align: bottom;
  padding-bottom: 9px;
  color: ${({ theme }) => theme.colors.light};
  &:hover, &:active {
    opacity: 1;
  }
`;

export const Heading1 = styled.h1`
  ${({ theme, size, type, weight, transform }) => `
    ${headingFont({ theme, size, type, weight, transform, tag: 'h1' })}
  `}
`;

export const Heading2 = styled.h2`
  ${({ theme, size, type, weight, transform }) => `
    ${headingFont({ theme, size, type, weight, transform, tag: 'h2' })}
  `}
`;

export const Heading3 = styled.h3`
  ${({ theme, size, type, weight, transform }) => `
    ${headingFont({ theme, size, type, weight, transform, tag: 'h3' })}
  `}
`;

export const Heading4 = styled.h4`
  ${({ theme, size, type, weight, transform }) => `
    ${headingFont({ theme, size, type, weight, transform, tag: 'h4' })}
  `}
`;

export const Heading5 = styled.h5`
  ${({ theme, size, type, weight, transform }) => `
    ${headingFont({ theme, size, type, weight, transform, tag: 'h5' })}
  `}
`;

export const Heading6 = styled.h6`
  ${({ theme, size, type, weight, transform }) => `
    ${headingFont({ theme, size, type, weight, transform, tag: 'h6' })}
  `}
`;

export const ColorPanel = styled.span`
  display: block;
  position: absolute;
  z-index: -1;
  width: 100%;
  top: 0;
  bottom: 0;
  left: 0;
  height: 100%;
  ${({ top }) => `
  ${top && `
    transform-origin: 0 50%;
    width: 0;
  `}
  `};
  @media (max-width: ${({ theme }) => theme.screen.calc(theme.screen.MD, 'max')}) {
    display: none;
  }
`;

export const ColorOverlay = styled.span`
  display: block;
  position: absolute;
  right: 0;
  left: 0;
  top: -50%;
  bottom: 0;
  transform: translateX(40%);
  ${({ opacity }) => `
    ${opacity && `
      opacity: ${opacity};
    `}
  `}
`;

export const ColorOverlayAlternate = styled.span`
  display: block;
  position: absolute;
  top: -100%;
  transform: translateX(-40%);
  left: 0;
  right: 0;
  bottom: -90%;
`;

export const AngledBackground = styled(
  ({ component = <div />, ...props }) => cloneElement(component, props),
)`
  &::before {
    content: " ";
    display: block;
    position: absolute;
    z-index: 0;
    top: 225vh;
    right: 75vw;
    width: 150vw;
    height: 100vw;
    background: ${({ theme, format }) => (format ? theme.formats[format].background : theme.colors.dark)};
    transform: rotate(-35deg);
    opacity: .3;
  }
`;
