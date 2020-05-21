import {createMuiTheme} from '@material-ui/core/styles';

export const theme = createMuiTheme({
    direction: 'rtl',
    palette: {
        primary: {main: '#34347D'},
        secondary: {main: '#FFCC0F'},
    },
    overrides: {
        MuiGrid: {
            container: {
                textAlign: 'left',
            },
        },
    },
});
