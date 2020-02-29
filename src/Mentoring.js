import React from "react";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import TRANSLATE from './translation/hebrew';

export default function Mentoring() {

  function buildTextField({ id, name, label, isRequired }){
    return (<TextField
        required={ isRequired }
        id={ id }
        name={ name }
        label={ label }
        fullWidth/>);
  }

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
          { buildTextField({ id: 'matchPreferences', name: 'matchPreferences', label: TRANSLATE.FORM.MATCH_PREFRENCES, isRequired: true }) }
        </Grid>
        <Grid item xs={12} alignContent='flex-start'>
          <FormControlLabel
            control={<Checkbox name="isMultipleMentees" value="yes" />}
            label={TRANSLATE.FORM.MULTIPLE_MENTEES}/>
          <FormControlLabel
            control={<Checkbox name="canSimulate" value="yes" />}
            label={TRANSLATE.FORM.CAN_SIMULATE}/>
        </Grid>
        <Grid item xs={12}>
          { buildTextField({ id: 'comments', name: 'comments', label: TRANSLATE.FORM.COMMENTS }) }
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
