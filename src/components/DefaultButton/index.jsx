import styled, { css } from 'styled-components';
import P from 'prop-types';

export const Container = styled.button`
  ${({ theme }) => css`
    display: block;
    border: solid 1px black;
    padding: 1.4rem;
    background: ${theme.colors.primary_color};
    border-radius: 5px;
    font-weight: bold;
    margin: 1rem 0;

    @media ${theme.media.default} {
      width: 100%;
      margin: 1.5rem 0;
      font-size: 2rem;
    }
  `}
`;

export const Button = ({ text, type, fn }) => {
  return (
    <Container type={type} onClick={fn}>
      {text}
    </Container>
  );
};

Button.propTypes = {
  text: P.string.isRequired,
  type: P.oneOf(['submit', 'reset']),
  fn: P.func,
  disabled: P.bool,
};
