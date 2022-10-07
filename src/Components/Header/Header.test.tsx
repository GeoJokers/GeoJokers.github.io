import { render, screen } from '@testing-library/react';
import i18next from 'i18next';

import Header from './Header';

test('renders geojokers logo', () => {
  i18next.on("languageChanged", () => {
    render(<Header />);
    const imageElement = screen.getByAltText(/logo/i);
    expect(imageElement).toBeInTheDocument();
  });
});
