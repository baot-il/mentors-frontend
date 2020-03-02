import React from "react";
import "./styles.css";
import Checkout from "./Checkout";
import Login from "./Login";
import { create } from "jss";
import rtl from "jss-rtl";
import {
  ThemeProvider,
  StylesProvider,
  jssPreset
} from "@material-ui/core/styles";
import { theme } from "./MuiTheme";
import * as firebase from "firebase/app";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";

// Configure JSS
const jss = create({ plugins: [...jssPreset().plugins, rtl()] });
const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_DATABASE_URL,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID,
  measurementId: process.env.REACT_APP_MEASUREMENT_ID
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default function App() {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <StylesProvider jss={jss}>
          <div className="App" dir="rtl">
            <Login></Login>
          </div>
        </StylesProvider>
      </ThemeProvider>
      <Switch>
        <PrivateRoute path="/mentor">
          <Checkout />
        </PrivateRoute>
        <PrivateRoute path="/manager">
          <Checkout />
        </PrivateRoute>
      </Switch>
    </Router>
  );
}

function PrivateRoute({ children, ...rest }) {
  return (
    <Route
      {...rest}
      render={({ location }) =>
        firebase.auth().currentUser ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/",
              state: { from: location }
            }}
          />
        )
      }
    />
  );
}
