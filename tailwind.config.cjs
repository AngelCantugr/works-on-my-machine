const { fontFamily } = require("tailwindcss/defaultTheme");
const config = require("./tailwind.theme.config.cjs");
/**
 * Find the applicable theme color palette, or use the default one
 */
const themeConfig =
  process.env.THEME_KEY && config[process.env.THEME_KEY]
    ? config[process.env.THEME_KEY]
    : config.default;
const { colors } = themeConfig;
module.exports = {
  darkMode: "class",
  content: ["./public/**/*.html", "./src/**/*.{astro,js,ts}"],
  safelist: ["dark"],
  theme: {
    fontFamily: {
      sans: [
        "system-ui",
        "-apple-system",
        "BlinkMacSystemFont",
        "Segoe UI",
        "Roboto",
        "Helvetica Neue",
        "Arial",
        "sans-serif",
      ],
      mono: ["Fira Code", "Menlo", "Monaco", "Courier New", "monospace"],
    },
    extend: {
      colors: {
        theme: {
          ...colors,
        },
      },
      typography: (theme) => ({
        dark: {
          css: {
            color: theme("colors.gray.200"),
            fontSize: "1.125rem",
            lineHeight: "1.4",
            blockquote: {
              color: colors.dark.primary,
              borderColor: colors.primary,
              fontWeight: "500",
            },
            "blockquote > p::before, p::after": {
              color: colors.primary,
            },
            code: {
              fontFamily: theme("fontFamily.mono").join(", "),
            },
          },
        },
        DEFAULT: {
          css: {
            fontSize: "1.125rem",
            lineHeight: "1.4",
            a: {
              color: colors.dark.primary,
              fontWeight: "500",
              "&:hover": {
                color: colors.primary,
              },
            },
            p: {
              marginTop: "0.75em",
              marginBottom: "0.75em",
            },
            blockquote: {
              color: colors.primary,
              fontSize: theme("fontSize.xl"),
              borderColor: colors.dark.primary,
              fontWeight: "500",
            },
            "blockquote > p::before, p::after": {
              color: colors.dark.primary,
            },
            h1: {
              color: colors.dark.secondary,
              fontSize: "2.5rem",
              fontWeight: "800",
            },
            h2: {
              color: colors.dark.secondary,
              fontSize: "2rem",
              fontWeight: "700",
              marginTop: "1.5em",
              marginBottom: "0.75em",
            },
            h3: {
              color: colors.dark.secondary,
              fontSize: "1.5rem",
              fontWeight: "600",
              marginTop: "1.25em",
              marginBottom: "0.5em",
            },
            li: {
              marginTop: "0.05em",
              marginBottom: "0.05em",
              lineHeight: "1.2",
            },
            ul: {
              marginTop: "0",
              marginBottom: "0",
            },
            ol: {
              marginTop: "0",
              marginBottom: "0",
            },
            "li > p": {
              marginTop: "0",
              marginBottom: "0",
              lineHeight: "1.2",
            },
            "ul > li, ol > li": {
              marginTop: "0",
              marginBottom: "0",
            },
            code: {
              fontFamily: theme("fontFamily.mono").join(", "),
            },
          },
        },
      }),
    },
  },
  variants: {
    extend: { typography: ["dark"] },
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("@tailwindcss/forms"),
    require("@tailwindcss/aspect-ratio"),
  ],
};
