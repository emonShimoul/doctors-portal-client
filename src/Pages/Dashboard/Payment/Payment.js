import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import CheckoutForm from './CheckoutForm';

const stripePromise = loadStripe('pk_test_51M8NxHKJLu5mojoq47wxLpr8vuVuxC3ciSUVdD6r5l1FYADJzuB2NETcMCeotP55f3Xc9XvsxoqkxjIlU4NvNCJz00CJ8vgbVJ')

const Payment = () => {
    const { appointmentId } = useParams();
    const [appointment, setAppointment] = useState({});
    useEffect(() => {
        fetch(`http://localhost:5000/appointments/${appointmentId}`)
            .then(res => res.json())
            .then(data => setAppointment(data))
    }, [appointmentId])
    return (
        <div>
            <h2>Please Pay for: {appointment.patientName} for {appointment.serviceName}</h2>
            <h4>Pay: ${appointment.price}</h4>
            {appointment?.price && <Elements stripe={stripePromise}>
                <CheckoutForm
                    appointment={appointment}
                />
            </Elements>}
        </div>
    );
};

export default Payment;

/*
1. Install stripe and stripe-react
2. set publishable key
3. Elements
4. Checkout Form
-------------------
5. Create payment method
6. Server: create payment intent api
7. Load client secret
8. ConfirmCard payment
9. Handle user error
*/