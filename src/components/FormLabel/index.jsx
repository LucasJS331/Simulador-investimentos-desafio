import styled, { css } from 'styled-components';
import P from 'prop-types';

export const Label = styled.label`
  ${() => css`
    display: block;
    margin: 20px 0;
  `}
`;
export const FormLabel = ({ text }) => {
  return <Label>{text}</Label>;
};

FormLabel.propTypes = {
  text: P.string.isRequired,
};
