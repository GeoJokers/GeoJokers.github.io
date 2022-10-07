import { render, screen } from '@testing-library/react';

import LanguageSwitcher from './LanguageSwitcher';

test('renders english button', () => {
  render(<LanguageSwitcher />);
  const englishButton = screen.getByText(/english/i);
  expect(englishButton).toBeInTheDocument();
});

test('renders german button', () => {
  render(<LanguageSwitcher />);
  const germanButton = screen.getByText(/deutsch/i);
  expect(germanButton).toBeInTheDocument();
});
