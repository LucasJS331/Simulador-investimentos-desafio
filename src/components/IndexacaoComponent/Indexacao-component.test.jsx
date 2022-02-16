import { fireEvent, screen } from '@testing-library/react';
import { Indexacao } from '.';
import { renderTheme } from '../../style/render-theme';

describe('<Indexacao />', () => {
  it('Should render indecacao', () => {
    const { container } = renderTheme(<Indexacao />);
    expect(container).toMatchSnapshot();
  });
  it('Should change option', () => {
    renderTheme(<Indexacao />);
    const fixado_option = screen.getByText(/fixado/i);
    const pre_option = screen.getByText(/pré/i);

    fireEvent.click(fixado_option);
    expect(fixado_option).toHaveClass('btn-selected-bg-br10');
    fireEvent.click(pre_option);
    expect(fixado_option).toHaveClass('btn-selected-br10');
    expect(pre_option).toHaveClass('btn-selected-bg');
  });
});
