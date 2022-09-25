import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import doctor from '../../../images/doctor.png';
import { Typography } from '@mui/material';

const AppointmentBanner = () => {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                    <img 
                    style={{width: 400, }}
                    src={doctor} alt="" />
                </Grid>
                <Grid item xs={12} md={6}>
                    <Typography variant='h6'>
                        Appointment
                    </Typography>
                </Grid>
            </Grid>
        </Box>
    );
};

export default AppointmentBanner;