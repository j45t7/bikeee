import { render, screen } from '@testing-library/react';
import List from '../List';

test('renders title', () => {
  render(<List />);
  const titleElement = screen.getByText(/the most popular models/i);
  expect(titleElement).toBeInTheDocument();
});

test('renders list elements', () => {
  const items = [
    { id: '43', make: 'gudereit', model: 'ec 5', total: 4 },
    { id: '44', make: 'diamant', model: 'beryll', total: 3 },
    { id: '56', make: 'gudereit', model: 'et 9 evo', total: 2 },
  ];
  render(<List data={items} />);

  const listElements = screen.getAllByRole('listitem');
  expect(listElements).toHaveLength(3);
});
