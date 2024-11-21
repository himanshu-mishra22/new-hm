import React, { useEffect } from 'react';
import { Route, Redirect } from 'react-router-dom';

export const isAuthenticated = () => {
    // Check if the access token exists in localStorage (or sessionStorage)
    return !!localStorage.getItem('access_token') || !!sessionStorage.getItem('access_token');
};

const ProtectedRoute = ({ component: Component, ...rest }) => {
    const [isAuth, setIsAuth] = React.useState(isAuthenticated());

    useEffect(() => {
        // Listen to storage changes (in case the token is deleted from localStorage or sessionStorage)
        const handleStorageChange = () => {
            setIsAuth(isAuthenticated());
        };

        window.addEventListener('storage', handleStorageChange);

        // Cleanup listener on component unmount
        return () => window.removeEventListener('storage', handleStorageChange);
    }, []);

    return <Route {...rest} render={props => (isAuth ? <Component {...props} /> : <Redirect to='/cuslogin' />)} />;
};

export default ProtectedRoute;
