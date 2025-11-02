import React from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, Database } from 'lucide-react';
import { LoginForm } from '../../../components/auth/LoginForm';
import { SocialLogin } from '../../../components/auth/SocialLogin';
import { Carousel } from '../../auth/components/Carousel';
import { ThemeToggle } from '../../../components/ui/ThemeToggle';

export const LoginPage: React.FC = () => {
  return (
    <div className="min-h-screen flex overflow-hidden bg-black dark:bg-black">
      {/* Theme Toggle Button */}
      <ThemeToggle />

      {/* Left Panel - Login Form */}
      <div className="w-full lg:w-1/2 bg-white dark:bg-black flex items-center justify-center p-8 overflow-y-auto transition-colors duration-300">
        <div className="w-full max-w-md py-8">
          {/* Header */}
          <div className="mb-8">
            <Sparkles className="text-blue-500 mb-4" size={32} />
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-2">
              Welcome back,{' '}
              <span className="text-blue-500 dark:text-blue-500">Problem solver!</span>
            </h1>
            <p className="text-gray-600 dark:text-gray-400">
              Develop your skills and prepare for the next challenge.
            </p>
            <div className="inline-flex items-center gap-2 mt-2 text-blue-500 dark:text-blue-500">
              <code className="text-2xl font-mono">&lt;/&gt;</code>
            </div>
          </div>

          {/* Login Form */}
          <LoginForm />

          {/* Social Login */}
          <SocialLogin />

          {/* Register Link */}
          <div className="mt-8 text-center">
            <Database className="inline-block text-cyan-500 dark:text-cyan-400 mb-2" size={32} />
            <p className="text-gray-600 dark:text-gray-400">
              Not a member?{' '}
              <Link
                to="/register"
                className="text-cyan-600 dark:text-cyan-400 hover:text-cyan-700 dark:hover:text-cyan-300 transition-colors font-medium"
              >
                Register now
              </Link>
            </p>
          </div>
        </div>
      </div>

      {/* Right Panel - Carousel */}
      <div className="hidden lg:flex w-1/2 bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 dark:from-blue-900 dark:via-blue-950 dark:to-black relative overflow-hidden transition-colors duration-300">
        {/* Background decoration */}
        <div className="absolute inset-0 opacity-10 dark:opacity-20">
          <div className="absolute top-20 left-20 w-64 h-64 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-cyan-300 rounded-full blur-3xl"></div>
        </div>
        
        {/* Carousel */}
        <div className="relative z-10 w-full">
          <Carousel />
        </div>
      </div>
    </div>
  );
};