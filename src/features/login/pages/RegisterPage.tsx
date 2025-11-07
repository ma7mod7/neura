import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { Eye, EyeOff } from "lucide-react";
import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import { registerUser, clearError } from "../../auth/slice/authSlice";
import { type RegisterFormData } from "../../auth/types";
import ImageCarousel from "../../../features/auth/components/ImageCarousel";
import { ThemeToggle } from "../../../components/ui/ThemeToggle";
import signup from "../../../assets/images/signup.jpg";
import signup2 from "../../../assets/images/signup2.jpg";
import { Sparkles, Database } from "lucide-react";

const carouselImages = [signup, signup2];

const RegisterPage: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { loading, error, isAuthenticated } = useAppSelector(
    (state) => state.auth
  );

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const {
    register: registerField,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<RegisterFormData>();

  const password = watch("password");

  useEffect(() => {
    return () => {
      dispatch(clearError());
    };
  }, [dispatch]);

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/dashboard");
    }
  }, [isAuthenticated, navigate]);

  const onSubmit = async (data: RegisterFormData) => {
    try {
      const result = await dispatch(registerUser(data)).unwrap();
      if (!result.token) {
        navigate("/login");
      }
    } catch (err) {
      console.error("Registration error:", err);
    }
  };

  const handleGoogleSignup = () => {
    console.log("Google signup clicked");
  };

  const handleGithubSignup = () => {
    console.log("Github signup clicked");
  };

  return (
    <div className="min-h-screen bg-white dark:bg-black flex transition-colors duration-300">
      {/* Theme Toggle Button */}
      <ThemeToggle />

      {/* Left Side - Carousel */}
      <div className="hidden lg:flex lg:w-1/2 p-12 items-center justify-center ">
        <div className="relative w-full max-w-2xl h-[600px] rounded-2xl overflow-hidden  ">
          <ImageCarousel images={carouselImages} />
        </div>
      </div>

      {/* Right Side - Registration Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8 relative overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute top-20 left-10 text-blue-500 opacity-60 dark:opacity-80">
          <Sparkles className="text-blue-500 mb-4" size={32} />
        </div>

        <div className="absolute top-32 right-16 text-cyan-400 opacity-40 dark:opacity-60">
          <svg
            className="w-16 h-16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path d="M16 18L22 12L16 6M8 6L2 12L8 18" />
          </svg>
        </div>

        <div className="absolute bottom-20 right-10 text-purple-500 opacity-30 dark:opacity-40">
          <Database
            className="inline-block text-cyan-500 dark:text-cyan-400 mb-2"
            size={32}
          />
        </div>

        {/* Curved decorative lines */}
        <svg
          className="absolute bottom-0 right-40 w-full h-[500px] opacity-40 transform rotate-180  translate-x-1/4"
          viewBox="0 0 1200 500"
          fill="none"
        >
          {/* First curved line — smoother, more pronounced */}
          <path
            d="M0 250 Q 600 950, 850 300 T 1400 700"
            stroke="url(#gradient1)"
            strokeWidth="4"
            strokeLinecap="round"
          />

          {/* Second curved line — offset lower for depth */}
          <path
            d="M0 250 Q 700 950, 850 300 T 1450 700"
            stroke="url(#gradient2)"
            strokeWidth="4"
            strokeLinecap="round"
          />

          {/* Gradient definitions */}
          <defs>
            <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#6366f1" />
              <stop offset="100%" stopColor="#06b6d4" />
            </linearGradient>
            <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#8b5cf6" />
              <stop offset="100%" stopColor="#06b6d4" />
            </linearGradient>
          </defs>
        </svg>

        {/* Form Container */}
        <div className="w-full max-w-md z-10">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-2">
            welcome,{" "}
            <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Problem solver!
            </span>
          </h1>

          {/* Error Message */}
          {error && (
            <div className="mt-4 p-4 bg-red-500/10 border border-red-500 rounded-lg">
              <p className="text-red-400 text-sm">{error}</p>
            </div>
          )}

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 mt-8">
            {/* Username and First Name Row */}
            <div className="flex gap-4">
              <div className="flex-1">
                <input
                  {...registerField("userName", {
                    required: "Username is required",
                    minLength: {
                      value: 3,
                      message: "Username must be at least 3 characters",
                    },
                  })}
                  type="text"
                  placeholder="User Name"
                  className="w-full px-6 py-4 rounded-full bg-gray-100 dark:bg-white/90 text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                />
                {errors.userName && (
                  <p className="text-red-400 text-sm mt-1 ml-4">
                    {errors.userName.message}
                  </p>
                )}
              </div>

              <div className="flex-1">
                <input
                  {...registerField("firstName", {
                    required: "First name is required",
                  })}
                  type="text"
                  placeholder="First Name"
                  className="w-full px-6 py-4 rounded-full bg-gray-100 dark:bg-white/90 text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                />
                {errors.firstName && (
                  <p className="text-red-400 text-sm mt-1 ml-4">
                    {errors.firstName.message}
                  </p>
                )}
              </div>
            </div>

            {/* Email and Last Name Row */}
            <div className="flex gap-4">
              <div className="flex-1">
                <input
                  {...registerField("email", {
                    required: "Email is required",
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: "Invalid email address",
                    },
                  })}
                  type="email"
                  placeholder="Email"
                  className="w-full px-6 py-4 rounded-full bg-gray-100 dark:bg-white/90 text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                />
                {errors.email && (
                  <p className="text-red-400 text-sm mt-1 ml-4">
                    {errors.email.message}
                  </p>
                )}
              </div>

              <div className="flex-1">
                <input
                  {...registerField("lastName", {
                    required: "Last name is required",
                  })}
                  type="text"
                  placeholder="Last Name"
                  className="w-full px-6 py-4 rounded-full bg-gray-100 dark:bg-white/90 text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                />
                {errors.lastName && (
                  <p className="text-red-400 text-sm mt-1 ml-4">
                    {errors.lastName.message}
                  </p>
                )}
              </div>
            </div>

            {/* Password */}
            <div className="relative">
              <input
                {...registerField("password", {
                  required: "Password is required",
                  minLength: {
                    value: 8,
                    message: "Password must be at least 8 characters",
                  },
                  pattern: {
                    value:
                      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]/,
                    message:
                      "Password must contain uppercase, lowercase, number and special character",
                  },
                })}
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                className="w-full px-6 py-4 rounded-full bg-gray-100 dark:bg-white/90 text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 transition pr-12"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
              >
                {showPassword ? <Eye size={20} /> : <EyeOff size={20} />}
              </button>
              {errors.password && (
                <p className="text-red-400 text-sm mt-1 ml-4">
                  {errors.password.message}
                </p>
              )}
            </div>

            {/* Confirm Password */}
            <div className="relative">
              <input
                {...registerField("confirmPassword", {
                  required: "Please confirm your password",
                  validate: (value) =>
                    value === password || "Passwords do not match",
                })}
                type={showConfirmPassword ? "text" : "password"}
                placeholder="Confirm Password"
                className="w-full px-6 py-4 rounded-full bg-gray-100 dark:bg-white/90 text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 transition pr-12"
              />
              <button
                type="button"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
              >
                {showConfirmPassword ? <Eye size={20} /> : <EyeOff size={20} />}
              </button>
              {errors.confirmPassword && (
                <p className="text-red-400 text-sm mt-1 ml-4">
                  {errors.confirmPassword.message}
                </p>
              )}
            </div>

            {/* Discord Handle */}
            <div>
              <input
                {...registerField("DiscordHandle", {
                  required: "Discord handle is required",
                })}
                type="text"
                placeholder="Discord Handle"
                className="w-full px-6 py-4 rounded-full bg-gray-100 dark:bg-white/90 text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
              />
              {errors.DiscordHandle && (
                <p className="text-red-400 text-sm mt-1 ml-4">
                  {errors.DiscordHandle.message}
                </p>
              )}
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={loading}
              className="w-full py-4 rounded-full bg-blue-600 hover:bg-blue-700 text-white font-semibold transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed mt-6"
            >
              {loading ? "Creating Account..." : "Create Account"}
            </button>

            {/* Social Login Buttons */}
            <div className="flex gap-4 mt-4">
              <button
                type="button"
                onClick={handleGoogleSignup}
                disabled={loading}
                className="flex-1 flex items-center justify-center gap-3 py-3 rounded-full bg-gray-100 hover:bg-gray-200 dark:bg-white dark:hover:bg-gray-100 text-gray-800 font-medium transition-all duration-200 disabled:opacity-50"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24">
                  <path
                    fill="#4285F4"
                    d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                  />
                  <path
                    fill="#34A853"
                    d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                  />
                  <path
                    fill="#FBBC05"
                    d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                  />
                  <path
                    fill="#EA4335"
                    d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                  />
                </svg>
                continue with google
              </button>

              <button
                type="button"
                onClick={handleGithubSignup}
                disabled={loading}
                className="flex-1 flex items-center justify-center gap-3 py-3 rounded-full bg-gray-100 hover:bg-gray-200 dark:bg-white dark:hover:bg-gray-100 text-gray-800 font-medium transition-all duration-200 disabled:opacity-50"
              >
                <svg
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
                continue with github
              </button>
            </div>

            {/* Login Link */}
            <p className="text-center text-gray-600 dark:text-gray-400 mt-6">
              Already have an account?{" "}
              <button
                type="button"
                onClick={() => navigate("/login")}
                className="text-blue-600 dark:text-cyan-400 hover:text-blue-700 dark:hover:text-cyan-300 font-medium transition"
              >
                Login now
              </button>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
