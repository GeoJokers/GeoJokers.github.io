import { render, screen } from '@testing-library/react';

import Footer from './Footer';

test('renders geojokers copyright', () => {
  render(<Footer />);
  const copyrightElement = screen.getByText(/© 2023 GeoJokers/i);
  expect(copyrightElement).toBeInTheDocument();
});
