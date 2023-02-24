import { render, screen } from '@testing-library/react';
import Home from '@/pages/index';
import '@testing-library/jest-dom';

jest.mock('next/router', () => ({
  useRouter: jest.fn()
}));

describe('Home', () => {
  it('renders correctly', () => {
    render(<Home />);

    const heading = screen.getByRole('heading', {
      name: /TIC TAC TOE/i,
    });

    expect(heading).toBeInTheDocument();
  })
})
