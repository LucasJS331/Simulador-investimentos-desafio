import { fireEvent, screen } from '@testing-library/react';
import { Button } from '.';
import { renderTheme } from '../../style/render-theme';

describe('<Button />', () => {
  it('should to be on the screen', () => {
    renderTheme(<Button text="foo" type="submit" />);
    expect.assertions(1);
    expect(screen.getByRole('button', { name: /foo/i })).toBeInTheDocument();
  });

  it('should call a function on button click', () => {
    const mock_func = jest.fn();
    renderTheme(<Button text="foo" type="submit" fn={mock_func} />);

    const btn = screen.getByRole('button', { name: /foo/i });

    fireEvent.click(btn);
    expect(mock_func).toHaveBeenCalledTimes(1);
  });

  it('should render with the correct type', () => {
    renderTheme(<Button text="foo" type="submit" />);
    renderTheme(<Button text="fooBar" type="reset" />);
    expect.assertions(2);

    const btn = screen.getAllByRole('button', { name: /foo/i });
    expect(btn[0]).toHaveAttribute('type', 'submit');
    expect(btn[1]).toHaveAttribute('type', 'reset');
  });
});
