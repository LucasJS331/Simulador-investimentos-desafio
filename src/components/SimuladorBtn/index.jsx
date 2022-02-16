import styled, { css } from 'styled-components';
import P from 'prop-types';

export const Container = styled.a`
  ${({ theme }) => css`
    display: block;
    border: none;
    padding: 1.4rem;
    background-color: ${theme.colors.secondary_color};
    border-radius: 5px;
    font-weight: bold;
    margin: 1rem 0;
    text-align: center;
    height: 5rem;
    transition: background-color 0.3s ease-in;

    :hover {
      background: ${theme.colors.secondary_color_hover};
    }

    @media ${theme.media.default} {
      width: 100%;
      margin: 1.5rem 0;
      font-size: 2rem;
    }
  `}
`;

export const SimuladorBtn = ({ text, fn }) => {
  return (
    <Container onClick={fn} id="simulador-btn">
      {text}
    </Container>
  );
};

SimuladorBtn.propTypes = {
  text: P.string.isRequired,
  fn: P.func,
};
