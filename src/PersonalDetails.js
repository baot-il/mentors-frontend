import React, { useEffect, useState } from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from './TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import TRANSLATE from './translation/hebrew';
import { fetchYearsExperience, fetchTechnologies } from './apis/technologies';
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import { Field } from 'formik';
import * as firebase from "firebase";
import axios from "axios";

export default function AddressForm() {
  const [technologies, setTechnologies] = useState([]);
  const [yearsExperience, setYearsExperience] = useState([]);

    useEffect(() => {
        fetchAllTechnologies();
        fetchAllYearsOfExperience();
    }, []);

    async function fetchAllTechnologies() {
        const allTechnologies = await fetchTechnologies();
        setTechnologies(allTechnologies);
    }

    async function fetchAllYearsOfExperience() {
        const allTechnologies = await fetchYearsExperience();
        setYearsExperience(allTechnologies);
    }

  function renderTechnologies(){
    return (<Grid item xs={12}>
        { TRANSLATE.FORM.RELEVANT_TAGS }
      <Grid container xs={12}>
        { technologies.map(item => <Grid item xs={12} sm={6}><FormControlLabel
            control={<Checkbox name="technolgies" value='false' />}
            label={ item }/>
        </Grid>)}
      </Grid>
    </Grid>);
  }

  function renderYearsOfExperience() {
      return <Grid item xs={12} sm={6}>
              <FormControl required fullWidth>
                  <InputLabel>{ TRANSLATE.FORM.YEARS_OF_EXPERIENCE }</InputLabel>
              <Select id="yearsOfExperience">
                  { yearsExperience.map(item => <MenuItem value={item}>{item}</MenuItem>) }
              </Select>
              </FormControl>
          </Grid>
  }

  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        פרטים אישיים והיסטוריה מקצועית
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
            <TextField name='firstName' label={ TRANSLATE.FORM.FIRST_NAME } isRequired/>
        </Grid>
        <Grid item xs={12} sm={6}>
            <TextField name='lastName' label={ TRANSLATE.FORM.LAST_NAME } isRequired/>
        </Grid>
        <Grid item xs={12} sm={6}>
            <TextField name='email' label={ TRANSLATE.FORM.EMAIL } isRequired/>
        </Grid>
        <Grid item xs={12} sm={6}>
            <TextField name='phoneNumber' label={ TRANSLATE.FORM.PHONE_NUMBER } isRequired/>
        </Grid>
        <Grid item xs={12} sm={6}>
            <TextField name='workplace' label={ TRANSLATE.FORM.WORKPLACE } isRequired/>
        </Grid>
        <Grid item xs={12} sm={6}>
            <TextField name='jobTitle' label={ TRANSLATE.FORM.JOB_TITLE } isRequired/>
        </Grid>
        <Grid item xs={12}>
            <TextField name='bio' label={ TRANSLATE.FORM.BIO } isRequired isMultiline/>
        </Grid>
        <Grid item xs={12}>
            <TextField name='academicBio' label={ TRANSLATE.FORM.ACADEMIC_BIO } isRequired isMultiline/>
        </Grid>
        <Grid item xs={12}>
            <TextField name='jobSearch' label={ TRANSLATE.FORM.JOB_SEARCH } isRequired isMultiline/>
        </Grid>
          { renderYearsOfExperience() }
        { renderTechnologies() }
      </Grid>
    </React.Fragment>
  );
}