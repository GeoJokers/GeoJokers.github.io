import { render, screen } from '@testing-library/react';

import Blog from './Blog';

test('renders geojokers copyright', () => {
  render(<Blog />);
  const copyrightElement = screen.getByText(/Author/i);
  expect(copyrightElement).toBeInTheDocument();
});
