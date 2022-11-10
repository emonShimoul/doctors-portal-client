import { CircularProgress } from '@mui/material';
import React from 'react';
import { Navigate } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const ProtectedRoute = ({
    redirectPath = '/login',
    children
}) => {
    const { user, isLoading } = useAuth();
    if (isLoading) {
        return <CircularProgress></CircularProgress>
    }
    if (!user?.email) {
        return <Navigate to={redirectPath} replace />;
    }
    return children;
};

export default ProtectedRoute;