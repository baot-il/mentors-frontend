import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

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
          { buildTextField({ id: 'firstName', name: 'firstName', label: 'שם פרטי', isRequired: true }) }
        </Grid>
        <Grid item xs={12} sm={6}>
          { buildTextField({ id: 'lastName', name: 'lastName', label: 'שם משפחה', isRequired: true }) }
        </Grid>
        <Grid item xs={12} sm={6}>
          { buildTextField({ id: 'email', name: 'email', label: 'אי מייל', isRequired: true }) }
          <TextField
            required
            id="email"
            name="email"
            label="Email"
            fullWidth
            autoComplete="email"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="phoneNumber"
            name="phoneNumber"
            label="Phone Number"
            fullWidth
            autoComplete="phoneNumber"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="workPlace"
            name="workPlace"
            label="Work Place"
            fullWidth
            autoComplete="workPlace"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField required id="title" name="title" label="Title" fullWidth />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="history"
            name="history"
            label="Professional History"
            fullWidth
            multiline
            rows="6"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="academic"
            name="academic"
           label="Academic Background"
            fullWidth
            multiline
            rows="6"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="searches"
            name="searches"
            label="Describe Your Previous Job Searches"
            fullWidth
            multiline
            rows="6"
          />
        </Grid>
        {/* <Grid item xs={12}>
          <FormControlLabel
            control={<Checkbox color="secondary" name="saveAddress" value="yes" />}
            label="Use this address for payment details"
          />
        </Grid> */}
      </Grid>
    </React.Fragment>
  );
}