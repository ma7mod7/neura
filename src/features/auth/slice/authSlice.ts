import { createSlice, createAsyncThunk, type PayloadAction } from '@reduxjs/toolkit';
import type { AuthState, LoginFormData, RegisterFormData, LoginResponse, RegisterResponse, User } from '../types';
import { authApi } from '../api';

const initialState: AuthState = {
  user: null,
  token: localStorage.getItem('auth_token'),
  isAuthenticated: !!localStorage.getItem('auth_token'),
  loading: false,
  error: null,
};

// ============ LOGIN ASYNC THUNKS ============
export const loginUser = createAsyncThunk(
  'auth/login',
  async (credentials: LoginFormData, { rejectWithValue }) => {
    try {
      const response = await authApi.login(credentials);
      console.log('Login successful:', response);
      console.log(response)
      return response;
    } catch (error: any) {
      console.error('Login failed:', error.message);
      return rejectWithValue(error.message || 'Login failed');
    }
  }
);

export const loginWithGoogle = createAsyncThunk(
  'auth/loginWithGoogle',
  async (_, { rejectWithValue }) => {
    try {
      const response = await authApi.loginWithGoogle();
      return response;
    } catch (error: any) {
      return rejectWithValue(error.message || 'Google login failed');
    }
  }
);

export const loginWithGithub = createAsyncThunk(
  'auth/loginWithGithub',
  async (_, { rejectWithValue }) => {
    try {
      const response = await authApi.loginWithGithub();
      return response;
    } catch (error: any) {
      return rejectWithValue(error.message || 'GitHub login failed');
    }
  }
);

// ============ REGISTER ASYNC THUNK ============
export const registerUser = createAsyncThunk(
  'auth/register',
  async (userData: RegisterFormData, { rejectWithValue }) => {
    try {
      const response = await authApi.register(userData);
      console.log(response)
      return response;
    } catch (error: any) {
      return rejectWithValue(error.message || 'Registration failed');
    }
  }
);

// ============ LOGOUT ASYNC THUNK ============
export const logoutUser = createAsyncThunk(
  'auth/logout',
  async () => {
    await authApi.logout();
  }
);

// ============ CHECK AUTH STATUS ============
export const checkAuthStatus = createAsyncThunk(
  'auth/checkStatus',
  async (_, { getState, rejectWithValue }) => {
    try {
      const state = getState() as { auth: AuthState };
      const token = state.auth.token;
      
      if (!token) {
        throw new Error('No token found');
      }
      
      const user = await authApi.getCurrentUser(token);
      return user;
    } catch (error: any) {
      return rejectWithValue(error.message || 'Authentication check failed');
    }
  }
);

// ============ SLICE ============
const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    clearError: (state) => {
      state.error = null;
    },
    setUser: (state, action: PayloadAction<User>) => {
      state.user = action.payload;
      state.isAuthenticated = true;
    },
    setCredentials: (
      state,
      action: PayloadAction<{ user: User; token: string }>
    ) => {
      state.isAuthenticated = true;
      state.user = action.payload.user;
      state.token = action.payload.token;
      localStorage.setItem('auth_token', action.payload.token);
    },
    clearAuth: (state) => {
      state.user = null;
      state.token = null;
      state.isAuthenticated = false;
      state.error = null;
      localStorage.removeItem('auth_token');
    },
  },
  extraReducers: (builder) => {
    // ========== LOGIN ==========
    builder
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state, action: PayloadAction<LoginResponse>) => {
        state.loading = false;
        state.isAuthenticated = true;
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.error = null;
        localStorage.setItem('auth_token', action.payload.token);
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
        state.isAuthenticated = false;
      });

    // ========== GOOGLE LOGIN ==========
    builder
      .addCase(loginWithGoogle.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loginWithGoogle.fulfilled, (state, action: PayloadAction<LoginResponse>) => {
        state.loading = false;
        state.isAuthenticated = true;
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.error = null;
        localStorage.setItem('auth_token', action.payload.token);
      })
      .addCase(loginWithGoogle.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });

    // ========== GITHUB LOGIN ==========
    builder
      .addCase(loginWithGithub.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loginWithGithub.fulfilled, (state, action: PayloadAction<LoginResponse>) => {
        state.loading = false;
        state.isAuthenticated = true;
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.error = null;
        localStorage.setItem('auth_token', action.payload.token);
      })
      .addCase(loginWithGithub.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });

    // ========== REGISTER ==========
    builder
      .addCase(registerUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(registerUser.fulfilled, (state, action: PayloadAction<RegisterResponse>) => {
        state.loading = false;
        // Option 1: Auto-login after registration (if API returns token)
        if (action.payload.token && action.payload.user) {
          state.isAuthenticated = true;
          state.user = action.payload.user;
          state.token = action.payload.token;
          localStorage.setItem('auth_token', action.payload.token);
        }
        // Option 2: Just show success, user needs to login manually
        state.error = null;
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
        state.isAuthenticated = false;
      });

    // ========== LOGOUT ==========
    builder
      .addCase(logoutUser.fulfilled, (state) => {
        state.user = null;
        state.token = null;
        state.isAuthenticated = false;
        state.loading = false;
        state.error = null;
        localStorage.removeItem('auth_token');
      });

    // ========== CHECK AUTH STATUS ==========
    builder
      .addCase(checkAuthStatus.pending, (state) => {
        state.loading = true;
      })
      .addCase(checkAuthStatus.fulfilled, (state, action: PayloadAction<User>) => {
        state.loading = false;
        state.isAuthenticated = true;
        state.user = action.payload;
      })
      .addCase(checkAuthStatus.rejected, (state) => {
        state.loading = false;
        state.isAuthenticated = false;
        state.user = null;
        state.token = null;
        localStorage.removeItem('auth_token');
      });
  },
});

export const { clearError, setUser, setCredentials, clearAuth } = authSlice.actions;
export default authSlice.reducer;