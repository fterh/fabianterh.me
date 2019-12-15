const Theme = {
  colors: {
    primary: `#ff512f`,
    secondary: `#dd2476`,
    /* ~~~ Great barrier reef ~~~ */
    background: `#ffffff`,
    footerBackground: `#141e30`,
    footerText: `#eeeeee`,
    headerBorder: `#eeeeee`,
    text: `#333333`,
  },
  paddings: {
    footer: `1rem`,
    header: `1rem`,
  },
  typography: {
    footerFontSize: `0.8rem`,
    fontFamily: `Roboto, sans-serif`,
    fontFamilyMonospace: `Roboto Mono, monospace`,
  },
}

export const Mixins = {
  gradientedText: `
    background: linear-gradient(${Theme.colors.primary}, ${Theme.colors.secondary});
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  `,
}

export default Theme
