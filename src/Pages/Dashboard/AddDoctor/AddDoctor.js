import { Button, Input, TextField } from '@mui/material';
import React from 'react';
import { useState } from 'react';

const AddDoctor = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [image, setImage] = useState(null);
    return (
        <div>
            <h2>Add A Doctor</h2>
            <form>
                <TextField
                    sx={{ width: '50%' }}
                    label="Name"
                    required
                    onChange={e => setName(e.target.value)}
                    variant="standard" />
                <br />
                <TextField
                    sx={{ width: '50%' }}
                    label="Email"
                    type="email"
                    required
                    onChange={e => setEmail(e.target.value)}
                    variant="standard" />
                <br />
                <Input
                    accept="image/*"
                    type="file"
                    onChange={e => console.log(e.target.files[0])}
                />
                <br />
                <Button variant="contained" type='sumbit'>
                    Upload
                </Button>
            </form>
        </div>
    );
};

export default AddDoctor;