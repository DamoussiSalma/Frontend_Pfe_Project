import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { UserContext } from './components/userContext/userContext'; // Assuming you have a UserContext for managing user state

function ProtectedRoute({ children }) {
    const { user } = useContext(UserContext);
  
    if (!user) {
      // If the user is not logged in, redirect to the login page
      return <Navigate to="/" replace />;
    }
  
    // If the user is logged in, allow access to the route
    return children;
  }
  
  export default ProtectedRoute;