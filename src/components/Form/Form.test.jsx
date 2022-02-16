import { Form } from '.';
import { renderTheme } from '../../style/render-theme';
const form_mock = [
  {
    valor: 99,
  },
  {
    valor: 69,
  },
];
describe('<Form/>', () => {
  it('should render form', () => {
    const { container } = renderTheme(<Form indicadores={form_mock} />);
    expect(container).toMatchSnapshot();
  });
});
