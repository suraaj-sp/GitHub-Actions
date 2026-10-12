import React from 'react'; // <-- Add this line
import { render, screen } from '@testing-library/react';
import MainContent from './MainContent';
import { describe, it, expect } from 'vitest';

describe('MainContent', () => {
  it('should render a button', () => {
    render(<MainContent />);
    expect(screen.getByRole('button')).toBeInTheDocument();
  });
  
  it('should show the help area after clicking the button', async () => {
    render(<MainContent />);
    // ... rest of your test
  });
});