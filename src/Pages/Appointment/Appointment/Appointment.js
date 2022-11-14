import React, { useState } from 'react';
import dayjs from 'dayjs';
import Navigation from '../../Shared/Navigation/Navigation';
import AppointmentHeader from '../AppointmentHeader/AppointmentHeader';
import AvailableAppointment from '../AvailableAppointment/AvailableAppointment';

const Appointment = () => {
    // const [date, setDate] = React.useState(dayjs());
    const [date, setDate] = useState(new Date());
    // console.log(date);
    // console.log(setDate);
    return (
        <div>
            <Navigation></Navigation>
            <AppointmentHeader date={date} setDate={setDate}></AppointmentHeader>
            <AvailableAppointment date={date}></AvailableAppointment>
        </div>
    );
};

export default Appointment;