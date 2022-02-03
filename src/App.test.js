import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', async () => {
  render(<App />);
  const linkElement = await screen.findByText(/Dachshund/i);
  expect(linkElement).toBeInTheDocument();
});
