import React from "react";
import "./styles.css";
import Checkout from "./Checkout";
import { create } from 'jss';
import rtl from 'jss-rtl';
import { ThemeProvider, StylesProvider, jssPreset } from '@material-ui/core/styles';
import { theme } from './MuiTheme'

// Configure JSS
const jss = create({ plugins: [...jssPreset().plugins, rtl()] });;

export default function App() {
    return (<ThemeProvider theme={theme}>
        <StylesProvider jss={jss}>
            <div className="App" dir='rtl'>
                <Checkout/>
            </div
        ></StylesProvider>
    </ThemeProvider>);
}
