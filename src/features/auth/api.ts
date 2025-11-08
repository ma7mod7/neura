

// src/features/auth/api.ts
import axios from 'axios';
import type { LoginFormData, RegisterFormData, LoginResponse, User, RegisterResponse } from './types';
import { useMutation } from '@tanstack/react-query';
const API_URL = 'http://localhost:5017';

// Fake API delay
const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

// Fake user data
const FAKE_USER: User = {
  id: '1',
  username: 'problemsolver',
  email: 'solver@example.com',
  avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=problemsolver',
  role: 'admin',
  createdAt: new Date().toISOString(),
};

const FAKE_TOKEN = 'fake-jwt-token-' + Math.random().toString(36).substr(2, 9);

export const authApi = {
  login: async (credentials: LoginFormData): Promise<LoginResponse> => {
    try {
      const response = await axios.post(`${API_URL}/Auth`, credentials);
      return response.data;
    } catch (error: any) {
      throw new Error(
        error.response?.data?.message || 'Invalid username or password'
      );
    }
  },

  // Register new user
  register: async (data: RegisterFormData): Promise<LoginResponse> => {
    try {
      const response = await axios.post(`${API_URL}/Auth/register`, data);
      return response.data;
    } catch (error: any) {
      // Handle backend error response
      throw new Error(
        error.response?.data?.message || 'Registration failed, please try again.'
      );
    }
  },

  // OAuth login simulators
  loginWithGoogle: async (): Promise<LoginResponse> => {
    await delay(1500);
    return {
      user: {
        ...FAKE_USER,
        username: 'google_user',
        email: 'google@example.com',
      },
      token: FAKE_TOKEN,
      message: 'Google login successful',
    };
  },

  loginWithGithub: async (): Promise<LoginResponse> => {
    await delay(1500);
    return {
      user: {
        ...FAKE_USER,
        username: 'github_user',
        email: 'github@example.com',
      },
      token: FAKE_TOKEN,
      message: 'GitHub login successful',
    };
  },

  // Get current user (fake, no real API)
  getCurrentUser: async (token: string): Promise<User> => {
    await delay(300);
    if (!token.startsWith('fake-jwt-token')) {
      throw new Error('Invalid or expired token');
    }
    return FAKE_USER;
  },

  logout: async (): Promise<void> => {
    await delay(300);
    // Normally clear session storage or cookies
  },
};

// Fake API call for registration - replace with real API later

type RegisterPayload = {
  userName: string;
  email: string;
  firstName: string;
  lastName: string;
  password: string;
  DiscordHandle?: string;
};

const registerUser = async (data: RegisterFormData): Promise<RegisterResponse> => {
  const payload: RegisterPayload = {
    userName: data.userName,
    email: data.email,
    firstName: data.firstName,
    lastName: data.lastName,
    password: data.password,
    DiscordHandle: data.DiscordHandle,
  };

  await delay(1500);

  if (data.email === 'existing@example.com') {
    throw new Error('Email already exists');
  }

  console.log('Sending to API:', payload);

  return {
    success: true,
    message: 'Registration successful',
    user: {
      id: '123',
      userName: data.userName,
      email: data.email,
    },
  };
};

export const useRegister = () => {
  return useMutation({
    mutationFn: registerUser,
    onSuccess: (data) => {
      console.log('Registration successful:', data);
    },
    onError: (error: Error) => {
      console.error('Registration failed:', error);
    },
  });
};
