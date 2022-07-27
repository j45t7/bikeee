import { render, screen } from '@testing-library/react';
import Item from '../Item';

test('render model', () => {
  render(<Item model='EC 5' make='Gudereit' />);
  const modelElement = screen.getByText(/ec 5/i);
  expect(modelElement).toBeInTheDocument();
});

test('render image', () => {
  render(<Item />);
  const imageElement = screen.getByRole('img');
  expect(imageElement).toBeInTheDocument();
});
