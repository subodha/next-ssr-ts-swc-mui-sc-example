import createTheme from '@mui/material/styles/createTheme'
import { purple } from '@mui/material/colors';

export const theme = createTheme({
  palette: {
    primary: {
      main: '#4caf50',
    },
    secondary: {
      main: '#ff5722',
    },
  },
});


export type ThemeType = typeof theme
