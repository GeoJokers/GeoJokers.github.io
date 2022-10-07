import { render, screen } from '@testing-library/react';

import Navbar from './Navbar';


test('renders geojokers title', () => {
  render(<Navbar />);
  const titleElement = screen.getByText(/geo jokers/i);
  expect(titleElement).toBeInTheDocument();

});

test('renders 6 links', () => {
  render(<Navbar />);
  const links = screen.getAllByRole('link');
  expect(links.length).toBe(6);
});
