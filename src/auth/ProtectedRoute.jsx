import React, { useEffect, useState } from 'react';
import { Navigate, useLocation } from 'react-router-dom';

function ProtectedRoute({ children }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const location = useLocation();

  // ✅ Public routes (NO AUTH REQUIRED)
  const publicRoutes = [
    "/",
    "/welcome",
    "/login",
    "/register",
    "/paytest",
    "/loadtest"
  ];

  useEffect(() => {
    const token = localStorage.getItem('token');
    setIsAuthenticated(!!token);
    setIsLoading(false);
  }, []);

  // ✅ Show loading placeholder while verifying
  if (isLoading) {
    return <div>Loading...</div>;
  }

  // ✅ Allow access to public routes WITHOUT redirect
  if (publicRoutes.includes(location.pathname)) {
    return children;
  }

  // ✅ Block access to protected routes if not logged in
  return isAuthenticated ? children : <Navigate to="/login" />;
}

export default ProtectedRoute;
