import { CircularProgress } from '@mui/material';
import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const AdminRoute = ({
    redirectPath = '/',
    children
}) => {
    const { user, admin, isLoading } = useAuth();
    console.log(admin);
    const location = useLocation();
    if (isLoading) {
        return <CircularProgress></CircularProgress>
    }
    if (user?.email && admin) {
        return children;
    }
    return <Navigate to={redirectPath} replace state={{ redirectTo: location }} />;
};

export default AdminRoute;