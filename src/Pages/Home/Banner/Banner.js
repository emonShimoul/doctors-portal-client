import React from 'react';
import chair from '../../../images/chair.png';
import bg from '../../../images/bg.png';
import Grid from '@mui/material/Grid';
import { Button, Typography, Container } from '@mui/material';

const bannerBg = {
    background: `url(${bg})`
}

const Banner = () => {
    return (
        <Container style={bannerBg} sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
                <Grid item style={{textAlign: 'left'}} xs={12} md={5}>
                    <Typography variant='h3'>
                        Your New Smile <br />
                        Starts Here
                    </Typography>
                    <Typography variant='h6' sx={{fontSize: 13, fontWeight: 300, color: 'gray'}}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti commodi deserunt iusto hic nulla tempora odit aliquam ea modi unde.
                    </Typography>
                    <Button variant="contained" sx={{mb: 3}} style={{backgroundColor: '#5CE7ED'}}>Get Appointment</Button>
                </Grid>
                <Grid item xs={12} md={7}>
                    <img style={{width: '300px'}} src={chair} alt="" />
                </Grid>
            </Grid>
        </Container>
    );
};

export default Banner;