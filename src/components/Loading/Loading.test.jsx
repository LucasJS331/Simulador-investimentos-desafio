import { render, screen } from '@testing-library/react';
import { Loading } from '.';

describe('<Loading/>', () => {
  it('should to be on the screen', () => {
    render(<Loading />);
    expect(screen.getByRole('img', { name: 'loading' })).toBeInTheDocument();
    expect(screen.getByRole('img', { name: 'loading' })).toHaveAttribute(
      'src',
      'loading.gif',
    );
  });
});
