// src/features/auth/types.ts

export interface LoginFormData {
  username: string;
  password: string;
}

export interface RegisterFormData {
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
}

export interface User {
  id: string;
  username: string;
  firstName?: string;
  lastName?: string;
  email: string;
  avatar?: string;
  role: string;
  createdAt: string;
}

export interface AuthState {
  user: User | null;
  token: string | null;
  isAuthenticated: boolean;
  loading: boolean;
  error: string | null;
}

export interface LoginResponse {
  user: User;
  token: string;
  message: string;
}

export interface CarouselSlideData {
  id: number;
  title: string;
  subtitle: string;
  image: string;
}



export interface RegisterFormData {
  userName: string;        // Changed from username
  email: string;
  firstName: string;       // Changed from fullName, split into first/last
  lastName: string;        // New field
  password: string;
  confirmPassword: string; // This stays (front-end only validation)
  DiscordHandle: string;   // Changed capitalization
}

export interface RegisterPayload {
  userName: string;
  email: string;
  firstName: string;
  lastName: string;
  password: string;
  DiscordHandle: string;
  // Note: confirmPassword is NOT sent to API
}

export interface Faculty {
  id: string;
  name: string;
}

export interface RegisterResponse {
  success: boolean;
  message: string;
  user?: {
    id: string;
    userName: string;
    email: string;
  };
}