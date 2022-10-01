import { Container, Grid } from '@mui/material';
import React from 'react';

const AvailableAppointment = ({date}) => {
    const dt = date.$d;
    return (
        <Container>
            <h2>Available Appointment {dt.toString()}</h2>
            <Grid container spacing={2}>
                <Grid item xs={12} sm={6} md={4}>
                    
                </Grid>
            </Grid>
        </Container>
    );
};

export default AvailableAppointment;