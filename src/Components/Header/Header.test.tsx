import { render, screen } from '@testing-library/react';

import Header from './Header';

test('renders geojokers logo', () => {
  render(<Header />);
  const imageElement = screen.getByAltText(/logo/i);
  expect(imageElement).toBeInTheDocument();
});
