import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { LoginPage } from '../features/login/pages/LoginPage';
import RegisterPage from '../features/login/pages/RegisterPage';
import { useAppSelector } from './hooks';
import HomePage from '../features/home/pages/HomePage';
import { DashboardPage } from '../features/login/pages/DashboardPage';

// Protected Route Component
interface ProtectedRouteProps {
  children: React.ReactNode;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
  const { isAuthenticated, loading } = useAppSelector((state) => state.auth);
  
  // Show loading state while checking authentication
  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-black">
        <div className="text-white text-xl">Loading...</div>
      </div>
    );
  }
  
  // FIXED: Removed duplicate redirect logic
  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }
  
  return <>{children}</>;
};

// Public Route Component (redirects to dashboard if already logged in)
interface PublicRouteProps {
  children: React.ReactNode;
}

const PublicRoute: React.FC<PublicRouteProps> = ({ children }) => {
  const { isAuthenticated, loading } = useAppSelector((state) => state.auth);
  
  // Show loading state while checking authentication
  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-black">
        <div className="text-white text-xl">Loading...</div>
      </div>
    );
  }
  
  if (isAuthenticated) {
    return <Navigate to="/dashboard" replace />;
  }
  
  return <>{children}</>;
};

// Home redirect component
const HomeRedirect: React.FC = () => {
  const { isAuthenticated, loading } = useAppSelector((state) => state.auth);
  
  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-black">
        <div className="text-white text-xl">Loading...</div>
      </div>
    );
  }
  
  // Smart redirect based on auth status
  return <Navigate to={isAuthenticated ? "/dashboard" : "/"} replace />;
};

export const AppRoutes: React.FC = () => {
  return (
    <Routes>
      {/* Home Route - Public */}
      {/* <Route path="/" element={<Home2 />} /> */}
      {/* <Route path="/" element={<Home3 />} /> */}
      <Route path="/" element={<HomePage />} />
      
      {/* Auth Routes - Redirect to dashboard if authenticated */}
      <Route
        path="/login"
        element={
          <PublicRoute>
            <LoginPage />
          </PublicRoute>
        }
      />
      <Route
        path="/register"
        element={
          <PublicRoute>
            <RegisterPage />
          </PublicRoute>
        }
      />
      
      {/* Protected Routes - Require authentication */}
      <Route
        path="/dashboard"
        element={
          <ProtectedRoute>
            <DashboardPage />
          </ProtectedRoute>
        }
      />
      
      {/* Catch all - redirect based on auth status */}
      <Route path="*" element={<HomeRedirect />} />
    </Routes>
  );
};