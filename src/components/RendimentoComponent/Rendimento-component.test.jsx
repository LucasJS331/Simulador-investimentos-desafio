import { fireEvent, screen } from '@testing-library/react';
import { Rendimento } from '.';
import { renderTheme } from '../../style/render-theme';

describe('<Rendimento />', () => {
  it('Should render rendimento component', () => {
    const { container } = renderTheme(<Rendimento />);
    expect(container).toMatchSnapshot();
  });
  it('Should change option', () => {
    renderTheme(<Rendimento />);
    const liquido_option = screen.getByText(/liquido/i);
    const bruto_option = screen.getByText(/bruto/i);

    fireEvent.click(liquido_option);
    expect(liquido_option).toHaveClass('rendimento-br-10');
    fireEvent.click(bruto_option);
    expect(liquido_option).toHaveClass('rendimento-bg-br-10');
    expect(bruto_option).toHaveClass('rendimento');
  });
});
