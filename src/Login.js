import React, { useState, useEffect } from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import * as firebase from "firebase";
import axios from "axios";
import { ENV } from "./apis/constants";
import { Redirect } from "react-router-dom";

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const useStyles = makeStyles(theme => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1)
  },
  submit: {
    margin: theme.spacing(3, 0, 2)
  }
}));

export default function SignIn() {
  const classes = useStyles("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState();
  const [isSignUp, toggleSignUp] = useState(false);
  const [userTypes, setuserTypes] = useState({
    isManager: false,
    isMentor: false
  });

  useEffect(() => {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        user.getIdToken().then(idToken => {
          axios
            .get(`${ENV}/user`, {
              headers: {
                Authorization: "Bearer " + idToken
              }
            })
            .then(response => {
              console.log(response);
            });
        });
        // User is signed in.
        // var displayName = user.displayName;
        // var email = user.email;
        // var emailVerified = user.emailVerified;
        // var photoURL = user.photoURL;
        // var isAnonymous = user.isAnonymous;
        // var uid = user.uid;
        // var providerData = user.providerData;
        // ...
        console.log("user:", user);
      } else {
        // User is signed out.
        // ...
      }
    });
  }, []);

  const onEmailChange = event => {
    setEmail(event.target.value);
  };

  const onPasswordChange = event => {
    setPassword(event.target.value);
  };

  const handleSubmit = event => {
    event.preventDefault();
    isSignUp
      ? handleSignUp().then(successfulAuth)
      : handleSignIn().then(successfulAuth);
  };

  const successfulAuth = uid => {
    setuserTypes({
      isManager: false,
      isMentor: true
    });
    // axios.get(`${ENV}/user/${uid}`).then(function(response) {
    //   const { managerId, mentorId } = response.data;
    //   setuserTypes({
    //     isManager: managerId ? true : false,
    //     isMentor: mentorId ? true : false
    //   });
    // });
  };

  const handleSignIn = () => {
    return firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .catch(function(error) {
        console.log("signin error:", error);
        var errorCode = error.code;
        var errorMessage = error.message;
        if (errorCode === "auth/wrong-password") {
          alert("Wrong password.");
        } else {
          alert(errorMessage);
        }
        // document.getElementById("quickstart-sign-in").disabled = false; // TODO: imple in React
      });
  };

  const handleSignUp = () => {
    if (email.length < 4) {
      alert("Please enter an email address.");
      return;
    }
    if (password.length < 4) {
      alert("Please enter a password.");
      return;
    }
    return firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(function(result) {
        console.log("signup result:", result);
        return result.user.uid;
      })
      .catch(function(error) {
        console.log("signup error:", error);
        var errorCode = error.code;
        var errorMessage = error.message;
        if (errorCode === "auth/weak-password") {
          alert("The password is too weak.");
        } else {
          alert(errorMessage);
        }
        console.log(error);
      });
  };

  const sendPasswordReset = () => {
    firebase
      .auth()
      .sendPasswordResetEmail(email)
      .then(function() {
        alert("Password Reset Email Sent!");
      })
      .catch(function(error) {
        console.log("email sent error:", error);
        var errorCode = error.code;
        var errorMessage = error.message;
        if (errorCode === "auth/invalid-email") {
          alert(errorMessage);
        } else if (errorCode === "auth/user-not-found") {
          alert(errorMessage);
        }
      });
  };

  if (userTypes.isManager) {
    return <Redirect to="/manager" />;
  } else if (userTypes.isMentor) {
    return <Redirect to="/mentor" />;
  } else {
    return (
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            {isSignUp ? "Sign up" : "Sign in"}
          </Typography>
          <form className={classes.form} noValidate>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              value={email}
              onChange={onEmailChange}
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              value={password}
              onChange={onPasswordChange}
              label="Password"
              type="password"
              // id="password"
              autoComplete="current-password"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
              onClick={handleSubmit}
            >
              {isSignUp ? "Sign up" : "Sign in"}
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2" onClick={sendPasswordReset}>
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link
                  href="#"
                  variant="body2"
                  onClick={() => {
                    toggleSignUp(!isSignUp);
                  }}
                >
                  {isSignUp
                    ? "Already have an account? Sign in"
                    : "Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </form>
        </div>
        <Box mt={8}>
          <Copyright />
        </Box>
      </Container>
    );
  }
}
