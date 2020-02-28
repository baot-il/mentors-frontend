import React from "react";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";

export default function Mentoring() {
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        זמינות למנטורינג
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <TextField required id="availability" label="How Available Are You For Mentoring?" fullWidth multiline rows="2" />
        </Grid>
        <Grid item xs={12}>
          <TextField required id="matching" label="Mentoring Matching Prefrences" fullWidth multiline rows="2" />
        </Grid>
        <Grid item xs={12}>
          <FormControlLabel
            control={<Checkbox color="secondary" name="amount" value="yes" />}
            label="I Can Mentor More Than One Mentee"
          />
        </Grid>
        <Grid item xs={12}>
          <FormControlLabel
            control={<Checkbox color="secondary" name="simulate" value="yes" />}
            label="I Can Also Do Interview Simulations For Other Mentees"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="comments"
            name="comments"
           label="Comments or Questions"
            fullWidth
            multiline
            rows="6"
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
