import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import TRANSLATE from './translation/hebrew';

export default function AddressForm() {

  const buildTextField = ({ id, name, label, isRequired }) => {
    return (<TextField
        required={ isRequired }
        id={ id }
        name={ name }
        label={ label }
        fullWidth/>);
  };

  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        פרטים אישיים והיסטוריה מקצועית
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          { buildTextField({ id: 'firstName', name: 'firstName', label: TRANSLATE.FORM.FIRST_NAME, isRequired: true }) }
        </Grid>
        <Grid item xs={12} sm={6}>
          { buildTextField({ id: 'lastName', name: 'lastName', label: TRANSLATE.FORM.LAST_NAME, isRequired: true }) }
        </Grid>
        <Grid item xs={12} sm={6}>
          { buildTextField({ id: 'email', name: 'email', label: TRANSLATE.FORM.EMAIL, isRequired: true }) }
        </Grid>
        <Grid item xs={12} sm={6}>
        { buildTextField({ id: 'phoneNumber', name: 'phoneNumber', label: TRANSLATE.FORM.PHONE_NUMBER, isRequired: true }) }
        </Grid>
        <Grid item xs={12} sm={6}>
        { buildTextField({ id: 'workPlace', name: 'workPlace', label: TRANSLATE.FORM.WORK_PLACE, isRequired: true }) }
        </Grid>
        <Grid item xs={12} sm={6}>
        { buildTextField({ id: 'title', name: 'title', label: TRANSLATE.FORM.TITLE, isRequired: true }) }
        </Grid>
        <Grid item xs={12}>
        { buildTextField({ id: 'history', name: 'history', label: TRANSLATE.FORM.PROFESSIONAL_HISTORY, isRequired: true }) }
        </Grid>
        <Grid item xs={12}>
        { buildTextField({ id: 'academic', name: 'academic', label: TRANSLATE.FORM.ACADEMIC_BACKGROUND, isRequired: true }) }
        </Grid>
        <Grid item xs={12}>
        { buildTextField({ id: 'searches', name: 'searches', label: TRANSLATE.FORM.SEARCHES, isRequired: true }) }
        </Grid>
      </Grid>
    </React.Fragment>
  );
}