import { createTheme } from "@mui/material/styles"
import Theme from "./theme"

export default createTheme({
  palette: {
    primary: {
      dark: Theme.colors.primaryDark,
      light: Theme.colors.primaryLight,
      main: Theme.colors.primary,
    },
    secondary: {
      main: Theme.colors.complementary,
    },
    text: {
      primary: Theme.colors.text,
      secondary: Theme.colors.textSecondary,
    },
  },
  spacing: (factor: number) => `${factor}rem`,
  typography: {
    fontFamily: "Open Sans, sans-serif",
    h1: {
      fontSize: `2.5rem`,
    },
    h2: {
      fontSize: `2.25rem`,
    },
    h3: {
      fontSize: `2rem`,
    },
    h4: {
      fontSize: `1.75rem`,
    },
    h5: {
      fontSize: `1.5rem`,
    },
    h6: {
      fontSize: `1.25rem`,
    },
    body1: {
      fontSize: `1.1rem`,
    },
    subtitle1: {
      fontStyle: `italic`,
    },
  },
})
