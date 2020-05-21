import React from 'react';
import {Field} from 'formik';
import {TextField} from 'formik-material-ui';

export default function CustomTextField(props) {
    const {name, label, isRequired, isMultiline} = props;
    return (
        <Field
            component={TextField}
            required={isRequired}
            name={name}
            label={label}
            fullWidth
            multiline={isMultiline}
            rowsMax="7"
        />
    );
}
