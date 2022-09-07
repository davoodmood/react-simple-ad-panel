import { createTheme } from '@mui/material/styles';

import type
{
    Theme,
} from '@mui/material/styles';

const theme: Theme = createTheme({
    typography: {
        fontFamily: [
            'Lato',
            'sans-serif'
        ].join(',')
    },
    palette: {
        mode: 'dark',
        primary: {
            main: '#ffa300',
            light: '#ffd449',
            dark: '#c67400',
            contrastText: '#000000',
        },
        secondary: {
            main: '#ff8500',
            light: '#ffb644',
            dark: '#c55600',
            contrastText: '#000000',
        },
        error: {
            main: '#A21C2B',
        },
    },
});


export default theme;
