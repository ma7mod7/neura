import { api } from './api';
import type { 
  LoginCredentials, 
  RegisterCredentials, 
  RegisterFormData,
  RegisterPayload,
  LoginResponse, 
  User 
} from '../types/auth.types';

export const authService = {
  // ============ LOGIN WITH EMAIL/PASSWORD ============
  login: async (credentials: LoginCredentials): Promise<LoginResponse> => {
    try {
      const response = await api.post<LoginResponse>('/auth/login', credentials);
      
      // Store token in localStorage
      if (response.data.token) {
        localStorage.setItem('token', response.data.token);
      }
      
      return response.data;
    } catch (error: any) {
      console.error('Login error:', error);
      throw error;
    }
  },

  // ============ REGISTER NEW USER ============
  register: async (data: RegisterFormData): Promise<LoginResponse> => {
    try {
      // Transform form data to match backend API format
      const payload: RegisterPayload = {
        userName: data.userName,
        email: data.email,
        firstName: data.firstName,
        lastName: data.lastName,
        password: data.password,
        DiscordHandle: data.DiscordHandle,
      };

      console.log('📤 Sending registration data:', payload);

      const response = await api.post<LoginResponse>('/auth/register', payload);
      
      // Store token in localStorage if auto-login is enabled
      if (response.data.token) {
        localStorage.setItem('token', response.data.token);
      }
      
      return response.data;
    } catch (error: any) {
      console.error('Registration error:', error);
      throw error;
    }
  },

  // ============ LOGIN WITH GOOGLE ============
  loginWithGoogle: async (): Promise<LoginResponse> => {
    try {
      // Option 1: Redirect to Google OAuth (for server-side OAuth)
      const apiUrl = import.meta.env.VITE_API_BASE_URL || 'http://localhost:3000';
      window.location.href = `${apiUrl}/auth/google`;
      
      // This will be handled by backend redirect
      return Promise.resolve({} as LoginResponse);
    } catch (error: any) {
      console.error('Google login error:', error);
      throw error;
    }
  },

  // ============ LOGIN WITH GITHUB ============
  loginWithGithub: async (): Promise<LoginResponse> => {
    try {
      // Option 1: Redirect to GitHub OAuth (for server-side OAuth)
      const apiUrl = import.meta.env.VITE_API_BASE_URL || 'http://localhost:3000';
      window.location.href = `${apiUrl}/auth/github`;
      
      // This will be handled by backend redirect
      return Promise.resolve({} as LoginResponse);
    } catch (error: any) {
      console.error('GitHub login error:', error);
      throw error;
    }
  },

  // ============ HANDLE OAUTH CALLBACK ============
  // Call this after OAuth redirect to get the token
  handleOAuthCallback: async (provider: 'google' | 'github'): Promise<LoginResponse> => {
    try {
      const response = await api.get<LoginResponse>(`/auth/${provider}/callback`);
      
      if (response.data.token) {
        localStorage.setItem('token', response.data.token);
      }
      
      return response.data;
    } catch (error: any) {
      console.error(`${provider} OAuth callback error:`, error);
      throw error;
    }
  },

  // ============ GET CURRENT USER ============
  getCurrentUser: async (): Promise<User> => {
    try {
      const response = await api.get<User>('/auth/me');
      return response.data;
    } catch (error: any) {
      console.error('Get current user error:', error);
      throw error;
    }
  },

  // ============ LOGOUT ============
  logout: async (): Promise<void> => {
    try {
      // Call logout endpoint to invalidate token on server
      await api.post('/auth/logout');
    } catch (error: any) {
      console.error('Logout error:', error);
      // Continue with client-side cleanup even if server request fails
    } finally {
      // Always clear local storage
      localStorage.removeItem('token');
    }
  },

  // ============ REFRESH TOKEN ============
  refreshToken: async (): Promise<{ token: string }> => {
    try {
      const response = await api.post<{ token: string }>('/auth/refresh');
      
      if (response.data.token) {
        localStorage.setItem('token', response.data.token);
      }
      
      return response.data;
    } catch (error: any) {
      console.error('Refresh token error:', error);
      throw error;
    }
  },

  // ============ FORGOT PASSWORD ============
  forgotPassword: async (email: string): Promise<{ message: string }> => {
    try {
      const response = await api.post<{ message: string }>('/auth/forgot-password', { email });
      return response.data;
    } catch (error: any) {
      console.error('Forgot password error:', error);
      throw error;
    }
  },

  // ============ RESET PASSWORD ============
  resetPassword: async (token: string, password: string): Promise<{ message: string }> => {
    try {
      const response = await api.post<{ message: string }>('/auth/reset-password', {
        token,
        password,
      });
      return response.data;
    } catch (error: any) {
      console.error('Reset password error:', error);
      throw error;
    }
  },

  // ============ CHANGE PASSWORD (Authenticated User) ============
  changePassword: async (currentPassword: string, newPassword: string): Promise<{ message: string }> => {
    try {
      const response = await api.post<{ message: string }>('/auth/change-password', {
        currentPassword,
        newPassword,
      });
      return response.data;
    } catch (error: any) {
      console.error('Change password error:', error);
      throw error;
    }
  },

  // ============ VERIFY EMAIL ============
  verifyEmail: async (token: string): Promise<{ message: string }> => {
    try {
      const response = await api.post<{ message: string }>('/auth/verify-email', { token });
      return response.data;
    } catch (error: any) {
      console.error('Verify email error:', error);
      throw error;
    }
  },

  // ============ RESEND VERIFICATION EMAIL ============
  resendVerificationEmail: async (email: string): Promise<{ message: string }> => {
    try {
      const response = await api.post<{ message: string }>('/auth/resend-verification', { email });
      return response.data;
    } catch (error: any) {
      console.error('Resend verification error:', error);
      throw error;
    }
  },
};