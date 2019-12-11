import { css } from 'styled-components';

const commonOverrides = ({ theme, format }) => format && `
  background-color: ${theme.formats[format].background}!important;
  color: ${theme.formats[format].color};
`;

export default {
  'grid.row': css`
  ${commonOverrides}
  ${({ pad }) => (
    pad ? 'padding: 2em 0' : ''
  )};
  `,
  'grid.col': css`
  ${commonOverrides}
  ${({ alignSelf }) => (`
    align-self: ${alignSelf || 'center'};
  `
  )};
  ${({ nowrap }) => (nowrap
    ? 'white-space: nowrap;' : ''
  )};
  ${({ align }) => (align
    ? `text-align: ${align}` : ''
  )};
  ${({ theme, alignMobile }) => (alignMobile
    ? `
      @media (max-width: ${theme.screen.SM}) {
        text-align: ${alignMobile};
      }
    ` : ''
  )};
  `,
  'buttons.button': css`
  ${commonOverrides}
  ${({ primary, theme, disabled, format = 'default' }) => (`
    margin: 0 2px;
    padding: 0 1.5em;
    text-transform: uppercase;
    font-family: ${theme.typography.heading.default};
    border-color: transparent!important;
    transition: background .4s ease, filter .2s ease, transform .2s ease;
    box-shadow: 0 2px 2px 0 ${theme.colors.shadow1}, 2px 2px 6px 0 ${theme.colors.shadow2}!important;
    ${disabled
      ? `
        cursor: no-drop!important;
        color: ${theme.colors.disabled}!important;`
      : `
    background-color: ${primary
      ? theme.formats[theme.formats[format].compliment].background
      : theme.formats[theme.formats[format].compliment].accent
    }!important;
    color: ${primary
      ? theme.formats[theme.formats[format].compliment].color
      : theme.formats[theme.formats[format].compliment].background
    }!important;


    &&:hover {
      filter: saturate(40%) brightness(1.2);
      transform: translate(0px, -.5px);
    }
    `}
  `)};
  `,
  'modals.modal_view': css`
    width: 70%;
    height: 80%;
    max-height: 762px;
    @media (max-width: ${({ theme }) => theme.screen.calc(theme.screen.MD, 'max')}) {
      width: 100%;
      height: 100%;
      min-height: 100%;
    }
  `,
  'modals.header': css`
    text-transform: uppercase;
  `,
};
