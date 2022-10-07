import { render, screen } from '@testing-library/react';
import i18next from 'i18next';

import App from './App';

test('renders geojokers header link', () => {
  i18next.on("languageChanged", () => {
    render(<App />);
    const linkElement = screen.getByText(/geo jokers/i);
    expect(linkElement).toBeInTheDocument();
  });
});
