import React, { useEffect } from 'react';
import { Provider } from 'react-redux';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { store } from './store';
import { AppRoutes } from './routes';
import { useAppDispatch } from './hooks';
import { checkAuthStatus } from '../features/auth/slice/authSlice';
import { ThemeProvider } from '../components/context/ThemeContext';
// Create QueryClient instance
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 5 * 60 * 1000, // 5 minutes
      refetchOnWindowFocus: false,
    },
  },
});

// Inner component that checks auth (must be inside Provider to use hooks)
const AuthChecker: React.FC = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    // Check if user is already authenticated on app load
    const token = localStorage.getItem('auth_token');
    if (token) {
      dispatch(checkAuthStatus());
    }
  }, [dispatch]);

  return <AppRoutes />;;
};

// Main App component with all providers
const App: React.FC = () => {
  return (
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider>

          <AuthChecker />

        </ThemeProvider>
      </QueryClientProvider>
    </Provider>
  );
};

export default App;