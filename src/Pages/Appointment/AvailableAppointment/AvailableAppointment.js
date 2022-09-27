import React from 'react';

const AvailableAppointment = ({date}) => {
    // console.log(date.$d);
    const dt = date.$d;
    console.log(dt);
    return (
        <div>
            <h2>Available Appointment {dt.toString()}</h2>
        </div>
    );
};

export default AvailableAppointment;