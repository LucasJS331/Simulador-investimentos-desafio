import { screen } from '@testing-library/react';
import { FinantialCard } from '.';
import { renderTheme } from '../../style/render-theme';

const mock = {
  name: 'foo',
  value: 99,
  greenValue: true,
};
describe('<FinantialCard/>', () => {
  it('should to be in the screen with heading content', () => {
    renderTheme(<FinantialCard {...mock} />);
    expect.assertions(2);

    expect(screen.getByRole('article')).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: 'foo' })).toBeInTheDocument();
  });
  it('should have a value content and green color text', () => {
    renderTheme(<FinantialCard {...mock} />);
    expect.assertions(2);
    const value = screen.getByText(99);

    expect(value).toBeInTheDocument();
    expect(value).toHaveClass('greenValue');
  });
});
