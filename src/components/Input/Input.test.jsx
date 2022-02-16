import { fireEvent, screen } from '@testing-library/react';
import { Input } from '.';
import { renderTheme } from '../../style/render-theme';

const inputMock = {
  defaultValue: 99,
  errorMsg: 'error',
  name: 'fooBar',
};
describe('<Input/>', () => {
  it('should to be on the screen with defaultValue and name', () => {
    renderTheme(<Input {...inputMock} />);
    expect.assertions(3);
    expect(screen.getByRole('textbox')).toBeInTheDocument();
    expect(screen.getByRole('textbox')).toHaveAttribute('value', '99');
    expect(screen.getByRole('textbox')).toHaveAttribute('name', 'fooBar');
  });
  it('should have a error message on the screen', () => {
    renderTheme(<Input {...inputMock} />);

    const input = screen.getByRole('textbox');
    fireEvent.change(input, { target: { value: '23f' } });
    expect(screen.getByText('error')).toBeInTheDocument();
  });
});
