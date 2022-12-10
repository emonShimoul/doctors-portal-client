import { Grid } from '@mui/material';
import { Container } from '@mui/system';
import React, { useEffect, useState } from 'react';

const Doctors = () => {
    const [doctors, setDoctors] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/doctors')
            .then(res => res.json())
            .then(data => setDoctors(data))
    }, [])
    return (
        <div>
            <h2>Our Doctors: {doctors.length}</h2>
            <Container>
                <Grid container spacing={2}>
                    <Grid item xs={12} sm={6} md={4}>

                    </Grid>
                </Grid>
            </Container>
        </div>
    );
};

export default Doctors;