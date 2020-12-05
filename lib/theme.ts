import { red } from "@material-ui/core/colors";
import { createMuiTheme } from "@material-ui/core/styles";

const isDarkMode = false;
const primaryGreyed = "#627884";
const primaryLight = "#d6ebf5";

const theme = isDarkMode
  ? createMuiTheme({
      palette: {
        background: {
          default: "#000205de",
        },
        error: {
          main: red.A400,
        },
        foreground: {
          base: primaryLight,
          divider: primaryLight,
          dividers: primaryLight,
          disabled: primaryGreyed,
          disabledButton: primaryGreyed,
          disabledText: primaryGreyed,
          hintText: primaryLight,
          secondaryText: primaryGreyed,
          icon: primaryLight,
          icons: primaryLight,
          text: primaryLight,
        },
        primary: {
          main: "#39c",
        },
        secondary: {
          main: "#1f5c7a",
        },
      },
    })
  : createMuiTheme();

export default theme;
