import { screen } from '@testing-library/react';
import { Result } from '.';
import { renderTheme } from '../../style/render-theme';

const finantial_data_mocky = {
  valorFinalBruto: 99,
  aliquotaIR: 99,
  valorPagoIR: 99,
  valorFinalLiquido: 99,
  valorTotalInvestido: 99,
  ganhoLiquido: 99,
};
describe('<Result/>', () => {
  it('should render Result Grid', () => {
    const { container } = renderTheme(
      <Result finantial_data={finantial_data_mocky} />,
    );

    expect(container).toMatchSnapshot();
  });
  it('should render loading result', () => {
    renderTheme(
      <Result finantial_data={finantial_data_mocky} isLoading={true} />,
    );
    const img = screen.getByRole('img', { name: 'loading the result' });
    expect(img).toBeInTheDocument();
    expect(img).toHaveAttribute('src', 'loading.gif');
  });
});
