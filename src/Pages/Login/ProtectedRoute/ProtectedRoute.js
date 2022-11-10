import { CircularProgress } from '@mui/material';
import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const ProtectedRoute = ({
    redirectPath = '/login',
    children
}) => {
    const { user, isLoading } = useAuth();
    const location = useLocation();
    if (isLoading) {
        return <CircularProgress></CircularProgress>
    }
    if (!user?.email) {
        return <Navigate to={redirectPath} replace state={{ redirectTo: location }} />;
    }
    return children;
};

export default ProtectedRoute;