import { createStitches } from "@stitches/react";

export const { styled, css, getCssText } = createStitches({
  theme: {
    colors: {
      primary: "rgb(57, 21, 21)",
      secondary: "#b92f2c",
      sectionBgColor: "#50505042",
      brightRed: "#ff1616",
    },
    fontSizes: {
      1: "48px",
      2: "36px",
      3: "30px",
      4: "20px",
      5: "18px",
      6: "16px",
      7: "12px",
      8: "10px",
    },
    fontWeights: {
      light: "300",
      normal: "500",
      bold: "600",
      bolder: "700",
    },
    lineHeights: {},
    letterSpacings: {},
    sizes: {},
    borderWidths: {},
    borderStyles: {},
    radii: {},
    shadows: {},
    zIndices: {},
    transitions: {},
  },
  media: {
    xs: "(max-width: 640px)",
    sm: "(max-width: 768px)",
    md: "(max-width: 1024px)",
    lg: "(max-width: 1280px)",
  },
});
