import { screen } from '@testing-library/react';
import { FormLabel } from '.';
import { renderTheme } from '../../style/render-theme';

describe('<FormLabel />', () => {
  it('should to be on the screen with text value', () => {
    renderTheme(<FormLabel text="foo" />);
    expect(screen.getByText('foo')).toBeInTheDocument();
  });
});
