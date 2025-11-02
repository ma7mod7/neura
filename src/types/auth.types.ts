// src/types/auth.types.ts

// ============ USER TYPES ============
export interface User {
  id: string;
  userName: string;
  email: string;
  firstName?: string;
  lastName?: string;
  DiscordHandle?: string;
  avatar?: string;
  role?: string;
  emailVerified?: boolean;
  createdAt?: string;
  updatedAt?: string;
}


export interface LoginResponse {
  user: User;
  token: string;
  refreshToken?: string;
  message?: string;
}
export interface LoginCredentials {
  username: string;
  password: string;
  rememberMe?: boolean;
}


// ============ REGISTER TYPES ============



export interface RegisterCredentials extends LoginCredentials {
  email: string;
  confirmPassword: string;
}
//export interface RegisterCredentials extends RegisterPayload {}

export interface RegisterFormData {
  userName: string;
  email: string;
  firstName: string;
  lastName: string;
  password: string;
  confirmPassword: string; // Front-end only
  DiscordHandle: string;
}

export interface RegisterPayload {
  userName: string;
  email: string;
  firstName: string;
  lastName: string;
  password: string;
  DiscordHandle: string;
}
// ============ AUTH STATE ============

export interface AuthState {
  user: User | null;
  token: string | null;
  isAuthenticated: boolean;
  loading: boolean;
  error: string | null;
}


export interface SocialAuthProvider {
  google: () => void;
  github: () => void;
}

// ============ PASSWORD TYPES ============
export interface ForgotPasswordRequest {
  email: string;
}

export interface ResetPasswordRequest {
  token: string;
  password: string;
}

export interface ChangePasswordRequest {
  currentPassword: string;
  newPassword: string;
}

// ============ VERIFICATION TYPES ============
export interface VerifyEmailRequest {
  token: string;
}

export interface ResendVerificationRequest {
  email: string;
}