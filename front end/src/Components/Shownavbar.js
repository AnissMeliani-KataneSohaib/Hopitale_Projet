import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

export const Shownavbar = ({ children }) => {
    const [shownavbar, setShownavbar] = useState(false); // Use camelCase for variable names
    const location = useLocation(); // Use camelCase for variable names

    useEffect(() => {
        console.log('location is:', location);
        if (
            location.pathname === '/moderateur/login' ||
            location.pathname === '/docteur/login' ||
            location.pathname === '/réceptionniste/login'
        ) {
            setShownavbar(false); // Use camelCase for function names
        } else {
            setShownavbar(true); // Use camelCase for function names
        }
    }, [location]);

    return (
        <div>{shownavbar && children}</div> // Use camelCase for variable names
    );
};
