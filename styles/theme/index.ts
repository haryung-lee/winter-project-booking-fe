const palette = {
  white: "FFF",
  black: "#000",
  blue: {
    primary: "#4147DA",
  },
  red: {
    primary: "#EE5D5D",
  },
  grey: {
    100: "#F5F5F5",
    200: "#E6E6E6",
    300: "#D7D7D7",
    400: "#686868",
  },
};

const theme = {
  primary: {
    white: palette.white,
    black: palette.black,
    blue: palette.blue,
    red: palette.red,
  },
  text: {
    white: palette.white,
    black: palette.black,
  },
  fontSize: {
    title: "1.875rem", // 30px
    xxl: "1.5rem", // 24px
    xl: "1.25rem", // 20px
    lg: "1.125rem", // 18px
    md: "1rem", // 16px
    sm: "0.875rem", // 14px
    xs: "0.75rem", // 12px
    xxs: "0.625rem", // 10px
  },
  breakPoint: {
    mobile: "768px",
    tablet: "992px",
    desktop: "1200px",
  },
} as const;

export default theme;
