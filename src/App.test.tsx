import { render, screen } from '@testing-library/react';

import App from './App';

test('renders geojokers header link', () => {
  render(<App />);
  const linkElement = screen.getByText(/geo jokers/i);
  expect(linkElement).toBeInTheDocument();
});
