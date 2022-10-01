import { Container, Grid, Typography } from '@mui/material';
import React from 'react';
import Booking from '../Booking/Booking';

const bookings = [
    {
        id: 1,
        name: 'Teeth Orthodonics',
        time: '08:00 AM - 09:00 AM',
        space: 10,
    },
    {
        id: 2,
        name: 'Cosmetic Dentistry',
        time: '09:00 AM - 10:00 AM',
        space: 8,
    },
    {
        id: 3,
        name: 'Teeth Cleaning',
        time: '10:00 AM - 11:00 AM',
        space: 10,
    },
    {
        id: 4,
        name: 'Cosmetic Dentistry',
        time: '11:00 AM - 12:00 AM',
        space: 10,
    },
    {
        id: 5,
        name: 'Teeth Orthodonics',
        time: '08:00 AM - 09:00 AM',
        space: 10,
    },
    {
        id: 6,
        name: 'Cavity Protection',
        time: '08:00 AM - 09:00 AM',
        space: 10,
    },
    {
        id: 7,
        name: 'Teeth Cleaning',
        time: '08:00 AM - 09:00 AM',
        space: 10,
    },
    {
        id: 8,
        name: 'Cavity Protection',
        time: '08:00 AM - 09:00 AM',
        space: 10,
    },
    {
        id: 9,
        name: 'Cosmetic Dentistry',
        time: '08:00 AM - 09:00 AM',
        space: 10,
    },
    {
        id: 10,
        name: 'Cosmetic Dentistry',
        time: '08:00 AM - 09:00 AM',
        space: 10
    },
]

const AvailableAppointment = ({date}) => {
    const dt = date.$d;
    return (
        <Container>
            <Typography variant='h5' sx={{ color: 'info.main', my: 3 }}>Available Appointment {dt.toString()}</Typography>
            <Grid container spacing={2}>
                {
                    bookings.map(booking => <Booking
                    key={booking.id}
                    booking={booking}
                    ></Booking>)
                }
            </Grid>
        </Container>
    );
};

export default AvailableAppointment;