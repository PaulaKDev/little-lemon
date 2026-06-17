import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the main navigation and homepage content', () => {
  render(<App />);

  expect(screen.getAllByRole('navigation').length).toBeGreaterThan(0);
  expect(screen.getAllByText(/little lemon/i).length).toBeGreaterThan(0);
});
