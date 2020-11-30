import { fonts, fontWeights } from "../theme";

const makeFontWeight = (type) => ({ strong }) => `font-weight: ${strong ? fontWeights[3] : fonts[type].fontWeight};`;

export default makeFontWeight;
