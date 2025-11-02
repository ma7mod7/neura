// ====================================
// FILE: src/shared/ui/Input.tsx
// ====================================
import React from 'react';
import { forwardRef } from 'react';
import clsx from 'clsx';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  icon?: React.ReactNode;
  onIconClick?: () => void;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, error, icon, onIconClick, className, ...props }, ref) => {
    return (
      <div className="w-full">
        {label && (
          <label className="block text-sm font-medium text-gray-300 mb-2">
            {label}
          </label>
        )}
        <div className="relative">
          <input
            ref={ref}
            className={clsx(
              'w-full px-6 py-4 rounded-full bg-gray-200 text-gray-800 placeholder-gray-500',
              'focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all',
              error && 'ring-2 ring-red-500',
              className
            )}
            {...props}
          />
          {icon && (
            <button
              type="button"
              onClick={onIconClick}
              className="absolute right-6 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
            >
              {icon}
            </button>
          )}
        </div>
        {error && (
          <p className="mt-1 text-sm text-red-500">{error}</p>
        )}
      </div>
    );
  }
);

Input.displayName = 'Input';


