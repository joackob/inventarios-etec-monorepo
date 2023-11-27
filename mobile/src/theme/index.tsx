import React, { ReactNode } from "react";
import { ThemeProvider, createTheme } from "@rneui/themed";

/* CSS HEX */
// --space-blue: #1F2554ff;
// --jordy-blue: #91BDE1ff;
// --black-olive: #2C281Aff;
// --harvest-gold: #F7AC14ff;
// --navajo-white: #FCDAA3ff;

const theme = createTheme({
  components: {},
  lightColors: {
    primary: "#64748b",
    secondary: "#64748b",
    grey0: "#64748b",
    black: "#020617ff",
    white: "#f8fafcff",
    background: "#f8fafcff",
  },
});

const Theme = ({ children }: { children: ReactNode }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export default Theme;
