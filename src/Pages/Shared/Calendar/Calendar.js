import React from 'react';
import dayjs from 'dayjs';
import TextField from '@mui/material/TextField';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { StaticDatePicker } from '@mui/x-date-pickers/StaticDatePicker';


const Calendar = ({date, setDate}) => {
    // const [date, setDate] = React.useState(dayjs());
    // console.log(date.date);
    // console.log(date.setDate);
    // const setdate = date.setDate;
    return (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
        <StaticDatePicker
            displayStaticWrapperAs="desktop"
            value={date.date}
            onChange={(newValue) => {
                date.setDate(newValue);
            }}
            renderInput={(params) => <TextField {...params} />}
        />
        </LocalizationProvider>
    );
};

export default Calendar;