// // src/features/auth/api.ts

// import type { LoginFormData, RegisterFormData, LoginResponse, User } from './types';



// import { useMutation } from '@tanstack/react-query';
// import { type RegisterResponse } from './types';

// // Fake API delay
// const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

// // Fake user data
// const FAKE_USER: User = {
//   id: '1',
//   username: 'problemsolver',
//   email: 'solver@example.com',
//   avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=problemsolver',
//   role: 'admin',
//   createdAt: new Date().toISOString(),
// };

// const FAKE_TOKEN = 'fake-jwt-token-' + Math.random().toString(36).substr(2, 9);

// export const authApi = {
//   // Login with credentials
//   login: async (credentials: LoginFormData): Promise<LoginResponse> => {
//     await delay(1000); // Simulate network delay

//     // Fake validation
//     if (credentials.username === 'admin' && credentials.password === 'admin123') {
//       return {
//         user: FAKE_USER,
//         token: FAKE_TOKEN,
//         message: 'Login successful',
//       };
//     }

//     throw new Error('Invalid username or password');
//   },

//   // Register new user
//   register: async (data: RegisterFormData): Promise<LoginResponse> => {
//     await delay(1000);

//     if (data.password !== data.confirmPassword) {
//       throw new Error('Passwords do not match');
//     }

//     const newUser: User = {
//       id: Math.random().toString(36).substr(2, 9),
//       username: data.username,
//       email: data.email,
//       avatar: `https://api.dicebear.com/7.x/avataaars/svg?seed=${data.username}`,
//       role: 'user',
//       createdAt: new Date().toISOString(),
//     };

//     return {
//       user: newUser,
//       token: FAKE_TOKEN,
//       message: 'Registration successful',
//     };
//   },

//   // Login with Google
//   loginWithGoogle: async (): Promise<LoginResponse> => {
//     await delay(1500);
    
//     return {
//       user: {
//         ...FAKE_USER,
//         username: 'google_user',
//         email: 'google@example.com',
//       },
//       token: FAKE_TOKEN,
//       message: 'Google login successful',
//     };
//   },

//   // Login with GitHub
//   loginWithGithub: async (): Promise<LoginResponse> => {
//     await delay(1500);
    
//     return {
//       user: {
//         ...FAKE_USER,
//         username: 'github_user',
//         email: 'github@example.com',
//       },
//       token: FAKE_TOKEN,
//       message: 'GitHub login successful',
//     };
//   },

//   // Get current user
// getCurrentUser: async (token: string): Promise<User> => {
//     const response = await fetch(`${API_BASE_URL}/auth/me`, {
//       headers: {
//         'Authorization': `Bearer ${token}`,
//       },
//     });
    
//     if (!response.ok) {
//       throw new Error('Failed to get user info');
//     }
    
//     return response.json();
//   },

//   // Logout
//   logout: async (): Promise<void> => {
//     await delay(300);
//     // Clear any session data
//   },
// };


// ////////////////////////////////////////////////////////////////////////////////////////////////////////////
// // Fake API call - replace with real API later
// const registerUser = async (data: RegisterFormData): Promise<RegisterResponse> => {
//   // Transform form data to API payload (remove confirmPassword)
//   const payload: RegisterPayload = {
//       userName: data.userName,
//       email: data.email,
//       firstName: data.firstName,
//       lastName: data.lastName,
//       password: data.password,
//       DiscordHandle: data.DiscordHandle,
//     };
//   // Simulate API delay
//   await new Promise(resolve => setTimeout(resolve, 1500));
  
//   // Fake validation
//   if (data.email === 'existing@example.com') {
//     throw new Error('Email already exists');
//   }
  
//   console.log('Sending to API:', payload);
  
//   // Replace this with actual API call:
//   // const response = await fetch('YOUR_API_ENDPOINT/register', {
//   //   method: 'POST',
//   //   headers: { 'Content-Type': 'application/json' },
//   //   body: JSON.stringify(payload),
//   // });
//   // return response.json();
  
//   return {
//     success: true,
//     message: 'Registration successful',
//     user: {
//       id: '123',
//       userName: data.userName,
//       email: data.email,
//     },
//   };
// };

// export const useRegister = () => {
//   return useMutation({
//     mutationFn: registerUser,
//     onSuccess: (data) => {
//       console.log('Registration successful:', data);
//     },
//     onError: (error: Error) => {
//       console.error('Registration failed:', error);
//     },
//   });
// };







// src/features/auth/api.ts

import type { LoginFormData, RegisterFormData, LoginResponse, User, RegisterResponse } from './types';
import { useMutation } from '@tanstack/react-query';

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
  // Login with credentials
  login: async (credentials: LoginFormData): Promise<LoginResponse> => {
    await delay(1000);
    if (credentials.username === 'admin' && credentials.password === 'admin123') {
      return {
        user: FAKE_USER,
        token: FAKE_TOKEN,
        message: 'Login successful',
      };
    }
    throw new Error('Invalid username or password');
  },

  // Register new user
  register: async (data: RegisterFormData): Promise<LoginResponse> => {
    await delay(1000);
    if (data.password !== data.confirmPassword) {
      throw new Error('Passwords do not match');
    }
    const newUser: User = {
      id: Math.random().toString(36).substr(2, 9),
      username: data.username,
      email: data.email,
      avatar: `https://api.dicebear.com/7.x/avataaars/svg?seed=${data.username}`,
      role: 'user',
      createdAt: new Date().toISOString(),
    };
    return {
      user: newUser,
      token: FAKE_TOKEN,
      message: 'Registration successful',
    };
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

////////////////////////////////////////////////////////////////////////////////////////////////////////////
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
