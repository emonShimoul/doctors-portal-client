import { Button, Input, TextField } from '@mui/material';
import React from 'react';

const AddDoctor = () => {
    return (
        <div>
            <h2>Add A Doctor</h2>
            <form>
                <TextField
                    sx={{ width: '50%' }}
                    label="Name"
                    required
                    variant="standard" />
                <br />
                <TextField
                    sx={{ width: '50%' }}
                    label="Email"
                    type="email"
                    required
                    variant="standard" />
                <br />
                <Input
                    accept="image/*"
                    multiple type="file"
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