import React from 'react';

const AvailableAppointment = ({date}) => {
    const dt = date.$d;
    return (
        <div>
            <h2>Available Appointment {dt.toString()}</h2>
        </div>
    );
};

export default AvailableAppointment;