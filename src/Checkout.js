import React, { useEffect, useState } from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Paper from "@material-ui/core/Paper";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import PersonalDetails from "./PersonalDetails";
import Mentoring from "./Mentoring";
import TRANSLATION from './translation/hebrew';
import { Formik, Form } from 'formik';
import { fetchMentor } from './apis/mentors';
import { convertMentorApiToMentor, convertMentorToMentorApi } from './utils/utils';
import { useStyles } from './Checkout.styles';
import { updateMentor } from './apis/mentors';

const steps = ["פרטים אישיים", "זמינות למנטורינג"];

function getStepContent(step) {
  switch (step) {
    case 0:
      return <PersonalDetails />;
    case 1:
      return <Mentoring />;
    default:
      throw new Error("Unknown step");
  }
}

export default function Checkout() {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const [mentor, setMentor] = React.useState({
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    workplace: '',
    jobTitle: '',
    bio: '',
    academicBio: '',
    jobSearch: '',
    availability: '',
    matchPreferences: '',
    isMultipleMentees: false,
    canSimulate: false,
    comments: ''
  });

  useEffect(() => {
    fetchMentorData();
  }, [])

  async function fetchMentorData() {
    const mentorData = await fetchMentor(firebase.auth().currentUser.uid);
    setMentor( convertMentorApiToMentor(mentorData));
  }


  const handleNext = () => {
    setActiveStep(activeStep + 1);
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  function navigationButtons(submitForm){
    const isLastStep = activeStep === steps.length - 1;
   return (<div className={classes.buttons}>
     {activeStep !== 0 && (
         <Button onClick={handleBack} className={classes.button}>
           { TRANSLATION.GENERAL.BACK }
         </Button>
     )}
     <Button
         variant="contained"
         color="primary"
         onClick={ isLastStep ? submitForm : handleNext }
         className={classes.button}>
       { isLastStep ? TRANSLATION.GENERAL.SEND : TRANSLATION.GENERAL.NEXT}
     </Button>
   </div>);
  };

  function finalStep(){
    return (<React.Fragment>
      <Typography variant="h5" gutterBottom>
        Thank you for your order.
      </Typography>
      <Typography variant="subtitle1">
        Your order number is #2001539. We have emailed your order
        confirmation, and will send you an update when your order has
        shipped.
      </Typography>
    </React.Fragment>);
  }

  function renderStepper() {
    return (<React.Fragment>
      <Typography component="h1" variant="h4" align="center">
        הרשמה כמנטורית
      </Typography>
      <Stepper activeStep={activeStep} className={classes.stepper}>
        {steps.map(label => (
            <Step key={label}>
              <StepLabel className={classes.step}>{label}</StepLabel>
            </Step>
        ))}
      </Stepper>
    </React.Fragment>);
  }

  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar position="absolute" color='primary' className={classes.appBar} >
        <Toolbar>
            { TRANSLATION.GENERAL.BAOT }
        </Toolbar>
      </AppBar>
      <main className={classes.layout}>
        <Paper className={classes.paper}>
          { renderStepper() }
          <React.Fragment>
            {activeStep === steps.length ? (<React.Fragment>
                { finalStep() }
                </React.Fragment>
            ) : (
              <React.Fragment>
                <Formik
                    enableReinitialize
                    initialValues={ mentor }
                    onSubmit={(values) => {
                      updateMentor(firebase.auth().currentUser.uid, convertMentorToMentorApi(values))
                    }}>
                  {({ submitForm, isSubmitting }) => (
                      <Form>
                        {getStepContent(activeStep)}
                        {navigationButtons(submitForm)}
                      </Form>
                  )}
                </Formik>
              </React.Fragment>
            )}
          </React.Fragment>
        </Paper>
      </main>
    </React.Fragment>
  );
}
