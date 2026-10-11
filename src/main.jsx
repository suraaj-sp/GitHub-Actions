import React from 'react'; // <-- Add this line at the top
import { render, screen } from '@testing-library/react';
import MainContent from './MainContent';
import { describe, it, expect } from 'vitest';

describe('MainContent', () => {
  it('should render a button', () => {
    render(<MainContent />);
    expect(screen.getByRole('button')).toBeInTheDocument();
  });
  
  // ... rest of your tests
});