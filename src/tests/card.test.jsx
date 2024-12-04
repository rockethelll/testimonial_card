import { render, screen } from '@testing-library/react';
import Card from '../components/card';

describe('Card', () => {
  it('should render', () => {
    render(<Card />);

    const img = screen.getByRole('img');
    expect(img).toBeInTheDocument();

    const name = screen.getByText('Sarah Dole');
    expect(name).toBeInTheDocument();

    const pseudo = screen.getByText('@sarahdole');
    expect(pseudo).toBeInTheDocument();

    const text = screen.getByText(/been searching/i);
    expect(text).toBeInTheDocument();
  });
});
