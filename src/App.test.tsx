import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders www.geojokers.com link', () => {
  render(<App />);
  const linkElement = screen.getByText(/www.geojokers.com/i);
  expect(linkElement).toBeInTheDocument();
});
