import { createMuiTheme } from "@material-ui/core/styles"
import Theme from "./theme"

export default createMuiTheme({
  palette: {
    primary: {
      dark: Theme.colors.priamaryDark,
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
