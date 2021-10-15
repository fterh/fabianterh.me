const Theme = {
  colors: {
    primary: `#ff512f`,
    primaryDark: `#b33921`,
    primaryLight: `#ff856d`,
    secondary: `#dd2476`,
    complementary: `#22809F`,
    /* ~~~ Great barrier reef ~~~ */
    background: `#ffffff`,
    border: `#eeeeee`,
    footerBackground: `#141e30`,
    footerText: `#eeeeee`,
    text: `#333333`,
    textSecondary: `rgba(0, 0, 0, 0.54)`,
  },
  layout: {
    maxWidth: `960px`,
  },
  paddings: {
    footer: `1rem`,
    header: `1rem`,
    body: `1rem`,
  },
  typography: {
    footerFontSize: `0.8rem`,
    fontFamily: `Roboto, sans-serif`,
    fontFamilyMonospace: `"Noto Sans Mono", monospace`,
  },
}

export const Mixins = {
  gradientedText: `
    background: linear-gradient(${Theme.colors.primary}, ${Theme.colors.secondary});
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  `,
}

export const Breakpoints = {
  mobile: `480px`,
  tablet: `768px`,
}

export default Theme
