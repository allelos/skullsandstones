import { fonts } from '../theme';

const makeLineHeight = type => `line-height: ${fonts[type].lineHeight}`;

export default makeLineHeight;