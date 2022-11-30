import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import doctor from '../../../images/doctor.png';
import appointmentbg from '../../../images/appointment-bg.png';
import { Button, Typography } from '@mui/material';
import { Container } from '@mui/system';

const appointmentBanner = {
    background: `url(${appointmentbg})`,
    backgroundColor: 'rgba(45, 58, 74, 0.85)',
    backgroundBlendMode: 'darken, luminosity',
    marginTop: 100
}

const AppointmentBanner = () => {
    return (
        <Box style={appointmentBanner} sx={{ flexGrow: 1 }}>
            <Container>
                <Grid container spacing={2}>
                    <Grid item xs={12} md={6} sx={{ display: 'flex', justifyContent: 'flex-start' }}>
                        <img
                            style={{ width: 400, marginTop: '-115px' }}
                            src={doctor} alt="" />
                    </Grid>
                    <Grid item xs={12} md={6} sx={{
                        display: 'flex',
                        justifyContent: 'flex-start',
                        alignItems: 'center',
                        textAlign: 'left'
                    }}>
                        <Box>
                            <Typography variant='h6' sx={{ mb: 3 }} style={{ color: '#5CE7ED' }}>
                                Appointment
                            </Typography>
                            <Typography variant='h4' style={{ color: 'white' }}>
                                Make an Appointment Today
                            </Typography>
                            <Typography variant='h6' sx={{ my: 3 }} style={{ color: 'white', fontSize: 14, fontWeight: 300 }}>
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sapiente exercitationem, voluptate incidunt enim fuga nobis obcaecati quisquam vitae natus, doloribus similique doloremque quibusdam eaque impedit asperiores expedita soluta? Voluptates, modi.
                            </Typography>
                            <Button variant="contained" sx={{ mb: 3 }} style={{ backgroundColor: '#5CE7ED' }}>Learn More</Button>
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

export default AppointmentBanner;