import { render, screen } from '@testing-library/react';

import Background from './Background';

test('renders background', () => {
  render(<Background />);
  const imageElement = screen.getByAltText(/background/i);
  expect(imageElement).toBeInTheDocument();
});
