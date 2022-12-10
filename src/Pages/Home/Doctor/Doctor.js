import { Grid } from '@mui/material';
import React from 'react';

const Doctor = ({ doctor }) => {
    const { name } = doctor;
    return (
        <Grid item xs={12} sm={6} md={4}>
            <h3>{name}</h3>
        </Grid>
    );
};

export default Doctor;