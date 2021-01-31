import { render, screen } from '@testing-library/react';
import Widgets from "./layouts/Widgets";

test('renders learn react link', () => {
  render(<Widgets />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
