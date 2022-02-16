import { render } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import { FinantialContext } from '../context/finantial-context';
import { theme } from './theme';

export const renderTheme = (children) => {
  return render(
    <FinantialContext>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </FinantialContext>,
  );
};
