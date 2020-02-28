import React from "react";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";

import TRANSLATE from './translation/hebrew';

export default function Mentoring() {

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
        זמינות למנטורינג
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          { buildTextField({ id: 'availability', name: 'availability', label: TRANSLATE.FORM.AVAILABILITY, isRequired: true }) }
        </Grid>
        <Grid item xs={12}>
          { buildTextField({ id: 'matching', name: 'matching', label: TRANSLATE.FORM.MATCHING, isRequired: true }) }
        </Grid>
        <Grid item xs={12}>
          <FormControlLabel
            control={<Checkbox color="secondary" name="amount" value="yes" />}
            label={TRANSLATE.FORM.AMOUNT}
          />
        </Grid>
        <Grid item xs={12}>
          <FormControlLabel
            control={<Checkbox color="secondary" name="simulate" value="yes" />}
            label={TRANSLATE.FORM.SIMULATIONS}
          />
        </Grid>
        <Grid item xs={12}>
          { buildTextField({ id: 'comments', name: 'comments', label: TRANSLATE.FORM.COMMENTS, isRequired: true }) }
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
