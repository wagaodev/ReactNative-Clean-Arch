import { css } from 'styled-components/native';

const FONT_FAMILY = 'Roboto-Regular';

const FONT_WEIGHT_400 = '400';
const FONT_WEIGHT_700 = '700';

const FONT_SIZE_12 = 12;
const FONT_SIZE_14 = 14;
const FONT_SIZE_16 = 16;
const FONT_SIZE_20 = 20;
const FONT_SIZE_24 = 24;
const FONT_SIZE_36 = 36;
const FONT_SIZE_48 = 48;
const FONT_SIZE_80 = 80;
const FONT_SIZE_96 = 96;

const LINE_HEIGHT_112 = 112;
const LINE_HEIGHT_96 = 96;
const LINE_HEIGHT_56 = 56;
const LINE_HEIGHT_48 = 48;
const LINE_HEIGHT_32 = 32;
const LINE_HEIGHT_28 = 28;
const LINE_HEIGHT_24 = 24;
const LINE_HEIGHT_20 = 20;
const LINE_HEIGHT_100_PERCENT = 100 / 1000;
const LINE_HEIGHT_180_PERCENT = 180 / 1000;

export const Headline1 = css`
  font-family: ${FONT_FAMILY};
  font-size: ${FONT_SIZE_96}px;
  font-weight: ${FONT_WEIGHT_400};
  line-height: ${LINE_HEIGHT_112}px;
`;

export const Headline1Bold = css`
  font-family: ${FONT_FAMILY};
  font-size: ${FONT_SIZE_96}px;
  font-weight: ${FONT_WEIGHT_700};
  line-height: ${LINE_HEIGHT_112}px;
`;

export const Headline2 = css`
  font-family: ${FONT_FAMILY};
  font-size: ${FONT_SIZE_80}px;
  font-weight: ${FONT_WEIGHT_400};
  line-height: ${LINE_HEIGHT_96}px;
`;

export const Headline2Bold = css`
  font-family: ${FONT_FAMILY};
  font-size: ${FONT_SIZE_80}px;
  font-weight: ${FONT_WEIGHT_700};
  line-height: ${LINE_HEIGHT_96}px;
`;

export const Headline3 = css`
  font-family: ${FONT_FAMILY};
  font-size: ${FONT_SIZE_48}px;
  font-weight: ${FONT_WEIGHT_400};
  line-height: ${LINE_HEIGHT_56}px;
`;

export const Headline3Bold = css`
  font-family: ${FONT_FAMILY};
  font-size: ${FONT_SIZE_48}px;
  font-weight: ${FONT_WEIGHT_700};
  line-height: ${LINE_HEIGHT_56}px;
`;

export const Headline4 = css`
  font-family: ${FONT_FAMILY};
  font-size: ${FONT_SIZE_36}px;
  font-weight: ${FONT_WEIGHT_400};
  line-height: ${LINE_HEIGHT_48}px;
`;

export const Headline4Bold = css`
  font-family: ${FONT_FAMILY};
  font-size: ${FONT_SIZE_36}px;
  font-weight: ${FONT_WEIGHT_700};
  line-height: ${LINE_HEIGHT_48}px;
`;

export const Headline5 = css`
  font-family: ${FONT_FAMILY};
  font-size: ${FONT_SIZE_24}px;
  font-weight: ${FONT_WEIGHT_400};
  line-height: ${LINE_HEIGHT_32}px;
`;

export const Headline5Bold = css`
  font-family: ${FONT_FAMILY};
  font-size: ${FONT_SIZE_24}px;
  font-weight: ${FONT_WEIGHT_700};
  line-height: ${LINE_HEIGHT_32}px;
`;

export const Headline6 = css`
  font-family: ${FONT_FAMILY};
  font-size: ${FONT_SIZE_20}px;
  font-weight: ${FONT_WEIGHT_400};
  line-height: ${LINE_HEIGHT_28}px;
`;

export const Headline6Bold = css`
  font-family: ${FONT_FAMILY};
  font-size: ${FONT_SIZE_20}px;
  font-weight: ${FONT_WEIGHT_700};
  line-height: ${LINE_HEIGHT_28}px;
`;

export const Body1 = css`
  font-family: ${FONT_FAMILY};
  font-size: ${FONT_SIZE_16}px;
  font-weight: ${FONT_WEIGHT_400};
  line-height: ${LINE_HEIGHT_24}px;
`;

export const Body1Bold = css`
  font-family: ${FONT_FAMILY};
  font-size: ${FONT_SIZE_16}px;
  font-weight: ${FONT_WEIGHT_700};
  line-height: ${LINE_HEIGHT_24}px;
`;

export const Body2 = css`
  font-family: ${FONT_FAMILY};
  font-size: ${FONT_SIZE_14}px;
  font-weight: ${FONT_WEIGHT_400};
  line-height: ${LINE_HEIGHT_20}px;
`;

export const Body2Bold = css`
  font-family: ${FONT_FAMILY};
  font-size: ${FONT_SIZE_14}px;
  font-weight: ${FONT_WEIGHT_700};
  line-height: ${LINE_HEIGHT_20}px;
`;

export const Overline = css`
  font-family: ${FONT_FAMILY};
  font-size: ${FONT_SIZE_12}px;
  font-weight: ${FONT_WEIGHT_400};
  letter-spacing: ${LINE_HEIGHT_100_PERCENT}px;
`;

export const Caption = css`
  font-family: ${FONT_FAMILY};
  font-size: ${FONT_SIZE_12}px;
  font-weight: ${FONT_WEIGHT_700};
  letter-spacing: ${LINE_HEIGHT_180_PERCENT}px;
`;
