import colors from './colors';
import typography from './typography';

const breakpoints = {
  XS: '577px',
  SM: '769px',
  MD: '993px',
  LG: '1201px',
  XL: '1921px',
};

const theme = {
  colors,
  typography,
  body: {
    background: colors.primary,
    color: colors.light,
  },
  formats: {
    default: {
      background: colors.tertiary,
      color: colors.primary,
      accent: colors.toAlpha(colors.primary),
      compliment: 'medium',
    },
    dark: {
      background: colors.dark,
      color: colors.light,
      accent: colors.toAlpha(colors.secondary),
      compliment: 'light',
    },
    medium: {
      background: colors.primary,
      color: colors.light,
      accent: colors.toAlpha(colors.tertiary),
      compliment: 'dark',
    },
    light: {
      background: colors.light,
      color: colors.primary,
      accent: colors.toAlpha(colors.tertiary),
      compliment: 'medium',
    },
    highlight: {
      background: colors.secondary,
      color: colors.primary,
      accent: colors.toAlpha(colors.secondary),
      compliment: 'medium',
    },
    accent1: {
      background: colors.accent1,
      color: colors.light,
      accent: colors.toAlpha(colors.secondary),
      compliment: 'medium',
    },
    accent2: {
      background: colors.accent2,
      color: colors.light,
      accent: colors.toAlpha(colors.secondary),
      compliment: 'medium',
    },
  },
  screen: {
    XS: breakpoints.XS,
    SM: breakpoints.SM,
    MD: breakpoints.MD,
    LG: breakpoints.LG,
    XL: breakpoints.XL,
    calc: ((size, minMax) => {
      let pixels = size.substring(0, size.length - 2);
      pixels = minMax === 'max' ? pixels - 1 : pixels;
      return `${pixels}px`;
    }),
  },
};

export default theme;
