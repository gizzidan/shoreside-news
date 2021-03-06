import merge from 'lodash/merge';
import colors from './colors.ts';
import tags from './tags.ts';

const breakpoints = [
  ['phone_small', 320],
  ['phone', 376],
  ['phablet', 540],
  ['tablet', 813],
  ['desktop', 1070],
  ['desktop_medium', 1280],
  ['desktop_mediumlarge', 1380],
  ['desktop_large', 1440],
  ['desktop_xlarge', 1700],
];

const fonts = {
  serif: 'SangBleu Republic',
  serifFine: 'Noe Display',
  sansSerif: 'Suisse Intl',
  slogan: 'Suisse Intl',
  condensed: "Suisse Int'l Condensed",
  funHeader: 'Termina',
  monospace: `"Founders Mono", Consolas, Menlo, Monaco, source-code-pro, Courier New, monospace`,
};

const fontWeights = {
  slogan: `500`,
};

const fontSizes = {
  p: `19px`,
};

const widths = {
  regular: `630px`,
};

const colorModeTransition =
  'background 0.25s var(--ease-in-out-quad), color 0.25s var(--ease-in-out-quad)';

export default merge({
  initialColorMode: 'light',
  useCustomProperties: true,
  colorModeTransition,
  colors,
  fonts,
  fontWeights,
  fontSizes,
  widths,
  breakpoints,
  tags,
});
