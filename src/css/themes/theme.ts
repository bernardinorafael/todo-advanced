export const theme = {
  colors: {
    gray: {
      100: "#E1E1E6",
      300: "#C4C4CC",
      400: "#8D8D99",
      500: "#7C7C8A",
      600: "#323238",
      700: "#282826",
      800: "#1c1c1a",
      900: "#161615",
    },

    cyan: {
      300: "#98e1fb",
      500: "#81d8f7",
      700: "#48cae4",
    },

    violet: {
      50: "#9d4edd20",
      100: "#9d4edd50",
      300: "#9d4edd",
      500: "#7b2cbf",
      700: "#5a189a",
    },

    green: {
      50: "#00B37E20",
      100: "#00B37E50",
      300: "#00B37E",
      500: "#00875F",
      700: "#015F43",
    },

    red: {
      50: "#F75A6820",
      100: "#F75A6850",
      300: "#F75A68",
      500: "#AB222E",
      700: "#7A1921",
    },
  },

  fontSize: {
    xxs: "0.625rem",
    xs: "0.75rem",
    sm: "0.875rem",
    md: "1rem",
    lg: "1.125rem",
    xl: "1.25rem",
    xxl: "1.5rem",
    xxxl: "2rem",
  },

  fontWeight: {
    regular: "400",
    semibold: "600",
    bold: "700",
  },

  lineHeight: {
    small: "100%",
    short: "140%",
    base: "160%",
  },

  radii: {
    px: "1px",
    xs: "4px",
    sm: "6px",
    full: "99999px",
  },
} as const
