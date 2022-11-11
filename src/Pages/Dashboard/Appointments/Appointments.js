import React, { useState } from 'react';
import { useEffect } from 'react';
import useAuth from '../../../hooks/useAuth';

const Appointments = () => {
    const { user } = useAuth();
    const [appointments, setAppointments] = useState([]);

    useEffect(() => {
        const url = ``
        fetch(url)
    }, [])
    return (
        <div>
            <h2>Appointments</h2>
        </div>
    );
};

export default Appointments;