import { createTheme } from "@mui/system"
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
    },
  },
})
