import React from 'react';
import TextField from '@mui/material/TextField';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { StaticDatePicker } from '@mui/x-date-pickers/StaticDatePicker';

const Calendar = ({ date, setDate }) => {
    return (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <StaticDatePicker
                displayStaticWrapperAs="desktop"
                value={date}
                onChange={(newValue) => {
                    setDate(newValue.$d);
                }}
                renderInput={(params) => <TextField {...params} />}
            />
        </LocalizationProvider>
    );
};

export default Calendar;