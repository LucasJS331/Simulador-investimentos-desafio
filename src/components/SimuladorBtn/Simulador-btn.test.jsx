import { fireEvent, screen } from '@testing-library/react';
import { SimuladorBtn } from '.';
import { renderTheme } from '../../style/render-theme';

describe('<SimuladorButton />', () => {
  it('should to be on the screen', () => {
    renderTheme(<SimuladorBtn text="foo" />);
    expect(screen.getByText('foo')).toBeInTheDocument();
  });

  it('should call a function on button click', () => {
    const mock_func = jest.fn();
    renderTheme(<SimuladorBtn text="foo" type="submit" fn={mock_func} />);

    const btn = screen.getByText('foo');

    fireEvent.click(btn);
    expect(mock_func).toHaveBeenCalledTimes(1);
  });
});
