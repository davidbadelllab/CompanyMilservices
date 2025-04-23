'use client';

import React from 'react';

interface AvatarProps {
  name: string;
  size?: number;
  bgColor?: string;
  textColor?: string;
}

/**
 * Generate a simple avatar based on user initials
 */
export default function DummyAvatar({ name, size = 40, bgColor = '#3B82F6', textColor = '#ffffff' }: AvatarProps) {
  // Generate initials from name
  const initials = name
    .split(' ')
    .map(part => part[0])
    .slice(0, 2)
    .join('')
    .toUpperCase();

  return (
    <svg width={size} height={size} viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
      <rect width="40" height="40" rx="20" fill={bgColor} />
      <text
        x="20"
        y="20"
        fontSize="18"
        textAnchor="middle"
        dominantBaseline="central"
        fill={textColor}
        fontFamily="Arial, sans-serif"
        fontWeight="bold"
      >
        {initials}
      </text>
    </svg>
  );
} 