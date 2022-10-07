import { render, screen } from '@testing-library/react';
import i18next from 'i18next';

import Navbar from './Navbar';


test('renders geojokers title', () => {
  i18next.on("languageChanged", () => {
    render(<Navbar />);
    const titleElement = screen.getByText(/geo jokers/i);
    expect(titleElement).toBeInTheDocument();
  });
});

test('renders 6 links', () => {
  i18next.on("languageChanged", () => {
    render(<Navbar />);
    const links = screen.getAllByRole('link');
    expect(links.length).toBe(6);
  });
});
