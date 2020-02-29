import React from "react";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import TextField from './TextField';
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import TRANSLATE from './translation/hebrew';

export default function Mentoring() {

  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        זמינות למנטורינג
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <TextField name='availability' label={ TRANSLATE.FORM.AVAILABILITY } isRequired/>
        </Grid>
        <Grid item xs={12}>
          <TextField name='matchPreferences' label={ TRANSLATE.FORM.MATCH_PREFRENCES } isRequired/>
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
          <TextField name='comments' label={ TRANSLATE.FORM.COMMENTS }/>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
