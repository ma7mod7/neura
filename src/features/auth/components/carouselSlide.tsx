// ====================================
// FILE: src/features/auth/components/CarouselSlide.tsx
// ====================================

import React from 'react';
import {type CarouselSlideData } from '../../../features/auth/types';

interface CarouselSlideProps {
  slide: CarouselSlideData;
}

export const CarouselSlide: React.FC<CarouselSlideProps> = ({ slide }) => {
  return (
    <div className="bg-white rounded-3xl p-8 shadow-2xl animate-fadeIn">
      <div className="relative w-full max-w-2xl h-[600px] rounded-2xl overflow-hidden">
        <img
          src={slide.image}
          alt={slide.title}
          className="w-full h-full object-cover"
        />
        
        {/* Overlay illustration elements */}
        <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-blue-500/20 to-purple-500/20">
          <div className="relative w-64 h-48">
            {/* Target circles */}
            {/* <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-40 h-40 rounded-full bg-blue-100 opacity-30 animate-pulse"></div>
              <div className="absolute w-24 h-24 rounded-full bg-blue-300 opacity-50"></div>
              <div className="absolute w-12 h-12 rounded-full bg-blue-600 shadow-lg"></div>
            </div> */}
            
            {/* Chart window (top left) */}
            {/* <div className="absolute top-4 left-4 w-20 h-16 bg-white/90 backdrop-blur-sm border-2 border-gray-800 rounded-lg p-2 shadow-lg">
              <div className="flex items-end justify-between h-full gap-1">
                <div className="w-2 h-10 bg-blue-600 rounded"></div>
                <div className="w-2 h-6 bg-blue-600 rounded"></div>
                <div className="w-2 h-8 bg-blue-600 rounded"></div>
                <div className="w-2 h-12 bg-blue-600 rounded"></div>
              </div>
            </div> */}
            
            {/* Stats window (top right) */}
            {/* <div className="absolute top-4 right-4 w-20 h-16 bg-white/90 backdrop-blur-sm border-2 border-gray-800 rounded-lg p-2 shadow-lg">
              <div className="space-y-1">
                <div className="h-1.5 bg-blue-600 rounded w-full"></div>
                <div className="h-1.5 bg-blue-600 rounded w-3/4"></div>
                <div className="h-1.5 bg-blue-600 rounded w-1/2"></div>
              </div>
            </div> */}
            
            {/* User avatars (bottom) */}
            {/* <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-400 to-pink-400 border-2 border-white shadow-lg"></div>
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-400 to-cyan-400 border-2 border-white shadow-lg"></div>
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-green-400 to-emerald-400 border-2 border-white shadow-lg"></div>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};