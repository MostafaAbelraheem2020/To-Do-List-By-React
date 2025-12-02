import createTheme from "@mui/material/styles/createThemeNoVars";
const theme = createTheme({
  custom: { textColor: "#696e8f", baseColor: "#ddd", toolBarColor: "#357dc4" },
  primary: {
    light: "#757ce8",
    main: "#3f50b5",
    dark: "#002884",
    contrastText: "#fff",
  },
  secondary: {
    light: "#ff7961",
    main: "#f44336",
    dark: "#ba000d",
    contrastText: "#000",
  },
});
export default theme;
